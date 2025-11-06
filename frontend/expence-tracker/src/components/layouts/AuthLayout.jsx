// import React from 'react';
// // import CARD_2 from "../../assets/images/card2.png";
// import { LuTrendingUpDown } from "react-icons/lu";

// const AuthLayout = ({ children }) => {
//   return (
//     <div className="flex">
//       <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
//         <h2 className="text-lg font-medium text-black">Expense Tracker</h2>
//         {children}
//       </div>
//       <div className="hidden md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
//         <div className="w-48 h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-5" />
//         <div className="w-48 h-48 rounded-[40px] bg-violet-500 absolute bottom-7 -left-7" />
//         <div className="grid grid-cols-1 z-20">
//           <StatsInfoCard
//             icon={<LuTrendingUpDown />}
//             label="Track Your Income & Expenses"
//             value="430,000"
//             color="bg-purple-600"
//           />
//           {/* <img
//             src={CARD_2}
//             className="w-64 lg:w-[90%] absolute bottom-10 shadow-lg shadow-blue-400/15"
//             alt="Card"
//           /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthLayout;

// const StatsInfoCard = ({ icon, label, value, color }) => {
//   return (
//     <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-20">
//       <div
//         className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}
//       >
//         {icon}
//       </div>
//       <div>
//         <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
//         <span className="text-[20px]">${value}</span>
//       </div>
//     </div>
//   );
// };
// import React from "react";
// import { LuTrendingUpDown } from "react-icons/lu";

// // Animated Gradient and Interactive Background
// const AnimatedBackground = () => (
//   <div className="absolute inset-0 overflow-hidden">
//     {/* Animated gradient */}
//     <div className="w-full h-full bg-gradient-to-tr from-purple-500 via-indigo-400 to-blue-400 animate-gradient"></div>
//     {/* Floating shapes */}
//     {[...Array(5)].map((_, i) => (
//       <span
//         key={i}
//         className={`absolute rounded-full bg-white/30 shadow-lg animate-float float-${i}`}
//         style={{
//           width: `${60 + i * 20}px`,
//           height: `${60 + i * 20}px`,
//           left: `${10 + i * 16}%`,
//           top: `${10 + i * 15}%`,
//         }}
//       />
//     ))}
//   </div>
// );

// const StatsInfoCard = ({ icon, label, value, color }) => (
//   <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md border border-gray-200 z-20 hover:scale-105 transition-transform duration-300">
//     <div className={`w-12 h-12 flex items-center justify-center text-2xl text-white ${color} rounded-full drop-shadow-xl`}>
//       {icon}
//     </div>
//     <div>
//       <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
//       <span className="text-2xl select-none transition-colors duration-300 hover:text-indigo-600">{value}</span>
//     </div>
//   </div>
// );

// const AuthLayout = ({ children }) => (
//   <div className="flex min-h-screen relative">
//     {/* Left: Auth Form Panel */}
//     <div className="w-full md:w-3/5 px-12 py-12 z-30 bg-white bg-opacity-80 backdrop-blur-lg flex flex-col justify-center items-start relative">
//       <h2 className="text-2xl font-bold text-black mb-4 tracking-wide animate-fadein">Expense Tracker</h2>
//       {children}
//     </div>
//     {/* Right: Dynamic Animated Section */}
//     <div className="hidden md:block w-2/5 relative h-screen overflow-hidden">
//       {/* Animated background */}
//       <AnimatedBackground />
//       {/* Info Card */}
//       <div className="absolute mt-16 ml-8 z-40">
//         {/* <StatsInfoCard
//           icon={<LuTrendingUpDown />}
//           label="Track Your Income & Expenses"
//           value="$430,000"
//           color="bg-purple-600"
//         /> */}
//       </div>
//     </div>

