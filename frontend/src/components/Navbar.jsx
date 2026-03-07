import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoWhite from '../assets/Logo/boraq_logo_white.svg';
import logoDark from '../assets/Logo/boraq_logo_dark.svg';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    {
        name: 'Services',
        path: '#',
        dropdown: [
            { name: 'Web & App', path: '/services/web-app' },
            { name: 'UI & Branding', path: '/services/ui-branding' },
            { name: 'AI & Automation', path: '/services/ai-automation' },
            { name: 'Vision & Speech', path: '/services/vision-speech' },
            { name: 'Smart Device', path: '/services/smart-device' },
            { name: 'Web3 Platform', path: '/services/web3' },
        ]
    },
    {
        name: 'About',
        path: '#',
        dropdown: [
            { name: 'Our Story', path: '/about' },
            { name: 'Our Team', path: '/about/team' }
        ]
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Research', path: '/research' },
    {
        name: 'Community',
        path: '#',
        dropdown: [
            { name: 'Resources', path: '/resources' },
            { name: 'Blog', path: '/blog' },
            { name: 'Products', path: '/products' },
            { name: 'Learning', path: '/learning' },
            { name: 'Docs', path: '/docs' },
            { name: 'Open Source', path: '/open-source' },
            { name: 'Career', path: '/career' }
        ]
    }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);

    // Handle scroll to add a heavier glass effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-panel-heavy py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <img
                        src={logoDark}
                        alt="Boraq Logo"
                        className="block dark:hidden h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <img
                        src={logoWhite}
                        alt="Boraq Logo"
                        className="hidden dark:block h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, idx) => (
                        <div
                            key={idx}
                            className="relative group"
                            onMouseEnter={() => setDropdownOpen(idx)}
                            onMouseLeave={() => setDropdownOpen(null)}
                        >
                            <Link
                                to={link.path}
                                className="text-sm font-medium text-boraq-black/70 dark:text-boraq-white/70 hover:text-boraq-teal-steel dark:hover:text-boraq-teal-light transition-colors flex items-center gap-1 py-2"
                            >
                                {link.name}
                                {link.dropdown && <ChevronDown className="w-4 h-4" />}
                            </Link>

                            {/* Glassmorphic Dropdown */}
                            {link.dropdown && (
                                <AnimatePresence>
                                    {dropdownOpen === idx && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-56 p-2 rounded-xl glass-panel-heavy flex flex-col gap-1 z-50 pointer-events-auto"
                                        >
                                            {link.dropdown.map((dropItem, dIdx) => (
                                                <Link
                                                    key={dIdx}
                                                    to={dropItem.path}
                                                    className="px-4 py-2 text-sm text-boraq-black/70 dark:text-boraq-white/70 hover:text-boraq-black dark:hover:text-boraq-white hover:bg-boraq-black/5 dark:hover:bg-boraq-white/10 rounded-lg transition-colors"
                                                >
                                                    {dropItem.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    <Link
                        to="/contact"
                        className="px-5 py-2 text-sm font-bold rounded-full bg-boraq-black text-boraq-white dark:bg-boraq-white dark:text-boraq-black hover:bg-boraq-teal-deep dark:hover:bg-boraq-teal-light hover:text-boraq-white dark:hover:text-boraq-black transition-all duration-300 shadow-sm"
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-black dark:text-white transition-colors"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-panel-heavy border-t border-black/5 dark:border-white/10 mt-4 mx-4 rounded-b-2xl overflow-hidden"
                    >
                        <div className="p-4 flex flex-col gap-4">
                            {navLinks.map((link, idx) => (
                                <div key={idx} className="flex flex-col">
                                    <Link
                                        to={link.path}
                                        className="text-lg font-medium text-black dark:text-white pb-2 hover:text-boraq-cyan transition-colors"
                                        onClick={() => !link.dropdown && setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.dropdown && (
                                        <div className="pl-4 flex flex-col gap-3 py-2 border-l border-black/10 dark:border-white/10">
                                            {link.dropdown.map((dropItem, dIdx) => (
                                                <Link
                                                    key={dIdx}
                                                    to={dropItem.path}
                                                    className="text-base text-black/70 dark:text-white/70 hover:text-boraq-cyan"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {dropItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="mt-4 pt-4 border-t border-black/10 dark:border-white/10 flex justify-center">
                                <Link
                                    to="/contact"
                                    className="w-full text-center px-5 py-3 text-base font-medium rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-boraq-cyan dark:hover:bg-boraq-cyan hover:text-black transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
