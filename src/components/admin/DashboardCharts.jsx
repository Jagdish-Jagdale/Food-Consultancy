import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell
} from 'recharts';

const data = [
    { name: 'Jan', revenue: 4000, users: 2400 },
    { name: 'Feb', revenue: 3000, users: 1398 },
    { name: 'Mar', revenue: 2000, users: 9800 },
    { name: 'Apr', revenue: 2780, users: 3908 },
    { name: 'May', revenue: 1890, users: 4800 },
    { name: 'Jun', revenue: 2390, users: 3800 },
    { name: 'Jul', revenue: 3490, users: 4300 },
];

const trafficData = [
    { name: 'Mon', visits: 4000 },
    { name: 'Tue', visits: 3000 },
    { name: 'Wed', visits: 2000 },
    { name: 'Thu', visits: 2780 },
    { name: 'Fri', visits: 1890 },
    { name: 'Sat', visits: 2390 },
    { name: 'Sun', visits: 3490 },
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-xl">
                <p className="text-gray-500 font-medium mb-1">{label}</p>
                <p className="text-emerald-600 font-bold">
                    {payload[0].value.toLocaleString()}
                </p>
            </div>
        );
    }
    return null;
};

const DashboardCharts = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue Chart */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Revenue Analytics</h3>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
                            <XAxis dataKey="name" stroke="#9ca3af" tick={{ fill: '#6b7280' }} axisLine={false} tickLine={false} />
                            <YAxis stroke="#9ca3af" tick={{ fill: '#6b7280' }} axisLine={false} tickLine={false} />
                            <Tooltip content={<CustomTooltip />} />
                            <Area
                                type="monotone"
                                dataKey="revenue"
                                stroke="#10b981"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorRevenue)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Traffic Chart */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Weekly Traffic</h3>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={trafficData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
                            <XAxis dataKey="name" stroke="#9ca3af" tick={{ fill: '#6b7280' }} axisLine={false} tickLine={false} />
                            <YAxis stroke="#9ca3af" tick={{ fill: '#6b7280' }} axisLine={false} tickLine={false} />
                            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f9fafb' }} />
                            <Bar dataKey="visits" radius={[4, 4, 0, 0]}>
                                {trafficData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#3b82f6' : '#93c5fd'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default DashboardCharts;
