import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Award, Zap, Star, BarChart3, Target } from "lucide-react";

const cases = [
    {
        client: "NovaTech SaaS",
        industry: "B2B Software",
        service: "SEO + PPC",
        color: "#00b8a9",
        gradient: "from-teal-500 to-cyan-500",
        emoji: "🚀",
        challenge: "Stagnant growth with no paid acquisition and declining organic traffic.",
        solution: "Implemented comprehensive SEO strategy combined with targeted PPC campaigns.",
        results: [
            { metric: "Traffic", before: "2K", after: "8.7K", change: "+314%", icon: BarChart3 },
            { metric: "Signups", before: "87", after: "440", change: "+406%", icon: Target },
            { metric: "Revenue", before: "$24K", after: "$91K", change: "+279%", icon: TrendingUp },
        ],
        timeframe: "6 months",
        testimonial: "The team exceeded our expectations. Our growth has been phenomenal!",
        author: "Sarah Chen, CEO",
    },
    {
        client: "Velorix",
        industry: "E-commerce",
        service: "Ads + CRO",
        color: "#f97316",
        gradient: "from-orange-500 to-red-500",
        emoji: "👗",
        challenge: "Low ROAS (1.4x) and poor conversion rate affecting profitability.",
        solution: "Optimized ad campaigns and redesigned checkout flow for better conversion.",
        results: [
            { metric: "ROAS", before: "1.4x", after: "5.8x", change: "+314%", icon: TrendingUp },
            { metric: "CVR", before: "0.9%", after: "3.4%", change: "+278%", icon: Target },
            { metric: "Revenue", before: "$56K", after: "$232K", change: "+314%", icon: BarChart3 },
        ],
        timeframe: "4 months",
        testimonial: "Best ROI we've seen from any marketing partner. Highly recommended!",
        author: "Michael Rodriguez, Founder",
    },
    {
        client: "HealthPlus",
        industry: "Healthcare",
        service: "SEO + Social",
        color: "#22c55e",
        gradient: "from-green-500 to-emerald-500",
        emoji: "🏥",
        challenge: "Low visibility in local search and weak social media presence.",
        solution: "Local SEO optimization and engaging social media strategy.",
        results: [
            { metric: "Patients", before: "320", after: "1.2K", change: "+275%", icon: Target },
            { metric: "Reviews", before: "45", after: "287", change: "+538%", icon: Star },
            { metric: "Revenue", before: "$180K", after: "$520K", change: "+189%", icon: TrendingUp },
        ],
        timeframe: "8 months",
        testimonial: "Our practice has never been busier. The local SEO results are incredible!",
        author: "Dr. Emily Watson",
    },
];

