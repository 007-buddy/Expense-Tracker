import React from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

const CustomLineChart = ({ data }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
          <p className="text-xs font-semibold text-purple-800 mb-1">
            {payload[0].payload.category || payload[0].payload.month}
          </p>
          <p className="text-sm text-gray-600">
            Amount: <span className="font-medium text-gray-900">${payload[0].payload.amount}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white">
      <ResponsiveContainer width="100%" height={300}>
        {/* <AreaChart 
          data={data} 
          margin={{ top: 10, right: 30, left: 40, bottom: 10 }} // Added left margin!
        >
          <defs>
            <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#875cf5" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#875cf5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="none" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#555" }} stroke="none" />
          <YAxis tick={{ fontSize: 12, fill: "#555" }} stroke="none" />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#875cf5"
            fill="url(#incomeGradient)"
            strokeWidth={3}
            dot={{ r: 3 }}
          />
        </AreaChart> */}
        <AreaChart
  data={data}
  margin={{ top: 10, right: 30, left: 20, bottom: 10 }} // Increased left margin
>
  <defs>
    <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#875cf5" stopOpacity={0.4} />
      <stop offset="95%" stopColor="#875cf5" stopOpacity={0} />
    </linearGradient>
  </defs>
  <CartesianGrid stroke="none" />
  <XAxis
    dataKey="month"
    tick={{ fontSize: 12, fill: "#555" }}
    stroke="none"
    interval={0} // Shows all ticks; you can try 'preserveStartEnd' too
    padding={{ left: 20, right: 10 }} // Slight extra padding
  />
  <YAxis tick={{ fontSize: 12, fill: "#555" }} stroke="none" />
  <Tooltip content={<CustomTooltip />} />
  <Area
    type="monotone"
    dataKey="amount"
    stroke="#875cf5"
    fill="url(#incomeGradient)"
    strokeWidth={3}
    dot={{ r: 3 }}
  />
</AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;