import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader'; // Keeping file but not using it for this specific layout if not needed
import { FiChevronDown } from 'react-icons/fi';

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-[#04050a] font-sans text-gray-100 overflow-hidden">
            <Sidebar />
            <div className="flex-1 ml-80 p-8 h-screen overflow-y-auto">
                {/* Top Header can be optional here, reusing simple header or just content */}
                <header className="flex justify-between items-center mb-8">
                    <div className="flex items-center">
                        <button className="px-3 py-2 bg-[#12131a] rounded-xl text-sm font-medium border border-white/5 hover:bg-white/5 transition-colors text-gray-300 flex items-center gap-2">
                            This Month <FiChevronDown className="opacity-70" />
                        </button>
                    </div>
                    <div className="flex space-x-4">
                        <button className="px-4 py-2 bg-[#12131a] rounded-xl text-sm font-medium border border-white/5 hover:bg-white/5 transition-colors text-gray-300">
                            Manage Widgets
                        </button>
                        <button className="px-4 py-2 bg-blue-600 rounded-xl text-sm font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-colors text-white">
                            + Add new Widget
                        </button>
                    </div>
                </header>

                <main className="max-w-[1600px] mx-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
