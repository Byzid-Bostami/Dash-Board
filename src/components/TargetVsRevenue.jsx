import React, { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const revenueData = [
  { month: "Jan", revenue: 1200, target: 1500 },
  { month: "Feb", revenue: 1600, target: 1700 },
  { month: "Mar", revenue: 1830, target: 1800 },
  { month: "Apr", revenue: 1670, target: 2000 },
  { month: "May", revenue: 1920, target: 2000 },
  { month: "Jun", revenue: 2300, target: 2100 },
  { month: "Jul", revenue: 2410, target: 2400 },
  { month: "Aug", revenue: 2200, target: 2500 },
  { month: "Sep", revenue: 2400, target: 2500 },
  { month: "Oct", revenue: 2800, target: 2600 },
  { month: "Nov", revenue: 3300, target: 3000 },
  { month: "Dec", revenue: 3900, target: 4000 },
];

const timeOptions = {
  "This Month": [revenueData[revenueData.length - 1]],
  "Last 6 Months": revenueData.slice(-6),
  "This Year": revenueData,
};

const TargetVsRevenue = () => {
  const [selectedTime, setSelectedTime] = useState("This Year");

  const handleTimeRangeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between px-5">
        <h3 className="text-sm font-semibold text-white lg:text-lg md:text-lg">Revenue vs Target</h3>
        <select className="bg-[#30395c] rounded-xl text-slate-300 lg:p-1 md:p-1" value={selectedTime} onChange={handleTimeRangeChange}>
          {Object.keys(timeOptions).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        
      </div>

      <div className="w-full lg:h-[400px] md:h-[400px] h-36">
        <ResponsiveContainer>
          <AreaChart data={timeOptions[selectedTime]}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{ backgroundColor: "#49b8ae", borderColor: "#296085" }}
              itemStyle={{ color: "#062563" }}
            />
            <Legend />
            <Area type="monotone" dataKey="revenue" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} />
            <Area type="monotone" dataKey="target" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TargetVsRevenue;
