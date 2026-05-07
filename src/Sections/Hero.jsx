import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
function Bar({ h, active, lbl, delay }) {
  return (
    <div className="flex-1 flex flex-col items-center gap-1">
      <div style={{ height: 70, display: "flex", alignItems: "flex-end", width: "100%" }}>
        <motion.div
          style={{
            background: active
              ? "linear-gradient(180deg, #8b5cf6, #5b5ef4)"
              : "rgba(99,102,241,0.15)",
            boxShadow: active ? "0 0 10px rgba(91,94,244,0.3)" : "none",
            width: "100%",
            borderRadius: "6px 6px 0 0",
          }}
          initial={{ height: 0 }}
          animate={{ height: h }}
          transition={{ duration: 0.6, ease: EASE, delay }}
        />
      </div>
      <motion.span
        style={{ fontSize: "0.6rem", color: "#9ca3af", fontWeight: 500 }}
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
  const [particles, setParticles] = useState([]);

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

      <style>{`
        /* ── Gradient headline ── */
        .hero-grad-text {
          background: linear-gradient(135deg, #5b5ef4 0%, #8b5cf6 45%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Dashboard card stacked shadow ── */
        .dashboard-card::before {
          content: '';
          position: absolute; top: 12px; right: -12px;
          width: 100%; height: 100%;
          border-radius: 22px;
          background: linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.07));
          z-index: -1;
        }
        .dashboard-card::after {
          content: '';
          position: absolute; top: 22px; right: -22px;
          width: 100%; height: 100%;
          border-radius: 22px;
          background: linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.03));
          z-index: -2;
        }

        /* ── Blob keyframes ── */
        @keyframes blobA {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(20px,-15px) scale(1.06); }
          66%      { transform: translate(-10px,20px) scale(0.96); }
        }
        @keyframes blobB {
          0%,100% { transform: translate(0,0) scale(1.04); }
          50%      { transform: translate(-25px,15px) scale(1); }
        }

        /* ── Badge dot pulse ── */
        @keyframes badgePulse {
          0%,100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.5); opacity: 0.55; }
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .hero-container   { flex-direction: column !important; padding: 2rem !important; gap: 3rem !important; }
          .hero-left        { max-width: 100% !important; text-align: center !important; }
          .hero-left p      { margin: 0 auto 2rem auto !important; }
          .dashboard-card   { width: 90vw !important; max-width: 460px !important; margin: 0 auto !important; }
          .floating-stat    { display: none !important; }
          .trust-row        { justify-content: center !important; }
        }
        @media (max-width: 640px) {
          .hero-container  { padding: 1rem !important; }
          .dashboard-card  { width: 95vw !important; padding: 1.25rem !important; }
          .stat-box        { padding: 0.6rem !important; }
          .stat-value      { font-size: 1.1rem !important; }
          h1               { font-size: 2rem !important; }
        }
      `}</style>

      <div
        className="min-h-screen mt-16 md:mt-10 relative overflow-hidden"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >

        {/* ════════════════════════════════════
            BACKGROUND
        ════════════════════════════════════ */}
        <div className="absolute inset-0 overflow-hidden">

          {/* 1 · Light base gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(145deg, #f0f4ff 0%, #e8f0fe 35%, #f5f0ff 65%, #e6f7f5 100%)",
            }}
          />

          {/* 2 · Soft colour blobs */}
          {[
            { style: { width: 420, height: 340, top: -80, left: -60 },  color: "rgba(99,179,237,0.28)",  anim: "blobA 10s ease-in-out infinite" },
            { style: { width: 380, height: 320, top: 40,  right: -80 }, color: "rgba(167,139,250,0.22)", anim: "blobB 12s ease-in-out infinite" },
            { style: { width: 300, height: 280, bottom: -60, left: "30%" }, color: "rgba(52,211,153,0.2)",  anim: "blobA 9s ease-in-out infinite reverse" },
            { style: { width: 260, height: 240, bottom: 20, right: "10%" }, color: "rgba(251,146,60,0.14)", anim: "blobB 14s ease-in-out infinite reverse" },
            { style: { width: 200, height: 180, top: "50%", left: "42%" }, color: "rgba(236,72,153,0.10)", anim: "blobA 8s ease-in-out infinite" },
          ].map((blob, i) => (
            <div
              key={i}
              className="absolute pointer-events-none"
              style={{
                ...blob.style,
                borderRadius: "50%",
                filter: "blur(70px)",
                background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
                animation: blob.anim,
              }}
            />
          ))}

          {/* 3 · Grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(99,102,241,0.10) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99,102,241,0.10) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
              WebkitMaskImage:
                "radial-gradient(ellipse 90% 80% at 50% 50%, black 30%, transparent 80%)",
              maskImage:
                "radial-gradient(ellipse 90% 80% at 50% 50%, black 30%, transparent 80%)",
            }}
          />

          {/* 4 · Dot matrix */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(99,102,241,0.25) 1.2px, transparent 1.2px)",
              backgroundSize: "24px 24px",
              backgroundPosition: "12px 12px",
              opacity: 0.6,
              WebkitMaskImage:
                "radial-gradient(ellipse 100% 70% at 50% 50%, black 20%, transparent 70%)",
              maskImage:
                "radial-gradient(ellipse 100% 70% at 50% 50%, black 20%, transparent 70%)",
            }}
          />

          {/* 5 · Geometric SVG accents */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
            viewBox="0 0 1400 900"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Hexagons — top right */}
            <g opacity="0.12" stroke="rgba(99,102,241,1)" strokeWidth="1" fill="none">
              <polygon points="1250,40 1278,24 1306,40 1306,72 1278,88 1250,72" />
              <polygon points="1306,40 1334,24 1362,40 1362,72 1334,88 1306,72" />
              <polygon points="1278,88 1306,72 1334,88 1334,120 1306,136 1278,120" />
              <polygon points="1222,40 1250,24 1278,40 1278,72 1250,88 1222,72" />
            </g>
            {/* Hexagons — bottom left */}
            <g opacity="0.09" stroke="rgba(139,92,246,1)" strokeWidth="0.8" fill="none">
              <polygon points="40,760 68,744 96,760 96,792 68,808 40,792" />
              <polygon points="96,760 124,744 152,760 152,792 124,808 96,792" />
              <polygon points="68,808 96,792 124,808 124,840 96,856 68,840" />
            </g>
            {/* Corner arcs */}
            <path d="M1400,0 A440,440 0 0,1 960,440" stroke="rgba(99,102,241,0.12)" strokeWidth="1" fill="none" />
            <path d="M1400,0 A600,600 0 0,1 800,600" stroke="rgba(139,92,246,0.07)" strokeWidth="0.8" fill="none" />
            {/* Diagonal lines */}
            <line x1="0" y1="100" x2="350" y2="900" stroke="rgba(99,102,241,0.07)" strokeWidth="0.8" />
            <line x1="60" y1="0"   x2="440" y2="900" stroke="rgba(99,102,241,0.04)" strokeWidth="0.6" />
            {/* Bottom waves */}
            <path d="M0,840 Q350,810 700,824 Q1050,838 1400,810" stroke="rgba(99,102,241,0.10)" strokeWidth="0.8" fill="none" />
            <path d="M0,870 Q350,840 700,854 Q1050,868 1400,840" stroke="rgba(139,92,246,0.06)" strokeWidth="0.8" fill="none" />
            {/* Cross marks */}
            <g stroke="rgba(99,102,241,0.18)" strokeWidth="1.2" strokeLinecap="round">
              <line x1="220" y1="100" x2="232" y2="112" /><line x1="232" y1="100" x2="220" y2="112" />
              <line x1="500" y1="50"  x2="512" y2="62"  /><line x1="512" y1="50"  x2="500" y2="62"  />
              <line x1="90"  y1="540" x2="102" y2="552" /><line x1="102" y1="540" x2="90"  y2="552" />
              <line x1="780" y1="700" x2="792" y2="712" /><line x1="792" y1="700" x2="780" y2="712" />
              <line x1="330" y1="800" x2="342" y2="812" /><line x1="342" y1="800" x2="330" y2="812" />
            </g>
            {/* Dashed circles */}
            <circle cx="130" cy="220" r="70"  stroke="rgba(99,102,241,0.1)"  strokeWidth="0.8" strokeDasharray="5 5" fill="none" />
            <circle cx="1280" cy="680" r="52" stroke="rgba(139,92,246,0.09)" strokeWidth="0.8" strokeDasharray="4 4" fill="none" />
          </svg>

          {/* 6 · Noise texture */}
          <div
            className="absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "180px",
            }}
          />
        </div>

        {/* ── Floating particles ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full"
              style={{
                width: p.size,
                height: p.size,
                background: p.color,
                left: p.left,
                top: p.top,
              }}
              animate={{
                y: [0, p.yOffset, 0],
                x: [0, p.xOffset, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              }}
            />
          ))}
        </div>

        {/* ════════════════════════════════════
            MAIN CONTENT
        ════════════════════════════════════ */}
        <div className="hero-container relative z-10 flex items-center justify-between px-16 gap-12 py-8 max-w-[1400px] mx-auto">

          {/* ── LEFT ── */}
          <div className="hero-left flex-1 max-w-[520px]">

            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.2)",
                backdropFilter: "blur(8px)",
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{
                  background: "#5b5ef4",
                  boxShadow: "0 0 8px rgba(91,94,244,0.5)",
                  animation: "badgePulse 1.8s ease-in-out infinite",
                }}
              />
              <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#5b5ef4", letterSpacing: "0.07em" }}>
                TRUSTED BY 500+ BRANDS
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-[clamp(2.2rem,5vw,4.5rem)] font-black leading-[1.08] mb-6 tracking-tighter"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1a1a3e" }}
              initial="hidden"
              animate="show"
            >
              {["Digital", "Marketing", "Solutions"].map((word, i) => (
                <span key={word} style={{ display: "block" }}>
                  <SplitWord word={word} delay={0.3 + i * 0.12} />
                </span>
              ))}
              <span className="hero-grad-text inline-block mt-2">That Drive Results</span>
            </motion.h1>

            <motion.p
              style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#4a5568", marginBottom: "2rem", maxWidth: 440 }}
              variants={fadeUp(0.78)}
              initial="hidden"
              animate="show"
            >
              Transform your digital presence with data-driven strategies that deliver measurable ROI.
              Our AI-powered campaigns help brands scale faster and smarter.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-wrap gap-4" variants={fadeUp(0.92)} initial="hidden" animate="show">
              <motion.button
                className="group relative inline-flex items-center gap-2 text-white font-semibold text-sm px-8 py-3.5 rounded-full overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #5b5ef4, #8b5cf6)",
                  boxShadow: "0 8px 25px rgba(91,94,244,0.35), 0 2px 6px rgba(91,94,244,0.2)",
                  letterSpacing: "0.05em",
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 14px 35px rgba(91,94,244,0.45)" }}
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
                className="inline-flex items-center gap-2 font-semibold text-sm px-8 py-3.5 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  color: "#4a5568",
                  border: "1px solid rgba(99,102,241,0.2)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  letterSpacing: "0.05em",
                }}
                whileHover={{ scale: 1.05, borderColor: "rgba(99,102,241,0.45)", background: "rgba(255,255,255,0.9)" }}
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
              className="trust-row flex items-center gap-6 mt-8 pt-6"
              style={{ borderTop: "1px solid rgba(99,102,241,0.1)" }}
              variants={fadeUp(1.05)}
              initial="hidden"
              animate="show"
            >
              <div className="flex -space-x-2">
                {avatarColors.map((bg, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: bg }}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-bold" style={{ color: "#1a1a3e" }}>2,500+ Projects</div>
                <div className="text-xs" style={{ color: "#718096" }}>Successfully Delivered</div>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT Dashboard ── */}
          <div className="flex-1 flex items-center justify-center relative min-h-[520px]">

            {/* Floating stat cards */}
            {floatingStats.map((stat) => (
              <motion.div
                key={stat.label}
                className="floating-stat absolute z-20 flex items-center gap-3"
                style={{
                  ...stat.position,
                  minWidth: 140,
                  background: "rgba(255,255,255,0.82)",
                  border: "1px solid rgba(255,255,255,0.95)",
                  borderRadius: 14,
                  padding: "10px 14px",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 8px 24px rgba(99,102,241,0.12), 0 2px 6px rgba(0,0,0,0.04)",
                }}
                initial={{ opacity: 0, scale: 0, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: stat.delay, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <span style={{ fontSize: "1.4rem" }}>{stat.icon}</span>
                <div>
                  <div style={{ fontSize: "0.6rem", color: "#9ca3af" }}>{stat.label}</div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 900, color: "#1a1a3e", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {stat.value}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Dashboard card */}
            <motion.div
              className="relative z-10"
              style={{ perspective: "1200px" }}
              initial={{ opacity: 0, y: 60, rotateX: 12, rotateY: 8 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
              transition={{ ...SPRING, delay: 0.55 }}
            >
              <motion.div
                style={{ transformStyle: "preserve-3d" }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div
                  className="dashboard-card w-[420px] rounded-[22px] p-5 relative"
                  style={{
                    background: "rgba(255,255,255,0.72)",
                    border: "1px solid rgba(255,255,255,0.9)",
                    backdropFilter: "blur(24px)",
                    boxShadow:
                      "0 24px 64px rgba(99,102,241,0.12), 0 8px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Card header */}
                  <motion.div
                    className="flex items-center justify-between mb-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.75 }}
                  >
                    <div>
                      <span className="text-sm font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1a1a3e" }}>
                        Performance Dashboard
                      </span>
                      <div className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>Last 30 days</div>
                    </div>
                    <motion.div
                      className="flex items-center gap-1.5 text-[0.6rem] font-bold px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(16,185,129,0.1)",
                        border: "1px solid rgba(16,185,129,0.25)",
                        color: "#059669",
                        letterSpacing: "0.05em",
                      }}
                      animate={{ opacity: [1, 0.6, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "#10b981" }}
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
                        className="stat-box rounded-xl p-2.5 cursor-pointer"
                        style={{
                          background: "linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.04))",
                          border: "1px solid rgba(99,102,241,0.1)",
                        }}
                        variants={scaleIn(idx * 0.1)}
                        whileHover={{ y: -2 }}
                      >
                        <div style={{ fontSize: "0.6rem", color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>
                          {s.label}
                        </div>
                        <div className="stat-value text-xl font-black" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1a1a3e" }}>
                          {s.value}
                        </div>
                        <div style={{ fontSize: "0.6rem", fontWeight: 600, marginTop: 2, color: s.up ? "#10b981" : "#f43f5e" }}>
                          {s.change}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Bar chart */}
                  <div className="mb-4">
                    <div className="flex justify-between text-[0.7rem] mb-2">
                      <span style={{ color: "#9ca3af", fontWeight: 500 }}>Weekly Traffic</span>
                      <span style={{ color: "#10b981", fontWeight: 700 }}>+23% ▲</span>
                    </div>
                    <div className="flex items-end gap-1.5 h-[70px]">
                      {bars.map((b, i) => (
                        <Bar key={b.lbl} {...b} delay={1.05 + i * 0.07} />
                      ))}
                    </div>
                  </div>

                  {/* Donut + legend */}
                  <div
                    className="flex items-center gap-4 pt-4 mt-1"
                    style={{ borderTop: "1px solid rgba(99,102,241,0.08)" }}
                  >
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <svg
                        viewBox="0 0 36 36"
                        className="w-24 h-24"
                        style={{ transform: "rotate(-90deg)" }}
                      >
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
                        <div className="text-2xl font-black" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1a1a3e" }}>72%</div>
                        <div style={{ fontSize: "0.6rem", color: "#9ca3af" }}>Engagement</div>
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
                          className="flex items-center justify-between group cursor-pointer"
                          variants={fadeUp(0, 8)}
                          whileHover={{ x: 4 }}
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: l.color }} />
                            <span style={{ fontSize: "0.7rem", color: "#718096" }}>{l.label}</span>
                          </div>
                          <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#374151" }}>{l.pct}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Trend */}
                  <motion.div
                    className="flex items-center justify-between mt-4 pt-3"
                    style={{ borderTop: "1px solid rgba(99,102,241,0.08)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.0 }}
                  >
                    <span style={{ fontSize: "0.7rem", color: "#9ca3af" }}>vs. previous period</span>
                    <div className="flex items-center gap-1">
                      <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#10b981" }}>↑ 15.3%</span>
                      <svg className="w-3 h-3" style={{ color: "#10b981" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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