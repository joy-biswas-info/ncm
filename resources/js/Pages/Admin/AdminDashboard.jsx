import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";

const AdminDashboard = ({ auth, mustVerifyEmail, status }) => {
    return <AuthenticatedLayout>Admin Dashboard</AuthenticatedLayout>;
};

export default AdminDashboard;
