import { motion } from "framer-motion";
import {
    Phone,
    Microscope,
    Rocket,
    BarChart2,
    TrendingUp,
    Target,
    Award,
    ArrowRight,
} from "lucide-react";

const steps = [
    {
        number: "01",
        icon: Phone,
        color: "#00b8a9",
        gradient: "from-teal-500 to-cyan-500",
        title: "Discovery",
        desc: "Understand your business goals, target audience, and identify growth opportunities.",
        longDesc: "We dive deep into your business model, market position, and current challenges to create a tailored strategy.",
        stat: "98%",
        statLabel: "Client Satisfaction",
    },
    {
        number: "02",
        icon: Microscope,
        color: "#f97316",
        gradient: "from-orange-500 to-red-500",
        title: "Research",
        desc: "Analyze market trends, competitor strategies, and audience behavior patterns.",
        longDesc: "Data-driven research reveals untapped opportunities and helps us craft winning campaigns.",
        stat: "500+",
        statLabel: "Hours of Analysis",
    },
    {
        number: "03",
        icon: Rocket,
        color: "#f43f8e",
        gradient: "from-pink-500 to-rose-500",
        title: "Launch",
        desc: "Execute high-performing campaigns across multiple channels simultaneously.",
        longDesc: "Our team ensures seamless deployment with rigorous testing and quality assurance.",
        stat: "3.2x",
        statLabel: "Faster Time-to-Market",
    },
    {
        number: "04",
        icon: BarChart2,
        color: "#22c55e",
        gradient: "from-green-500 to-emerald-500",
        title: "Optimize",
        desc: "Scale what works with continuous data analysis and iterative improvements.",
        longDesc: "Real-time monitoring and A/B testing help us maximize ROI and drive sustainable growth.",
        stat: "+156%",
        statLabel: "Avg. Performance Lift",
    },
];

