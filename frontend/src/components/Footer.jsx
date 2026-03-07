import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/Logo/boraq_logo_white.svg';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        Services: [
            { name: 'Web & App Development', path: '/services/web-app' },
            { name: 'UI & Branding', path: '/services/ui-branding' },
            { name: 'AI & Automation', path: '/services/ai-automation' },
            { name: 'Vision & Speech', path: '/services/vision-speech' },
            { name: 'Smart Devices', path: '/services/smart-device' },
            { name: 'Web3 Platform', path: '/services/web3' },
        ],
        Company: [
            { name: 'Our Story', path: '/about' },
            { name: 'Our Team', path: '/about/team' },
            { name: 'Careers', path: '/career' },
            { name: 'Contact Us', path: '/contact' },
            { name: 'FAQ', path: '/faq' },
        ],
        Community: [
            { name: 'Blog', path: '/blog' },
            { name: 'Resources', path: '/resources' },
            { name: 'Products', path: '/products' },
            { name: 'Learning', path: '/learning' },
            { name: 'Documentation', path: '/docs' },
            { name: 'Open Source', path: '/open-source' },
        ],
        Legal: [
            { name: 'Privacy Policy', path: '/privacy-policy' },
            { name: 'Terms of Service', path: '/terms-of-service' },
            { name: 'Cookie Policy', path: '/cookie-policy' },
        ],
    };

    return (
        <footer className="w-full bg-black dark:bg-black text-white relative overflow-hidden pt-24 pb-12 mt-auto z-40">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-boraq-teal-steel/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-boraq-teal-deep/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">

                    {/* Brand Col */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="inline-block mb-8 group">
                            <img
                                src={logoWhite}
                                alt="Boraq"
                                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </Link>
                        <p className="text-white/60 mb-8 max-w-sm leading-relaxed">
                            We engineer enterprise-grade digital products for the world's most ambitious brands. Scaling performance, aesthetics, and reliability.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-boraq-teal-steel hover:text-black transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-boraq-teal-steel hover:text-black transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-boraq-cyan hover:text-black transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Cols */}
                    <div>
                        <h4 className="font-bold mb-6 text-lg">Services</h4>
                        <ul className="space-y-4">
                            {footerLinks.Services.map((link, i) => (
                                <li key={i}>
                                    <Link to={link.path} className="text-white/60 hover:text-boraq-cyan transition-colors text-sm font-medium">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-lg">Company</h4>
                        <ul className="space-y-4">
                            {footerLinks.Company.map((link, i) => (
                                <li key={i}>
                                    <Link to={link.path} className="text-white/60 hover:text-boraq-cyan transition-colors text-sm font-medium">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-lg">Community</h4>
                        <ul className="space-y-4">
                            {footerLinks.Community.map((link, i) => (
                                <li key={i}>
                                    <Link to={link.path} className="text-white/60 hover:text-boraq-cyan transition-colors text-sm font-medium">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-lg">Legal</h4>
                        <ul className="space-y-4">
                            {footerLinks.Legal.map((link, i) => (
                                <li key={i}>
                                    <Link to={link.path} className="text-white/60 hover:text-boraq-cyan transition-colors text-sm font-medium">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Newsletter & Copyright */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6">
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <input
                            type="email"
                            placeholder="Subscribe to our newsletter"
                            className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-boraq-cyan w-full md:w-64"
                        />
                        <button className="rounded-full bg-boraq-cyan text-black px-4 py-2 text-sm font-bold hover:bg-white transition-colors shrink-0">
                            Subscribe
                        </button>
                    </div>
                    <div className="text-white/40 text-sm font-medium">
                        © {currentYear} Boraq Engineering. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
