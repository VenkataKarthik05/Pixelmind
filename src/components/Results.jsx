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

/* ─────────────────────────────────────────────
   Faded background image layer
   Uses real Unsplash photos that fit a
   "growth / analytics / business" context.
   All images are heavily masked so they never
   overpower the original light geometric bg.
───────────────────────────────────────────── */
function BgImages() {
    return (
        <>
            {/* ── TOP-LEFT: faint dashboard / analytics screenshot ── */}
            <motion.div
                className="absolute top-[-40px] left-[-60px] w-[420px] h-[320px] pointer-events-none select-none"
                initial={{ opacity: 0, x: -30, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
            >
                <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80&auto=format&fit=crop"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover rounded-3xl"
                    style={{
                        opacity: 0.07,
                        filter: "saturate(0.4) blur(1px)",
                        maskImage: "radial-gradient(ellipse 70% 70% at 20% 20%, black 0%, transparent 80%)",
                        WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 20% 20%, black 0%, transparent 80%)",
                    }}
                />
            </motion.div>

            {/* ── TOP-RIGHT: faint rocket / growth concept ── */}
            <motion.div
                className="absolute top-[-20px] right-[-40px] w-[380px] h-[300px] pointer-events-none select-none"
                initial={{ opacity: 0, x: 30, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
            >
                <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80&auto=format&fit=crop"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover rounded-3xl"
                    style={{
                        opacity: 0.08,
                        filter: "saturate(0.3) blur(1.5px) hue-rotate(180deg)",
                        maskImage: "radial-gradient(ellipse 70% 70% at 80% 20%, black 0%, transparent 80%)",
                        WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 80% 20%, black 0%, transparent 80%)",
                    }}
                />
            </motion.div>

            {/* ── MID-LEFT: faint team collaboration / office ── */}
            <motion.div
                className="absolute top-[30%] left-[-30px] w-[340px] h-[280px] pointer-events-none select-none"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80&auto=format&fit=crop"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover rounded-3xl"
                    style={{
                        opacity: 0.06,
                        filter: "saturate(0.2) blur(2px)",
                        maskImage: "radial-gradient(ellipse 60% 80% at 10% 50%, black 0%, transparent 75%)",
                        WebkitMaskImage: "radial-gradient(ellipse 60% 80% at 10% 50%, black 0%, transparent 75%)",
                    }}
                />
            </motion.div>

            {/* ── MID-RIGHT: faint bar chart / data viz ── */}
            <motion.div
                className="absolute top-[28%] right-[-20px] w-[360px] h-[300px] pointer-events-none select-none"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <img
                    src="https://images.unsplash.com/photo-1543286386-713bdd548da4?w=700&q=80&auto=format&fit=crop"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover rounded-3xl"
                    style={{
                        opacity: 0.07,
                        filter: "saturate(0.3) blur(1.5px) hue-rotate(140deg)",
                        maskImage: "radial-gradient(ellipse 60% 80% at 90% 50%, black 0%, transparent 75%)",
                        WebkitMaskImage: "radial-gradient(ellipse 60% 80% at 90% 50%, black 0%, transparent 75%)",
                    }}
                />
            </motion.div>

            {/* ── CENTER: faint world map / global reach ── */}
            <motion.div
                className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none select-none"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <img
                    src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&q=80&auto=format&fit=crop"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover rounded-3xl"
                    style={{
                        opacity: 0.045,
                        filter: "saturate(0.2) blur(3px)",
                        maskImage: "radial-gradient(ellipse 55% 55% at 50% 50%, black 0%, transparent 80%)",
                        WebkitMaskImage: "radial-gradient(ellipse 55% 55% at 50% 50%, black 0%, transparent 80%)",
                    }}
                />
            </motion.div>

            {/* ── BOTTOM-LEFT: faint upward graph / growth ── */}
            <motion.div
                className="absolute bottom-[-30px] left-[-30px] w-[380px] h-[280px] pointer-events-none select-none"
                initial={{ opacity: 0, x: -20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <img
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=80&auto=format&fit=crop"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover rounded-3xl"
                    style={{
                        opacity: 0.07,
                        filter: "saturate(0.25) blur(2px)",
                        maskImage: "radial-gradient(ellipse 70% 70% at 15% 85%, black 0%, transparent 75%)",
                        WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 15% 85%, black 0%, transparent 75%)",
                    }}
                />
            </motion.div>

            {/* ── BOTTOM-RIGHT: faint handshake / success ── */}
            <motion.div
                className="absolute bottom-[-20px] right-[-30px] w-[360px] h-[280px] pointer-events-none select-none"
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80&auto=format&fit=crop"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover rounded-3xl"
                    style={{
                        opacity: 0.06,
                        filter: "saturate(0.2) blur(2px)",
                        maskImage: "radial-gradient(ellipse 70% 70% at 85% 85%, black 0%, transparent 75%)",
                        WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 85% 85%, black 0%, transparent 75%)",
                    }}
                />
            </motion.div>
        </>
    );
}

/* ── Original light geometric background — UNCHANGED ── */
function ResultsBg() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Base: clean slate-50 to indigo-50 gradient */}
            <div className="absolute inset-0" style={{
                background: "linear-gradient(160deg, #f0f4ff 0%, #fafafe 30%, #fff7f0 60%, #f0fffe 100%)"
            }} />

            {/* Faded background images — sit above base, below geometry */}
            <BgImages />

            {/* Large soft color washes */}
            <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 65%)" }} />
            <div className="absolute bottom-[-15%] left-[-10%] w-[650px] h-[650px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0,184,169,0.10) 0%, transparent 65%)" }} />
            <div className="absolute top-[35%] left-[40%] w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 65%)" }} />

            {/* Floating geometric shapes */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="xMidYMid slice">
                {/* Large rotated square — top left */}
                <rect x="-60" y="60" width="220" height="220" rx="32"
                    fill="none" stroke="rgba(99,102,241,0.12)" strokeWidth="1.5"
                    transform="rotate(18 50 170)" />
                <rect x="-30" y="90" width="160" height="160" rx="24"
                    fill="rgba(99,102,241,0.04)"
                    transform="rotate(18 50 170)" />

                {/* Triangle-ish polygon — top right */}
                <polygon points="1320,20 1420,140 1220,140"
                    fill="rgba(0,184,169,0.05)" stroke="rgba(0,184,169,0.15)" strokeWidth="1.5" />

                {/* Medium circle — mid left */}
                <circle cx="60" cy="480" r="90"
                    fill="none" stroke="rgba(249,115,22,0.12)" strokeWidth="1.5" strokeDasharray="6 8" />
                <circle cx="60" cy="480" r="58"
                    fill="rgba(249,115,22,0.04)" />

                {/* Hexagon-ish — bottom right */}
                <polygon points="1380,720 1430,790 1380,860 1310,860 1260,790 1310,720"
                    fill="rgba(99,102,241,0.05)" stroke="rgba(99,102,241,0.13)" strokeWidth="1.5" />

                {/* Small circles scattered */}
                <circle cx="360" cy="80" r="18" fill="rgba(0,184,169,0.08)" />
                <circle cx="380" cy="76" r="10" fill="none" stroke="rgba(0,184,169,0.18)" strokeWidth="1.2" />
                <circle cx="1080" cy="820" r="22" fill="rgba(249,115,22,0.07)" />
                <circle cx="1100" cy="816" r="12" fill="none" stroke="rgba(249,115,22,0.18)" strokeWidth="1.2" />
                <circle cx="700" cy="50" r="12" fill="rgba(99,102,241,0.08)" />
                <circle cx="720" cy="860" r="16" fill="rgba(0,184,169,0.08)" />

                {/* Cross / plus marks */}
                <line x1="880" y1="100" x2="880" y2="130" stroke="rgba(99,102,241,0.2)" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="865" y1="115" x2="895" y2="115" stroke="rgba(99,102,241,0.2)" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="200" y1="750" x2="200" y2="775" stroke="rgba(0,184,169,0.2)" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="187" y1="762" x2="213" y2="762" stroke="rgba(0,184,169,0.2)" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="1250" y1="300" x2="1250" y2="322" stroke="rgba(249,115,22,0.2)" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="1239" y1="311" x2="1261" y2="311" stroke="rgba(249,115,22,0.2)" strokeWidth="1.5" strokeLinecap="round" />

                {/* Dotted arc — bottom center */}
                <path d="M500 920 Q720 760 940 920"
                    fill="none" stroke="rgba(99,102,241,0.12)" strokeWidth="1.5" strokeDasharray="5 9" />

                {/* Dotted arc — top center */}
                <path d="M440 -20 Q720 140 1000 -20"
                    fill="none" stroke="rgba(0,184,169,0.12)" strokeWidth="1.5" strokeDasharray="5 9" />

                {/* Thin diagonal lines */}
                <line x1="0" y1="900" x2="200" y2="600" stroke="rgba(99,102,241,0.07)" strokeWidth="1" />
                <line x1="1440" y1="0" x2="1240" y2="300" stroke="rgba(0,184,169,0.07)" strokeWidth="1" />
                <line x1="600" y1="0" x2="800" y2="200" stroke="rgba(249,115,22,0.06)" strokeWidth="1" />

                {/* Animated pulsing rings */}
                <circle cx="1350" cy="200" r="40" fill="none" stroke="rgba(0,184,169,0.15)" strokeWidth="1">
                    <animate attributeName="r" values="36;52;36" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0.15;0.5" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="90" cy="700" r="30" fill="none" stroke="rgba(249,115,22,0.15)" strokeWidth="1">
                    <animate attributeName="r" values="26;42;26" dur="5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0.12;0.5" dur="5s" repeatCount="indefinite" />
                </circle>
            </svg>

            {/* Fine dot texture */}
            <div className="absolute inset-0 opacity-[0.025]" style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, #6366f1 1px, transparent 1px)",
                backgroundSize: "28px 28px",
            }} />

            {/* Soft top & bottom section blends */}
            <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
                style={{ background: "linear-gradient(to bottom, #f0f4ff, transparent)" }} />
            <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                style={{ background: "linear-gradient(to top, #f0fffe, transparent)" }} />
        </div>
    );
}