export default function Process() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 60, rotateX: -15 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    };

    const lineVariants = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
            transition: { duration: 0.8, delay: 0.5 },
        },
    };

    return (
        <section className="py-24 bg-gradient-to-br from-[#fffbf5] via-white to-[#fef7ed] relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Abstract Pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                        <defs>
                            <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle cx="20" cy="20" r="1.5" fill="#00b8a9" />
                            </pattern>
                        </defs>
                        <rect width="1000" height="1000" fill="url(#dotPattern)" />
                    </svg>
                </div>

                {/* Gradient Orbs */}
                <div className="absolute top-20 right-10 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-300/5 rounded-full blur-3xl" />

                {/* Animated Waves */}
                <svg
                    className="absolute -top-40 -right-40 w-[700px] opacity-20"
                    viewBox="0 0 600 600"
                    fill="none"
                >
                    <path
                        d="M0 300 C150 100, 450 100, 600 300 C450 500, 150 500, 0 300"
                        stroke="url(#waveGrad1)"
                        strokeWidth="2"
                        strokeDasharray="8 8"
                    >
                        <animate attributeName="stroke-dashoffset" from="0" to="16" dur="2s" repeatCount="indefinite" />
                    </path>
                    <defs>
                        <linearGradient id="waveGrad1" x1="0" y1="0" x2="1" y2="1">
                            <stop stopColor="#00b8a9" />
                            <stop offset="1" stopColor="#0fd4c8" />
                        </linearGradient>
                    </defs>
                </svg>

                <svg
                    className="absolute bottom-[-100px] left-[-200px] w-[800px] opacity-15"
                    viewBox="0 0 800 800"
                    fill="none"
                >
                    <path
                        d="M0 400 C200 200, 600 200, 800 400 C600 600, 200 600, 0 400"
                        stroke="url(#waveGrad2)"
                        strokeWidth="1.5"
                        strokeDasharray="6 6"
                    >
                        <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="3s" repeatCount="indefinite" />
                    </path>
                    <defs>
                        <linearGradient id="waveGrad2" x1="0" y1="0" x2="1" y2="1">
                            <stop stopColor="#f97316" />
                            <stop offset="1" stopColor="#f43f8e" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-8 left-8 z-[2] flex items-end gap-2.5 opacity-40">
                <div className="w-14 h-[22px] rounded-[30px] bg-[#00b8a9] -rotate-[20deg] animate-bounce" style={{ animationDuration: "3s" }} />
                <div className="w-3.5 h-3.5 rounded-full bg-[#f43f8e] mb-1 animate-pulse" />
                <div className="w-14 h-[22px] rounded-[30px] bg-[#f43f8e] -rotate-[15deg] mb-2 animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }} />
                <div className="w-9 h-[22px] rounded-[30px] bg-[#facc15] -rotate-[25deg] animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }} />
            </div>

            <div className="absolute top-8 right-8 z-[2] flex items-end gap-2.5 opacity-30">
                <Target size={24} className="text-teal-500 animate-spin-slow" />
                <TrendingUp size={20} className="text-orange-500 animate-bounce" />
                <Award size={22} className="text-pink-500 animate-pulse" />
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
                        <span className="text-xs font-semibold text-teal-600 tracking-wide">HOW WE WORK</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                        Our Simple
                        <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent"> 4-Step Process</span>
                    </h2>
                    
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        A proven methodology that turns data into scalable growth and measurable results.
                    </p>

                    {/* Decorative Line */}
                    <div className="flex justify-center mt-8">
                        <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full" />
                    </div>
                </motion.div>

                {/* PROCESS FLOW */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative flex flex-wrap justify-center gap-8"
                >
                    {/* Connecting Line (Desktop) */}
                    <motion.div
                        variants={lineVariants}
                        className="hidden lg:block absolute top-1/3 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-teal-500 via-orange-500 to-pink-500 rounded-full"
                        style={{ transformOrigin: "left" }}
                    />

                    {steps.map((step, i) => (
                        <motion.div
                            key={step.number}
                            variants={cardVariants}
                            whileHover={{
                                y: -20,
                                transition: { type: "spring", stiffness: 300 },
                            }}
                            className="relative w-[280px] group"
                        >
                            {/* Connecting Dot (Desktop) */}
                            {i !== steps.length - 1 && (
                                <div className="hidden lg:block absolute -right-4 top-1/3 w-3 h-3 rounded-full bg-teal-500 shadow-lg animate-pulse z-20" />
                            )}

                            {/* Card Container */}
                            <div
                                className="relative bg-white rounded-2xl p-6 transition-all duration-300 group-hover:shadow-2xl"
                                style={{
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.08), 0 20px 60px rgba(0,0,0,0.06)",
                                }}
                            >
                                {/* Animated Border Gradient */}
                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: `linear-gradient(135deg, ${step.color}40, transparent)`,
                                        padding: "1px",
                                        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                    }}
                                />

                                {/* Background Glow */}
                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(circle at 50% 0%, ${step.color}20, transparent 70%)`,
                                    }}
                                />

                                {/* Step Number Badge */}
                                <motion.div
                                    className="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                                    style={{
                                        background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`,
                                    }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    {step.number}
                                </motion.div>

                                {/* Icon Container */}
                                <motion.div
                                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-5 relative overflow-hidden"
                                    style={{
                                        background: `linear-gradient(135deg, ${step.color}15, ${step.color}08)`,
                                    }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <step.icon size={28} style={{ color: step.color }} />
                                    
                                    {/* Ripple Effect */}
                                    <motion.div
                                        className="absolute inset-0 rounded-xl"
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileHover={{ scale: 2, opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        style={{ background: step.color }}
                                    />
                                </motion.div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                                    {step.desc}
                                </p>

                                {/* Stats Badge */}
                                <motion.div
                                    className="inline-flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-1.5 mb-4"
                                    whileHover={{ scale: 1.05, backgroundColor: `${step.color}08` }}
                                >
                                    <TrendingUp size={14} style={{ color: step.color }} />
                                    <span className="text-sm font-bold" style={{ color: step.color }}>{step.stat}</span>
                                    <span className="text-xs text-gray-500">{step.statLabel}</span>
                                </motion.div>

                                {/* Expandable Details */}
                                <motion.div
                                    className="overflow-hidden"
                                    initial={{ height: 0, opacity: 0 }}
                                    whileHover={{ height: "auto", opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="pt-3 mt-2 border-t border-gray-100">
                                        <p className="text-xs text-gray-500 leading-relaxed">
                                            {step.longDesc}
                                        </p>
                                        <div className="flex items-center gap-1 mt-2 text-xs font-medium" style={{ color: step.color }}>
                                            <span>Learn more</span>
                                            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-16 pt-8"
                >
                    <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full p-1 border border-gray-200 shadow-sm">
                        <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                            Start Your Journey
                            <ArrowRight size={16} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="text-gray-600 px-6 py-3 rounded-full font-semibold text-sm hover:text-teal-600 transition-colors">
                            See Case Studies
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Custom CSS for additional animations */}
            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}