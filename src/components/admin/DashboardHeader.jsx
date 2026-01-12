import { FiSearch, FiBell, FiUser } from 'react-icons/fi';

const DashboardHeader = () => {
    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-30">
            <div className="flex items-center w-96">
                <div className="relative w-full">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiSearch className="text-gray-400" />
                    </span>
                    <input
                        type="text"
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-shadow"
                        placeholder="Search..."
                    />
                </div>
            </div>

            <div className="flex items-center space-x-6">
                <button className="relative p-2 text-gray-400 hover:text-emerald-600 transition-colors">
                    <FiBell className="w-6 h-6" />
                    <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <div className="flex items-center space-x-3 pl-6 border-l border-gray-200">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-medium text-gray-900">Admin User</p>
                        <p className="text-xs text-gray-500">Super Admin</p>
                    </div>
                    <div className="h-10 w-10 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                        AD
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
