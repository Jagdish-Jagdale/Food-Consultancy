import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import Button from '../ui/Button';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const [expandedMobileLink, setExpandedMobileLink] = useState(null);

    const navLinks = [
        { name: 'About Us', href: '#about' },
        {
            name: 'Services',
            href: '#services',
            dropdown: [
                { name: 'FSSC 22000 V6 Audit & Consultation', href: '#' },
                { name: 'HACCP Consultation', href: '#' },
                { name: 'ISO 22000:2018 & ISO 9001 System', href: '#' },
                { name: 'Food Safety Management System (FSMS) Design', href: '#' },
                { name: 'SOPs, Checklists, Manuals & Training Decks', href: '#' },
                { name: 'Internal Audit Preparation & Mock Audits', href: '#' },
                { name: 'GMP AND GHP Consultation', href: '#' },
                { name: 'Certifications', href: '#' },
            ]
        },
        { name: 'Case Studies', href: '#case-studies' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href) => {
        if (href === '#') return;
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
                    : 'bg-transparent'
                    }`}
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2"
                        >
                            <img
                                src="/FoodConsultancy.png"
                                alt="Safe Science Logo"
                                className="w-15 h-15 object-contain"
                                style={{
                                    filter: isScrolled ? 'none' : 'brightness(0) invert(1)'
                                }}
                            />
                            <span className={`text-2xl font-bold ${isScrolled ? 'text-purple-900' : 'text-white'}`}>
                                Safe Science
                            </span>
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center justify-end gap-8 xl:gap-10 flex-1 ml-12">
                            {navLinks.map((link) => (
                                <div
                                    key={link.name}
                                    className="relative group"
                                    onMouseEnter={() => setHoveredLink(link.name)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                >
                                    <motion.button
                                        whileHover={{ y: -2 }}
                                        onClick={() => !link.dropdown && scrollToSection(link.href)}
                                        className={`font-medium transition-colors px-2 py-2 flex items-center gap-1.5 ${link.dropdown && hoveredLink === link.name
                                            ? 'text-amber-500'
                                            : isScrolled
                                                ? 'text-gray-700 hover:text-amber-500'
                                                : 'text-white/90 hover:text-white'
                                            }`}
                                        style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
                                    >
                                        {link.name}
                                        {link.dropdown && (
                                            <HiChevronDown className={`transition-transform duration-300 text-sm ${hoveredLink === link.name ? 'rotate-180' : ''}`} />
                                        )}
                                    </motion.button>

                                    {/* Dropdown Menu */}
                                    <AnimatePresence>
                                        {link.dropdown && hoveredLink === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2, ease: 'easeOut' }}
                                                className="absolute top-full left-0 mt-3 min-w-[320px] bg-white rounded-lg overflow-hidden"
                                                style={{
                                                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.04)',
                                                    fontFamily: "'Inter', 'Segoe UI', sans-serif"
                                                }}
                                            >
                                                <div className="py-3">
                                                    {link.dropdown.map((subItem, idx) => (
                                                        <a
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="group block px-7 py-3.5 text-[15px] leading-relaxed text-gray-700 hover:text-amber-500 transition-colors duration-200 font-medium"
                                                            style={{
                                                                fontFamily: "'Inter', 'Segoe UI', sans-serif",
                                                                letterSpacing: '-0.01em'
                                                            }}
                                                        >
                                                            <span className="relative">
                                                                {subItem.name}
                                                            </span>
                                                        </a>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`lg:hidden p-2 ${isScrolled ? 'text-purple-900' : 'text-white'}`}
                        >
                            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        <div
                            className="absolute inset-0 bg-black/50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl overflow-y-auto">
                            <div className="pt-24 px-6 pb-10">
                                {navLinks.map((link, index) => (
                                    <div key={link.name} className="border-b border-gray-100">
                                        <motion.button
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            onClick={() => {
                                                if (link.dropdown) {
                                                    setExpandedMobileLink(expandedMobileLink === link.name ? null : link.name);
                                                } else {
                                                    scrollToSection(link.href);
                                                }
                                            }}
                                            className="w-full flex items-center justify-between text-left py-4 text-lg font-medium text-gray-700 hover:text-purple-900 transition-colors"
                                        >
                                            {link.name}
                                            {link.dropdown && (
                                                <HiChevronDown className={`transition-transform duration-300 ${expandedMobileLink === link.name ? 'rotate-180' : ''}`} />
                                            )}
                                        </motion.button>

                                        {/* Mobile Dropsown */}
                                        <AnimatePresence>
                                            {link.dropdown && expandedMobileLink === link.name && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden bg-gray-50 rounded-lg mb-4"
                                                >
                                                    {link.dropdown.map((subItem) => (
                                                        <a
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className="block px-4 py-3 text-sm text-gray-600 hover:text-orange-600 border-l-2 border-transparent hover:border-orange-500 transition-colors"
                                                        >
                                                            {subItem.name}
                                                        </a>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                                <div className="mt-8">
                                    <Button variant="primary" className="w-full">
                                        Contact Us
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
