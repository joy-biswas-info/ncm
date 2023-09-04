import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

const Teacher = ({ auth }) => {
    const { teachers } = usePage().props;
    console.log(teachers);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Teacher" />
            <section className="container my-24">
                <h2 className="text-center font-bold text-4xl mb-10">
                    Our Teachers
                </h2>
                {teachers &&
                    teachers.length > 0 &&
                    teachers.map((teacher) => (
                        <div key={teacher.id}>
                            <img
                                src={teacher.profile_photo}
                                alt="Teacher's Photo"
                                className="w-24 h-24 rounded-full"
                            />
                            <h3>{teacher.name}</h3>
                            <h3 className="font-semibold">
                                {teacher.job_title}
                            </h3>
                            <h3>{teacher.contact_number}</h3>
                            <button className="bg-green-500 px-4 py-2 text-white mx-auto mt-4 font-bold">
                                <a href={`tel:${teacher.contact_number}`}>
                                    Call Now
                                </a>
                            </button>
                        </div>
                    ))}
            </section>
        </AuthenticatedLayout>
    );
};

export default Teacher;
