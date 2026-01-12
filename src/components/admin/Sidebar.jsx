import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import {
    FiGrid,
    FiZap,
    FiCreditCard,
    FiRepeat,
    FiFileText,
    FiTrendingUp,
    FiHome,
    FiFile
} from 'react-icons/fi';

const Sidebar = () => {
    const menuItems = [
        { icon: FiGrid, label: 'Dashboard', path: '/admin/dashboard' },
        { icon: FiZap, label: 'Neuro AI', path: '/admin/ai' },
        { icon: FiCreditCard, label: 'Accounts', path: '/admin/accounts' },
        { icon: FiRepeat, label: 'Transactions', path: '/admin/transactions' },
        { icon: FiFileText, label: 'Reports', path: '/admin/reports' },
        { icon: FiTrendingUp, label: 'Investments', path: '/admin/investments' },
        { icon: FiHome, label: 'Loans', path: '/admin/loans' },
        { icon: FiFile, label: 'Taxes', path: '/admin/taxes' },
    ];

    const SidebarLink = ({ item }) => (
        <NavLink
            to={item.path}
            className={({ isActive }) => `
        flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-200 group relative
        ${isActive
                    ? 'bg-white/10 text-white'
                    : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                }
      `}
        >
            <item.icon className="w-5 h-5" />
            <span className="font-medium text-sm">{item.label}</span>
        </NavLink>
    );

    return (
        <div className="w-72 h-[95vh] fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col">
            {/* Brand & User Profile */}
            <div className="bg-[#12131a] rounded-[2rem] p-6 mb-4 border border-white/5">
                <div className="flex items-center space-x-2 mb-8">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">✦</span>
                    </div>
                    <span className="text-white font-bold text-lg">NeuroBank</span>
                </div>

                <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gray-700 mb-3 overflow-hidden">
                        {/* Placeholder Avatar */}
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                    </div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-1">Monday, March 24</p>
                    <h2 className="text-white text-xl font-medium leading-tight">Welcome back, <br /> George!</h2>

                    <button className="absolute top-0 right-0 p-2 text-gray-500 hover:text-white transition-colors">
                        🌙
                    </button>
                </div>
            </div>

            {/* Navigation */}
            <div className="bg-[#12131a] rounded-[2rem] p-4 flex-1 border border-white/5 overflow-y-auto mb-4">
                <div className="space-y-1">
                    {menuItems.map((item) => (
                        <SidebarLink key={item.path} item={item} />
                    ))}
                </div>
            </div>

            {/* Pro Banner */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-[2rem] p-6 relative overflow-hidden group border border-white/5">
                <div className="relative z-10">
                    <div className="flex items-center space-x-2 mb-1">
                        <span className="text-white">✨</span>
                        <span className="text-white font-bold text-sm">Activate NeuroBank Pro</span>
                    </div>
                    <p className="text-blue-200 text-xs">Elevate finances with AI</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
