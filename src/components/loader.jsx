// components/loader.jsx
import { useState, useEffect } from "react";

const STYLES = `
@keyframes curtainUp { 
  from { transform: scaleY(1); } 
  to { transform: scaleY(0); } 
}

@keyframes logoReveal { 
  0% { opacity: 0; transform: scale(0.2) rotate(-180deg); letter-spacing: 1em; }
  30% { opacity: 1; transform: scale(1.2) rotate(5deg); letter-spacing: 0.02em; }
  60% { transform: scale(0.98) rotate(-2deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); letter-spacing: 0.02em; }
}

@keyframes particleFloat {
  0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
  20% { opacity: 0.8; }
  80% { opacity: 0.5; }
  100% { transform: translateY(-100px) translateX(50px) scale(0); opacity: 0; }
}

@keyframes particleFloatLeft {
  0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
  20% { opacity: 0.8; }
  80% { opacity: 0.5; }
  100% { transform: translateY(-80px) translateX(-60px) scale(0); opacity: 0; }
}

@keyframes spinSlow { 
  from { transform: rotate(0deg); } 
  to { transform: rotate(360deg); } 
}

@keyframes spinReverse { 
  from { transform: rotate(360deg); } 
  to { transform: rotate(0deg); } 
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulseGlow {
  0%, 100% { 
    box-shadow: 0 0 20px rgba(20,184,166,0.3), 0 0 40px rgba(20,184,166,0.1);
    transform: scale(1);
  }
  50% { 
    box-shadow: 0 0 50px rgba(20,184,166,0.6), 0 0 80px rgba(20,184,166,0.2);
    transform: scale(1.05);
  }
}

@keyframes orbitRing {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes shimmer {
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
}

@keyframes iconBounce {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-10px) scale(1.05); }
}

@keyframes pulseRing {
  0% { transform: scale(0.95); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 0.6; }
}

@keyframes loadingDot {
  0%, 100% { 
    box-shadow: 0 0 20px rgba(20,184,166,0.3), 0 0 40px rgba(20,184,166,0.1);
    transform: scale(1);
  }
  50% { 
    box-shadow: 0 0 50px rgba(20,184,166,0.6), 0 0 80px rgba(20,184,166,0.2);
    transform: scale(1.05);
  }
}

.gradient-text {
  background: linear-gradient(135deg, #14b8a6 0%, #2dd4bf 50%, #14b8a6 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3s linear infinite;
}

.loading-dot {
  animation: loadingDot 1.5s ease-in-out infinite;
}
`;

