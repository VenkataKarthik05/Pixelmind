import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Target,
  Share2,
  Magnet,
  BarChart3,
  Globe,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Zap,
  Users,
  Clock,
} from "lucide-react";

const services = [
  {
    id: "seo",
    icon: Search,
    color: "#00b8a9",
    gradient: "from-teal-500 to-cyan-500",
    title: "Search Engine Optimization",
    description: "Rank higher on Google with data-driven SEO strategies that deliver sustainable organic growth.",
    features: ["Technical SEO Audit", "Keyword Research & Strategy", "Quality Link Building", "Content Optimization"],
    metric: "+312% traffic",
    metricLabel: "Avg. Traffic Growth",
    stats: [
      { label: "SERP Features", value: "87%" },
      { label: "Click-Through Rate", value: "+156%" },
    ],
  },
  {
    id: "ppc",
    icon: Target,
    color: "#f97316",
    gradient: "from-orange-500 to-red-500",
    title: "PPC Advertising",
    description: "Maximize ROI with high-performing ad campaigns across Google, Meta, and LinkedIn platforms.",
    features: ["Google Ads Management", "Meta Advertising", "Retargeting Campaigns", "Shopping Ads"],
    metric: "4.8x ROAS",
    metricLabel: "Avg. Return on Ad Spend",
    stats: [
      { label: "Conversion Rate", value: "+42%" },
      { label: "Cost Per Click", value: "-31%" },
    ],
  },
  {
    id: "social",
    icon: Share2,
    color: "#f43f8e",
    gradient: "from-pink-500 to-rose-500",
    title: "Social Media Marketing",
    description: "Grow your audience and engagement with creative content and data-driven social strategies.",
    features: ["Content Strategy", "Reels & Stories", "Influencer Partnerships", "Community Management"],
    metric: "8x engagement",
    metricLabel: "Avg. Engagement Rate",
    stats: [
      { label: "Follower Growth", value: "+215%" },
      { label: "Reach Increase", value: "3.2x" },
    ],
  },
  {
    id: "leads",
    icon: Magnet,
    color: "#22c55e",
    gradient: "from-green-500 to-emerald-500",
    title: "Lead Generation",
    description: "Generate high-quality leads consistently with automated funnels and smart targeting.",
    features: ["Conversion Funnels", "Email Automation", "CRM Integration", "Landing Page Optimization"],
    metric: "-67% CPL",
    metricLabel: "Cost Per Lead Reduction",
    stats: [
      { label: "Lead Quality", value: "+89%" },
      { label: "Conversion Rate", value: "+124%" },
    ],
  },
  {
    id: "analytics",
    icon: BarChart3,
    color: "#3b82f6",
    gradient: "from-blue-500 to-indigo-500",
    title: "Analytics & Insights",
    description: "Track and optimize your marketing performance with comprehensive analytics and reporting.",
    features: ["GA4 Setup & Audit", "Custom Dashboards", "Attribution Modeling", "ROI Tracking"],
    metric: "Full clarity",
    metricLabel: "Data Transparency",
    stats: [
      { label: "Decision Speed", value: "+73%" },
      { label: "ROI Accuracy", value: "99.9%" },
    ],
  },
  {
    id: "web",
    icon: Globe,
    color: "#a855f7",
    gradient: "from-purple-500 to-violet-500",
    title: "Conversion Optimization",
    description: "Convert visitors into paying customers with data-backed CRO strategies and UX improvements.",
    features: ["A/B Testing", "UX/UI Optimization", "Heatmap Analysis", "Checkout Optimization"],
    metric: "+43%",
    metricLabel: "Conversion Rate Lift",
    stats: [
      { label: "Bounce Rate", value: "-38%" },
      { label: "Avg. Session", value: "+2.4min" },
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
    },
  };

  return (
    <section
      id="services"
      className="py-24 relative bg-gradient-to-br from-[#fffbf5] via-white to-[#fef7ed] overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-300/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #00b8a9 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Decorative Waves */}
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
          />
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
          />
          <defs>
            <linearGradient id="waveGrad2" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#f97316" />
              <stop offset="1" stopColor="#f43f8e" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
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
            <span className="text-xs font-semibold text-teal-600 tracking-wide">WHAT WE OFFER</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Our Growth-Focused
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent"> Services</span>
          </h2>
          
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We are a full-service digital marketing agency helping brands scale with data-driven strategies.
          </p>

          {/* Decorative Line */}
          <div className="flex justify-center mt-8">
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full" />
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.id}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                transition: { type: "spring", stiffness: 300 }
              }}
              onClick={() => setActive(active === svc.id ? null : svc.id)}
              onMouseEnter={() => setHoveredCard(svc.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl"
              style={{
                boxShadow: hoveredCard === svc.id 
                  ? `0 20px 40px -12px ${svc.color}40`
                  : "0 4px 6px -2px rgba(0,0,0,0.05), 0 10px 15px -3px rgba(0,0,0,0.05)",
              }}
            >
              {/* Animated Border Gradient */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${svc.color}40, transparent)`,
                  padding: "1px",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* Background Glow on Hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${svc.color}30, transparent 70%)`,
                }}
              />

              {/* Icon Container */}
              <motion.div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${svc.color}15, ${svc.color}08)`,
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <svc.icon size={26} style={{ color: svc.color }} />
                
                {/* Ripple Effect on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ background: svc.color }}
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                {svc.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                {svc.description}
              </p>

              {/* Metric Badge */}
              <motion.div
                className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-4"
                style={{
                  background: `${svc.color}12`,
                  color: svc.color,
                }}
                whileHover={{ scale: 1.05 }}
              >
                <TrendingUp size={12} />
                <span>{svc.metric}</span>
                <span className="text-gray-400 font-normal">{svc.metricLabel}</span>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {svc.stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-gray-50 rounded-lg p-2 text-center"
                    whileHover={{ scale: 1.05, backgroundColor: `${svc.color}08` }}
                  >
                    <div className="text-sm font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Features List - Animated */}
              <AnimatePresence>
                {active === svc.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-100"
                  >
                    <div className="space-y-2">
                      {svc.features.map((f, idx) => (
                        <motion.div
                          key={f}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center gap-2 text-sm text-gray-600 group/feature"
                        >
                          <CheckCircle size={14} style={{ color: svc.color }} className="flex-shrink-0" />
                          <span className="group-hover/feature:text-gray-900 transition-colors">{f}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* View Details Link */}
              <motion.div
                className="mt-4 flex items-center justify-between"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 1 }}
              >
                <span className="text-xs font-medium text-gray-400">
                  {active === svc.id ? "Show less" : "View details"}
                </span>
                <ArrowRight 
                  size={14} 
                  style={{ color: svc.color }}
                  className={`transform transition-transform duration-300 ${
                    active === svc.id ? "rotate-90" : "group-hover:translate-x-1"
                  }`}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8"
        >
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full p-1 border border-gray-200 shadow-sm">
            <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              View All Services
            </button>
            <button className="text-gray-600 px-6 py-3 rounded-full font-semibold text-sm hover:text-teal-600 transition-colors">
              Talk to Expert →
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute left-5 top-1/3 opacity-20 pointer-events-none">
        <Zap size={40} className="text-teal-500 animate-ping" />
      </div>
      <div className="absolute right-10 bottom-1/4 opacity-20 pointer-events-none">
        <Users size={32} className="text-orange-500 animate-bounce" />
      </div>
      <div className="absolute left-1/4 bottom-10 opacity-15 pointer-events-none">
        <Clock size={28} className="text-purple-500 animate-spin-slow" />
      </div>
    </section>
  );
}