import { motion } from 'framer-motion';

const SectionHeading = ({
    title,
    subtitle,
    centered = true,
    light = false,
    className = ''
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
        >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`text-lg md:text-xl max-w-3xl ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-200' : 'text-gray-600'}`}>
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};

export default SectionHeading;
