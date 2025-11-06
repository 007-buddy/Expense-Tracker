import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

// Tooltip to show amount and category
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length && payload[0].value > 0) {
    return (
      <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
        <p className="text-xs font-semibold text-blue-700 mb-1">
          {payload[0].payload.category}
        </p>
        <p className="text-sm text-gray-600">
          Amount: <span className="text-sm font-medium text-gray-900">
            ${payload[0].payload.amount}
          </span>
        </p>
      </div>
    );
  }
  return null;
};

const CustomBarChart = ({ data,dataKey}) => {
  // For debugging data structure:
  // console.log('Data : ', data);

  // // Color for all bars
  const barColors = [
  "#DA7596 ",//(Pink/Red)
"#D55E00" ,//(Vermilion/Orange)
"#688AE8", //(Light Blue)
"#018977 ",
];
  // const barColor = "#673ab7"; // Indigo/Blue

  return (
    <div className="bg-white mt-6">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="none" />
          <XAxis
            dataKey={dataKey}
            tick={{ fontSize: 12, fill: "#242424" }}
            stroke="none"
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#561e1e" }}
            stroke="none"
          />
          <Tooltip content={<CustomTooltip />}  cursor={false}/>
          <Bar dataKey="amount" radius={[10, 10, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;

// import React from 'react'

// import{
//     BarChart,
//     Bar,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//       Legend,
//     ResponsiveContainer,
// Cell,
// } from "recharts";



// const CustomBarChart = ({data}) => {
//     console.log("Data : ", data);
    
// const getBarColor = (index)=>{
//     return index % 2===0?"#875cf5":"#cfbefb";
// };

// const CustomTooltip=({active,payload})=>{
//     if(active && payload && payload.length && payload[0].value > 0){
//         console.log("Payload : ", payload[0].payload);
        
//         return (
//             <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
//                 <p className="text-xs font-semibold text-purple-800 mb-1">{payload[0].payload.category}</p>
//                 <p className="text-sm text-gray-600">
//                     Amount:<span className="text-sm font-medium text-gray-900">${payload[0].payload.amount}</span>
//                 </p>
//             </div>
//         );
//     }
//     return null;
// };


//   return (
//     <div className="bg-white mt-6">
//         <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={data}>
//                 <CartesianGrid stroke="none"/>

//                 <XAxis dataKey={dataKey} tick={{fontSize:12,fill:"#da2424ff"}} stroke="none" />
//                 <YAxis tick={{fontSize:12,fill:"#561e1eff"}} stroke="none" />
                
//                 <Tooltip content={CustomTooltip}/>
              
//                 <Bar 
//                 dataKey="month"
//                 fill="#FF8042"
//                 radius={[10,10,0,0]}
//                 activeDot={{r:8, fill:"yellow"}}
//                 activeStyle={{fill:"green"}}
//                 >
//                     {data.map((entry,index)=>(
//                         <Cell key={index} fill={getBarColor(index)}/>
//                     ))}
//                 </Bar>

//                 {/* <Bar dataKey="amount" fill="#673ab7" radius={[12, 12, 0, 0]} /> */}
//             </BarChart>
//         </ResponsiveContainer>
//     </div>
//   )
// }

// export default CustomBarChart;

// import React, { useState } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Cell,
// } from "recharts";

// const data = [
//   { month: "Oct", category: "Rent", amount: 3600 },
//   { month: "Oct", category: "Rent", amount: 3600 }
// ];

// const CustomBarChart = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const defaultColor = "#673ab7";   // Deep Indigo/Blue
//   const hoverColor = "#4527a0";     // Darker Indigo

//   const CustomTooltip = ({ active, payload }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
//           <p className="text-xs font-semibold text-blue-800 mb-1">
//             {payload[0].payload.category}
//           </p>
//           <p className="text-sm text-gray-600">
//             Amount:
//             <span className="text-sm font-medium text-gray-900">
//               ${payload[0].payload.amount}
//             </span>
//           </p>
//         </div>
//       );
//     }
//     return null;
//   };


//   return (
//     <div className="bg-white mt-6">
//       <ResponsiveContainer width="100%" height={250}>
//         <BarChart data={data} barSize={60}>
//           <CartesianGrid stroke="none" />
//           <XAxis dataKey="month" tick={{ fontSize: 14, fill: "#222" }} axisLine={false} tickLine={false} />
//           <YAxis tick={{ fontSize: 14, fill: "#218567" }} axisLine={false} tickLine={false} />
//           {/* <Tooltip content={<CustomTooltip />}  */}
//           {/* cursor={{ fill: "rgba(103,58,183,0.08)" }} /> */}
//           <Tooltip content={<CustomTooltip />} filterNull/>

//           <Bar
//             dataKey="amount"
//             radius={[12, 12, 0, 0]}
//             onMouseOver={(_, index) => setActiveIndex(index)}
//             onMouseLeave={() => setActiveIndex(null)}
//           >
//             {data.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={index === activeIndex ? hoverColor : defaultColor}
//               />
//             ))}
//           </Bar>
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default CustomBarChart;



// import React, { useState } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Cell,
// } from "recharts";

// // Example data with daily entries
// const data = [
//   { date: "2025-10-01", category: "Rent", amount: 120 },
//   { date: "2025-10-02", category: "Groceries", amount: 80 },
//   { date: "2025-10-05", category: "Bills", amount: 200 },
//   { date: "2025-10-07", category: "Transport", amount: 60 },
//   { date: "2025-10-10", category: "Other", amount: 90 }
// ];

// const CustomBarChart = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const defaultColor = "#673ab7";   // Blue
//   const hoverColor = "#4527a0";     // Darker blue

//   // Show tooltip ONLY when hovering a bar
//   const CustomTooltip = ({ active, payload }) => {
//     if (
//       active &&
//       payload &&
//       payload.length &&
//       payload[0].value > 0 // Only show if directly on a bar
//     ) {
//       return (
//         <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
//           <p className="text-xs font-semibold text-blue-800 mb-1">
//             {payload[0].payload.category}
//           </p>
//           <p className="text-sm text-gray-600">
//             Amount:
//             <span className="text-sm font-medium text-gray-900">
//               ${payload[0].payload.amount}
//             </span>
//           </p>
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="bg-white mt-6">
//       <ResponsiveContainer width="100%" height={250}>
//         <BarChart data={data} barSize={36}>
//           <CartesianGrid stroke="none" />
//           <XAxis
//             dataKey="date"
//             tick={{ fontSize: 14, fill: "#222" }}
//             axisLine={false}
//             tickLine={false}
//             // Format as just the day, or e.g. "1 Oct"
//             tickFormatter={date => {
//               const d = new Date(date);
//               return `${d.getDate()} ${d.toLocaleString('default', { month: 'short' })}`;
//             }}
//           />
//           <YAxis
//             tick={{ fontSize: 14, fill: "#218567" }}
//             axisLine={false}
//             tickLine={false}
//           />
//           <Tooltip content={<CustomTooltip />} filterNull />
//           <Bar
//             dataKey="amount"
//             radius={[12, 12, 0, 0]}
//             onMouseOver={(_, index) => setActiveIndex(index)}
//             onMouseLeave={() => setActiveIndex(null)}
//           >
//             {data.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={index === activeIndex ? hoverColor : defaultColor}
//               />
//             ))}
//           </Bar>
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default CustomBarChart;