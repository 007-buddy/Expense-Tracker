
import React from "react";

// Interactive background, always behind content
const InteractiveBg = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="w-full h-full bg-gradient-to-tr from-blue-300 via-purple-300 to-indigo-200 animate-gradient" />
    {Array.from({ length: 14 }).map((_, i) => (
      <span
        key={i}
        className="absolute rounded-full bg-white/30 shadow-lg animate-float"
        style={{
          width: `${48 + i * 5}px`,
          height: `${48 + i * 5}px`,
          left: `${5 + (i * 6)}%`,
          top: `${10 + (i * 5)}%`,
          animationDuration: `${4 + i * 0.4}s`,
          animationDelay: `${i * 0.22}s`,
        }}
      />
    ))}
    <style>{`
      .animate-gradient {animation: gradientMove 12s ease-in-out infinite alternate; background-size: 200% 200%;}
      @keyframes gradientMove {0%{background-position:0%70%}100%{background-position:100%30%}}
      .animate-float {animation: floatShape 9s ease-in-out infinite;}
      @keyframes floatShape {0%{transform:translateY(0px);} 50%{transform:translateY(24px)scale(1.07);} 100%{transform:translateY(0px);}}
    `}</style>
  </div>
);

// Animated waving man SVG
const WavingMan = () => (
  <svg width="100" height="160" className="mb-4" viewBox="0 0 100 160" fill="none">
    {/* Head */}
    <circle cx="50" cy="30" r="22" fill="#FFD59E" />
    {/* Body */}
    <rect x="38" y="50" width="24" height="50" rx="12" fill="#6699FF" />
    {/* LEFT ARM (Animated - waves) */}
    <g className="man-arm-wave">
      <rect x="25" y="60" width="32" height="12" rx="6" fill="#FFD59E" />
    </g>
    {/* Right Arm */}
    <rect x="62" y="60" width="20" height="12" rx="6" fill="#FFD59E" />
    {/* Legs */}
    <rect x="38" y="100" width="8" height="30" rx="4" fill="#444" />
    <rect x="54" y="100" width="8" height="30" rx="4" fill="#222" />
    <style>{`
      .man-arm-wave {
        transform-origin: 28px 66px;
        animation: armWave 2s infinite cubic-bezier(.46,1.42,.41,.92);
      }
      @keyframes armWave {
        0% { transform: rotate(-7deg);}
        10% { transform: rotate(-25deg);}
        20% { transform: rotate(-7deg);}
        28% { transform: rotate(-18deg);}
        36% { transform: rotate(-7deg);}
        100% { transform: rotate(-7deg);}
      }
    `}</style>
  </svg>
);

const AuthLayout = ({ children }) => (
  <div className="flex min-h-screen w-full relative bg-white">
    {/* Background - always under, never overlaps content */}
    <InteractiveBg />
    {/* Main content - must have higher z-index */}
    <div className="relative flex flex-col justify-center w-full md:w-3/5 px-12 py-12 z-10">
      <h2
        className="text-4xl font-extrabold mb-8 tracking-wide bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-400 bg-clip-text text-transparent animate-heading-shine flex items-center gap-3"
        style={{ lineHeight: "1.2" }}
      >
        <span>Expense Tracker</span>
        <span className="inline-block animate-bounce wave-emoji" role="img" aria-label="sparkle">✨</span>
        <style>{`
          .animate-heading-shine {
            animation: headingShine 3s linear infinite;
            background-size: 200% 200%;
          }
          @keyframes headingShine {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .wave-emoji {
            animation: bounce 1.2s infinite;
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(-6px);}
          }
        `}</style>
      </h2>
      {children}
    </div>
    {/* Right animation, desktop only */}
    <div className="hidden md:flex flex-col items-center justify-center w-2/5 relative z-10 bg-white">
      <WavingMan />
      <div className="bg-white shadow-xl rounded-xl p-6 font-bold text-xl flex items-center gap-4">
        <span role="img" aria-label="expense">💸</span> Manage Your Expense
      </div>
    </div>
  </div>
);

export default AuthLayout;