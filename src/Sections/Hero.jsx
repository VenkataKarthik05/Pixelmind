import { motion, } from "framer-motion";

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

// eslint-disable-next-line no-unused-vars
const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.7 },
  show:   { opacity: 1, scale: 1, transition: { ...SPRING, delay } },
});

// eslint-disable-next-line no-unused-vars
const slideRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 120 },
  show:   { opacity: 1, x: 0,   transition: { ...SPRING, delay } },
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
        style={{ fontSize: "0.6rem", color: "#d1d5db" }}
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
  const total = 88; // 2πr ≈ 87.96 for r=14
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
    { label: "Bounce Rate",  value: "21.4%", change: "-4%",  up: true },
  ];

  const legend = [
    { color: "#00b8a9", label: "Organic Search", pct: "51%" },
    { color: "#f97316", label: "Social Media",   pct: "29%" },
    { color: "#f43f8e", label: "Direct",          pct: "20%" },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <style>{`
        @keyframes floatCard {
          0%,100% { transform: translateY(0px)   rotateY(-8deg) rotateX(4deg); }
          50%      { transform: translateY(-12px) rotateY(-8deg) rotateX(4deg); }
        }
        @keyframes floatMini  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes floatBadge {
          0%,100%{transform:translateY(0) rotate(2deg)}
          50%{transform:translateY(-10px) rotate(2deg)}
        }
        .animate-float-card  { animation: floatCard  4s   ease-in-out infinite; }
        .animate-float-mini  { animation: floatMini  3.5s ease-in-out infinite 0.5s; }
        .animate-float-badge { animation: floatBadge 4s   ease-in-out infinite 1s; }

        .dashboard-card::before {
          content:''; position:absolute; top:8px; right:-8px;
          width:100%; height:100%; border-radius:20px;
          background:linear-gradient(135deg,#d1faf5,#b2f0e8); z-index:-1;
        }
        .dashboard-card::after {
          content:''; position:absolute; top:16px; right:-16px;
          width:100%; height:100%; border-radius:20px;
          background:linear-gradient(135deg,#a7f3d0,#6ee7d9); z-index:-2; opacity:0.5;
        }

        @media(max-width:1024px){
          .hero-container { flex-direction:column !important; padding-left:1.5rem !important; padding-right:1.5rem !important; gap:2rem !important; }
          .hero-left { max-width:100% !important; text-align:center !important; }
          .hero-left p { margin-left:auto !important; margin-right:auto !important; }
          .dashboard-card { width:90vw !important; max-width:420px !important; margin:0 auto !important; }
          .floating-mini-card { left:5% !important; bottom:-20px !important; }
          .floating-badge { right:5% !important; top:-20px !important; }
          .teal-circle { width:380px !important; height:380px !important; right:-80px !important; }
          .squiggles { left:1rem !important; bottom:1rem !important; gap:0.5rem !important; }
          .stats-grid { gap:0.75rem !important; }
        }
        @media(max-width:640px){
          .hero-container { padding-left:1rem !important; padding-right:1rem !important; padding-top:1rem !important; }
          .dashboard-card { width:95vw !important; padding:1rem !important; }
          .stat-box { padding:0.5rem !important; }
          .stat-value { font-size:1rem !important; }
          .floating-mini-card { width:140px !important; padding:0.5rem 0.75rem !important; left:2% !important; bottom:-10px !important; }
          .floating-badge { padding:0.5rem 0.75rem !important; right:2% !important; top:-15px !important; }
          .teal-circle { width:280px !important; height:280px !important; right:-100px !important; }
          h1 { font-size:2.2rem !important; }
        }
      `}</style>

      <div
        className="min-h-screen mt-16 md:mt-10 bg-[#fffbf5] relative overflow-hidden flex flex-col"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >

        {/* ── Background blobs — fade in first ── */}
        <motion.div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-amber-300/[0.28] blur-[80px] pointer-events-none"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE }}
        />
        <motion.div
          className="absolute -bottom-36 -right-24 w-[580px] h-[580px] rounded-full bg-rose-400/[0.22] blur-[90px] pointer-events-none"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.15 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-orange-300/[0.15] blur-[70px] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
        />

        {/* ── Teal circle — swoops in from right ── */}
        <motion.div
          className="teal-circle absolute right-[10px] top-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full z-[1]"
          style={{
            background: "linear-gradient(135deg,#0fd4c8 0%,#00b8a9 60%,#008f84 100%)",
            boxShadow: "0 30px 80px rgba(0,184,169,0.35), inset 0 -20px 40px rgba(0,0,0,0.1)",
          }}
          initial={{ x: 300, opacity: 0, scale: 0.8 }}
          animate={{ x: 0,   opacity: 1, scale: 1 }}
          transition={{ ...SPRING, delay: 0.3 }}
        />

        {/* ── Squiggles ── */}
        <motion.div
          className="squiggles absolute bottom-8 left-16 z-[2] flex items-end gap-2.5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 1.0 }}
        >
          <div className="w-14 h-[22px] rounded-[30px] bg-[#00b8a9] -rotate-[20deg]" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#f43f8e] mb-1" />
          <div className="w-14 h-[22px] rounded-[30px] bg-[#f43f8e] -rotate-[15deg] mb-2" />
          <div className="w-9  h-[22px] rounded-[30px] bg-[#facc15] -rotate-[25deg]" />
        </motion.div>

        {/* ── Hero Body ── */}
        <div className="hero-container relative z-[5] flex-1 flex items-center px-16 gap-10 pb-10">

          {/* ── LEFT copy ── */}
          <div className="hero-left flex-1 max-w-[480px]">

            {/* Split-word headline */}
            <motion.h1
              className="text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold leading-[1.05] text-gray-900 mb-6 tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
              initial="hidden"
              animate="show"
            >
              {["DIGITAL", "MARKETING", "AGENCY"].map((word, i) => (
                <span key={word} style={{ display: "block" }}>
                  <SplitWord word={word} delay={0.4 + i * 0.12} />
                </span>
              ))}
            </motion.h1>

            <motion.p
              className="text-[0.97rem] leading-[1.75] text-gray-500 mb-9 max-w-[380px]"
              variants={fadeUp(0.82)}
              initial="hidden"
              animate="show"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of typo.
            </motion.p>

            <motion.button
              className="inline-flex items-center gap-2.5 bg-[#00b8a9] text-white font-semibold text-[0.9rem] px-8 py-3.5 rounded-full border-none cursor-pointer tracking-wide"
              style={{ boxShadow: "0 8px 24px rgba(0,184,169,0.35)" }}
              variants={fadeUp(0.96)}
              initial="hidden"
              animate="show"
              whileHover={{ scale: 1.06, y: -3, boxShadow: "0 14px 32px rgba(0,184,169,0.45)" }}
              whileTap={{ scale: 0.97 }}
            >
              LEARN MORE →
            </motion.button>
          </div>

          {/* ── RIGHT dashboard ── */}
          <div className="flex-1 flex items-center justify-center relative min-h-[480px]">
            <motion.div
              className="relative z-[6]"
              style={{ perspective: "1200px" }}
              initial={{ opacity: 0, y: 60, rotateX: 14, rotateY: 10 }}
              animate={{ opacity: 1, y: 0,  rotateX: 0,  rotateY: 0  }}
              transition={{ ...SPRING, delay: 0.55 }}
            >
              {/* idle float wrapper */}
              <div className="animate-float-card" style={{ transformStyle: "preserve-3d" }}>

                {/* Floating mini card */}
                <motion.div
                  className="floating-mini-card absolute -left-16 bottom-10 bg-white rounded-2xl px-4 py-3 flex items-center gap-2.5 z-[8] min-w-[160px] animate-float-mini"
                  style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.14)" }}
                  initial={{ opacity: 0, x: -30, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0,   scale: 1 }}
                  transition={{ ...SPRING, delay: 1.1 }}
                >
                  <div
                    className="w-9 h-9 rounded-[10px] flex items-center justify-center text-white text-lg flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,#00b8a9,#0fd4c8)" }}
                  >
                    📈
                  </div>
                  <div>
                    <p className="text-[0.65rem] text-gray-400">Monthly Revenue</p>
                    <strong className="text-[1rem] text-gray-900" style={{ fontFamily: "'Syne', sans-serif" }}>
                      $48,290
                    </strong>
                  </div>
                </motion.div>

                {/* Floating top badge */}
                <motion.div
                  className="floating-badge absolute -right-8 -top-5 rounded-2xl px-4 py-2.5 flex items-center gap-2 z-[8] animate-float-badge"
                  style={{
                    background: "linear-gradient(135deg,#f97316,#f43f8e)",
                    boxShadow: "0 8px 24px rgba(244,63,142,0.35)",
                  }}
                  initial={{ opacity: 0, y: -24, scale: 0.75 }}
                  animate={{ opacity: 1, y: 0,   scale: 1 }}
                  transition={{ ...SPRING, delay: 1.25 }}
                >
                  <span className="text-lg">🚀</span>
                  <div>
                    <div className="text-[0.78rem] font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                      +32% Growth
                    </div>
                    <div className="text-[0.62rem] text-white/80">vs last month</div>
                  </div>
                </motion.div>

                {/* Main dashboard card */}
                <div
                  className="dashboard-card w-[420px] bg-white rounded-[20px] p-5 relative"
                  style={{
                    boxShadow: "0 2px 0 #e5e7eb, 0 40px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.08), -8px 0 32px rgba(0,0,0,0.06)",
                    transformStyle: "preserve-3d",
                  }}
                >

                  {/* Header */}
                  <motion.div
                    className="flex items-center justify-between mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.75 }}
                  >
                    <span className="text-[0.95rem] font-bold text-gray-900" style={{ fontFamily: "'Syne', sans-serif" }}>
                      Analytics Overview
                    </span>
                    <motion.span
                      className="bg-[#dcfdf7] text-[#00b8a9] text-[0.7rem] font-bold px-3 py-0.5 rounded-full tracking-wide"
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ● LIVE
                    </motion.span>
                  </motion.div>

                  {/* Stat boxes — stagger in */}
                  <motion.div
                    className="stats-grid flex gap-2.5 mb-4"
                    variants={staggerParent(0.1, 0.8)}
                    initial="hidden"
                    animate="show"
                  >
                    {stats.map((s) => (
                      <motion.div
                        key={s.label}
                        className="stat-box flex-1 px-3.5 py-3 rounded-xl bg-gray-50 border border-gray-100"
                        variants={fadeUp(0, 16)}
                      >
                        <div className="text-[0.68rem] text-gray-400 mb-1">{s.label}</div>
                        <div className="stat-value text-[1.3rem] font-extrabold text-gray-900" style={{ fontFamily: "'Syne', sans-serif" }}>
                          {s.value}
                        </div>
                        <div className={`text-[0.68rem] font-semibold mt-0.5 ${s.up ? "text-emerald-500" : "text-rose-500"}`}>
                          {s.change}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Bar chart — bars grow up */}
                  <div className="mb-3.5">
                    <motion.div
                      className="flex justify-between text-[0.7rem] text-gray-400 mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.0 }}
                    >
                      <span>Weekly Traffic</span>
                      <span>This Week</span>
                    </motion.div>
                    <div className="bars-container flex items-end gap-1.5 h-[70px]">
                      {bars.map((b, i) => (
                        <Bar key={b.lbl} {...b} delay={1.05 + i * 0.07} />
                      ))}
                    </div>
                  </div>

                  {/* Donut + legend */}
                  <div className="flex items-center gap-3">
                    <div className="donut-container relative w-20 h-20 flex-shrink-0">
                      <svg
                        viewBox="0 0 36 36"
                        className="donut-svg w-20 h-20"
                        style={{ transform: "rotate(-90deg)" }}
                      >
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#f0f0f0" strokeWidth="4" />
                        <DonutArc stroke="#00b8a9" dash={44} offset={0}   delay={1.35} />
                        <DonutArc stroke="#f97316" dash={22} offset={-44} delay={1.55} />
                        <DonutArc stroke="#f43f8e" dash={14} offset={-66} delay={1.75} />
                      </svg>
                      <motion.div
                        className="donut-percent absolute inset-0 flex items-center justify-center text-[0.9rem] font-extrabold text-gray-900"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ ...SPRING, delay: 1.9 }}
                      >
                        72%
                      </motion.div>
                    </div>

                    {/* Legend */}
                    <motion.div
                      className="flex-1 flex flex-col gap-1.5"
                      variants={staggerParent(0.12, 1.4)}
                      initial="hidden"
                      animate="show"
                    >
                      {legend.map((l) => (
                        <motion.div
                          key={l.label}
                          className="flex items-center gap-1.5"
                          variants={fadeUp(0, 10)}
                        >
                          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: l.color }} />
                          <span className="legend-item text-[0.7rem] text-gray-500 flex-1">{l.label}</span>
                          <span className="legend-percent text-[0.7rem] font-bold text-gray-900" style={{ fontFamily: "'Syne', sans-serif" }}>
                            {l.pct}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}