export default function Results() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 15 },
        },
    };

    const metricVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.1, duration: 0.5 },
        }),
    };

    return (
        <section className="py-24 relative overflow-hidden">
            <ResultsBg />

            {/* Floating Elements */}
            <div className="absolute top-20 right-10 opacity-20 pointer-events-none">
                <Zap size={40} className="text-indigo-500 animate-pulse" />
            </div>
            <div className="absolute bottom-20 left-10 opacity-15 pointer-events-none">
                <Award size={32} className="text-orange-400 animate-bounce" style={{ animationDuration: "3s" }} />
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
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-teal-200/60 shadow-sm">
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
                            className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 transition-all duration-300 hover:shadow-2xl hover:bg-white/90"
                            style={{
                                boxShadow: "0 4px 24px rgba(99,102,241,0.07), 0 1px 4px rgba(0,0,0,0.04)",
                                border: "1px solid rgba(255,255,255,0.9)",
                            }}
                        >
                            {/* Hover border glow */}
                            <div
                                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    background: `linear-gradient(135deg, ${c.color}30, transparent)`,
                                    padding: "1.5px",
                                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />

                            {/* Top color bar */}
                            <div
                                className="absolute top-0 left-8 right-8 h-[3px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: `linear-gradient(90deg, transparent, ${c.color}, transparent)` }}
                            />

                            <div className="grid lg:grid-cols-5 gap-8">
                                {/* LEFT — Client Info */}
                                <div className="lg:col-span-2">
                                    <div className="flex items-center gap-3 mb-4">
                                        <motion.div
                                            className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shadow-sm"
                                            style={{ background: `${c.color}15`, border: `1px solid ${c.color}20` }}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                        >
                                            {c.emoji}
                                        </motion.div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">{c.client}</h3>
                                            <div className="text-sm text-gray-500">{c.industry}</div>
                                        </div>
                                    </div>

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

                                    <div className="mb-4">
                                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Challenge</div>
                                        <p className="text-sm text-gray-600 leading-relaxed">{c.challenge}</p>
                                    </div>

                                    <div className="mb-4">
                                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Solution</div>
                                        <p className="text-sm text-gray-600 leading-relaxed">{c.solution}</p>
                                    </div>

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

                                {/* RIGHT — Results */}
                                <div className="lg:col-span-3">
                                    <div className="flex items-center gap-2 mb-6">
                                        <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: `${c.color}15` }}>
                                            <Zap size={12} style={{ color: c.color }} />
                                        </div>
                                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                            Key Performance Indicators
                                        </span>
                                    </div>

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
                                                    border: `1px solid ${c.color}18`,
                                                }}
                                                whileHover={{
                                                    background: `${c.color}12`,
                                                    boxShadow: `0 4px 16px ${c.color}25`,
                                                }}
                                            >
                                                <div className="flex items-center gap-2 mb-3">
                                                    <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: `${c.color}15` }}>
                                                        <r.icon size={12} style={{ color: c.color }} />
                                                    </div>
                                                    <div className="text-xs font-medium text-gray-500">{r.metric}</div>
                                                </div>
                                                <div className="text-xs text-gray-400 line-through mb-1">{r.before}</div>
                                                <div className="text-2xl font-bold text-gray-900 mb-1">{r.after}</div>
                                                <motion.div
                                                    className="text-xs font-bold inline-flex items-center gap-1 px-2 py-0.5 rounded-full"
                                                    style={{ background: `${c.color}15`, color: c.color }}
                                                    animate={{ scale: [1, 1.05, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                                                >
                                                    <ArrowUpRight size={10} />
                                                    {r.change}
                                                </motion.div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Testimonial */}
                                    <motion.div
                                        className="relative p-5 rounded-xl overflow-hidden"
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

                            {/* Bottom accent line */}
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