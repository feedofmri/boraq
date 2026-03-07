import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, 'frontend', 'src', 'pages');
const folders = ['community', 'utility', 'legal', 'about', 'work'];

const injectionTop = `import CallToAction from '../../components/sections/CallToAction';\n`;
const injectionTopLevels = `import CallToAction from '../components/sections/CallToAction';\n`;

function injectDir(dirPath, isRoot = false) {
    if (!fs.existsSync(dirPath)) return;
    fs.readdirSync(dirPath).forEach(file => {
        // only operate on .jsx files
        if (!file.endsWith('.jsx')) return;
        if (file === 'WebApp.jsx' || file === 'OurStory.jsx' || file === 'Portfolio.jsx') return;

        const filePath = path.join(dirPath, file);
        let content = fs.readFileSync(filePath, 'utf8');

        if (content.includes('<CallToAction />')) return;

        let importString = isRoot ? injectionTopLevels : injectionTop;

        // naive import injection after react/lucide
        if (content.includes(`from 'lucide-react';`)) {
            content = content.replace(`from 'lucide-react';`, `from 'lucide-react';\n${importString}`);
        } else if (content.includes(`from 'react';`)) {
            content = content.replace(`from 'react';`, `from 'react';\n${importString}`);
        } else {
            // just put it at the top
            content = importString + content;
        }

        // naive component injection at the end of the main wrapper div
        content = content.replace(/    <\/div>\s*  \);\s*}\s*$/, `      <CallToAction />\n    </div>\n  );\n}\n`);

        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Injected into ' + file);
    });
}

// process nested folders
folders.forEach(folder => {
    injectDir(path.join(pagesDir, folder));
});

// process root pages
injectDir(pagesDir, true);
