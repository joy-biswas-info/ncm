import AdminLayout from "@/Layouts/AdminLayout";
import { usePage } from "@inertiajs/react";
import React from "react";

const SingleUser = ({ auth, mustVerifyEmail, status }) => {
    const user = usePage().props.user;
    const {
        name,
        academic_year,
        blood_group,
        profile_photo,
        phone,
        class_roll,
        weight,
        age,
        gender,
    } = user;
    return (
        <AdminLayout user={auth.user}>
            <section className="container mx-auto">{name}</section>
        </AdminLayout>
    );
};

export default SingleUser;
