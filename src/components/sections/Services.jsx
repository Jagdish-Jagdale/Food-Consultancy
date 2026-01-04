import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import ideationImg from '../../assets/images/food_ideation_1767461398399.png';
import developmentImg from '../../assets/images/food_development_1767461417584.png';
import factoryImg from '../../assets/images/factory_setup_1767461436477.png';
import manufacturingImg from '../../assets/images/contract_manufacturing_1767461471040.png';

const Services = () => {
    const services = [
        {
            title: 'Food Ideation',
            image: ideationImg,
            challenge: 'Developing innovative ideas to launch a new product.',
            approach: 'We bring clarity to your purpose and vision, analyze trends, forecast the future, and understand your target consumers.',
        },
        {
            title: 'Food Product Development',
            image: developmentImg,
            challenge: 'Crafting proprietary formulations with outstanding sensory appeal.',
            approach: 'We design unique products with marketable claims, optimal SKUs, and pricing, delivering exceptional sensory profiles.',
        },
        {
            title: 'Food Factory Setup',
            image: factoryImg,
            challenge: 'Seamlessly integrating a state-of-the-art facility.',
            approach: 'We provide design engineering, optimize factory layouts, commission machinery, and conduct dry runs and pilot trials.',
        },
        {
            title: 'Contract Manufacturing',
            image: manufacturingImg,
            challenge: 'Finding the right and reliable co-packer who offers customization.',
            approach: 'We identify and collaborate with trusted manufacturers who provide tailored solutions aligned with your product vision.',
        },
    ];

    return (
        <section id="services" className="section-padding bg-white">
            <div className="container-custom">
                <SectionHeading
                    title="What Do We Serve"
                    subtitle="Comprehensive food consultancy services to guide your brand from ideation to market success"
                />

                <div className="space-y-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6 }}
                            className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Image */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
                            >
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
                                    <div className="absolute bottom-6 left-6">
                                        <h3 className="text-2xl font-bold text-white">
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Content */}
                            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <div className="mb-6">
                                        <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                            Challenge
                                        </span>
                                        <p className="text-lg text-gray-700">
                                            {service.challenge}
                                        </p>
                                    </div>

                                    <div className="mb-6">
                                        <span className="inline-block bg-purple-100 text-purple-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                            Our Approach
                                        </span>
                                        <p className="text-lg text-gray-700">
                                            {service.approach}
                                        </p>
                                    </div>

                                    <motion.button
                                        whileHover={{ x: 10 }}
                                        className="text-orange-500 font-semibold flex items-center gap-2 group"
                                    >
                                        Learn More
                                        <span className="group-hover:translate-x-2 transition-transform">→</span>
                                    </motion.button>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
