import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const data = [
  {
    title: "Data-Driven Strategy",
    desc: "We make decisions backed by real analytics and performance insights.",
  },
  {
    title: "Expert SEO Team",
    desc: "Years of experience delivering measurable ranking improvements.",
  },
  {
    title: "Custom Solutions",
    desc: "No templates — every solution is built for your business.",
  },
  {
    title: "Transparent Reporting",
    desc: "Track every metric with clarity and real-time dashboards.",
  },
  {
    title: "Dedicated Support",
    desc: "A committed team working alongside your growth journey.",
  },
];

export default function WhyChooseUs() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-28 bg-[#fffbf5] overflow-hidden">

      {/* 🔥 PREMIUM BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">

        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00b8a9 1px, transparent 1px),
              linear-gradient(to bottom, #00b8a9 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* glow */}
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#00b8a9]/10 blur-[140px] rounded-full" />

        {/* floating blobs */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-16 w-16 h-16 bg-[#00b8a9]/10 rounded-full"
        />

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-20 h-20 bg-[#f97316]/10 rounded-full"
        />

        {/* decorative bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-10 left-16 flex gap-2"
        >
          <div className="w-14 h-5 bg-[#00b8a9] rounded-full rotate-[-15deg]" />
          <div className="w-3 h-3 bg-[#f43f8e] rounded-full mt-1" />
          <div className="w-14 h-5 bg-[#f43f8e] rounded-full rotate-[10deg]" />
          <div className="w-10 h-5 bg-[#facc15] rounded-full rotate-[-20deg]" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Why Choose{" "}
            <span className="text-[#00b8a9]">PixelMind</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            A growth partner that blends strategy, execution, and performance.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-5">
            {data.map((item, i) => (
              <motion.div
                key={i}
                onMouseEnter={() => setActive(i)}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`relative p-5 rounded-2xl cursor-pointer transition-all ${
                  active === i
                    ? "bg-white shadow-xl"
                    : "bg-white/60 hover:bg-white"
                }`}
              >
                {/* active bar */}
                {active === i && (
                  <motion.div
                    layoutId="activeBar"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-[#00b8a9] rounded-full"
                  />
                )}

                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${
                      active === i
                        ? "bg-[#00b8a9] text-white"
                        : "bg-[#00b8a9]/10 text-[#00b8a9]"
                    }`}
                  >
                    <CheckCircle size={18} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ rotateX: 3, rotateY: -3 }}
            className="relative bg-white p-10 rounded-3xl"
            style={{
              boxShadow:
                "0 25px 60px rgba(0,0,0,0.08), 0 10px 20px rgba(0,0,0,0.05)",
            }}
          >
            {/* glow */}
            <div className="absolute inset-0 -z-10 blur-2xl bg-[#00b8a9]/10 rounded-3xl" />

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {data[active].title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg">
              {data[active].desc}
            </p>

            <div className="w-20 h-[3px] bg-[#00b8a9] mt-6 rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}