import { motion } from 'framer-motion';
import AnimatedCounter from '../ui/AnimatedCounter';
import { FaIndustry, FaBuilding, FaUsers } from 'react-icons/fa';

const Stats = () => {
    const stats = [
        {
            icon: FaIndustry,
            value: 75,
            suffix: '+',
            label: 'Manufacturing Connects',
            description: 'Trusted co-packer network'
        },
        {
            icon: FaBuilding,
            value: 265,
            suffix: 'K+',
            label: 'Sq. Ft. Plant Setups',
            description: 'Factory infrastructure delivered'
        },
        {
            icon: FaUsers,
            value: 1000,
            suffix: '+',
            label: 'Clients Served',
            description: 'Successful partnerships'
        },
    ];

    return (
        <section id="about" className="section-padding bg-gray-50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Global food consultancy with{' '}
                        <span className="text-purple-900">NMFI mastery</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We are a one-stop solution for foodpreneurs for every service they will need
                        from concept to market success.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all text-center group"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-900 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <stat.icon className="text-white text-2xl" />
                            </div>
                            <div className="text-5xl font-bold text-purple-900 mb-2">
                                <AnimatedCounter
                                    end={stat.value}
                                    suffix={stat.suffix}
                                    duration={2}
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {stat.label}
                            </h3>
                            <p className="text-gray-500">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
