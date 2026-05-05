// components/SplashCurtain.jsx
import { useState, useEffect } from "react";

const STYLES = `
@keyframes curtainUp{ from{transform:scaleY(1)} to{transform:scaleY(0)} }
@keyframes logoReveal{from{opacity:0;letter-spacing:0.5em} to{opacity:1;letter-spacing:0.02em}}
@keyframes fadeIn{ from{opacity:0;} to{opacity:1;} }
@keyframes spinSlow{ from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
@keyframes waveMove{ 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

.wave-svg-anim { animation: waveMove 18s linear infinite; }
`;

export default function SplashCurtain({ children, duration = 2600 }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Add styles to head
    if (!document.querySelector('#splash-styles')) {
      const styleTag = document.createElement('style');
      styleTag.id = 'splash-styles';
      styleTag.textContent = STYLES;
      document.head.appendChild(styleTag);
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isMounted) return null;

  return (
    <>
      {/* Splash Curtain Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "linear-gradient(135deg,#2a1e12,#3d2e1e)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          animation: !isLoading ? "curtainUp 0.8s cubic-bezier(0.76,0,0.24,1) 0.1s both" : "none",
          transformOrigin: "top",
          pointerEvents: isLoading ? "all" : "none",
        }}
      >
        {/* Animated waves inside curtain */}
        <svg
          style={{ position: "absolute", bottom: 0, left: 0, width: "200%", opacity: 0.15 }}
          viewBox="0 0 2880 120"
          preserveAspectRatio="none"
        >
          <path
            className="wave-svg-anim"
            d="M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 C1680,20 1920,100 2160,60 C2400,20 2640,100 2880,60 L2880,120 L0,120 Z"
            fill="#c9a96e"
          />
        </svg>
        
        <div
          style={{
            fontFamily: "'Georgia',serif",
            fontSize: "clamp(1.8rem,5vw,3rem)",
            fontWeight: 700,
            color: "white",
            letterSpacing: "0.02em",
            animation: "logoReveal 1s cubic-bezier(0.22,1,0.36,1) 0.2s both",
          }}
        >
          PixelMind{" "}
          <span
            style={{
              background: "linear-gradient(120deg,#c9a96e,#e8c97e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Solutions
          </span>
        </div>
        
        <div
          style={{
            marginTop: "0.75rem",
            fontFamily: "system-ui,sans-serif",
            fontSize: "0.8rem",
            color: "rgba(201,169,110,0.7)",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            animation: "fadeIn 0.8s 0.6s both",
          }}
        >
          Digital Marketing · Hyderabad
        </div>
        
        {/* Spinning gold ring */}
        <svg
          style={{
            position: "absolute",
            animation: "spinSlow 4s linear infinite",
            opacity: 0.2,
          }}
          width="320"
          height="320"
          viewBox="0 0 320 320"
        >
          <circle
            cx="160"
            cy="160"
            r="140"
            fill="none"
            stroke="#c9a96e"
            strokeWidth="0.8"
            strokeDasharray="8 6"
          />
        </svg>
      </div>

      {/* Main Content - fades in after curtain */}
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.6s ease",
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </>
  );
}