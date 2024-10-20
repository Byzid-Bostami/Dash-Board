import { useState } from "react";
import { Search } from "lucide-react";

const userData = [
	{ id: 1, name: "Byzid Bostami", email: "Bostami@example.com", role: "Admin", status: "Active" },
	{ id: 2, name: "annafi", email: "annafi@example.com", role: "Customer", status: "Active" },
	{ id: 3, name: "Robiul", email: "Robiul@example.com", role: "Customer", status: "Inactive" },
	{ id: 4, name: "forhad", email: "forhad@example.com", role: "Customer", status: "Active" },
	{ id: 5, name: "Tahmid", email: "Tahmid@example.com", role: "Moderator", status: "Active" },
    { id: 6, name: "Borhan", email: "Borhan@example.com", role: "customer", status: "Inactive" },];

const UsersTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredUsers, setFilteredUsers] = useState(userData);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = userData.filter(
			(user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
		);
		setFilteredUsers(filtered);
	};

	const handleDelete = (userId) => {
		const updatedUsers = filteredUsers.filter((user) => user.id !== userId);
		setFilteredUsers(updatedUsers);
	};

	const handleEdit = (userId) => {
		alert(`Edit user with ID: ${userId}`);
	};

	return (
		<div className='p-6 backdrop-blur-md rounded-xl'>
			<div className='flex items-center justify-between mb-6 space-x-2 '>
				<h2 className='text-xl font-semibold text-gray-100'>Users</h2>
				<div className='relative'>
					<input className='py-2 pl-10 pr-4 text-white placeholder-gray-400 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
						type='text'
						placeholder='Search users...'
						
						value={searchTerm}
						onChange={handleSearch}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-700'>
					<thead>
						<tr>
							<th className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase'>
								Name
							</th>
							<th className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase'>
								Email
							</th>
							<th className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase'>
								Role
							</th>
							<th className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase'>
								Status
							</th>
							<th className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase'>
								Actions
							</th>
						</tr>
					</thead>

					<tbody className='divide-y divide-gray-700'>
						{filteredUsers.map((user) => (
							<tr key={user.id}>
								<td className='px-6 py-4 whitespace-nowrap'>
									<div className='flex items-center'>
										<div className='flex-shrink-0 w-10 h-10'>
											<div className='flex items-center justify-center w-10 h-10 font-semibold text-white rounded-full bg-gradient-to-r from-purple-400 to-blue-500'>
												{user.name.charAt(0)}
											</div>
										</div>
										<div className='ml-4'>
											<div className='text-sm font-medium text-gray-100'>{user.name}</div>
										</div>
									</div>
								</td>

								<td className='px-6 py-4 whitespace-nowrap'>
									<div className='text-sm text-gray-300'>{user.email}</div>
								</td>
								<td className='px-6 py-4 whitespace-nowrap'>
									<span className='inline-flex px-2 text-xs font-semibold leading-5 text-blue-100 bg-blue-800 rounded-full'>
										{user.role}
									</span>
								</td>

								<td className='px-6 py-4 whitespace-nowrap'>
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											user.status === "Active"
												? "bg-green-800 text-green-100"
												: "bg-red-800 text-red-100"
										}`}
									>
										{user.status}
									</span>
								</td>

								<td className='px-6 py-4 text-sm text-gray-300 whitespace-nowrap'>
									<button
										className='mr-2 text-indigo-400 hover:text-indigo-300'
										onClick={() => handleEdit(user.id)}
									>
										Edit
									</button>
									<button
										className='text-red-400 hover:text-red-300'
										onClick={() => handleDelete(user.id)}
									>
										Delete
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

export default UsersTable;
