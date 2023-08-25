import Authenticated from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

import React from "react";

const AllUser = ({ auth, mustVerifyEmail, status }) => {
    const users = usePage().props.user;
    // console.log(users);
    users.map((user) => console.log(user));
    return (
        <Authenticated user={auth.user}>
            <h3>All User</h3>
        </Authenticated>
    );
};

export default AllUser;
