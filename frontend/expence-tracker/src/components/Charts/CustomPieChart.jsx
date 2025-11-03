// import React from 'react'
// import CustomTooltip from './CustomTooltip';
// import CustomLegend from './CustomLegend';


// import {
//     PieChart,
//     Pie,
//     Cell,
//     Tooltip,
//     ResponsiveContainer,
//     Legend,
// } from "recharts";
// const CustomPieChart = ({
//     data,
//     label,
//     totalAmount,
//     colors,
//     showTextAnchor,
// }) => {

    
//   return <ResponsiveContainer width="100% " height={300}>
//     <PieChart>
//         <Pie
//         data={data}
//         dataKey="amount"
//         nameKey="name"
//         cx="50%"
//         cy="50%"
//         outerRadius={130}
//         innerRadius={100}
//         labelLine={false}
//         >
//             {data.map((entry,index)=>(
//                 <Cell key={`cell-${index}`} fill ={colors[index % colors.length]}/>
//             ))}
//         </Pie>
//    <Tooltip content ={<CustomTooltip/>}/>
//    <Legend content ={<CustomLegend/>}/>

//    {showTextAnchor && (
//     <>
//     <text
//     x="50%"
//    y="50%"
//    dy={-25}
//    textAnchor='middle'
//    fill='#666'
//    fontSize="14px">
//     {label}
//    </text>
//    <text
//    x="50%"
//    y="50%"
//    dy={8}
//    textAnchor='middle'
//    fill="#333"
//    fontSize="24px"
//    fontWeight="semi-bold"
//    >
//     {totalAmount}
//    </text>
//    </>
//    )}
//    </PieChart>
//    </ResponsiveContainer>
// };

// export default CustomPieChart;
import React from 'react';
import CustomTooltip from './CustomTooltip';
import CustomLegend from './CustomLegend';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const CustomPieChart = ({
  data = [],          // guard default
  label = "",
  totalAmount = "",
  colors = ["#875CF5", "#FA2C37", "#FF6900"], // fallback colors
  showTextAnchor = false,
}) => {
  // if no data, render a fallback message to avoid blank/crash
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="p-6 text-center text-sm text-gray-500 ">
        No data to display
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300} >
      <PieChart>
        <Pie
          data={data}
          dataKey="amount"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={130}
          innerRadius={100}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colors[index % colors.length] || "#DDD"}
            />
          ))}
        </Pie>

        {/* pass component instances; errors inside these will still surface in console */}
        <Tooltip content={<CustomTooltip />} />
        <Legend content={<CustomLegend />} />

        {showTextAnchor && (
          <>
            <text
              x="50%"
              y="50%"
              dy={-25}
              textAnchor="middle"
              fill="#666"
              fontSize="14px"
            >
              {label}
            </text>
            <text
              x="50%"
              y="50%"
              dy={8}
              textAnchor="middle"
              fill="#333"
              fontSize="24px"
              fontWeight="600" // fixed value
            >
              {totalAmount}
            </text>
          </>
        )}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;