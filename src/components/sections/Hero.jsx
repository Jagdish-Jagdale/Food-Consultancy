import { motion } from 'framer-motion';
import Button from '../ui/Button';
import heroImage from '../../assets/images/hero_background_1767461380005.png';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt="Food Products"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-900/70 to-purple-900/50" />
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 pt-20">
                <div className="max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                    >
                        Co-Create your{' '}
                        <span className="text-orange-400">Food Success Story</span>{' '}
                        with the Award-Winning Food Consultant
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-200 mb-8"
                    >
                        Full-spectrum food consultancy guiding brands from concept to commercialization
                        with R&D, product development, and innovation across India.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button variant="primary" size="lg">
                            Contact Us
                        </Button>
                        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-900">
                            Our Services
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
                >
                    <motion.div
                        className="w-1.5 h-3 bg-white rounded-full mt-2"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