export default function Results() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    };

    const metricVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
            },
        }),
    };

    return (
        <section className="py-24 relative bg-gradient-to-br from-[#fffbf5] via-white to-[#fef7ed] overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute top-20 left-10 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-300/5 rounded-full blur-3xl" />

                {/* Grid Pattern */}
                <div 
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: "radial-gradient(circle at 1px 1px, #00b8a9 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />

                {/* Animated Wave Lines */}
                <svg
                    className="absolute top-[-120px] left-0 w-full opacity-20"
                    viewBox="0 0 1440 400"
                    fill="none"
                >
                    <path
                        d="M0 200 C300 50, 1100 50, 1440 200"
                        stroke="#00b8a9"
                        strokeWidth="2"
                        strokeDasharray="10 10"
                    >
                        <animate attributeName="stroke-dashoffset" from="0" to="20" dur="3s" repeatCount="indefinite" />
                    </path>
                    <path
                        d="M0 260 C300 120, 1100 120, 1440 260"
                        stroke="#00b8a9"
                        strokeWidth="1.5"
                        opacity="0.5"
                        strokeDasharray="8 8"
                    >
                        <animate attributeName="stroke-dashoffset" from="0" to="16" dur="4s" repeatCount="indefinite" />
                    </path>
                </svg>

                <svg
                    className="absolute bottom-[-150px] left-0 w-full opacity-15"
                    viewBox="0 0 1440 400"
                    fill="none"
                >
                    <path
                        d="M0 200 C300 350, 1100 350, 1440 200"
                        stroke="#f97316"
                        strokeWidth="2"
                        strokeDasharray="12 12"
                    >
                        <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="5s" repeatCount="indefinite" />
                    </path>
                </svg>

                {/* Diagonal Flow Lines */}
                <svg
                    className="absolute top-1/3 left-[-100px] w-[1600px] opacity-10 rotate-6"
                    viewBox="0 0 1600 600"
                    fill="none"
                >
                    <path
                        d="M0 300 C400 100, 1200 100, 1600 300"
                        stroke="#f43f8e"
                        strokeWidth="1.5"
                        strokeDasharray="6 6"
                    >
                        <animate attributeName="stroke-dashoffset" from="0" to="12" dur="6s" repeatCount="indefinite" />
                    </path>
                </svg>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 right-10 opacity-20 pointer-events-none">
                <Zap size={40} className="text-teal-500 animate-pulse" />
            </div>
            <div className="absolute bottom-20 left-10 opacity-15 pointer-events-none">
                <Award size={32} className="text-orange-500 animate-bounce" style={{ animationDuration: "3s" }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-teal-200/50 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                        <span className="text-xs font-semibold text-teal-600 tracking-wide">PROVEN RESULTS</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                        Results That 
                        <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent"> Speak</span>
                    </h2>
                    
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Real numbers. Real growth. Real impact. See how we've transformed businesses like yours.
                    </p>

                    {/* Decorative Line */}
                    <div className="flex justify-center mt-8">
                        <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full" />
                    </div>
                </motion.div>

                {/* CARDS */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="space-y-10"
                >
                    {cases.map((c) => (
                        <motion.div
                            key={c.client}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            className="group relative bg-white rounded-3xl p-8 md:p-10 transition-all duration-300 hover:shadow-2xl"
                            style={{
                                boxShadow: "0 10px 30px rgba(0,0,0,0.08), 0 20px 60px rgba(0,0,0,0.06)",
                            }}
                        >
                            {/* Animated Border Gradient */}
                            <div
                                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    background: `linear-gradient(135deg, ${c.color}40, transparent)`,
                                    padding: "2px",
                                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />

                            {/* Glow layer */}
                            <div
                                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none -z-10"
                                style={{
                                    background: `radial-gradient(circle at 50% 0%, ${c.color}20, transparent 70%)`,
                                }}
                            />

                            <div className="grid lg:grid-cols-5 gap-8">
                                {/* LEFT SIDE - Client Info */}
                                <div className="lg:col-span-2">
                                    {/* Client Header */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <motion.div
                                            className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                                            style={{ background: `${c.color}15` }}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                        >
                                            {c.emoji}
                                        </motion.div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">{c.client}</h3>
                                            <div className="text-sm text-gray-500">{c.industry}</div>
                                        </div>
                                    </div>

                                    {/* Service Badge */}
                                    <motion.div
                                        className="inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-4"
                                        style={{
                                            background: `${c.color}12`,
                                            color: c.color,
                                            border: `1px solid ${c.color}20`,
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {c.service}
                                    </motion.div>

                                    {/* Challenge */}
                                    <div className="mb-4">
                                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                            Challenge
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {c.challenge}
                                        </p>
                                    </div>

                                    {/* Solution */}
                                    <div className="mb-4">
                                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                            Solution
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {c.solution}
                                        </p>
                                    </div>

                                    {/* Timeframe Badge */}
                                    <div className="flex items-center gap-2 mt-4">
                                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${c.color}10` }}>
                                            <TrendingUp size={14} style={{ color: c.color }} />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500">Results achieved in</div>
                                            <div className="text-sm font-bold" style={{ color: c.color }}>{c.timeframe}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* RIGHT SIDE - Results */}
                                <div className="lg:col-span-3">
                                    {/* Results Header */}
                                    <div className="flex items-center gap-2 mb-6">
                                        <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: `${c.color}15` }}>
                                            <Zap size={12} style={{ color: c.color }} />
                                        </div>
                                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                            Key Performance Indicators
                                        </span>
                                    </div>

                                    {/* Metrics Grid */}
                                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                                        {c.results.map((r, idx) => (
                                            <motion.div
                                                key={r.metric}
                                                custom={idx}
                                                variants={metricVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                                className="relative p-4 rounded-xl transition-all duration-300 hover:scale-105"
                                                style={{
                                                    background: `${c.color}06`,
                                                    border: `1px solid ${c.color}15`,
                                                }}
                                                whileHover={{
                                                    background: `${c.color}12`,
                                                    boxShadow: `0 4px 12px ${c.color}20`,
                                                }}
                                            >
                                                {/* Metric Icon */}
                                                <div className="flex items-center gap-2 mb-3">
                                                    <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: `${c.color}15` }}>
                                                        <r.icon size={12} style={{ color: c.color }} />
                                                    </div>
                                                    <div className="text-xs font-medium text-gray-500">{r.metric}</div>
                                                </div>

                                                {/* Before Value */}
                                                <div className="text-xs text-gray-400 line-through mb-1">
                                                    {r.before}
                                                </div>

                                                {/* After Value */}
                                                <div className="text-2xl font-bold text-gray-900 mb-1">
                                                    {r.after}
                                                </div>

                                                {/* Change Percentage */}
                                                <motion.div
                                                    className="text-xs font-bold inline-flex items-center gap-1 px-2 py-0.5 rounded-full"
                                                    style={{
                                                        background: `${c.color}15`,
                                                        color: c.color,
                                                    }}
                                                    animate={{
                                                        scale: [1, 1.05, 1],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        delay: idx * 0.3,
                                                    }}
                                                >
                                                    <ArrowUpRight size={10} />
                                                    {r.change}
                                                </motion.div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Testimonial */}
                                    <motion.div
                                        className="relative p-5 rounded-xl mt-4 overflow-hidden"
                                        style={{
                                            background: `linear-gradient(135deg, ${c.color}08, ${c.color}02)`,
                                            borderLeft: `3px solid ${c.color}`,
                                        }}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="absolute top-2 right-3 opacity-10">
                                            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style={{ color: c.color }}>
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-600 italic leading-relaxed mb-2 relative z-10">
                                            "{c.testimonial}"
                                        </p>
                                        <div className="text-xs font-semibold" style={{ color: c.color }}>
                                            — {c.author}
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Bottom Decorative Line */}
                            <motion.div
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 rounded-full"
                                style={{
                                    width: "20%",
                                    background: `linear-gradient(90deg, transparent, ${c.color}, transparent)`,
                                }}
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                viewport={{ once: true }}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-16 pt-8"
                >
                    <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full p-1 border border-gray-200 shadow-sm">
                        <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                            View All Case Studies
                            <ArrowUpRight size={16} className="inline ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                        <button className="text-gray-600 px-6 py-3 rounded-full font-semibold text-sm hover:text-teal-600 transition-colors">
                           See Your Potential
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}