// Logo SVG Component
const Logo = () => (
  <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
    {/* Outer Grid Dots */}
    <circle cx="10" cy="10" r="4" fill="#14b8a6">
      <animate attributeName="r" values="4;5;4" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="90" cy="10" r="4" fill="#14b8a6">
      <animate attributeName="r" values="4;5;4" dur="2s" delay="0.3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0.5;1" dur="2s" delay="0.3s" repeatCount="indefinite" />
    </circle>
    <circle cx="10" cy="90" r="4" fill="#14b8a6">
      <animate attributeName="r" values="4;5;4" dur="2s" delay="0.6s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0.5;1" dur="2s" delay="0.6s" repeatCount="indefinite" />
    </circle>
    <circle cx="90" cy="90" r="4" fill="#14b8a6">
      <animate attributeName="r" values="4;5;4" dur="2s" delay="0.9s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0.5;1" dur="2s" delay="0.9s" repeatCount="indefinite" />
    </circle>

    {/* Top Row Squares */}
    <rect x="25" y="8" width="12" height="12" rx="2" fill="#14b8a6">
      <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
    </rect>
    <rect x="44" y="8" width="12" height="12" rx="2" fill="#14b8a6">
      <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" delay="0.3s" repeatCount="indefinite" />
    </rect>
    <rect x="63" y="8" width="12" height="12" rx="2" fill="#14b8a6">
      <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" delay="0.6s" repeatCount="indefinite" />
    </rect>

    {/* Bottom Row Squares */}
    <rect x="25" y="80" width="12" height="12" rx="2" fill="#0f766e">
      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" delay="0.2s" repeatCount="indefinite" />
    </rect>
    <rect x="44" y="80" width="12" height="12" rx="2" fill="#0f766e">
      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" delay="0.5s" repeatCount="indefinite" />
    </rect>
    <rect x="63" y="80" width="12" height="12" rx="2" fill="#0f766e">
      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" delay="0.8s" repeatCount="indefinite" />
    </rect>

    {/* Left Column Squares */}
    <rect x="8" y="30" width="12" height="12" rx="2" fill="#14b8a6">
      <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" delay="0.4s" repeatCount="indefinite" />
    </rect>
    <rect x="8" y="50" width="12" height="12" rx="2" fill="#14b8a6">
      <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" delay="0.7s" repeatCount="indefinite" />
    </rect>

    {/* Right Column Squares */}
    <rect x="80" y="30" width="12" height="12" rx="2" fill="#0f766e">
      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" delay="0.1s" repeatCount="indefinite" />
    </rect>
    <rect x="80" y="50" width="12" height="12" rx="2" fill="#0f766e">
      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" delay="0.4s" repeatCount="indefinite" />
    </rect>

    {/* Main "P" Shape */}
    <path
      d="M30 25 H60 
         Q75 25 75 40 
         Q75 55 60 55 
         H45 
         V80 
         H30 Z"
      fill="url(#grad)"
      style={{
        filter: "drop-shadow(0 0 8px rgba(20,184,166,0.5))",
        animation: "pulseRing 2s ease-in-out infinite",
      }}
    />

    {/* Gradient */}
    <defs>
      <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2dd4bf"/>
        <stop offset="100%" stopColor="#0f766e"/>
      </linearGradient>
    </defs>
  </svg>
);

