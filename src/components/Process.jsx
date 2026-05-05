import { motion } from "framer-motion";
import {
    Phone,
    Microscope,
    Rocket,
    BarChart2,
    // eslint-disable-next-line no-unused-vars
    RefreshCw,
} from "lucide-react";

const steps = [
    {
        number: "01",
        icon: Phone,
        color: "#00b8a9",
        title: "Discovery",
        desc: "Understand your business & growth gaps",
    },
    {
        number: "02",
        icon: Microscope,
        color: "#f97316",
        title: "Research",
        desc: "Market, audience & competitor insights",
    },
    {
        number: "03",
        icon: Rocket,
        color: "#f43f8e",
        title: "Launch",
        desc: "Execute high-performing campaigns",
    },
    {
        number: "04",
        icon: BarChart2,
        color: "#22c55e",
        title: "Optimize",
        desc: "Scale what works with data",
    },

];

export default function Process() {
    return (
        <section className="py-24 bg-[#fffbf5] relative overflow-hidden">

            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="https://source.unsplash.com/1600x900/?business,workflow,team"
                    alt="process"
                    className="w-full h-full object-cover opacity-[0.07] scale-110 animate-slowZoom"
                />

                {/* Soft overlay */}
                <div className="absolute inset-0 bg-[#fffbf5]/92 backdrop-blur-[2px]" />
            </div>

            {/* 🌊 PREMIUM WAVY BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

                {/* Gradient base */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5a4] via-[#0b7c91] to-[#0b4d6e] opacity-[0.08]" />

                {/* Wave Layer 1 */}
                <svg
                    className="absolute -top-20 -right-40 w-[700px] opacity-30"
                    viewBox="0 0 600 600"
                    fill="none"
                >
                    <path
                        d="M0 300 C150 100, 450 100, 600 300 C450 500, 150 500, 0 300"
                        stroke="url(#grad1)"
                        strokeWidth="1.5"
                    />
                    <defs>
                        <linearGradient id="grad1" x1="0" y1="0" x2="600" y2="600">
                            <stop stopColor="#00b8a9" />
                            <stop offset="1" stopColor="#0fd4c8" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Wave Layer 2 */}
                <svg
                    className="absolute bottom-[-100px] left-[-200px] w-[800px] opacity-20"
                    viewBox="0 0 800 800"
                    fill="none"
                >
                    <path
                        d="M0 400 C200 200, 600 200, 800 400 C600 600, 200 600, 0 400"
                        stroke="url(#grad2)"
                        strokeWidth="1.2"
                    />
                    <defs>
                        <linearGradient id="grad2" x1="0" y1="0" x2="800" y2="800">
                            <stop stopColor="#f97316" />
                            <stop offset="1" stopColor="#f43f8e" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Thin overlay waves */}
                <svg
                    className="absolute top-1/2 left-1/2 w-[900px] opacity-10 -translate-x-1/2 -translate-y-1/2"
                    viewBox="0 0 900 900"
                    fill="none"
                >
                    <path
                        d="M0 450 C300 250, 600 250, 900 450 C600 650, 300 650, 0 450"
                        stroke="#00b8a9"
                        strokeWidth="1"
                    />
                </svg>

            </div>

            <div className="absolute bottom-8 left-16 z-[2] flex items-end gap-2.5">
                <div className="w-14 h-[22px] rounded-[30px] bg-[#00b8a9] -rotate-[20deg]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#f43f8e] mb-1" />
                <div className="w-14 h-[22px] rounded-[30px] bg-[#f43f8e] -rotate-[15deg] mb-2" />
                <div className="w-9 h-[22px]  rounded-[30px] bg-[#facc15] -rotate-[25deg]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* HEADER */}
                <div className="text-center mt-0 mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        Our Process
                    </h2>
                    <p className="text-gray-500 mt-4">
                        Turning data into scalable growth
                    </p>
                </div>

                {/* FLOW DESIGN */}
                <div className="relative flex flex-wrap justify-center gap-10">

                    {steps.map((step, i) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            whileHover={{
                                y: -15,
                                rotateX: 6,
                                rotateY: -6,
                                scale: 1.05,
                            }}
                            transition={{ delay: i * 0.1 }}
                            className="relative w-[260px]"
                            style={{ perspective: "1000px" }}
                        >

                            {/* GLOW ORB (connector replacement) */}
                            {i !== steps.length - 1 && (
                                <div
                                    className="hidden lg:block absolute right-[-35px] top-1/2 w-6 h-6 rounded-full blur-xl opacity-70 animate-pulse"
                                    style={{ background: step.color }}
                                />
                            )}

                            {/* CARD */}
                            <div
                                className="bg-white rounded-2xl p-6 relative"
                                style={{
                                    boxShadow:
                                        "0 10px 30px rgba(0,0,0,0.08), 0 20px 60px rgba(0,0,0,0.06)",
                                    transformStyle: "preserve-3d",
                                }}
                            >

                                {/* 3D BACK LAYER */}
                                <div
                                    className="absolute top-3 right-[-10px] w-full h-full rounded-2xl -z-10"
                                    style={{
                                        background: `${step.color}20`,
                                        filter: "blur(20px)",
                                    }}
                                />

                                {/* STEP NUMBER */}
                                <div
                                    className="text-xs font-bold mb-2"
                                    style={{ color: step.color }}
                                >
                                    STEP {step.number}
                                </div>

                                {/* ICON */}
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                    style={{
                                        background: `${step.color}15`,
                                        boxShadow: `0 10px 25px ${step.color}30`,
                                    }}
                                >
                                    <step.icon size={20} style={{ color: step.color }} />
                                </div>

                                {/* TITLE */}
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {step.title}
                                </h3>

                                {/* DESC */}
                                <p className="text-gray-500 text-sm">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}