import AdminLayout from "@/Layouts/AdminLayout";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";

const AddTeacher = ({ auth, errors }) => {
    const [successMessage, setSuccessMessage] = useState("");
    const [logoPreview, setLogoPreview] = useState(null);
    const { data, setData, post, processing, reset } = useForm({
        name: "",
        job_title: "",
        contact_number: "",
        profile_photo: null,
    });
    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        setData("profile_photo", file);
        setLogoPreview(URL.createObjectURL(file));
    };
    console.log(data.profile_photo);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await post(route("add.teacher"), data);
            setSuccessMessage(
                "Emergency contact information stored successfully."
            );
            setLogoPreview(null);
            reset("contact_number", "name", "job_title", "profile_hoto");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <AdminLayout user={auth.user}>
            <section className="mx-auto">
                <div className="w-1/2 bg-gray-500 rounded-lg p-8 shadow-md mx-auto mt-24">
                    <h1 className="text-2xl font-semibold text-white mb-4">
                        Add Teacher
                    </h1>
                    {successMessage && !errors && (
                        <div className="mb-4 text-green-500">
                            {successMessage}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="text-white">
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="w-full p-3 bg-gray-700 rounded border-none focus:ring focus:ring-blue-300"
                                required
                            />
                            {errors.name && (
                                <div className="text-red-500 text-sm">
                                    {errors.name}
                                </div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                Job Title
                            </label>
                            <input
                                type="text"
                                name="job_title"
                                value={data.job_title}
                                onChange={(e) =>
                                    setData("job_title", e.target.value)
                                }
                                className="w-full p-3 bg-gray-700 rounded border-none focus:ring focus:ring-blue-300"
                                required
                            />
                            {errors.job_title && (
                                <div className="text-red-500 text-sm">
                                    {errors.job_title}
                                </div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                Contact Number
                            </label>
                            <input
                                type="text"
                                name="contact_number"
                                value={data.contact_number}
                                onChange={(e) =>
                                    setData("contact_number", e.target.value)
                                }
                                className="w-full p-3 bg-gray-700 rounded border-none focus:ring focus:ring-blue-300"
                                required
                            />
                            {errors.contact_number && (
                                <div className="text-red-500 text-sm">
                                    {errors.contact_number}
                                </div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                Profile Photo
                            </label>
                            <input
                                type="file"
                                name="profile_photo"
                                onChange={handleLogoChange}
                                className="w-full"
                                required
                            />
                            {errors.profile_photo && (
                                <div className="text-red-500 text-sm">
                                    {errors.profile_photo}
                                </div>
                            )}
                        </div>
                        {logoPreview && (
                            <img
                                src={logoPreview}
                                alt="Logo Preview"
                                className="my-4 max-h-40"
                            />
                        )}
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            Add Teacher
                        </button>
                    </form>
                </div>
            </section>
        </AdminLayout>
    );
};

export default AddTeacher;
