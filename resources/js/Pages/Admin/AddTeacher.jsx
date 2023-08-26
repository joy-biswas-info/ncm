import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

const AddTeacher = ({ auth }) => {
    return <AdminLayout user={auth.user}>Add teacher</AdminLayout>;
};

export default AddTeacher;
