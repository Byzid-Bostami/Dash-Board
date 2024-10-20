import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const productPerformanceData = [
    { name: "Bus Ticket", sales: 1300, revenue: 800, profit: 800 },
    { name: "Taxi Ticket", sales: 2000, revenue: 1398, profit: 1110 },
    { name: "Plan Ticket", sales: 500, revenue: 900, profit: 1290 },
    { name: "Train Ticket", sales: 2780, revenue: 3908, profit: 2000 },
    { name: "Ship Ticket", sales: 190, revenue: 900, profit: 2081 },
    { name: "Auto Ticket", sales: 590, revenue: 600, profit: 781 },
];

const ProductPerformance = () => {
    return (
        <div className="p-6 backdrop-blur-lg">
            <h2 className="mb-4 text-xl font-semibold text-gray-100">Ticket Performance</h2>
            <div className="w-full md:h-[300px] h-36 lg:h-[300px]">
                <ResponsiveContainer>
                    <BarChart data={productPerformanceData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="name" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#49b8ae",
                                borderColor: "#296085",
                            }}
                            itemStyle={{ color: "#E5E7EB" }}
                        />
                        <Legend />
                        <Bar dataKey="sales" fill="#07f5e9" />
                        <Bar dataKey="revenue" fill="#85d406" />
                        <Bar dataKey="profit" fill="#de0b71" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ProductPerformance;
