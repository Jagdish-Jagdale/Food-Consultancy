import { motion } from 'framer-motion';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

const StatCard = ({ title, value, trend, trendValue, icon: Icon, color }) => {
    const isPositive = trend === 'up';

    const bgColors = {
        emerald: 'bg-emerald-100 text-emerald-600',
        blue: 'bg-blue-100 text-blue-600',
        purple: 'bg-purple-100 text-purple-600',
        orange: 'bg-orange-100 text-orange-600',
    };

    return (
        <motion.div
            whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-200"
        >
            <div className="flex justify-between items-start">
                <div className={`p-3 rounded-lg ${bgColors[color] || bgColors.blue}`}>
                    <Icon className="w-6 h-6" />
                </div>
                <div className={`flex items-center space-x-1 text-sm font-semibold ${isPositive ? 'text-emerald-600' : 'text-red-500'} bg-opacity-10 px-2 py-1 rounded-full ${isPositive ? 'bg-emerald-50' : 'bg-red-50'}`}>
                    {isPositive ? <FiTrendingUp className="w-4 h-4" /> : <FiTrendingDown className="w-4 h-4" />}
                    <span>{trendValue}</span>
                </div>
            </div>

            <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{value}</h3>
                <p className="text-gray-500 text-sm font-medium mt-1">{title}</p>
            </div>
        </motion.div>
    );
};

export default StatCard;
