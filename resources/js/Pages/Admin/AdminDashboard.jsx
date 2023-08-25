import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

const AdminDashboard = ({ auth, mustVerifyEmail, status }) => {
    return <AdminLayout user={auth.user}>Admin Dashboard</AdminLayout>;
};

export default AdminDashboard;
