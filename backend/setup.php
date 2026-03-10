<?php
/**
 * Standalone setup script for Boraq backend.
 *
 * Run from the backend directory:
 *   php setup.php
 *
 * This script copies frontend images to backend storage.
 * After running, execute:
 *   php artisan migrate:fresh --seed
 *   php artisan serve
 */

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
echo "  Boraq Backend Setup - Asset Migration\n";
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";

$backendDir = __DIR__;
$frontendAssets = $backendDir . '/../frontend/src/assets';
$storagePublic = $backendDir . '/storage/app/public';

function ensureDir($dir) {
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }
}

// ─── 1. Team Photos ───
echo "[1/3] Copying team photos...\n";
$teamMap = [
    'Md Rubayet Islam - Founder CEO.jpg' => 'md-rubayet-islam.jpg',
    'Rakib Hasan - Chief Technology Officer.jpg' => 'rakib-hasan.jpg',
    'Ma-Huan Sheikh Meem - Chief Operating Officer.jpg' => 'ma-huan-sheikh-meem.jpg',
    'Adel Mohammad Zahid - Chief Product Officer.jpg' => 'adel-mohammad-zahid.jpg',
    'Tahmid Khan - Project Lead.jpg' => 'tahmid-khan.jpg',
];

$teamDir = $storagePublic . '/team';
ensureDir($teamDir);

foreach ($teamMap as $src => $dest) {
    $srcPath = $frontendAssets . '/Team/' . $src;
    if (file_exists($srcPath)) {
        copy($srcPath, $teamDir . '/' . $dest);
        echo "  ✔ {$dest}\n";
    } else {
        echo "  ✘ Missing: {$src}\n";
    }
}

// ─── 2. Logo ───
echo "\n[2/3] Copying logos...\n";
$logoDir = $storagePublic . '/logo';
ensureDir($logoDir);
$logoSrc = $frontendAssets . '/Logo';
if (is_dir($logoSrc)) {
    foreach (scandir($logoSrc) as $f) {
        if ($f === '.' || $f === '..') continue;
        if (is_file($logoSrc . '/' . $f)) {
            copy($logoSrc . '/' . $f, $logoDir . '/' . $f);
            echo "  ✔ {$f}\n";
        }
    }
}

// ─── 3. Portfolio (Case Studies) ───
echo "\n[3/3] Copying portfolio images...\n";
$portfolioSrc = $frontendAssets . '/Portfolio';
$coverCount = 0;
$imgCount = 0;

if (is_dir($portfolioSrc)) {
    foreach (scandir($portfolioSrc) as $dirName) {
        if (!preg_match('/^Case Study (\d+)$/i', $dirName, $m)) continue;
        $num = $m[1];
        $slug = 'case-study-' . $num;
        $csDir = $portfolioSrc . '/' . $dirName;
        $destDir = $storagePublic . '/portfolio/' . $slug;
        ensureDir($destDir);
        ensureDir($destDir . '/images');

        // Cover image from Case Study N/Cover/
        $coverDir = $csDir . '/Cover';
        if (is_dir($coverDir)) {
            foreach (scandir($coverDir) as $cf) {
                if ($cf === '.' || $cf === '..') continue;
                $ext = strtolower(pathinfo($cf, PATHINFO_EXTENSION));
                if (in_array($ext, ['jpg', 'jpeg', 'png', 'webp', 'gif'])) {
                    copy($coverDir . '/' . $cf, $destDir . '/cover.' . $ext);
                    $coverCount++;
                    echo "  ✔ {$dirName} → {$slug}/cover.{$ext}\n";
                    break;
                }
            }
        }

        // Gallery images from Case Study N/Images/
        $imagesDir = $csDir . '/Images';
        if (is_dir($imagesDir)) {
            $files = array_diff(scandir($imagesDir), ['.', '..']);
            sort($files, SORT_NATURAL);
            $idx = 1;
            foreach ($files as $imgFile) {
                $ext = strtolower(pathinfo($imgFile, PATHINFO_EXTENSION));
                if (in_array($ext, ['jpg', 'jpeg', 'png', 'webp', 'gif'])) {
                    copy($imagesDir . '/' . $imgFile, $destDir . '/images/' . $idx . '.' . $ext);
                    $idx++;
                    $imgCount++;
                }
            }
        }
    }
}
echo "\n  Covers: {$coverCount}, Gallery images: {$imgCount}\n";

echo "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
echo "✅ Assets copied!\n\n";
echo "Now run:\n";
echo "  php artisan migrate:fresh --seed\n";
echo "  php artisan serve\n";
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";

