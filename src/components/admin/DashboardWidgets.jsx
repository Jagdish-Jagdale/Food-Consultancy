import { motion } from 'framer-motion';
import {
    FiArrowUpRight,
    FiArrowDownRight,
    FiBriefcase,
    FiMoreHorizontal,
    FiCreditCard,
    FiShoppingBag,
    FiActivity
} from 'react-icons/fi';
import {
    AreaChart, Area, Cell, PieChart, Pie, BarChart, Bar, ResponsiveContainer, Tooltip, XAxis
} from 'recharts';

// Mock Data
const balanceData = [
    { value: 4000 }, { value: 3000 }, { value: 5000 },
    { value: 2780 }, { value: 1890 }, { value: 6390 }, { value: 3490 }
];

const spendingData = [
    { day: 'Mon', value: 20 }, { day: 'Tue', value: 40 }, { day: 'Wed', value: 30 },
    { day: 'Thu', value: 70 }, { day: 'Fri', value: 50 }, { day: 'Sat', value: 30 }, { day: 'Sun', value: 40 }
];

const transactions = [
    { id: 1, name: 'PlayStation', date: '31 Mar, 3:20 PM', amount: 19.99, icon: FiActivity, card: '**** 0224' },
    { id: 2, name: 'Netflix', date: '29 Mar, 5:11 PM', amount: 30.00, icon: FiArrowUpRight, card: '**** 0224' },
    { id: 3, name: 'Airbnb', date: '29 Mar, 1:20 PM', amount: 300.00, icon: FiBriefcase, card: '*** 4432' },
    { id: 4, name: 'Tommy C.', date: '27 Mar, 2:31 AM', amount: 27.00, type: 'in', icon: FiArrowDownRight, card: '*** 0224' },
    { id: 5, name: 'Apple', date: '27 Mar, 11:04 PM', amount: 10.00, icon: FiShoppingBag, card: '*** 4432' },
];

export const AIInsightCard = () => (
    <div className="bg-[#12131a] rounded-3xl p-6 relative overflow-hidden h-full flex flex-col justify-between group border border-white/5">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/30 rounded-full blur-[80px]" />

        <div className="relative z-10 flex space-x-2">
            <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/10">
                AI Insights
            </div>
        </div>

        <div className="relative z-10 mt-8 mb-4">
            <h3 className="text-2xl font-medium text-white leading-tight">
                Your Transaction Volume <br />
                has increased by 5% <br />
                Since last Month
            </h3>
        </div>

        <div className="relative z-10 flex justify-between items-end">
            <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-white/50" />
                <div className="w-2 h-2 rounded-full bg-white/30" />
                <div className="w-2 h-2 rounded-full bg-white/30" />
            </div>
            <button className="p-2 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-colors">
                <FiArrowUpRight className="w-5 h-5" />
            </button>
        </div>
    </div>
);

export const BalanceOverview = () => (
    <div className="bg-[#12131a] rounded-3xl p-6 border border-white/5 h-full">
        <div className="flex justify-between items-start mb-6">
            <h3 className="text-gray-400 font-medium">Balance Overview</h3>
            <button className="p-2 hover:bg-white/5 rounded-lg text-gray-400">
                <FiArrowUpRight />
            </button>
        </div>

        <div className="flex items-end space-x-3 mb-6">
            <h2 className="text-4xl font-bold text-white">$95,623</h2>
            <span className="text-emerald-400 text-sm font-medium mb-1 flex items-center">
                <FiArrowUpRight className="mr-1" /> 12%
            </span>
            <span className="text-gray-500 text-xs mb-1.5 flex items-center">From last month</span>
        </div>

        <div className="flex space-x-3 mb-6">
            <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-sm text-gray-300 flex-1 text-center">
                44 transactions
            </div>
            <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-sm text-gray-300 flex-1 text-center">
                12 categories
            </div>
        </div>

        <div className="h-24 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={balanceData}>
                    <defs>
                        <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorBalance)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
);

