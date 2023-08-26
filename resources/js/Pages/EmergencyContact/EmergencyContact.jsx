import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head, usePage } from "@inertiajs/react";

const EmergencyContact = ({ auth }) => {
    const { contacts } = usePage().props;
    console.log(contacts);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Emergency Contact Number" />
            <section className="mt-10">
                <h2 className="font-bold text-4xl text-center my-12">
                    Emergency Contact Numbers
                </h2>
                <div className="flex gap-3">
                    {contacts.length < 0 ? (
                        <h3>No Contact Info</h3>
                    ) : (
                        contacts.map((contact) => (
                            <div
                                key={contact.id}
                                className="bg-white shadow-md p-2"
                            >
                                <img
                                    src={contact.logo}
                                    alt="Emergency Contact"
                                    className="w-full md:w-48"
                                />
                                <h3 className="font-bold text-xl md:text-2xl my-2">
                                    {contact.title}
                                </h3>
                                <h4 className="">{contact.locations}</h4>
                                <h4 className=" text-xl md:text-2xl">
                                    {contact.contact_number}
                                </h4>
                                <button className="bg-green-600 px-4 py-2 text-white font-semibold my-2">
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        className="text-white"
                                    />
                                    <a href={`tel:${contact.contact_number}`}>
                                        {" "}
                                        Call Now
                                    </a>
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </AuthenticatedLayout>
    );
};

export default EmergencyContact;
