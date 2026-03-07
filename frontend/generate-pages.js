import fs from 'fs';
import path from 'path';

const pages = [
    { path: 'services/WebApp.jsx', name: 'WebApp', title: 'Web & App Development', desc: 'Custom Flutter, React, and Laravel solutions.' },
    { path: 'services/UIBranding.jsx', name: 'UIBranding', title: 'UI & Branding', desc: 'Premium, modern interfaces and brand identity.' },
    { path: 'services/AIAutomation.jsx', name: 'AIAutomation', title: 'AI & Automation', desc: 'Intelligent workflows and AI integration.' },
    { path: 'services/VisionSpeech.jsx', name: 'VisionSpeech', title: 'Vision & Speech', desc: 'Advanced computer vision and NLP models.' },
    { path: 'services/SmartDevice.jsx', name: 'SmartDevice', title: 'Smart Device (IoT)', desc: 'Hardware-to-software integrations.' },
    { path: 'services/Web3.jsx', name: 'Web3', title: 'Web3 Platform', desc: 'Next-gen decentralized applications.' },

    { path: 'about/OurStory.jsx', name: 'OurStory', title: 'Our Story', desc: 'The vision behind Boraq.' },
    { path: 'about/OurTeam.jsx', name: 'OurTeam', title: 'Our Team & Leadership', desc: 'Meet the experts driving innovation.' },

    { path: 'work/Portfolio.jsx', name: 'Portfolio', title: 'Portfolio', desc: 'A showcase of our finest shipped products.' },
    { path: 'work/CaseStudies.jsx', name: 'CaseStudies', title: 'Case Studies', desc: 'Deep dives into technical architecture and ROI.' },

    { path: 'Research.jsx', name: 'Research', title: 'Innovation & Research Hub', desc: 'Autonomous debugging, self-healing systems, and experimental tech.' },

    { path: 'community/Resources.jsx', name: 'Resources', title: 'Resources', desc: 'Helpful tools and guides.' },
    { path: 'community/Blog.jsx', name: 'Blog', title: 'Blogs & Updates', desc: 'Latest company news and release notes.' },
    { path: 'community/Products.jsx', name: 'Products', title: 'Products', desc: 'Our internal SaaS and tools.' },
    { path: 'community/Learning.jsx', name: 'Learning', title: 'Learning & Bootcamps', desc: 'Tutorials and educational programs.' },
    { path: 'community/Docs.jsx', name: 'Docs', title: 'API & Documentation', desc: 'Technical wikis and integration guides.' },
    { path: 'community/OpenSource.jsx', name: 'OpenSource', title: 'Open Source', desc: 'Our contributions to the developer community.' },
    { path: 'community/Career.jsx', name: 'Career', title: 'Career & Activities', desc: 'Join us. Hackathons, futsal, and club collaborations.' },

    { path: 'utility/Contact.jsx', name: 'Contact', title: 'Contact Us', desc: 'Reach out for inquiries.' },
    { path: 'utility/BookCall.jsx', name: 'BookCall', title: 'Schedule a Consultation', desc: 'Book a call with our experts to discuss your needs.' },
    { path: 'utility/FAQ.jsx', name: 'FAQ', title: 'Frequently Asked Questions', desc: 'Answers about sprints, pricing, and maintenance.' },

    { path: 'legal/PrivacyPolicy.jsx', name: 'PrivacyPolicy', title: 'Privacy Policy', desc: 'How we handle and protect your data.' },
    { path: 'legal/TermsOfService.jsx', name: 'TermsOfService', title: 'Terms of Service', desc: 'Client agreements and IP protection.' },
    { path: 'legal/CookiePolicy.jsx', name: 'CookiePolicy', title: 'Cookie Policy', desc: 'Information on our cookie usage.' },

    { path: 'NotFound.jsx', name: 'NotFound', title: '404 - Page Not Found', desc: 'The requested resource could not be found.' },
];

const template = (name, title, desc) => `import { motion } from 'framer-motion';

export default function ${name}() {
  return (
    <div className="max-w-7xl mx-auto w-full px-6 flex flex-col gap-12">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-panel p-10 md:p-16 rounded-3xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-boraq-cyan/0 via-boraq-cyan/50 to-boraq-cyan/0" />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">${title}</h1>
        <p className="text-lg md:text-xl text-black/70 dark:text-white/70 max-w-2xl font-light">
          ${desc}
        </p>
      </motion.div>

      {/* Content Section 1 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="glass-panel p-8 rounded-2xl group hover:border-boraq-cyan/30 transition-colors duration-300">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-black/60 dark:text-white/60 leading-relaxed">
            We employ modern methodologies to deliver exceptional results. This section details our approach to solving complex problems efficiently and securely while maintaining high quality standards.
          </p>
        </div>
        <div className="glass-panel p-8 rounded-2xl group hover:border-boraq-cyan/30 transition-colors duration-300">
          <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
          <ul className="list-disc list-inside text-black/60 dark:text-white/60 leading-relaxed space-y-2">
            <li>Scalable and modular architectural design.</li>
            <li>Premium, glassmorphic UI aesthetics.</li>
            <li>High-performance delivery using modern tech.</li>
            <li>Robust security and compliance tracking.</li>
          </ul>
        </div>
      </motion.div>

      {/* Content Section 2 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-panel border-l-4 border-l-boraq-cyan p-8 rounded-2xl"
      >
        <h2 className="text-2xl font-semibold mb-4">Implementation Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <div className="flex flex-col gap-2">
            <span className="text-boraq-cyan font-bold text-xl">01</span>
            <h3 className="font-medium">Discovery & Strategy</h3>
            <p className="text-sm text-black/60 dark:text-white/60">Aligning business goals with technical feasibilities.</p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-boraq-cyan font-bold text-xl">02</span>
            <h3 className="font-medium">Design & Architecture</h3>
            <p className="text-sm text-black/60 dark:text-white/60">Creating blueprints and premium UI/UX models.</p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-boraq-cyan font-bold text-xl">03</span>
            <h3 className="font-medium">Execution & Delivery</h3>
            <p className="text-sm text-black/60 dark:text-white/60">Agile development cycles leading to robust deployment.</p>
          </div>
        </div>
      </motion.div>
      
      {/* Bottom spacing */}
      <div className="h-12"></div>
    </div>
  );
}
`;

const srcDir = path.join(process.cwd(), 'src', 'pages');

pages.forEach(page => {
    const fullPath = path.join(srcDir, page.path);
    const dir = path.dirname(fullPath);

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(fullPath, template(page.name, page.title, page.desc));
    console.log('Created: ' + page.path);
});

console.log('Done generating components.');
