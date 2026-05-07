import { motion, useMotionValue, useTransform, useSpring, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Rocket, Target, Layers } from "lucide-react";

/* ── Animated counter hook ── */
function useCounter(target, inView, duration = 1.8) {
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const suffix = isNaN(target[target.length - 1]) ? target[target.length - 1] : "";
    const num = parseFloat(target);
    const ctrl = animate(0, num, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (Number.isInteger(num)) setDisplay(Math.round(v) + suffix);
        else setDisplay(v.toFixed(1) + suffix);
      },
    });
    return () => ctrl.stop();
  }, [inView, target, duration]);
  return display;
}

/* ── Tilt card ── */
function TiltCard({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [10, -10]);
  const rotateY = useTransform(x, [-60, 60], [-10, 10]);
  const springConfig = { stiffness: 200, damping: 25 };
  const sRotateX = useSpring(rotateX, springConfig);
  const sRotateY = useSpring(rotateY, springConfig);

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX: sRotateX, rotateY: sRotateY, transformStyle: "preserve-3d", perspective: 600 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Floating orb ── */
function FloatOrb({ className }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -22, 0], scale: [1, 1.07, 1] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
    />
  );
}

/* ── Particle dot ── */
function Particle({ style, duration, delay }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-[#00b8a9]/40"
      style={style}
      animate={{ y: [0, -30, 0], opacity: [0.3, 0.9, 0.3] }}
      transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

/* ── Stat card ── */
function StatCard({ value, label, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCounter(value, inView);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -5 }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden bg-white rounded-2xl p-6 text-center group"
      style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.06)" }}
    >
      {/* hover shimmer */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "linear-gradient(135deg, rgba(0,184,169,0.05) 0%, transparent 60%)" }}
      />
      <div className="text-3xl font-extrabold text-[#00b8a9] tracking-tight">{count}</div>
      <div className="text-sm text-gray-400 mt-1 font-medium uppercase tracking-widest">{label}</div>
    </motion.div>
  );
}

const PARTICLES = Array.from({ length: 18 }, () => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  duration: 4 + Math.random() * 4,
  delay: Math.random() * 4,
}));

const CARDS = [
  {
    icon: Rocket,
    color: "#00b8a9",
    bg: "from-[#00b8a9]/10 to-transparent",
    title: "Innovation",
    desc: "Modern tools and forward-thinking strategy keep us ahead of the curve.",
    pos: "top-0 left-0",
  },
  {
    icon: Target,
    color: "#f97316",
    bg: "from-[#f97316]/10 to-transparent",
    title: "Performance",
    desc: "Every strategy is engineered for measurable, compounding growth.",
    pos: "top-16 right-0",
  },
  {
    icon: Layers,
    color: "#22c55e",
    bg: "from-[#22c55e]/10 to-transparent",
    title: "Scalability",
    desc: "We build systems that flex and grow alongside your ambitions.",
    pos: "bottom-0 left-8",
  },
];

export default function About() {
  return (
    <section className="py-28 relative bg-[#fffbf5] overflow-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <svg className="absolute top-0 left-0 w-full opacity-20" viewBox="0 0 1440 400">
          <path d="M0 200 C400 50, 1000 50, 1440 200" stroke="#00b8a9" strokeWidth="1.5" fill="none" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-full opacity-20" viewBox="0 0 1440 400">
          <path d="M0 200 C400 350, 1000 350, 1440 200" stroke="#f97316" strokeWidth="1.5" fill="none" />
        </svg>
        {/* orbs */}
        <FloatOrb className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#00b8a9]/6 blur-[140px] rounded-full" />
        <FloatOrb className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-[#f97316]/5 blur-[120px] rounded-full" />
        {/* particles */}
        {PARTICLES.map((s, i) => <Particle key={i} style={{ top: s.top, left: s.left }} duration={s.duration} delay={s.delay} />)}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── HEADER ── */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-[#00b8a9]/30 bg-[#00b8a9]/5 text-[#00b8a9] text-sm font-medium tracking-wide"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00b8a9] animate-pulse" />
            Our Story
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
          >
            About{" "}
            <span className="relative inline-block">
              PixelMind
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 0 }}
                className="absolute left-0 -bottom-1 w-full h-[3px] rounded-full bg-gradient-to-r from-[#00b8a9] to-[#f97316]"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-gray-500 mt-5 max-w-xl mx-auto text-lg leading-relaxed"
          >
            A growth-driven digital partner fusing data, creativity, and technology into real business outcomes.
          </motion.p>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* eye-catching label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#00b8a9]/40" />
              <span className="text-xs font-semibold tracking-widest text-[#00b8a9] uppercase">Our Mission</span>
              <div className="h-px w-8 bg-[#00b8a9]/40" />
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-5 leading-snug">
              Built for Growth,<br />
              <span className="text-[#00b8a9]">Not Just Traffic</span>
            </h3>

            <p className="text-gray-500 mb-5 leading-relaxed text-base">
              PixelMind Solutions is a modern digital agency focused on delivering measurable results.
              We combine marketing strategy, technology, and creative execution to help brands grow faster
              in a competitive digital landscape.
            </p>

            <p className="text-gray-500 leading-relaxed text-base">
              From startups to scaling businesses, we build systems that drive traffic, generate leads,
              and convert users into long-term customers.
            </p>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 px-7 py-3 rounded-full text-white text-sm font-semibold tracking-wide"
              style={{ background: "linear-gradient(135deg, #00b8a9 0%, #00d4c3 100%)", boxShadow: "0 8px 24px rgba(0,184,169,0.35)" }}
            >
              Work With Us →
            </motion.button>
          </motion.div>

          {/* RIGHT — Stacked tilt cards */}
          <div className="relative h-[340px] flex justify-center items-center">
            {CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <TiltCard
                  key={card.title}
                  delay={i * 0.15}
                  className={`absolute ${card.pos} w-[240px] cursor-pointer`}
                >
                  <div
                    className="bg-white rounded-2xl p-5 relative overflow-hidden"
                    style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.09)", transform: "translateZ(30px)" }}
                  >
                    {/* gradient shimmer bg */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.bg} pointer-events-none`} />
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: `${card.color}18` }}
                    >
                      <Icon size={18} style={{ color: card.color }} />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1 text-sm">{card.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{card.desc}</p>

                    {/* corner accent */}
                    <div
                      className="absolute top-0 right-0 w-12 h-12 rounded-bl-3xl opacity-60"
                      style={{ background: `${card.color}12` }}
                    />
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>

        {/* ── STATS ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-24">
          {[
            { value: "100+", label: "Projects" },
            { value: "95%", label: "Client Retention" },
            { value: "4X", label: "Avg Growth" },
            { value: "24/7", label: "Support" },
          ].map((s, i) => (
            <StatCard key={s.label} value={s.value} label={s.label} delay={i * 0.1} />
          ))}
        </div>

        {/* ── BOTTOM MARQUEE STRIP ── */}
        <div className="mt-20 overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-12 z-10 bg-gradient-to-r from-[#fffbf5] to-transparent" />
          <div className="absolute right-0 top-0 h-full w-12 z-10 bg-gradient-to-l from-[#fffbf5] to-transparent" />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 w-max"
          >
            {[0, 1].map((outer) =>
              ["Strategy", "SEO", "Performance", "Branding", "Analytics", "Growth", "Design", "Automation"].map((tag) => (
                <span
                  key={`${outer}-${tag}`}
                  className="px-4 py-2 rounded-full border border-gray-200 text-gray-400 text-xs font-medium tracking-widest uppercase bg-white whitespace-nowrap"
                >
                  {tag}
                </span>
              ))
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
