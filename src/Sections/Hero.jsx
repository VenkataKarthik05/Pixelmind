import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SPRING = { type: "spring", stiffness: 80, damping: 18 };
const EASE   = [0.16, 1, 0.3, 1];

const staggerParent = (stagger = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

const fadeUp = (delay = 0, y = 28) => ({
  hidden: { opacity: 0, y },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE, delay } },
});

const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.7 },
  show:   { opacity: 1, scale: 1, transition: { ...SPRING, delay } },
});

function SplitWord({ word, delay }) {
  return (
    <span className="inline-block overflow-hidden leading-[1.05]">
      <motion.span
        className="inline-block"
        variants={{
          hidden: { y: "110%", opacity: 0 },
          show:   { y: "0%",   opacity: 1, transition: { duration: 0.7, ease: EASE, delay } },
        }}
      >
        {word}
      </motion.span>
    </span>
  );
}

function Bar({ h, active, lbl, delay }) {
  return (
    <div className="flex-1 flex flex-col items-center gap-1">
      <div className="h-[70px] flex items-end w-full">
        <motion.div
          className={`w-full rounded-t-md ${active ? 'bg-gradient-to-b from-purple-500 to-indigo-600 shadow-[0_0_10px_rgba(91,94,244,0.3)]' : 'bg-indigo-500/15'}`}
          initial={{ height: 0 }}
          animate={{ height: h }}
          transition={{ duration: 0.6, ease: EASE, delay }}
        />
      </div>
      <motion.span
        className="text-[0.6rem] text-gray-400 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.3 }}
      >
        {lbl}
      </motion.span>
    </div>
  );
}

function DonutArc({ stroke, dash, offset, delay }) {
  const total = 88;
  return (
    <motion.circle
      cx="18" cy="18" r="14"
      fill="none"
      stroke={stroke}
      strokeWidth="4"
      strokeLinecap="round"
      strokeDashoffset={offset || 0}
      initial={{ strokeDasharray: `0 ${total}` }}
      animate={{ strokeDasharray: `${dash} ${total - dash}` }}
      transition={{ duration: 1, ease: EASE, delay }}
    />
  );
}

