import { usePage } from "@inertiajs/react";
import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";

const AllUser = ({ auth, mustVerifyEmail, status }) => {
    const users = usePage().props.user;

    return (
        <AdminLayout user={auth.user}>
            <section className="container mx-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-250 p-4">
                        <tr>
                            <th className="px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Approved
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Phone
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Blood Group
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Ready to Donate
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Age
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Weight
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Academic Year
                            </th>
                            <th className="px-6 py-3"></th>
                            <th className="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-150 divide-y divide-gray-200 ">
                        {users.map((user) => (
                            <tr
                                key={user.id}
                                className={
                                    user.id % 2 === 0
                                        ? "bg-gray-400"
                                        : "bg-gray-500"
                                }
                            >
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {user.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {user.approved}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {user.phone}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {user.blood_group}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {user.ready_to_donet}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {user.age} Years
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {user.weight} Kg
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {user.academic_year}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button className="px-4 py-2 text-white bg-green-500 hover:bg-green-600">
                                        Approved
                                    </button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600">
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </AdminLayout>
    );
};

export default AllUser;
