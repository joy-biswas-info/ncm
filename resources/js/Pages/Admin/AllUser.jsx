import { Head, useForm, usePage } from "@inertiajs/react";
import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";

const AllUser = ({ auth, mustVerifyEmail, status }) => {
    const users = usePage().props.user;
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm();
    const approveUser = (userId) => {
        console.log(userId);
        patch(route("approve.user", userId));
    };

    return (
        <AdminLayout user={auth.user}>
            <Head title="All Users" />
            <section className="container mx-auto my-8 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-250 p-4">
                        <tr>
                            <th className="px-6 py-6 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                                Approved
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                                Phone
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                                Blood Group
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                                Ready to Donate
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                                Age
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                                Weight
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
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
                                <td className="px-6 py-2 whitespace-nowrap">
                                    {user.name}
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap">
                                    {user.approved}
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap">
                                    {user.phone}
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap">
                                    {user.blood_group}
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap">
                                    {user.ready_to_donet}
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap">
                                    {user.age} Years
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap">
                                    {user.weight} Kg
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap">
                                    {user.academic_year}
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap">
                                    {user.approved ? (
                                        <button
                                            onClick={() => approveUser(user.id)}
                                            className="px-4 py-2 text-white bg-red-500 hover:bg-red-600"
                                        >
                                            Unapprove
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => approveUser(user.id)}
                                            className="px-4 py-2 text-white bg-green-500 hover:bg-green-600"
                                        >
                                            Approve
                                        </button>
                                    )}
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap">
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
