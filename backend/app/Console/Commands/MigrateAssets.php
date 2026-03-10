<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class MigrateAssets extends Command
{
    protected $signature = 'app:migrate-assets';
    protected $description = 'Copy frontend assets to backend storage for serving via API';

    public function handle(): int
    {
        $frontendBase = base_path('../frontend/src/assets');

        // ─── Team photos ──────────────────────────────────────────
        $teamMap = [
            'Md Rubayet Islam - Founder CEO.jpg' => 'md-rubayet-islam.jpg',
            'Rakib Hasan - Chief Technology Officer.jpg' => 'rakib-hasan.jpg',
            'Ma-Huan Sheikh Meem - Chief Operating Officer.jpg' => 'ma-huan-sheikh-meem.jpg',
            'Adel Mohammad Zahid - Chief Product Officer.jpg' => 'adel-mohammad-zahid.jpg',
            'Tahmid Khan - Project Lead.jpg' => 'tahmid-khan.jpg',
        ];

        $teamDir = storage_path('app/public/team');
        File::ensureDirectoryExists($teamDir);

        foreach ($teamMap as $src => $dest) {
            $srcPath = $frontendBase . '/Team/' . $src;
            $destPath = $teamDir . '/' . $dest;
            if (File::exists($srcPath)) {
                File::copy($srcPath, $destPath);
                $this->info("✔ Team: {$src} → team/{$dest}");
            } else {
                $this->warn("✘ Missing: {$srcPath}");
            }
        }

        // ─── Logo files ──────────────────────────────────────────
        $logoDir = storage_path('app/public/logo');
        File::ensureDirectoryExists($logoDir);
        $logoSrc = $frontendBase . '/Logo';
        if (File::isDirectory($logoSrc)) {
            foreach (File::files($logoSrc) as $file) {
                File::copy($file->getPathname(), $logoDir . '/' . $file->getFilename());
                $this->info("✔ Logo: {$file->getFilename()}");
            }
        }

        // ─── Portfolio images (case studies) ─────────────────────
        // Frontend structure: Case Study N/Cover/*.webp + Case Study N/Images/*.webp
        $portfolioSrc = $frontendBase . '/Portfolio';
        if (!File::isDirectory($portfolioSrc)) {
            $this->warn("Portfolio source not found: {$portfolioSrc}");
            return Command::SUCCESS;
        }

        foreach (File::directories($portfolioSrc) as $csDir) {
            $dirName = basename($csDir); // "Case Study 1"

            // Extract the number: "Case Study 1" → 1
            if (!preg_match('/Case Study (\d+)/i', $dirName, $m)) {
                continue;
            }
            $num = $m[1];
            $slug = 'case-study-' . $num;
            $destDir = storage_path('app/public/portfolio/' . $slug);
            File::ensureDirectoryExists($destDir);
            File::ensureDirectoryExists($destDir . '/images');

            // Cover image: Case Study N/Cover/<first image file>
            $coverDir = $csDir . '/Cover';
            if (File::isDirectory($coverDir)) {
                $coverFiles = File::files($coverDir);
                foreach ($coverFiles as $coverFile) {
                    $ext = strtolower($coverFile->getExtension());
                    if (in_array($ext, ['jpg', 'jpeg', 'png', 'webp', 'gif'])) {
                        File::copy($coverFile->getPathname(), $destDir . '/cover.' . $ext);
                        $this->info("✔ Portfolio: {$dirName}/Cover → {$slug}/cover.{$ext}");
                        break;
                    }
                }
            }

            // Gallery images: Case Study N/Images/*
            $imagesDir = $csDir . '/Images';
            if (File::isDirectory($imagesDir)) {
                $imgFiles = File::files($imagesDir);
                $count = 0;
                foreach ($imgFiles as $idx => $imgFile) {
                    $ext = strtolower($imgFile->getExtension());
                    if (in_array($ext, ['jpg', 'jpeg', 'png', 'webp', 'gif'])) {
                        $destName = ($idx + 1) . '.' . $ext;
                        File::copy($imgFile->getPathname(), $destDir . '/images/' . $destName);
                        $count++;
                    }
                }
                if ($count > 0) {
                    $this->info("✔ Portfolio: {$dirName}/Images → {$slug}/images/ ({$count} files)");
                }
            }
        }

        $this->newLine();
        $this->info('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        $this->info('✅ Asset migration complete!');
        $this->info('Run: php artisan storage:link');
        $this->info('Then restart: php artisan serve');
        $this->info('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

        return Command::SUCCESS;
    }
}

