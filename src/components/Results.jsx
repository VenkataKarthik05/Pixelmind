import { motion } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import { ArrowUpRight, TrendingUp } from "lucide-react";

const cases = [
    {
        client: "NovaTech SaaS",
        industry: "B2B Software",
        service: "SEO + PPC",
        color: "#00b8a9",
        emoji: "🚀",
        challenge: "Stagnant growth with no paid acquisition.",
        results: [
            { metric: "Traffic", before: "2K", after: "8.7K", change: "+314%" },
            { metric: "Signups", before: "87", after: "440", change: "+406%" },
            { metric: "Revenue", before: "$24K", after: "$91K", change: "+279%" },
        ],
        timeframe: "6 months",
    },
    {
        client: "Velorix",
        industry: "E-commerce",
        service: "Ads + CRO",
        color: "#f97316",
        emoji: "👗",
        challenge: "Low ROAS and poor conversion rate.",
        results: [
            { metric: "ROAS", before: "1.4x", after: "5.8x", change: "+314%" },
            { metric: "CVR", before: "0.9%", after: "3.4%", change: "+278%" },
            { metric: "Revenue", before: "$56K", after: "$232K", change: "+314%" },
        ],
        timeframe: "4 months",
    },
];

export default function Results() {
    return (
        <section className="py-24 relative bg-[#fffbf5] overflow-hidden">

            {/* 🌊 UNIQUE RESULTS WAVES */}
            <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">

                {/* TOP FLOW WAVE */}
                <svg
                    className="absolute top-[-120px] left-0 w-full opacity-30"
                    viewBox="0 0 1440 400"
                    fill="none"
                >
                    <path
                        d="M0 200 C300 50, 1100 50, 1440 200"
                        stroke="#00b8a9"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M0 260 C300 120, 1100 120, 1440 260"
                        stroke="#00b8a9"
                        strokeWidth="1"
                        opacity="0.5"
                    />
                </svg>

                {/* DIAGONAL FLOW LINES */}
                <svg
                    className="absolute top-1/3 left-[-100px] w-[1600px] opacity-10 rotate-6"
                    viewBox="0 0 1600 600"
                    fill="none"
                >
                    <path
                        d="M0 300 C400 100, 1200 100, 1600 300"
                        stroke="#f97316"
                        strokeWidth="1"
                    />
                    <path
                        d="M0 360 C400 180, 1200 180, 1600 360"
                        stroke="#f43f8e"
                        strokeWidth="1"
                    />
                </svg>

                {/* BOTTOM INVERTED WAVE */}
                <svg
                    className="absolute bottom-[-150px] left-0 w-full opacity-25"
                    viewBox="0 0 1440 400"
                    fill="none"
                >
                    <path
                        d="M0 200 C300 350, 1100 350, 1440 200"
                        stroke="#3b82f6"
                        strokeWidth="1.5"
                    />
                </svg>

                {/* CENTER SOFT GLOW */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[600px] h-[600px] bg-[#00b8a9]/5 blur-[120px] rounded-full" />
                </div>

            </div>

            {/* 🌊 WAVES */}
            <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
                <svg className="absolute -top-20 -right-40 w-[700px] opacity-30">
                    <path
                        d="M0 300 C150 100,450 100,600 300"
                        stroke="#00b8a9"
                        strokeWidth="1.5"
                    />
                </svg>
                <svg className="absolute bottom-[-100px] left-[-200px] w-[800px] opacity-20">
                    <path
                        d="M0 400 C200 200,600 200,800 400"
                        stroke="#f97316"
                        strokeWidth="1.2"
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        Results That Speak
                    </h2>
                    <p className="text-gray-500 mt-4">
                        Real numbers. Real growth. Real impact.
                    </p>
                </div>

                {/* CARDS */}
                <div className="space-y-8">
                    {cases.map((c, i) => (
                        <motion.div
                            key={c.client}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-3xl p-8 md:p-10 relative"
                            style={{
                                boxShadow:
                                    "0 10px 30px rgba(0,0,0,0.08), 0 20px 60px rgba(0,0,0,0.06)",
                            }}
                        >
                            {/* Glow layer */}
                            <div
                                className="absolute top-3 right-[-10px] w-full h-full rounded-3xl -z-10 blur-xl"
                                style={{ background: `${c.color}20` }}
                            />

                            <div className="grid lg:grid-cols-5 gap-8">

                                {/* LEFT */}
                                <div className="lg:col-span-2">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                                            style={{ background: `${c.color}15` }}
                                        >
                                            {c.emoji}
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900">{c.client}</div>
                                            <div className="text-sm text-gray-500">{c.industry}</div>
                                        </div>
                                    </div>

                                    <div
                                        className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                                        style={{
                                            background: `${c.color}15`,
                                            color: c.color,
                                        }}
                                    >
                                        {c.service}
                                    </div>

                                    <p className="text-sm text-gray-600 mb-4">
                                        <span className="font-medium">Challenge: </span>
                                        {c.challenge}
                                    </p>
                                </div>

                                {/* RIGHT */}
                                <div className="lg:col-span-3">
                                    <div className="flex items-center gap-2 mb-4">
                                        <TrendingUp size={14} style={{ color: c.color }} />
                                        <span className="text-xs text-gray-400 uppercase">
                                            Results in {c.timeframe}
                                        </span>
                                    </div>

                                    <div className="grid sm:grid-cols-3 gap-4">
                                        {c.results.map((r) => (
                                            <div
                                                key={r.metric}
                                                className="p-4 rounded-xl"
                                                style={{
                                                    background: `${c.color}08`,
                                                    border: `1px solid ${c.color}20`,
                                                }}
                                            >
                                                <div className="text-xs text-gray-400 mb-2">
                                                    {r.metric}
                                                </div>

                                                <div className="text-xs text-gray-400 line-through">
                                                    {r.before}
                                                </div>

                                                <div className="text-lg font-bold text-gray-900">
                                                    {r.after}
                                                </div>

                                                <div
                                                    className="text-xs font-semibold mt-1"
                                                    style={{ color: c.color }}
                                                >
                                                    {r.change}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}