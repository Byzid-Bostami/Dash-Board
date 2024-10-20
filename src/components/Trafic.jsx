import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Facebook", value: 600 },
  { name: "Youtube", value: 400 },
  { name: "Direct", value: 200 },
];

const COLORS = ["#0088FE", "#f00202", "#da11cb"];

const Trafic = () => {
  return (
    <div className='w-full h-[240px]'>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="52%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}  // Display percentage inside pie
            labelLine={false} // Remove label lines for cleaner appearance
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(31, 41, 55, 0.8)",
              borderColor: "#4B5563",
            }}
            itemStyle={{ color: "#E5E7EB" }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Trafic;
