import { motion } from 'framer-motion';
import {
    FaLinkedin,
    FaInstagram,
    FaFacebook,
    FaYoutube,
    FaTwitter,
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhone
} from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Services', href: '#services' },
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#careers' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact Us', href: '#contact' },
        { name: 'Privacy Policy', href: '#privacy' },
    ];

    const services = [
        { name: 'Food Ideation', href: '#' },
        { name: 'Food Product Development', href: '#' },
        { name: 'Food Factory Setup', href: '#' },
        { name: 'Contract Manufacturing', href: '#' },
    ];

    const socialLinks = [
        { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
        { icon: FaInstagram, href: '#', label: 'Instagram' },
        { icon: FaFacebook, href: '#', label: 'Facebook' },
        { icon: FaYoutube, href: '#', label: 'YouTube' },
        { icon: FaTwitter, href: '#', label: 'Twitter' },
    ];

    return (
        <footer id="contact" className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
            {/* Main Footer */}
            <div className="container-custom section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-orange-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">F</span>
                            </div>
                            <span className="text-xl font-bold">Food Buddies</span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Award-winning food consultancy guiding brands from concept to commercialization with R&D, product development, and innovation across India.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    whileHover={{ scale: 1.2, y: -2 }}
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-orange-500 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-semibold mb-6">Our Services</h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <a
                                        href={service.href}
                                        className="text-gray-400 hover:text-orange-500 transition-colors"
                                    >
                                        {service.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-orange-500 mt-1 flex-shrink-0" />
                                <span className="text-gray-400">
                                    2nd floor, S-1, ELSA Plaza No. 2, Rajiv Gandhi Salai, Padur, Chennai, Tamil Nadu 603103
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-orange-500 flex-shrink-0" />
                                <a href="mailto:sonia@foodbuddies.in" className="text-gray-400 hover:text-orange-500 transition-colors">
                                    sonia@foodbuddies.in
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhone className="text-orange-500 flex-shrink-0" />
                                <a href="tel:+919176683456" className="text-gray-400 hover:text-orange-500 transition-colors">
                                    +91 91766 83456
                                </a>
                            </li>
                        </ul>

                        {/* Newsletter */}
                        <div className="mt-6">
                            <h5 className="font-medium mb-3">Subscribe to Newsletter</h5>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-4 py-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-4 py-2 bg-orange-500 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container-custom py-6 text-center text-gray-500 text-sm">
                    © {currentYear} FoodBuddies, All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
