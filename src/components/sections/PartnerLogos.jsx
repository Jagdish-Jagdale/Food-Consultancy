import { motion } from 'framer-motion';

const PartnerLogos = () => {
    // Dummy partner logos with placeholder colors
    const partners = [
        { name: 'Partner 1', color: '#FF6B6B' },
        { name: 'Partner 2', color: '#4ECDC4' },
        { name: 'Partner 3', color: '#45B7D1' },
        { name: 'Partner 4', color: '#96CEB4' },
        { name: 'Partner 5', color: '#FFEAA7' },
        { name: 'Partner 6', color: '#DDA0DD' },
        { name: 'Partner 7', color: '#98D8C8' },
        { name: 'Partner 8', color: '#F7DC6F' },
    ];

    return (
        <section className="section-padding bg-white overflow-hidden">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        The Fruits of Our <span className="text-purple-900">Partnership</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Trusted by leading food brands across India
                    </p>
                </motion.div>

                {/* Scrolling Logos */}
                <div className="relative">
                    {/* First Row - Left to Right */}
                    <div className="flex overflow-hidden mb-6">
                        <motion.div
                            className="flex gap-8"
                            animate={{ x: ['0%', '-50%'] }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                    duration: 20,
                                    ease: 'linear',
                                },
                            }}
                        >
                            {[...partners, ...partners].map((partner, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-40 h-20 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                                    style={{ backgroundColor: partner.color + '20' }}
                                >
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white text-lg"
                                        style={{ backgroundColor: partner.color }}
                                    >
                                        {partner.name.split(' ')[1]}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Second Row - Right to Left */}
                    <div className="flex overflow-hidden">
                        <motion.div
                            className="flex gap-8"
                            animate={{ x: ['-50%', '0%'] }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                    duration: 25,
                                    ease: 'linear',
                                },
                            }}
                        >
                            {[...partners.reverse(), ...partners].map((partner, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-40 h-20 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                                    style={{ backgroundColor: partner.color + '20' }}
                                >
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white text-lg"
                                        style={{ backgroundColor: partner.color }}
                                    >
                                        {partner.name.split(' ')[1]}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerLogos;
