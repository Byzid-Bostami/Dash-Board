import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";


const salesByCategory = [
	{ name: "New", value: 450 },
	{ name: "Return", value: 200 },
	
];

const COLORS = ["#b9f03a", "#54dcde"];

const NewTicketAndReturnTicket = () => {
  return (
    <div className='w-full h-[240px]'>
				<ResponsiveContainer>
					<PieChart>
						<Pie
							data={salesByCategory}
							cx='50%'
							cy='50%'
							outerRadius={80}
							fill='#8884d8'
							dataKey='value'
							label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
						>
							{salesByCategory.map((entry, index) => (
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
  )
}

export default NewTicketAndReturnTicket;