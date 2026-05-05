import { motion } from "framer-motion";

/* ── shared easing ── */
const SPRING = { type: "spring", stiffness: 80, damping: 18 };
const EASE   = [0.16, 1, 0.3, 1];

/* ── stagger container ── */
const staggerParent = (stagger = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

/* ── reusable variants ── */
const fadeUp = (delay = 0, y = 28) => ({
  hidden: { opacity: 0, y },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE, delay } },
});

const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.7 },
  show:   { opacity: 1, scale: 1, transition: { ...SPRING, delay } },
});



/* ── word-split headline ── */
function SplitWord({ word, delay }) {
  return (
    <span style={{ display: "inline-block", overflow: "hidden", lineHeight: 1.05 }}>
      <motion.span
        style={{ display: "inline-block" }}
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

/* ── animated bar ── */
function Bar({ h, color, lbl, delay }) {
  return (
    <div className="flex-1 flex flex-col items-center gap-1">
      <div style={{ height: 70, display: "flex", alignItems: "flex-end", width: "100%" }}>
        <motion.div
          style={{ background: color, width: "100%", borderRadius: "6px 6px 0 0" }}
          initial={{ height: 0 }}
          animate={{ height: h }}
          transition={{ duration: 0.6, ease: EASE, delay }}
        />
      </div>
      <motion.span
        className="bar-label"
        style={{ fontSize: "0.6rem", color: "#6b7280", fontWeight: 500 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.3 }}
      >
        {lbl}
      </motion.span>
    </div>
  );
}

/* ── animated donut segment ── */
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

export default function HeroSection() {
  const bars = [
    { h: 40, color: "#d1fae5", lbl: "Mon" },
    { h: 55, color: "#00b8a9", lbl: "Tue" },
    { h: 35, color: "#d1fae5", lbl: "Wed" },
    { h: 65, color: "#00b8a9", lbl: "Thu" },
    { h: 50, color: "#d1fae5", lbl: "Fri" },
    { h: 70, color: "#0fd4c8", lbl: "Sat" },
    { h: 45, color: "#d1fae5", lbl: "Sun" },
  ];

  const stats = [
    { label: "Total Users",  value: "24.8K", change: "+12%", up: true },
    { label: "Conversions",  value: "3,412",  change: "+8%",  up: true },
    { label: "Bounce Rate",  value: "21.4%", change: "-4%",  up: false },
  ];

  const legend = [
    { color: "#00b8a9", label: "Organic Search", pct: "51%" },
    { color: "#f97316", label: "Social Media",   pct: "29%" },
    { color: "#f43f8e", label: "Direct",          pct: "20%" },
  ];

  const floatingStats = [
    { icon: "📈", label: "ROI Increase", value: "+156%", delay: 1.1, position: { top: "15%", left: "-10%" } },
    { icon: "🎯", label: "Conversion Rate", value: "23.5%", delay: 1.3, position: { bottom: "20%", right: "-12%" } },
    { icon: "⚡", label: "Page Speed", value: "0.8s", delay: 1.5, position: { top: "40%", right: "-8%" } },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
        rel="stylesheet"
      />

      <style>{`
        @keyframes floatCard {
          0%,100% { transform: translateY(0px) rotateY(-5deg) rotateX(3deg); }
          50%      { transform: translateY(-15px) rotateY(-5deg) rotateX(3deg); }
        }
        @keyframes floatMini { 
          0%,100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-12px) translateX(5px); }
        }
        @keyframes floatBadge {
          0%,100% { transform: translateY(0) rotate(2deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        @keyframes pulseRing {
          0%,100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes gradientShift {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-float-card { animation: floatCard 5s ease-in-out infinite; }
        .animate-float-mini { animation: floatMini 4s ease-in-out infinite; }
        .animate-float-badge { animation: floatBadge 4.5s ease-in-out infinite; }
        .animate-pulse-ring { animation: pulseRing 3s ease-in-out infinite; }
        
        .gradient-text {
          background: linear-gradient(120deg, #00b8a9, #0fd4c8, #00b8a9);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease infinite;
        }

        .dashboard-card::before {
          content:''; position:absolute; top: 12px; right: -12px;
          width:100%; height:100%; border-radius: 24px;
          background: linear-gradient(135deg, rgba(0,184,169,0.2), rgba(15,212,200,0.1));
          z-index: -1;
        }
        .dashboard-card::after {
          content:''; position:absolute; top: 20px; right: -20px;
          width:100%; height:100%; border-radius: 24px;
          background: linear-gradient(135deg, rgba(0,184,169,0.1), rgba(15,212,200,0.05));
          z-index: -2;
        }

        @media(max-width:1024px){
          .hero-container { flex-direction: column !important; padding: 2rem !important; gap: 3rem !important; }
          .hero-left { max-width: 100% !important; text-align: center !important; }
          .hero-left p { margin: 0 auto 2rem auto !important; }
          .dashboard-card { width: 90vw !important; max-width: 460px !important; margin: 0 auto !important; }
          .floating-mini-card { left: 5% !important; bottom: -30px !important; }
          .floating-badge { right: 5% !important; top: -30px !important; }
          .teal-circle { width: 400px !important; height: 400px !important; right: -80px !important; }
          .floating-stat { display: none !important; }
        }
        
        @media(max-width:640px){
          .hero-container { padding: 1rem !important; }
          .dashboard-card { width: 95vw !important; padding: 1.25rem !important; }
          .stat-box { padding: 0.6rem !important; }
          .stat-value { font-size: 1.1rem !important; }
          .floating-mini-card { width: 150px !important; padding: 0.6rem 0.8rem !important; }
          .floating-badge { padding: 0.5rem 0.8rem !important; }
          h1 { font-size: 2rem !important; }
        }
      `}</style>

      <div
        className="min-h-screen mt-16 md:mt-10 relative overflow-hidden"
        style={{ 
          fontFamily: "'Inter', sans-serif",
          background: "linear-gradient(135deg, #fefefa 0%, #fffbf5 50%, #fef7ed 100%)"
        }}
      >
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Gradient Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-teal-300/20 blur-3xl animate-pulse-ring" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-orange-300/20 blur-3xl animate-pulse-ring" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-rose-300/15 blur-3xl animate-pulse-ring" style={{ animationDelay: "2s" }} />
          
          {/* Grid Pattern */}
          <div style={{ 
            position: "absolute", 
            inset: 0, 
            backgroundImage: "radial-gradient(rgba(0,184,169,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />
        </motion.div>

        {/* Main Content Container */}
        <div className="hero-container relative z-10 flex items-center justify-between px-16 gap-12 py-8 max-w-[1400px] mx-auto">

          {/* ── LEFT Content ── */}
          <div className="hero-left flex-1 max-w-[520px]">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-teal-200/50 shadow-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-xs font-semibold text-teal-600 tracking-wide">TRUSTED BY 500+ BRANDS</span>
            </motion.div>

            {/* Split-word headline with gradient */}
            <motion.h1
              className="text-[clamp(2.2rem,5vw,4.5rem)] font-black leading-[1.08] text-gray-900 mb-6 tracking-tighter"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              initial="hidden"
              animate="show"
            >
              {["Digital", "Marketing", "Solutions"].map((word, i) => (
                <span key={word} style={{ display: "block" }}>
                  <SplitWord word={word} delay={0.3 + i * 0.12} />
                </span>
              ))}
              <span className="gradient-text inline-block mt-2">
                That Drive Results
              </span>
            </motion.h1>

            <motion.p
              className="text-base leading-relaxed text-gray-600 mb-8 max-w-[440px]"
              variants={fadeUp(0.78)}
              initial="hidden"
              animate="show"
            >
              Transform your digital presence with data-driven strategies that deliver measurable ROI. 
              Our AI-powered campaigns help brands scale faster and smarter.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              variants={fadeUp(0.92)}
              initial="hidden"
              animate="show"
            >
              <motion.button
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold text-sm px-8 py-3.5 rounded-full overflow-hidden shadow-lg hover:shadow-teal-500/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">GET STARTED</span>
                <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              
              <motion.button
                className="inline-flex items-center gap-2 bg-white text-gray-700 font-semibold text-sm px-8 py-3.5 rounded-full border border-gray-200 hover:border-teal-400 hover:text-teal-600 transition-all duration-300"
                whileHover={{ scale: 1.05, x: 5 }}
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
              className="flex items-center gap-6 mt-8 pt-6 border-t border-gray-100"
              variants={fadeUp(1.05)}
              initial="hidden"
              animate="show"
            >
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">2,500+ Projects</div>
                <div className="text-xs text-gray-500">Successfully Delivered</div>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT Dashboard ── */}
          <div className="flex-1 flex items-center justify-center relative min-h-[520px]">

            {/* Floating Stats */}
            {floatingStats.map((stat) => (
              <motion.div
                key={stat.label}
                className="absolute z-20 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-xl border border-teal-100"
                style={{ ...stat.position, minWidth: "140px" }}
                initial={{ opacity: 0, scale: 0, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: stat.delay, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{stat.icon}</span>
                  <div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                    <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="relative z-10"
              style={{ perspective: "1200px" }}
              initial={{ opacity: 0, y: 60, rotateX: 12, rotateY: 8 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
              transition={{ ...SPRING, delay: 0.55 }}
            >
              <div className="animate-float-card" style={{ transformStyle: "preserve-3d" }}>

                {/* Main Dashboard Card */}
                <div
                  className="dashboard-card w-[440px] bg-white rounded-2xl p-6 relative"
                  style={{
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25), 0 8px 24px -8px rgba(0,184,169,0.15)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Card Header */}
                  <motion.div
                    className="flex items-center justify-between mb-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.75 }}
                  >
                    <div>
                      <span className="text-sm font-bold text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        Performance Dashboard
                      </span>
                      <div className="text-xs text-gray-500 mt-0.5">Last 30 days</div>
                    </div>
                    <motion.span
                      className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-[0.65rem] font-bold px-3 py-1 rounded-full shadow-sm"
                      animate={{ opacity: [1, 0.6, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ● LIVE
                    </motion.span>
                  </motion.div>

                  {/* Stats Grid */}
                  <motion.div
                    className="grid grid-cols-3 gap-3 mb-5"
                    variants={staggerParent(0.08, 0.85)}
                    initial="hidden"
                    animate="show"
                  >
                    {stats.map((s, idx) => (
                      <motion.div
                        key={s.label}
                        className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-3 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
                        variants={scaleIn(idx * 0.1)}
                        whileHover={{ y: -2 }}
                      >
                        <div className="text-[0.65rem] text-gray-500 mb-1 font-medium">{s.label}</div>
                        <div className="text-xl font-black text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          {s.value}
                        </div>
                        <div className={`text-[0.65rem] font-semibold mt-1 ${s.up ? "text-emerald-500" : "text-rose-500"}`}>
                          {s.change}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Bar Chart */}
                  <div className="mb-5">
                    <div className="flex justify-between text-[0.7rem] text-gray-500 mb-2 font-medium">
                      <span>Weekly Traffic</span>
                      <span className="text-teal-600 font-bold">+23% ▲</span>
                    </div>
                    <div className="bars-container flex items-end gap-1.5 h-[70px]">
                      {bars.map((b, i) => (
                        <Bar key={b.lbl} {...b} delay={1.05 + i * 0.07} />
                      ))}
                    </div>
                  </div>

                  {/* Donut Chart */}
                  <div className="flex items-center gap-4">
                    <div className="donut-container relative w-24 h-24 flex-shrink-0">
                      <svg
                        viewBox="0 0 36 36"
                        className="donut-svg w-24 h-24"
                        style={{ transform: "rotate(-90deg)" }}
                      >
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#f0f0f0" strokeWidth="4" />
                        <DonutArc stroke="#00b8a9" dash={45} offset={0}   delay={1.35} />
                        <DonutArc stroke="#f97316" dash={22} offset={-45} delay={1.55} />
                        <DonutArc stroke="#f43f8e" dash={14} offset={-67} delay={1.75} />
                      </svg>
                      <motion.div
                        className="absolute inset-0 flex flex-col items-center justify-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ ...SPRING, delay: 1.9 }}
                      >
                        <div className="text-2xl font-black text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          72%
                        </div>
                        <div className="text-[0.6rem] text-gray-500">Engagement</div>
                      </motion.div>
                    </div>

                    {/* Legend */}
                    <motion.div
                      className="flex-1 grid grid-cols-1 gap-2"
                      variants={staggerParent(0.1, 1.4)}
                      initial="hidden"
                      animate="show"
                    >
                      {legend.map((l) => (
                        <motion.div
                          key={l.label}
                          className="flex items-center justify-between group cursor-pointer"
                          variants={fadeUp(0, 8)}
                          whileHover={{ x: 5 }}
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: l.color }} />
                            <span className="text-[0.7rem] text-gray-600 group-hover:text-gray-900 transition-colors">
                              {l.label}
                            </span>
                          </div>
                          <span className="text-[0.7rem] font-bold text-gray-700" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            {l.pct}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Trend Indicator */}
                  <motion.div
                    className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.0 }}
                  >
                    <span className="text-[0.7rem] text-gray-500">vs. previous period</span>
                    <div className="flex items-center gap-1">
                      <span className="text-[0.7rem] font-bold text-emerald-500">↑ 15.3%</span>
                      <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-[1]">
          <svg className="relative w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              fill="url(#waveGradient)" opacity="0.3"/>
          </svg>
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00b8a9" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#00b8a9" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </div>
      </div>
    </>
  );
}