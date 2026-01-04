import { motion } from 'framer-motion';
import { FaRocket, FaSeedling, FaChartLine, FaCrown } from 'react-icons/fa';

const TargetAudience = () => {
    const audiences = [
        {
            icon: FaRocket,
            title: 'Aspiring Food Entrepreneurs',
            description: 'New to the food industry with a fresh idea',
        },
        {
            icon: FaSeedling,
            title: 'Emerging Food Startups',
            description: 'Young companies seeking growth and expertise',
        },
        {
            icon: FaChartLine,
            title: 'Scaling Up Food Businesses',
            description: 'Established businesses ready to expand',
        },
        {
            icon: FaCrown,
            title: 'Established Brands',
            description: 'Market leaders seeking innovation',
        },
    ];

    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Tailored solutions for <span className="text-purple-900">visionaries</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We cater to food entrepreneurs at every stage of their journey
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {audiences.map((audience, index) => (
                        <motion.div
                            key={audience.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center group cursor-pointer"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <audience.icon className="text-white text-2xl" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                {audience.title}
                            </h3>
                            <p className="text-gray-500 text-sm">
                                {audience.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;
