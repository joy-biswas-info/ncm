import AdminLayout from "@/Layouts/AdminLayout";
import { useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";

const CreateEmergencyContact = ({ auth, errors }) => {
    const [successMessage, setSuccessMessage] = useState("");
    const [logoPreview, setLogoPreview] = useState(null);
    const { data, setData, post, processing, reset } = useForm({
        title: "",
        contact_number: "",
        logo: null,
        locations: "",
    });
    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        setData("logo", file);
        setLogoPreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await post(route("add.emergencyContact"), data);
            setSuccessMessage(
                "Emergency contact information stored successfully."
            );
            setLogoPreview(null);
            reset("contact_number", "locations", "title", "logo");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AdminLayout user={auth.user}>
            <section className="bg-gray-800 rounded-lg p-8 shadow-md">
                <h1 className="text-2xl font-semibold text-white mb-4">
                    Create Emergency Contact
                </h1>
                {successMessage && (
                    <div className="mb-4 text-green-500">{successMessage}</div>
                )}
                <form onSubmit={handleSubmit} className="text-white">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="w-full p-3 bg-gray-700 rounded border-none focus:ring focus:ring-blue-300"
                            required
                        />
                        {errors.title && (
                            <div className="text-red-500 text-sm">
                                {errors.title}
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
                            Logo
                        </label>
                        <input
                            type="file"
                            name="logo"
                            onChange={handleLogoChange}
                            className="w-full"
                            required
                        />
                        {errors.logo && (
                            <div className="text-red-500 text-sm">
                                {errors.logo}
                            </div>
                        )}
                    </div>
                    {logoPreview && (
                        <img
                            src={logoPreview}
                            alt="Logo Preview"
                            className="mt-2 max-h-40"
                        />
                    )}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                            Locations
                        </label>
                        <textarea
                            name="locations"
                            value={data.locations}
                            onChange={(e) =>
                                setData("locations", e.target.value)
                            }
                            className="w-full p-3 bg-gray-700 rounded border-none focus:ring focus:ring-blue-300"
                            required
                        ></textarea>
                        {errors.locations && (
                            <div className="text-red-500 text-sm">
                                {errors.locations}
                            </div>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Submit
                    </button>
                </form>
            </section>
        </AdminLayout>
    );
};

export default CreateEmergencyContact;