export const EarningsCard = () => {
    const data = [{ name: 'Progress', value: 58 }, { name: 'Remaining', value: 42 }];
    return (
        <div className="bg-[#12131a] rounded-3xl p-6 border border-white/5 h-full relative">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-gray-400 font-medium">Earnings</h3>
                <button className="p-2 hover:bg-white/5 rounded-lg text-gray-400">
                    <FiArrowUpRight />
                </button>
            </div>

            <div className="flex items-end space-x-3 mb-4">
                <h2 className="text-3xl font-bold text-white">$95,623</h2>
                <span className="text-emerald-400 text-xs font-medium mb-1.5 flex items-center">
                    <FiArrowUpRight className="mr-0.5" /> 7%
                </span>
                <span className="text-gray-500 text-[10px] mb-1.5 ">From last month</span>
            </div>

            <div className="h-40 w-full relative flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="70%"
                            startAngle={180}
                            endAngle={0}
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={0}
                            dataKey="value"
                            cornerRadius={10}
                            stroke="none"
                        >
                            <Cell key="cell-0" fill="#3b82f6" />
                            <Cell key="cell-1" fill="#333" />
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center mt-4">
                    <p className="text-gray-400 text-xs">Percentage</p>
                    <p className="text-2xl font-bold text-white">58%</p>
                </div>
            </div>
            <div className="flex justify-center space-x-6 text-xs text-gray-500 pb-2">
                <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-blue-500 mr-2" />Current</div>
                <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-gray-700 mr-2" />Month goal</div>
            </div>
        </div>
    )
}

export const TransactionsList = () => (
    <div className="bg-[#12131a] rounded-3xl p-6 border border-white/5 h-full">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-medium text-white">Transactions</h3>
            <div className="flex space-x-2">
                <button className="p-2 bg-white/5 rounded-xl text-gray-400 hover:text-white"><FiMoreHorizontal /></button>
                <button className="p-2 bg-white/5 rounded-xl text-gray-400 hover:text-white"><FiArrowUpRight /></button>
            </div>
        </div>

        <div className="space-y-6">
            {transactions.map(item => (
                <div key={item.id} className="flex items-center justify-between group">
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:bg-blue-600/20 group-hover:text-blue-500 transition-colors">
                            {item.name === 'Apple' ? <span className='text-lg'></span> : <item.icon />}
                        </div>
                        <div>
                            <p className="text-white font-medium">{item.name}</p>
                        </div>
                    </div>
                    <div className="hidden md:block text-gray-500 text-sm">{item.card}</div>
                    <div className="hidden md:block text-gray-500 text-sm">{item.date}</div>
                    <div className={`font-medium ${item.type === 'in' ? 'text-emerald-400' : 'text-white'}`}>
                        {item.type === 'in' ? '+' : ''}${item.amount.toFixed(2)}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export const SpendingCard = () => (
    <div className="bg-[#12131a] rounded-3xl p-6 border border-white/5 h-full">
        <div className="flex justify-between items-start mb-6">
            <div>
                <h3 className="text-gray-400 font-medium">Spending</h3>
                <h2 className="text-2xl font-bold text-white mt-1">107,489</h2>
                <div className="flex items-center mt-1">
                    <span className="text-red-400 text-xs font-bold mr-2 bg-red-400/10 px-1.5 py-0.5 rounded">↓ 2%</span>
                    <span className="text-gray-500 text-xs">From last month</span>
                </div>
            </div>
            <button className="p-2 hover:bg-white/5 rounded-lg text-gray-400"><FiArrowUpRight /></button>
        </div>

        <div className="h-40 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={spendingData}>
                    <Bar dataKey="value" radius={[4, 4, 4, 4]}>
                        {spendingData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? '#3b82f6' : '#27272a'} />
                        ))}
                    </Bar>
                    <XAxis dataKey="day" stroke="#52525b" fontSize={10} axisLine={false} tickLine={false} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
);
