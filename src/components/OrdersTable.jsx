import { useState } from "react";
import { Search, Eye } from "lucide-react";

const orderData = [
    { id: "CUS001", customer: "Tudel", total: 48.4, status: "Delivered", date: "2024-10-1" },
    { id: "CUS002", customer: "Akbar", total: 25.0, status: "Processing", date: "2024-10-7" },
    { id: "CUS003", customer: "Quruni", total: 10.5, status: "Delivered", date: "2024-10-7" },
    { id: "CUS004", customer: "Mukta", total: 78.2, status: "Pending", date: "2024-10-8" },
    { id: "CUS005", customer: "Mejbul", total: 95.8, status: "Delivered", date: "2024-10-11" },
    { id: "CUS006", customer: "Afsar", total: 49.75, status: "Processing", date: "2024-10-13" },
    { id: "CUS007", customer: "Moiyen", total: 28.9, status: "Delivered", date: "2024-10-16" },
    { id: "CUS008", customer: "Rabbi", total: 19.6, status: "Delivered", date: "2024-10-17" },
];

const OrdersTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredOrders, setFilteredOrders] = useState(orderData);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = orderData.filter(
            (order) =>
                order.id.toLowerCase().includes(term) ||
                order.customer.toLowerCase().includes(term)
        );
        setFilteredOrders(filtered);
    };

    return (
        <div className="p-6 backdrop-blur-md">
            <div className="flex items-center justify-between mb-6 space-x-2">
                <h2 className="text-sm font-semibold text-gray-100 lg:text-xl md:text-xl">Order List</h2>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search orders..."
                        className="py-2 pl-10 pr-4 text-white placeholder-gray-400 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                                Order ID
                            </th>
                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                                Customer
                            </th>
                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                                Total
                            </th>
                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                                Status
                            </th>
                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                                Date
                            </th>
                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-gray-700 divide">
                        {filteredOrders.map((order) => (
                            <tr key={order.id}>
                                <td className="px-6 py-4 text-sm font-medium text-gray-100 whitespace-nowrap">
                                    {order.id}
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-100 whitespace-nowrap">
                                    {order.customer}
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-100 whitespace-nowrap">
                                    ${order.total.toFixed(2)}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">
                                    <span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            order.status === "Delivered"
                                                ? "bg-green-100 text-green-800"
                                                : order.status === "Processing"
                                                ? "bg-yellow-100 text-yellow-800"
                                                : order.status === "Shipped"
                                                ? "bg-blue-100 text-blue-800"
                                                : "bg-red-100 text-red-800"
                                        }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">
                                    {order.date}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">
                                    <button className="mr-2 text-indigo-400 hover:text-indigo-300">
                                        <Eye size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrdersTable;
