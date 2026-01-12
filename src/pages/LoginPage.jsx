import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Mock login delay
        setTimeout(() => {
            setIsLoading(false);
            navigate('/admin/dashboard');
        }, 1500);
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden" style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
        }}>
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Login Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-6xl mx-4 flex rounded-3xl overflow-hidden shadow-2xl"
                style={{
                    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
            >
                {/* Left Panel - Image Section */}
                <div className="hidden lg:flex lg:w-[45%] relative overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url('/login-side-dark.jpg')`,
                        }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0" style={{
                        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(15, 23, 42, 0.8) 100%)'
                    }} />

                    {/* Decorative Elements */}
                    <div className="absolute top-10 left-10">
                        <div className="flex gap-1.5">
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="w-1.5 h-1.5 bg-white/60 rounded-full"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-14 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <h1 className="text-6xl font-bold text-white leading-tight mb-6" style={{
                                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
                            }}>
                                Your Nursery,
                                <br />
                                Simplified
                            </h1>
                            <p className="text-gray-300 text-lg leading-relaxed max-w-md" style={{
                                textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
                            }}>
                                Manage your nursery inventory, track purchases, and grow your business with our all-in-one platform
                            </p>
                        </motion.div>
                    </div>

                    {/* Bottom Indicator */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
                        <div className="w-10 h-1.5 bg-white rounded-full shadow-lg" />
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                    </div>
                </div>

                {/* Right Panel - Login Form */}
                <div className="flex-1 lg:w-[55%] p-8 sm:p-12 lg:p-16 flex items-center justify-center bg-gradient-to-br from-slate-900/50 to-slate-800/50">
                    <div className="w-full max-w-md">
                        {/* Logo and Welcome Section */}
                        <div className="mb-12 text-center">
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                className="w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
                                style={{
                                    background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                                    border: '3px solid rgba(255, 255, 255, 0.1)'
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                                <img
                                    src="/titleLogo.png"
                                    alt="Logo"
                                    className="w-14 h-14 object-contain relative z-10"
                                />
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-4xl font-bold text-white mb-3"
                            >
                                Welcome!
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-gray-400 text-base"
                            >
                                Sign in to continue to your dashboard
                            </motion.p>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleLogin} className="space-y-6">
                            {/* Email Field */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="space-y-2"
                            >
                                <label className="text-sm font-semibold text-gray-300 ml-1">Email</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-blue-400 transition-colors duration-200">
                                        <FiMail className="w-5 h-5" />
                                    </div>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-12 pr-4 py-4 rounded-xl text-white placeholder-gray-500 outline-none transition-all duration-200"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                                            e.target.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                                            e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                            e.target.style.boxShadow = 'none';
                                        }}
                                        placeholder="Enter your email address"
                                        required
                                    />
                                </div>
                            </motion.div>

                            {/* Password Field */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 }}
                                className="space-y-2"
                            >
                                <label className="text-sm font-semibold text-gray-300 ml-1">Password</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-blue-400 transition-colors duration-200">
                                        <FiLock className="w-5 h-5" />
                                    </div>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-12 pr-4 py-4 rounded-xl text-white placeholder-gray-500 outline-none transition-all duration-200"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                                            e.target.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                                            e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                            e.target.style.boxShadow = 'none';
                                        }}
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                            </motion.div>

                            {/* Forgot Password */}
                            <div className="flex items-center justify-end">
                                <a
                                    href="#"
                                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
                                >
                                    Forgot password?
                                </a>
                            </div>

                            {/* Login Button */}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 text-white font-bold rounded-xl shadow-lg flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-8"
                                style={{
                                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                                    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
                                }}
                            >
                                {isLoading ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <span className="text-lg">Login</span>
                                )}
                            </motion.button>
                        </form>

                        {/* Register Link */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="mt-8 text-center text-sm text-gray-400"
                        >
                            <p>
                                Don't have an account?{' '}
                                <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                                    Register
                                </a>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginPage;