export default function SplashCurtain({ children, duration = 2600 }) {
  const [isLoading, setIsLoading] = useState(true);

  // Generate particles with different directions
  const [particles] = useState(() => ({
    right: Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 1 + Math.random() * 2.5,
      size: 2 + Math.random() * 5,
      opacity: 0.3 + Math.random() * 0.6,
    })),
    left: Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 1 + Math.random() * 2.5,
      size: 2 + Math.random() * 5,
      opacity: 0.3 + Math.random() * 0.6,
    })),
  }));

  useEffect(() => {
    if (!document.querySelector("#splash-styles")) {
      const styleTag = document.createElement("style");
      styleTag.id = "splash-styles";
      styleTag.textContent = STYLES;
      document.head.appendChild(styleTag);
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <>
      {/* Splash Screen - Pure Tailwind CSS */}
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden
          bg-gradient-to-br from-[#0a0f0d] to-[#060807]
          ${!isLoading ? 'animate-[curtainUp_0.8s_cubic-bezier(0.76,0,0.24,1)_both]' : ''}`}
      >
        {/* Animated Gradient Overlay - Tailwind with custom radial gradient */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.03)_0%,transparent_70%)] pointer-events-none" 
        />

        {/* Grid Background SVG - Pure Tailwind sizing */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#14b8a6" strokeWidth="0.5"/>
              <circle cx="0" cy="0" r="1.5" fill="#14b8a6" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating Particles - Right side */}
        {particles.right.map((p) => (
          <div
            key={`right-${p.id}`}
            className="absolute rounded-full blur-[1px]"
            style={{
              left: `${p.left}%`,
              top: "100%",
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: `rgba(20,184,166,${p.opacity})`,
              animation: `particleFloat ${p.duration}s ease-out ${p.delay}s infinite`,
            }}
          />
        ))}

        {/* Floating Particles - Left side */}
        {particles.left.map((p) => (
          <div
            key={`left-${p.id}`}
            className="absolute rounded-full blur-[1px]"
            style={{
              right: `${p.left}%`,
              top: "100%",
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: `rgba(20,184,166,${p.opacity * 0.7})`,
              animation: `particleFloatLeft ${p.duration}s ease-out ${p.delay + 0.5}s infinite`,
            }}
          />
        ))}

        {/* Outer Ring */}
        <div className="absolute w-[450px] h-[450px] rounded-full border border-teal-400/10 animate-[spinSlow_12s_linear_infinite]">
          {/* Orbiting stars on outer ring */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[3px] h-[3px] bg-teal-400 rounded-full opacity-60"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${i * 30}deg) translate(225px, 0)`,
              }}
            />
          ))}
        </div>

        {/* Middle Ring */}
        <div className="absolute w-[350px] h-[350px] rounded-full border-[1.5px] border-teal-400/15 animate-[spinReverse_8s_linear_infinite]">
          {/* Orbiting dots on middle ring */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                background: "linear-gradient(135deg, #14b8a6, #2dd4bf)",
                boxShadow: "0 0 10px rgba(20,184,166,0.5)",
                top: "50%",
                left: "50%",
                transform: `rotate(${i * 45}deg) translate(175px, 0)`,
              }}
            />
          ))}
        </div>

        {/* Inner Dashed Ring */}
        <svg className="absolute w-[280px] h-[280px] animate-[orbitRing_5s_linear_infinite]">
          <circle
            cx="140"
            cy="140"
            r="130"
            fill="none"
            stroke="#14b8a6"
            strokeWidth="1.5"
            strokeDasharray="8 12"
            opacity="0.3"
          />
          <circle
            cx="140"
            cy="140"
            r="115"
            fill="none"
            stroke="#2dd4bf"
            strokeWidth="1"
            strokeDasharray="4 16"
            opacity="0.2"
            strokeDashoffset="20"
          />
        </svg>

        {/* Center Glow */}
        <div className="absolute w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.15)_0%,rgba(20,184,166,0)_70%)] animate-[pulseGlow_2s_ease-in-out_infinite]" />

        {/* Main Logo Container */}
        <div className="text-center z-10 relative">
          {/* Animated Logo */}
          <div className="mb-8 animate-[iconBounce_2s_ease-in-out_infinite] cursor-pointer flex justify-center">
            <Logo />
          </div>

          {/* Main Text */}
          <div className="text-[clamp(2rem,6vw,3.8rem)] font-bold text-center font-serif animate-[logoReveal_1.2s_cubic-bezier(0.34,1.56,0.64,1)_both]">
            <span className="gradient-text">PixelMind</span>
            <span className="text-white"> </span>
            <span className="text-white/80">Solutions</span>
          </div>

          {/* Tagline */}
          <div className="mt-4 font-sans text-[0.85rem] text-teal-400/90 tracking-[0.3em] uppercase animate-[fadeInUp_0.8s_ease_0.5s_both]">
            Digital Marketing · Hyderabad
          </div>

          {/* Loading Dots */}
          <div className="flex justify-center gap-3 mt-8 animate-[fadeInUp_0.8s_ease_0.7s_both]">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="loading-dot w-2 h-2 bg-teal-400 rounded-full"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-7 left-7 opacity-30">
          <svg width="60" height="60" viewBox="0 0 100 100">
            <path d="M0 80 L0 0 L80 0" fill="none" stroke="#14b8a6" strokeWidth="1.5" />
            <circle cx="0" cy="80" r="3" fill="#14b8a6" />
            <circle cx="80" cy="0" r="3" fill="#14b8a6" />
          </svg>
        </div>

        <div className="absolute bottom-7 right-7 opacity-30">
          <svg width="60" height="60" viewBox="0 0 100 100">
            <path d="M100 20 L100 100 L20 100" fill="none" stroke="#14b8a6" strokeWidth="1.5" />
            <circle cx="100" cy="20" r="3" fill="#14b8a6" />
            <circle cx="20" cy="100" r="3" fill="#14b8a6" />
          </svg>
        </div>

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-[shimmer_2s_linear_infinite]" />
      </div>

      {/* Main Content */}
      <div
        className={`transition-opacity duration-700 ease-in-out min-h-screen ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {children}
      </div>
    </>
  );
}