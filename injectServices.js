import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const servicesDir = path.join(__dirname, 'frontend', 'src', 'pages', 'services');

const injectionTop = `import Testimonials from '../../components/sections/Testimonials';
import CallToAction from '../../components/sections/CallToAction';
`;

const injectionBottom = `      <Testimonials />
      <CallToAction />
    </div>
  );
}
`;

fs.readdirSync(servicesDir).forEach(file => {
    if (file === 'WebApp.jsx') return;

    const filePath = path.join(servicesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    if (content.includes('Testimonials />')) return;

    if (content.includes(`from 'lucide-react';`)) {
        content = content.replace(`from 'lucide-react';`, `from 'lucide-react';\n${injectionTop}`);
    } else if (content.includes(`from 'framer-motion';`)) {
        content = content.replace(`from 'framer-motion';`, `from 'framer-motion';\n${injectionTop}`);
    }

    content = content.replace(/    <\/div>\s*  \);\s*}\s*$/, `      <Testimonials />\n      <CallToAction />\n    </div>\n  );\n}\n`);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Injected into ' + file);
});
