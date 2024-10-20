import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const dailySalesData = [
	{ name: "Mon", sales: 300 },
	{ name: "Tue", sales: 700 },
	{ name: "Wed", sales: 200 },
	{ name: "Thu", sales: 650 },
	{ name: "Fri", sales: 900 },
	{ name: "Sat", sales: 1200 },
	{ name: "Sun", sales: 1000 },
];





const DailyTicketSales = () => {
  return (
    <div className='w-full lg:h-[240px] h-[160px] md:h-[400]'>
        <ResponsiveContainer>
            <BarChart 
                data={dailySalesData}>
                    
                <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                <XAxis dataKey='name' stroke='#9CA3AF' />
                <YAxis stroke='#9CA3AF' />
                <Tooltip
                    contentStyle={{
                        backgroundColor: "rgba(53,201,225,250)",
                        borderColor: "#4B5563",
                    }}
                    itemStyle={{ color: "#E5E7EB" }}
                />
                <Bar dataKey='sales' fill='#da11cb' />
            </BarChart>
        </ResponsiveContainer>
    </div>

  )
}

export default DailyTicketSales