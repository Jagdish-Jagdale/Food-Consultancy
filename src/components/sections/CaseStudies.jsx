import { motion } from 'framer-motion';
import Card from '../ui/Card';
import rhythmImg from '../../assets/images/case_study_rhythm_1767461492428.png';
import sparkloImg from '../../assets/images/case_study_sparklo_1767461512739.png';
import skippiImg from '../../assets/images/case_study_skippi_1767461531135.png';

const CaseStudies = () => {
    const caseStudies = [
        {
            title: 'Rhythm',
            subtitle: 'Food Branding, Marketing, and Product Launch',
            image: rhythmImg,
            tags: ['Branding', 'Marketing', 'Launch'],
        },
        {
            title: "Sparklo's Sparkling Water",
            subtitle: 'Concept, Product Development, & Turnkey',
            image: sparkloImg,
            tags: ['Concept', 'Development', 'Turnkey'],
        },
        {
            title: "Skippi's Natural Ice Pops",
            subtitle: 'Product Formulation & Turnkey',
            image: skippiImg,
            tags: ['Formulation', 'Turnkey'],
        },
    ];

    return (
        <section id="case-studies" className="section-padding bg-gray-50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Brands we helped navigate to <span className="text-purple-900">success</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explore our success stories and see how we transformed ideas into market-ready products
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <Card key={study.title} delay={index * 0.1} className="group">
                            <div className="relative overflow-hidden">
                                <img
                                    src={study.image}
                                    alt={study.title}
                                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {study.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-900 transition-colors">
                                    {study.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {study.subtitle}
                                </p>

                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className="text-orange-500 font-semibold flex items-center gap-2"
                                >
                                    Read More
                                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                                </motion.button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
