import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";
import DeleteUserForm from "../Profile/Partials/DeleteUserForm";
import UpdatePasswordForm from "../Profile/Partials/UpdatePasswordForm";
import UpdateProfileInformation from "../Profile/Partials/UpdateProfileInformationForm";

const AdminProfile = ({ auth, status, mustVerifyEmail }) => {
    return (
        <AdminLayout user={auth.user}>
            <section>
                <div className="py-12 text-black">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <UpdateProfileInformation
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl"
                            />
                        </div>

                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <UpdatePasswordForm className="max-w-xl" />
                        </div>

                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <DeleteUserForm className="max-w-xl" />
                        </div>
                    </div>
                </div>
            </section>
        </AdminLayout>
    );
};

export default AdminProfile;
