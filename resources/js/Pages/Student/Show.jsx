import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";
import {
    faDroplet,
    faBook,
    faPhone,
    faListNumeric,
    faWeight,
    faCheckCircle,
    faCancel,
    faPerson,
} from "@fortawesome/free-solid-svg-icons";

const Show = ({ auth, mustVerifyEmail, status }) => {
    const student = usePage().props.student;
    const {
        name,
        academic_session,
        blood_group,
        profile_photo,
        phone,
        class_roll,
        weight,
        age,
        gender,
        ready_to_donet,
    } = student;
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={name} />

            <section className="mt-4">
                <div className="flex flex-col md:flex-row md:gap-12 justify-center gap-4 p-4 items-center md:items-start">
                    <div className="">
                        <img
                            src={`/storage/${profile_photo}`}
                            alt=""
                            className=" w-full h-full"
                            style={{ width: "300px" }}
                        />
                    </div>
                    <div className="grid-2">
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-4">
                            {name}
                        </h1>
                        <div className="flex items-center gap-2 mb-2 md:text-xl">
                            <FontAwesomeIcon
                                icon={faDroplet}
                                className="text-red-600"
                            />
                            <p>
                                Blood Group{" "}
                                <span className="text-2xl font-bold text-red-600">
                                    {blood_group}
                                </span>{" "}
                            </p>
                        </div>
                        <div className="flex items-center gap-2 mb-2 md:text-xl">
                            <FontAwesomeIcon
                                icon={faBook}
                                className="text-green-600"
                            />
                            <p>Academic Year : {academic_session}</p>
                        </div>
                        <div className="flex items-center gap-2 mb-2 md:text-xl">
                            <FontAwesomeIcon
                                icon={faListNumeric}
                                className="text-green-600"
                            />
                            <p>Class Roll : {class_roll}</p>
                        </div>
                        <div className="flex items-center gap-2 mb-2 md:text-xl">
                            <FontAwesomeIcon
                                icon={faWeight}
                                className="text-green-600"
                            />
                            <p>
                                Weight :{" "}
                                <span className="font-semibold">{weight}</span>{" "}
                                Kg
                            </p>
                        </div>
                        <div className="flex items-center gap-2 mb-2 md:text-xl">
                            <FontAwesomeIcon
                                icon={faWeight}
                                className="text-green-600"
                            />
                            <p>
                                Age :{" "}
                                <span className="font-semibold">{age}</span>{" "}
                                years
                            </p>
                        </div>
                        <div className="flex items-center gap-2 mb-2 md:text-xl">
                            <FontAwesomeIcon
                                icon={faPerson}
                                className="text-green-600"
                            />
                            <p>
                                Sex :{" "}
                                <span className="font-semibold">{gender}</span>
                            </p>
                        </div>
                        <div className="mt-10">
                            <h3 className="font-semibold text-xl md:2xl ">
                                Blood Donation Status
                            </h3>
                            <div>
                                {weight >= 50 && age > 18 ? (
                                    <div className="flex items-center gap-2 mb-2 md:text-xl">
                                        <FontAwesomeIcon
                                            icon={faCheckCircle}
                                            className="text-green-500"
                                        />
                                        <p>Fit For Donate Blood</p>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2 mb-2 md:text-xl">
                                        <FontAwesomeIcon
                                            icon={faCancel}
                                            className="text-red-600"
                                        />
                                        <p>Not Fit For Donate Blood</p>
                                    </div>
                                )}
                                {ready_to_donet == "Yes" ? (
                                    <div className="flex items-center gap-2 mb-2 md:text-xl">
                                        <FontAwesomeIcon
                                            icon={faCheckCircle}
                                            className="text-green-500"
                                        />

                                        <h3>I want to donate Blood</h3>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2 mb-2 md:text-xl">
                                        <FontAwesomeIcon
                                            icon={faCancel}
                                            className="text-red-600"
                                        />
                                        <p>I don't want to donate blood</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-10">
                            <div>
                                <div>
                                    <button className="px-6 py-2 font-semibold bg-green-500 text-white text-xl flex gap-4 items-center justify-center">
                                        <FontAwesomeIcon
                                            icon={faPhone}
                                            className="text-white"
                                        />
                                        <a href={`tel:${phone}`}>Call Now</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
};

export default Show;
