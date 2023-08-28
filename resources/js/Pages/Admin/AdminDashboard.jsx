import AdminLayout from "@/Layouts/AdminLayout";
import { Head, usePage } from "@inertiajs/react";
import React from "react";

const AdminDashboard = ({ auth, mustVerifyEmail, status }) => {
    const users = usePage().props.users;
    const unapprovedUsersCount = users.filter((user) => !user.approved).length;
    const approvedUsersCount = users.filter((user) => user.approved).length;

    return (
        <AdminLayout user={auth.user}>
            <Head title="Admin Dashboard" />
            <div className="flex gap-4">
                <div className="container mx-auto my-10 bg-white w-1/2 p-24 shadow-md shadow-gray-200 rounded-md">
                    <h2 className="text-gray-600 font-bold text-2xl text-center">
                        Total Users: <br /> {users.length}
                    </h2>
                </div>
                <div className="container mx-auto my-10 bg-white w-1/2 p-24 shadow-md shadow-gray-200 rounded-md">
                    <h2 className="text-gray-600 font-bold text-2xl text-center">
                        Approved user: <br />
                        <span className="text-green-500 text-4xl font-bold">
                            {approvedUsersCount}
                        </span>
                    </h2>
                </div>
                <div className="container mx-auto my-10 bg-white w-1/2 p-24 shadow-md shadow-gray-200 rounded-md">
                    <h2 className="text-gray-600 font-bold text-2xl text-center">
                        Unapproved user: <br />{" "}
                        <span className="text-red-500 text-4xl font-bold">
                            {unapprovedUsersCount}
                        </span>
                    </h2>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminDashboard;
