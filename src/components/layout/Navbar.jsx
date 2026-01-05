import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import Button from '../ui/Button';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'NMFI', href: '#nmfi' },
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
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
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-900 to-orange-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">F</span>
                            </div>
                            <span className={`text-xl font-bold ${isScrolled ? 'text-purple-900' : 'text-white'}`}>
                                Food Buddies
                            </span>
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center justify-end gap-10 flex-1 ml-12">
                            {navLinks.map((link) => (
                                <motion.button
                                    key={link.name}
                                    whileHover={{ y: -2 }}
                                    onClick={() => scrollToSection(link.href)}
                                    className={`font-medium transition-colors px-4 py-2 ${isScrolled
                                        ? 'text-gray-700 hover:text-purple-900'
                                        : 'text-white/90 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                </motion.button>
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
                        <div className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl">
                            <div className="pt-24 px-6">
                                {navLinks.map((link, index) => (
                                    <motion.button
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => scrollToSection(link.href)}
                                        className="block w-full text-left py-4 text-lg font-medium text-gray-700 hover:text-purple-900 border-b border-gray-100"
                                    >
                                        {link.name}
                                    </motion.button>
                                ))}
                                <div className="mt-6">
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
