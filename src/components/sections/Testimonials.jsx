import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            quote: "Safe Science has made our product truly unique, surpassing Kellogg's Cornflakes in colour and appearance, achieving an outstanding result without the use of artificial colouring.",
            author: 'Mr. Krishna Mohan',
            company: 'Agasthya Foods',
            avatar: 'KM',
        },
        {
            quote: "Safe Science has been our valuable associates in developing new ideas and thought process for our new products, bringing in excitement and nostalgia. They've been a great partner in developing our new products.",
            author: 'Mr. Ravi Kabra',
            company: 'CEO & Co-Founder, Skippi Ice Pops',
            avatar: 'RK',
        },
        {
            quote: "Safe Science provided incredible support throughout our plant setup. Their expertise made the process seamless, and their commitment didn't stop at installation. The ongoing guidance was truly commendable.",
            author: 'Ms. Pratima Kolpe',
            company: 'Founder, Sparklo',
            avatar: 'PK',
        },
        {
            quote: "We have worked with the Safe Science Team for almost 4 projects in the health-based food sector, few products were developed as first in India. This young and dynamic team helped us to get the desired product on time.",
            author: 'Team',
            company: 'AVT Natural Products Limited',
            avatar: 'AT',
        },
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="section-padding bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/30 rounded-full blur-xl" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Stories that speak for <span className="text-orange-400">themselves</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Hear from the brands we've helped navigate to success
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Testimonial Card */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10"
                            >
                                <FaQuoteLeft className="text-orange-400 text-4xl mb-6" />
                                <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                                    "{testimonials[currentIndex].quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">
                                            {testimonials[currentIndex].avatar}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-lg">
                                            {testimonials[currentIndex].author}
                                        </h4>
                                        <p className="text-gray-400">
                                            {testimonials[currentIndex].company}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center gap-4 mt-8">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={prevTestimonial}
                                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
                            >
                                <FaChevronLeft />
                            </motion.button>

                            {/* Dots */}
                            <div className="flex items-center gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                                            ? 'bg-orange-500 w-6'
                                            : 'bg-white/30 hover:bg-white/50'
                                            }`}
                                    />
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={nextTestimonial}
                                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
                            >
                                <FaChevronRight />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
