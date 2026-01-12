import { motion } from 'framer-motion';
import Button from '../ui/Button';

const NMFI = () => {
    const steps = [
        { number: '01', title: 'Ideation', desc: 'Conceptualize innovative food ideas' },
        { number: '02', title: 'Development', desc: 'Create unique formulations' },
        { number: '03', title: 'Production', desc: 'Set up manufacturing' },
        { number: '04', title: 'Market', desc: 'Launch to success' },
    ];

    return (
        <section id="nmfi" className="section-padding bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-orange-400 font-semibold text-lg block" style={{ marginBottom: '1.5rem' }}>
                            Our Unique Approach
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ marginBottom: '1.5rem' }}>
                            Navigating Marketable{' '}
                            <span className="text-orange-400">Food Innovation</span>
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed" style={{ marginBottom: '1.5rem' }}>
                            NMFI is designed exclusively by Safe Science to navigate entrepreneurs
                            from food ideation to market success. This proven process integrates
                            various verticals of the product development cycle to ensure significant
                            market success.
                        </p>
                        <Button variant="primary" size="lg">
                            Learn More
                        </Button>
                    </motion.div>

                    {/* Right - Steps */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 gap-x-12 gap-y-6"
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-400/50 transition-all"
                                style={{ paddingLeft: '3rem', paddingRight: '2rem', paddingTop: '1.5rem', paddingBottom: '1.5rem' }}
                            >
                                <span className="text-4xl font-bold text-orange-400 block mb-2">
                                    {step.number}
                                </span>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default NMFI;
