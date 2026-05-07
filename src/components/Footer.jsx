// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ExternalLink, Share2, Globe, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Services: ["SEO", "PPC", "Social Media", "Lead Generation", "Analytics", "CRO"],
  Company: ["About Us", "Case Studies", "Blog", "Careers", "Press"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socialButtons = [
  { icon: ExternalLink, label: "Twitter" },
  { icon: Share2,       label: "LinkedIn" },
  { icon: Globe,        label: "Instagram" },
  { icon: Mail,         label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-[#0a0f0e]">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00b8a9]/50 to-transparent" />

        {/* Mesh radial gradients */}
        <div
          className="absolute inset-0"
          style={{
            background: [
              "radial-gradient(ellipse 80% 60% at 20% 80%, rgba(0,184,169,0.18) 0%, transparent 60%)",
              "radial-gradient(ellipse 60% 80% at 80% 20%, rgba(0,90,80,0.22) 0%, transparent 55%)",
              "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(0,184,169,0.07) 0%, transparent 70%)",
              "linear-gradient(160deg, #0c1614 0%, #080d0c 60%, #050a09 100%)",
            ].join(", "),
          }}
        />

        {/* Noise texture */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>

        {/* Glowing orb — top left */}
        <div
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,184,169,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Glowing orb — bottom right */}
        <div
          className="absolute -bottom-16 right-[5%] w-72 h-72 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,120,110,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: [
              "linear-gradient(to right, #00b8a9 1px, transparent 1px)",
              "linear-gradient(to bottom, #00b8a9 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "44px 44px",
          }}
        />

        {/* Floating dot accents */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10%" cy="30%" r="1.5" fill="rgba(0,184,169,0.35)" />
          <circle cx="25%" cy="70%" r="1"   fill="rgba(0,184,169,0.25)" />
          <circle cx="60%" cy="15%" r="1.5" fill="rgba(0,184,169,0.3)"  />
          <circle cx="80%" cy="60%" r="1"   fill="rgba(0,184,169,0.2)"  />
          <circle cx="90%" cy="85%" r="2"   fill="rgba(0,184,169,0.15)" />
          <circle cx="45%" cy="85%" r="1"   fill="rgba(0,184,169,0.25)" />
          <circle cx="70%" cy="40%" r="1.5" fill="rgba(0,184,169,0.2)"  />
        </svg>
      </div>

      {/* Teal gradient divider */}
      <div
        className="mb-16 relative z-10 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(0,184,169,0.3), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-5 cursor-pointer">
              <img
                src="/Logo.png"
                alt="PixelMind Logo"
                className="w-9 h-9 object-contain"
              />
              <span className="font-bold text-xl text-gray-100">
                Pixel<span className="text-[#00b8a9]">Mind</span>
              </span>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              The performance marketing agency for ambitious brands that want to
              scale revenue — not just traffic.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialButtons.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 transition-all duration-200 border border-white/10 bg-white/5 hover:text-[#00b8a9] hover:border-[#00b8a9]/40 hover:bg-[#00b8a9]/8"
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs uppercase tracking-widest text-gray-600 mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-gray-100 transition-colors duration-200"
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

        {/* Divider */}
        <div
          className="mb-8 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(0,184,169,0.3), transparent)",
          }}
        />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
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