/* ── Hero Background with Unsplash image + layered overlays ── */
function HeroBg() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Full-section background image */}
      <img
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1800&q=85"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        style={{ filter: "saturate(1.15) brightness(0.82)" }}
      />

      {/* Primary dark overlay — creates readable backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-indigo-950/70 to-slate-900/75" />

      {/* Colored glow overlays for the branded feel */}
      <div className="absolute -top-[10%] -right-[5%] w-[55vw] h-[55vw] rounded-full bg-indigo-600/20 blur-[120px]" />
      <div className="absolute bottom-[5%] -left-[8%] w-[50vw] h-[50vw] rounded-full bg-purple-700/15 blur-[100px]" />
      <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-cyan-600/10 blur-[90px]" />

      {/* Subtle SVG line waves on top of image */}
      <div className="absolute top-0 left-0 w-[200%] h-screen overflow-hidden opacity-40">
        <svg className="w-full h-full" viewBox="0 0 2880 900" preserveAspectRatio="none">
          <path d="M-100,200 C200,120 400,280 700,200 C1000,120 1200,260 1540,180 C1840,100 2040,260 2340,180 C2640,100 2740,220 2980,180" fill="none" stroke="#c9a96e" strokeWidth="1" strokeOpacity="0.35"/>
          <path d="M-100,310 C150,220 350,390 650,290 C950,190 1150,370 1540,280 C1840,190 2040,370 2340,280 C2640,190 2780,340 2980,280" fill="none" stroke="#c9a96e" strokeWidth="0.7" strokeOpacity="0.25"/>
          <path d="M-100,440 C250,360 500,520 800,420 C1100,320 1280,480 1540,400 C1840,320 2040,480 2340,400 C2640,320 2780,460 2980,400" fill="none" stroke="#d4a0b0" strokeWidth="1" strokeOpacity="0.28"/>
          <path d="M-100,560 C200,480 480,640 750,540 C1020,440 1200,600 1540,520 C1840,440 2040,600 2340,520 C2640,440 2780,580 2980,520" fill="none" stroke="#8b8fcc" strokeWidth="0.8" strokeOpacity="0.27"/>
          <path d="M-100,680 C300,600 550,760 850,660 C1150,560 1300,720 1540,640 C1840,560 2040,720 2340,640 C2640,560 2780,700 2980,640" fill="none" stroke="#5ba89a" strokeWidth="1" strokeOpacity="0.22"/>
        </svg>
      </div>

      {/* Dot-grid noise texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top border shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />

      {/* Bottom fade to white/next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </div>
  );
}

export default function HeroSection() {
  const [, setParticles] = useState([]);

  useEffect(() => {
    const colors = [
      "rgba(99,102,241,0.5)",
      "rgba(139,92,246,0.4)",
      "rgba(6,182,212,0.4)",
      "rgba(16,185,129,0.35)",
      "rgba(249,115,22,0.3)",
    ];
    const generated = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      color: colors[i % colors.length],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 5 + 4,
      yOffset: -(Math.random() * 40 + 20),
      xOffset: Math.random() * 30 - 15,
      delay: Math.random() * 7,
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(generated);
  }, []);

  const bars = [
    { h: 38, active: false, lbl: "Mon" },
    { h: 52, active: true,  lbl: "Tue" },
    { h: 33, active: false, lbl: "Wed" },
    { h: 62, active: true,  lbl: "Thu" },
    { h: 48, active: false, lbl: "Fri" },
    { h: 60, active: true,  lbl: "Sat" },
    { h: 42, active: false, lbl: "Sun" },
  ];

  const stats = [
    { label: "Total Users",  value: "24.8K", change: "+12%", up: true },
    { label: "Conversions",  value: "3,412",  change: "+8%",  up: true },
    { label: "Bounce Rate",  value: "21.4%", change: "-4%",  up: false },
  ];

  const legend = [
    { color: "#5b5ef4", label: "Organic Search", pct: "51%" },
    { color: "#8b5cf6", label: "Social Media",   pct: "29%" },
    { color: "#06b6d4", label: "Direct",          pct: "20%" },
  ];

  const floatingStats = [
    { icon: "📈", label: "ROI Increase",    value: "+156%", delay: 1.1, position: { top: "8%",  left: "-8%"  } },
    { icon: "🎯", label: "Conversion Rate", value: "23.5%", delay: 1.3, position: { bottom: "16%", right: "-10%" } },
    { icon: "⚡", label: "Page Speed",      value: "0.8s",  delay: 1.5, position: { top: "38%", right: "-8%"  } },
  ];

  const avatarColors = [
    "linear-gradient(135deg,#5b5ef4,#8b5cf6)",
    "linear-gradient(135deg,#06b6d4,#0ea5e9)",
    "linear-gradient(135deg,#10b981,#34d399)",
    "linear-gradient(135deg,#f97316,#fb923c)",
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
        rel="stylesheet"
      />

      <div className="min-h-screen mt-16 md:mt-10 relative overflow-hidden font-['Inter']">

        {/* ── Full-section background image with overlays ── */}
        <HeroBg />

        {/* MAIN CONTENT */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 gap-8 lg:gap-12 py-8 max-w-[1400px] mx-auto">

          {/* LEFT SECTION */}
          <div className="flex-1 max-w-full lg:max-w-[520px] text-center lg:text-left">

            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-indigo-500/20 border border-indigo-400/30 backdrop-blur-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)] animate-pulse" />
              <span className="text-xs font-semibold text-indigo-300 tracking-[0.07em]">
                TRUSTED BY 500+ BRANDS
              </span>
            </motion.div>

            {/* Headline — white text on dark bg */}
            <motion.h1
              className="text-[clamp(2.2rem,5vw,4.5rem)] font-black leading-[1.08] mb-6 tracking-tighter font-['Plus_Jakarta_Sans'] text-white"
              initial="hidden"
              animate="show"
            >
              {["Digital", "Marketing", "Solutions"].map((word, i) => (
                <span key={word} className="block">
                  <SplitWord word={word} delay={0.3 + i * 0.12} />
                </span>
              ))}
              <span className="inline-block mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                That Drive Results
              </span>
            </motion.h1>

            <motion.p
              className="text-slate-300 text-sm leading-relaxed mb-8 max-w-md mx-auto lg:mx-0"
              variants={fadeUp(0.78)}
              initial="hidden"
              animate="show"
            >
              Transform your digital presence with data-driven strategies that deliver measurable ROI.
              Our AI-powered campaigns help brands scale faster and smarter.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-wrap gap-4 justify-center lg:justify-start" variants={fadeUp(0.92)} initial="hidden" animate="show">
              <motion.button
                className="group relative inline-flex items-center gap-2 text-white font-semibold text-sm px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-[0_8px_25px_rgba(91,94,244,0.5),0_2px_6px_rgba(91,94,244,0.3)] tracking-[0.05em] hover:shadow-[0_14px_35px_rgba(91,94,244,0.6)] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">GET STARTED</span>
                <motion.svg
                  className="w-4 h-4 relative z-10"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </motion.button>

              <motion.button
                className="inline-flex items-center gap-2 font-semibold text-sm px-8 py-3.5 rounded-full bg-white/10 text-white border border-white/25 backdrop-blur-md shadow-sm tracking-[0.05em] hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                WATCH DEMO
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex items-center gap-6 mt-8 pt-6 border-t border-white/10 justify-center lg:justify-start"
              variants={fadeUp(1.05)}
              initial="hidden"
              animate="show"
            >
              <div className="flex -space-x-2">
                {avatarColors.map((gradient, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: gradient }}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-bold text-white">2,500+ Projects</div>
                <div className="text-xs text-slate-400">Successfully Delivered</div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT DASHBOARD */}
          <div className="flex-1 flex items-center justify-center relative min-h-[520px]">

            {/* Floating stat cards */}
            {floatingStats.map((stat) => (
              <motion.div
                key={stat.label}
                className="absolute z-20 flex items-center gap-3 min-w-[140px] bg-white/90 backdrop-blur-lg border border-white/95 rounded-xl p-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.25),0_2px_6px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 lg:flex"
                style={stat.position}
                initial={{ opacity: 0, scale: 0, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: stat.delay, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <span className="text-[1.4rem]">{stat.icon}</span>
                <div>
                  <div className="text-[0.6rem] text-gray-400">{stat.label}</div>
                  <div className="text-[0.95rem] font-black text-slate-900 font-['Plus_Jakarta_Sans']">
                    {stat.value}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Dashboard card */}
            <motion.div
              className="relative z-10 w-full max-w-[420px]"
              style={{ perspective: "1200px" }}
              initial={{ opacity: 0, y: 60, rotateX: 12, rotateY: 8 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
              transition={{ ...SPRING, delay: 0.55 }}
            >
              <motion.div
                className="transform-gpu"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative rounded-[22px] p-5 bg-white/85 backdrop-blur-2xl border border-white/90 shadow-[0_32px_80px_rgba(0,0,0,0.35),0_8px_24px_rgba(99,102,241,0.2),inset_0_1px_0_rgba(255,255,255,0.95)]">

                  {/* Card header */}
                  <motion.div
                    className="flex items-center justify-between mb-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.75 }}
                  >
                    <div>
                      <span className="text-sm font-bold font-['Plus_Jakarta_Sans'] text-slate-900">
                        Performance Dashboard
                      </span>
                      <div className="text-xs mt-0.5 text-gray-400">Last 30 days</div>
                    </div>
                    <motion.div
                      className="flex items-center gap-1.5 text-[0.6rem] font-bold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 tracking-[0.05em]"
                      animate={{ opacity: [1, 0.6, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ duration: 1.3, repeat: Infinity }}
                      />
                      LIVE
                    </motion.div>
                  </motion.div>

                  {/* Stats grid */}
                  <motion.div
                    className="grid grid-cols-3 gap-2 mb-4"
                    variants={staggerParent(0.08, 0.85)}
                    initial="hidden"
                    animate="show"
                  >
                    {stats.map((s, idx) => (
                      <motion.div
                        key={s.label}
                        className="rounded-xl p-2.5 cursor-pointer bg-gradient-to-br from-indigo-500/10 to-purple-500/5 border border-indigo-500/10 hover:-translate-y-0.5 transition-all duration-300"
                        variants={scaleIn(idx * 0.1)}
                        whileHover={{ y: -2 }}
                      >
                        <div className="text-[0.6rem] text-gray-400 font-semibold uppercase tracking-[0.05em] mb-1">
                          {s.label}
                        </div>
                        <div className="text-xl font-black font-['Plus_Jakarta_Sans'] text-slate-900">
                          {s.value}
                        </div>
                        <div className={`text-[0.6rem] font-semibold mt-0.5 ${s.up ? 'text-emerald-500' : 'text-rose-500'}`}>
                          {s.change}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Bar chart */}
                  <div className="mb-4">
                    <div className="flex justify-between text-[0.7rem] mb-2">
                      <span className="text-gray-400 font-medium">Weekly Traffic</span>
                      <span className="text-emerald-500 font-bold">+23% ▲</span>
                    </div>
                    <div className="flex items-end gap-1.5 h-[70px]">
                      {bars.map((b, i) => (
                        <Bar key={b.lbl} {...b} delay={1.05 + i * 0.07} />
                      ))}
                    </div>
                  </div>

                  {/* Donut + legend */}
                  <div className="flex items-center gap-4 pt-4 mt-1 border-t border-indigo-500/8">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <svg viewBox="0 0 36 36" className="w-24 h-24 -rotate-90">
                        <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(99,102,241,0.1)" strokeWidth="4" />
                        <DonutArc stroke="#5b5ef4" dash={45} offset={0}   delay={1.35} />
                        <DonutArc stroke="#8b5cf6" dash={22} offset={-45} delay={1.55} />
                        <DonutArc stroke="#06b6d4" dash={14} offset={-67} delay={1.75} />
                      </svg>
                      <motion.div
                        className="absolute inset-0 flex flex-col items-center justify-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ ...SPRING, delay: 1.9 }}
                      >
                        <div className="text-2xl font-black font-['Plus_Jakarta_Sans'] text-slate-900">72%</div>
                        <div className="text-[0.6rem] text-gray-400">Engagement</div>
                      </motion.div>
                    </div>

                    <motion.div
                      className="flex-1 flex flex-col gap-2"
                      variants={staggerParent(0.1, 1.4)}
                      initial="hidden"
                      animate="show"
                    >
                      {legend.map((l) => (
                        <motion.div
                          key={l.label}
                          className="flex items-center justify-between group cursor-pointer hover:translate-x-1 transition-all duration-300"
                          variants={fadeUp(0, 8)}
                          whileHover={{ x: 4 }}
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: l.color }} />
                            <span className="text-[0.7rem] text-gray-500">{l.label}</span>
                          </div>
                          <span className="text-[0.7rem] font-bold text-gray-700">{l.pct}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Trend */}
                  <motion.div
                    className="flex items-center justify-between mt-4 pt-3 border-t border-indigo-500/8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.0 }}
                  >
                    <span className="text-[0.7rem] text-gray-400">vs. previous period</span>
                    <div className="flex items-center gap-1">
                      <span className="text-[0.7rem] font-bold text-emerald-500">↑ 15.3%</span>
                      <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-[1]">
          <svg className="relative w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5b5ef4" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#5b5ef4" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="url(#waveGrad)"
            />
          </svg>
        </div>
      </div>
    </>
  );
}