// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import { Zap, ExternalLink, Share2, Globe, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = {
    Services: ["SEO", "PPC", "Social Media", "Lead Generation", "Analytics", "CRO"],
    Company: ["About Us", "Case Studies", "Blog", "Careers", "Press"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-[#fffbf5]">

      {/* 🌊 BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        {/* center glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] bg-white/70 blur-[120px] rounded-full" />
        </div>

        {/* grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00b8a9 1px, transparent 1px),
              linear-gradient(to bottom, #00b8a9 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* top wave */}
        <svg
          className="absolute top-0 left-0 w-full opacity-20"
          viewBox="0 0 1440 300"
          fill="none"
        >
          <path
            d="M0 150 C300 50, 1100 50, 1440 150"
            stroke="#00b8a9"
            strokeWidth="1.5"
          />
        </svg>

        {/* bottom gradient */}
        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#00b8a9]/10 to-transparent" />
      </div>

      <div className="divider mb-16 relative z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-2">

            {/* FIXED LOGO ALIGNMENT */}
            <div className="flex items-center gap-2 mb-5 cursor-pointer">
              <img
                src="/Logo.png"
                alt="PixelMind Logo"
                className="w-9 h-9 object-contain"
              />
              <span className="font-bold text-xl text-gray-900">
                Pixel<span className="text-[#00b8a9]">Mind</span>
              </span>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              The performance marketing agency for ambitious brands that want to scale revenue — not just traffic.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: ExternalLink, label: "Twitter" },
                { icon: Share2, label: "LinkedIn" },
                { icon: Globe, label: "Instagram" },
                { icon: Mail, label: "Email" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="w-9 h-9 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:text-[#00b8a9] hover:border-[#00b8a9]/40 transition"
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-5">
                {category}
              </h4>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-gray-900 transition"
                      onClick={(e) => e.preventDefault()}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="divider mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>© 2025 PixelMind Solutions. All rights reserved.</div>

          <div className="flex items-center gap-1">
            Built with intent. Engineered for growth.
            <ArrowUpRight size={12} className="text-[#00b8a9]" />
          </div>
        </div>
      </div>
    </footer>
  );
}