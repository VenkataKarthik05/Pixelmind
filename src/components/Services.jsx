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
} from "lucide-react";

const services = [
  {
    id: "seo",
    icon: Search,
    color: "#00b8a9",
    title: "Search Engine Optimization",
    description: "Rank higher on Google with data-driven SEO strategies.",
    features: ["Technical SEO", "Keyword Research", "Link Building"],
    metric: "+312% traffic",
  },
  {
    id: "ppc",
    icon: Target,
    color: "#f97316",
    title: "PPC Advertising",
    description: "Maximize ROI with high-performing ad campaigns.",
    features: ["Google Ads", "Meta Ads", "Retargeting"],
    metric: "4.8x ROAS",
  },
  {
    id: "social",
    icon: Share2,
    color: "#f43f8e",
    title: "Social Media Marketing",
    description: "Grow your audience and engagement organically.",
    features: ["Content Strategy", "Reels", "Influencers"],
    metric: "8x engagement",
  },
  {
    id: "leads",
    icon: Magnet,
    color: "#22c55e",
    title: "Lead Generation",
    description: "Generate high-quality leads consistently.",
    features: ["Funnels", "Email Automation", "CRM"],
    metric: "-67% CPL",
  },
  {
    id: "analytics",
    icon: BarChart3,
    color: "#3b82f6",
    title: "Analytics",
    description: "Track and optimize your marketing performance.",
    features: ["GA4", "Dashboards", "Attribution"],
    metric: "Full clarity",
  },
  {
    id: "web",
    icon: Globe,
    color: "#a855f7",
    title: "Conversion Optimization",
    description: "Convert visitors into paying customers.",
    features: ["A/B Testing", "UX Fixes", "Heatmaps"],
    metric: "+43%",
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="services"
      className="py-24 relative bg-[#fffbf5] overflow-hidden"
    >
      {/* 🖼 IMAGE BACKGROUND */}
      
      

      {/* 🌊 WAVES ABOVE IMAGE */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">

        <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5a4] via-[#0b7c91] to-[#0b4d6e] opacity-[0.06]" />

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
            <linearGradient id="grad1">
              <stop stopColor="#00b8a9" />
              <stop offset="1" stopColor="#0fd4c8" />
            </linearGradient>
          </defs>
        </svg>

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
            <linearGradient id="grad2">
              <stop stopColor="#f97316" />
              <stop offset="1" stopColor="#f43f8e" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our Growth-Focused Services
          </h2>
          <p className="text-gray-500 mt-4">
            We are a full-service digital marketing agency helping brands scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ delay: i * 0.08 }}
              onClick={() =>
                setActive(active === svc.id ? null : svc.id)
              }
              className="relative bg-white rounded-2xl p-6 cursor-pointer"
            >
              <div
                className="absolute top-2 right-[-10px] w-full h-full rounded-2xl -z-10 blur-xl"
                style={{ background: `${svc.color}20` }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `${svc.color}15`,
                }}
              >
                <svc.icon size={22} style={{ color: svc.color }} />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {svc.title}
              </h3>

              <p className="text-gray-500 text-sm mb-4">
                {svc.description}
              </p>

              <div
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  background: `${svc.color}15`,
                  color: svc.color,
                }}
              >
                {svc.metric}
              </div>

              <AnimatePresence>
                {active === svc.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4"
                  >
                    {svc.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle size={14} style={{ color: svc.color }} />
                        {f}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}