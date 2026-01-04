import { motion } from 'framer-motion';

const Card = ({
    children,
    className = '',
    hover = true,
    delay = 0,
    ...props
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay }}
            whileHover={hover ? { y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' } : {}}
            className={`bg-white rounded-2xl shadow-lg overflow-hidden ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
