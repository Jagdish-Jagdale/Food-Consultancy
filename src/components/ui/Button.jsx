import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 cursor-pointer';

  const variants = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30',
    secondary: 'bg-purple-900 text-white hover:bg-purple-800',
    outline: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white',
    white: 'bg-white text-purple-900 hover:bg-gray-100',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-10 py-2 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      style={{ paddingLeft: '0.8rem', paddingRight: '0.8rem', paddingTop: '0.1rem', paddingBottom: '0.1rem' }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
