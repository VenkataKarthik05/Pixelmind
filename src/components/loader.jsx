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

@keyframes dashDraw {
  to { stroke-dashoffset: 0; }
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

@keyframes rotateLogo {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
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
  animation: pulseGlow 1.5s ease-in-out infinite;
}
`;

// Logo SVG Component - moved outside to prevent recreation during render
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

    {/* Main "P" Shape with glow animation */}
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
      {/* Splash Screen */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "radial-gradient(circle at center, #0a0f0d 0%, #060807 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: !isLoading ? "curtainUp 0.8s cubic-bezier(0.76,0,0.24,1) both" : "none",
          overflow: "hidden",
        }}
      >
        {/* Animated Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 50% 50%, rgba(20,184,166,0.03) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Grid Background */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.03 }}>
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
            style={{
              position: "absolute",
              left: `${p.left}%`,
              top: "100%",
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: `rgba(20,184,166,${p.opacity})`,
              borderRadius: "50%",
              animation: `particleFloat ${p.duration}s ease-out ${p.delay}s infinite`,
              filter: "blur(1px)",
            }}
          />
        ))}

        {/* Floating Particles - Left side */}
        {particles.left.map((p) => (
          <div
            key={`left-${p.id}`}
            style={{
              position: "absolute",
              right: `${p.left}%`,
              top: "100%",
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: `rgba(20,184,166,${p.opacity * 0.7})`,
              borderRadius: "50%",
              animation: `particleFloatLeft ${p.duration}s ease-out ${p.delay + 0.5}s infinite`,
              filter: "blur(1px)",
            }}
          />
        ))}

        {/* Outer Ring */}
        <div
          style={{
            position: "absolute",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            border: "1px solid rgba(20,184,166,0.1)",
            animation: "spinSlow 12s linear infinite",
          }}
        >
          {/* Orbiting stars on outer ring */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: "3px",
                height: "3px",
                background: "#14b8a6",
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                transform: `rotate(${i * 30}deg) translate(225px, 0)`,
                opacity: 0.6,
              }}
            />
          ))}
        </div>

        {/* Middle Ring */}
        <div
          style={{
            position: "absolute",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            border: "1.5px solid rgba(20,184,166,0.15)",
            animation: "spinReverse 8s linear infinite",
          }}
        >
          {/* Orbiting dots on middle ring */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: "6px",
                height: "6px",
                background: "linear-gradient(135deg, #14b8a6, #2dd4bf)",
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                transform: `rotate(${i * 45}deg) translate(175px, 0)`,
                boxShadow: "0 0 10px rgba(20,184,166,0.5)",
              }}
            />
          ))}
        </div>

        {/* Inner Dashed Ring */}
        <svg
          style={{
            position: "absolute",
            width: "280px",
            height: "280px",
            animation: "orbitRing 5s linear infinite",
          }}
        >
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
        <div
          style={{
            position: "absolute",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(20,184,166,0.15) 0%, rgba(20,184,166,0) 70%)",
            animation: "pulseGlow 2s ease-in-out infinite",
          }}
        />

        {/* Main Logo Container */}
        <div
          style={{
            textAlign: "center",
            zIndex: 10,
            position: "relative",
          }}
        >
          {/* Animated Logo */}
          <div
            style={{
              marginBottom: "2rem",
              animation: "iconBounce 2s ease-in-out infinite",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Logo />
          </div>

          {/* Main Text */}
          <div
            style={{
              fontSize: "clamp(2rem,6vw,3.8rem)",
              fontWeight: 700,
              fontFamily: "'Georgia', serif",
              animation: "logoReveal 1.2s cubic-bezier(0.34,1.56,0.64,1) both",
              textAlign: "center",
            }}
          >
            <span className="gradient-text">PixelMind</span>
            <span style={{ color: "white" }}> </span>
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Solutions</span>
          </div>

          {/* Tagline */}
          <div
            style={{
              marginTop: "1rem",
              fontFamily: "system-ui, sans-serif",
              fontSize: "0.85rem",
              color: "rgba(20,184,166,0.9)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              animation: "fadeInUp 0.8s ease 0.5s both",
            }}
          >
            Digital Marketing · Hyderabad
          </div>

          {/* Loading Dots */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              marginTop: "2rem",
              animation: "fadeInUp 0.8s ease 0.7s both",
            }}
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="loading-dot"
                style={{
                  width: "8px",
                  height: "8px",
                  background: "#14b8a6",
                  borderRadius: "50%",
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Corner Decorations */}
        <div style={{ position: "absolute", top: 30, left: 30, opacity: 0.3 }}>
          <svg width="60" height="60" viewBox="0 0 100 100">
            <path d="M0 80 L0 0 L80 0" fill="none" stroke="#14b8a6" strokeWidth="1.5" />
            <circle cx="0" cy="80" r="3" fill="#14b8a6" />
            <circle cx="80" cy="0" r="3" fill="#14b8a6" />
          </svg>
        </div>

        <div style={{ position: "absolute", bottom: 30, right: 30, opacity: 0.3 }}>
          <svg width="60" height="60" viewBox="0 0 100 100">
            <path d="M100 20 L100 100 L20 100" fill="none" stroke="#14b8a6" strokeWidth="1.5" />
            <circle cx="100" cy="20" r="3" fill="#14b8a6" />
            <circle cx="20" cy="100" r="3" fill="#14b8a6" />
          </svg>
        </div>

        {/* Bottom Gradient Line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, #14b8a6, #2dd4bf, #14b8a6, transparent)",
            animation: "shimmer 2s linear infinite",
          }}
        />
      </div>

      {/* Main Content */}
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.8s ease-in-out",
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </>
  );
}