//     {/* Animated Styles */}
//     <style>{`
//       .animate-gradient {
//         animation: gradientMove 10s ease infinite alternate;
//         background-size: 200% 200%;
//       }
//       @keyframes gradientMove {
//         0% { background-position: 0% 50%; }
//         100% { background-position: 100% 50%; }
//       }
//       .animate-float {
//         animation: floatShape 7s ease-in-out infinite;
//       }
//       @keyframes floatShape {
//         0% { transform: translateY(0px); }
//         50% { transform: translateY(-15px) scale(1.1); }
//         100% { transform: translateY(0px); }
//       }
//       .animate-fadein {
//         animation: fadeIn 2s;
//       }
//       @keyframes fadeIn {
//         from { opacity: 0; transform: translateY(-24px);}
//         to { opacity: 1; transform: translateY(0);}
//       }
//       /* Unique float delays */
//       .float-0 { animation-delay: 0s; }
//       .float-1 { animation-delay: 0.7s; }
//       .float-2 { animation-delay: 1.4s; }
//       .float-3 { animation-delay: 2.1s; }
//       .float-4 { animation-delay: 2.8s; }
//     `}</style>
//   </div>
// );

// export default AuthLayout;
// import React, { useState, useEffect } from "react";

// // Interactive background, always behind content
// const InteractiveBg = () => (
//   <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//     <div className="w-full h-full bg-gradient-to-tr from-blue-300 via-purple-300 to-indigo-200 animate-gradient" />
//     {Array.from({ length: 14 }).map((_, i) => (
//       <span
//         key={i}
//         className="absolute rounded-full bg-white/30 shadow-lg animate-float"
//         style={{
//           width: `${48 + i * 5}px`,
//           height: `${48 + i * 5}px`,
//           left: `${5 + (i * 6)}%`,
//           top: `${10 + (i * 5)}%`,
//           animationDuration: `${4 + i * 0.4}s`,
//           animationDelay: `${i * 0.22}s`,
//         }}
//       />
//     ))}
//     <style>{`
//       .animate-gradient {animation: gradientMove 12s ease-in-out infinite alternate; background-size: 200% 200%;}
//       @keyframes gradientMove {0%{background-position:0%70%}100%{background-position:100%30%}}
//       .animate-float {animation: floatShape 9s ease-in-out infinite;}
//       @keyframes floatShape {0%{transform:translateY(0px);} 50%{transform:translateY(24px)scale(1.07);} 100%{transform:translateY(0px);}}
//     `}</style>
//   </div>
// );

// const AuthLayout = ({ children }) => (
//   <div className="flex min-h-screen w-full relative bg-white">
//     {/* Background - always under, never overlaps content */}
//     <InteractiveBg />
//     {/* Main content - must have higher z-index */}
//     <div className="relative flex flex-col justify-center w-full md:w-3/5 px-12 py-12 z-10">
//       <h2 className="text-3xl font-bold text-black mb-8 tracking-wide">Expense Tracker</h2>
//       {children}
//     </div>
//     {/* Right animation, desktop only */}
//     <div className="hidden md:flex flex-col items-center justify-center w-2/5 relative z-10 bg-white">
//       {/* Your custom SVG/animated box, if needed */}
//       {/* Example Man and Box */}
//       <svg width="100" height="160" className="mb-4"><circle cx="50" cy="30" r="22" fill="#FFD59E"/><rect x="38" y="50" width="24" height="50" rx="12" fill="#6699FF"/><rect x="25" y="60" width="32" height="12" rx="6" fill="#FFD59E"/><rect x="62" y="60" width="20" height="12" rx="6" fill="#FFD59E"/><rect x="38" y="100" width="8" height="30" rx="4" fill="#444"/><rect x="54" y="100" width="8" height="30" rx="4" fill="#222"/></svg>
//       <div className="bg-white shadow-xl rounded-xl p-6 font-bold text-xl flex items-center gap-4">
//         <span role="img" aria-label="expense">💸</span> Manage Your Expense
//       </div>

//     </div>
//   </div>
// );

// export default AuthLayout;

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