import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import {
    faBook,
    faCalendar,
    faCalendarWeek,
    faCancel,
    faCheckCircle,
    faDroplet,
    faFaceSmile,
    faGraduationCap,
    faListNumeric,
    faLocation,
    faMonument,
    faPenNib,
    faPerson,
    faPhone,
    faUser,
    faUserGraduate,
    faWeight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head, Link } from "@inertiajs/react";
import UpdatePasswordForm from "./Profile/Partials/UpdatePasswordForm";

export default function Dashboard({ auth }) {
    const {
        name,
        academic_year,
        blood_group,
        profile_photo,
        phone,
        class_roll,
        weight,
        age,
        ready_to_donet,
        gender,
        gurdian_name,
        gurdian_phone_no,
        permanent_address,
    } = auth.user;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <section className=" container px-4 py-4 mx-auto">
                <div className="flex flex-wrap justify-center md:gap-4 md:justify-between items-center mb-4 border-b-2 gap-2">
                    <div className="flex gap-2 items-center flex-wrap">
                        <img
                            src={
                                profile_photo
                                    ? `/storage/${profile_photo}`
                                    : "./logo.png"
                            }
                            alt=""
                            className="md:rounded-full border-8 border-white w-full h-full md:w-52 md:h-52 mx-auto"
                        />
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:mt-24">
                            {name}
                        </h1>
                    </div>
                    <div className="my-4">
                        <button className="px-6 py-2 font-semibold bg-green-500 text-white text-xl flex gap-2 md:gap-4 items-center justify-center">
                            <FontAwesomeIcon
                                icon={faPenNib}
                                className="text-white"
                            />
                            <Link href={route("profile.edit")}>
                                Edit Your Profile
                            </Link>
                        </button>
                    </div>
                </div>

                <div className="flex gap-3 flex-wrap lg:flex-nowrap">
                    <div className="flex-auto md:w-1/3 bg-white p-3 rounded-md shadow-md">
                        <div>
                            <h2 className="text-xl font-bold md:text-2xl my-4">
                                Personal Information
                            </h2>
                            <div className="grid-2">
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
                                        icon={faGraduationCap}
                                        className="text-green-600"
                                    />
                                    <p> Sesson : {academic_year}</p>
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
                                        <span className="font-semibold">
                                            {weight}
                                        </span>{" "}
                                        Kg
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 mb-2 md:text-xl">
                                    <FontAwesomeIcon
                                        icon={faCalendarWeek}
                                        className="text-green-600"
                                    />
                                    <p>
                                        Age :{" "}
                                        <span className="font-semibold">
                                            {age}
                                        </span>{" "}
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
                                        <span className="font-semibold">
                                            {gender}
                                        </span>
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 mb-2 md:text-xl">
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        className="text-green-600"
                                    />
                                    <p>
                                        <span className="font-semibold">
                                            {phone}
                                        </span>
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
                                                <p>
                                                    I don't want to donate blood
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-auto md:w-1/3 bg-white p-3 rounded-md shadow-md">
                        <h2 className="text-xl font-bold md:text-2xl my-4">
                            {" "}
                            Gurdian Information
                        </h2>
                        <div>
                            <div className="flex items-center gap-2 mb-2 md:text-xl">
                                <FontAwesomeIcon
                                    icon={faUser}
                                    className="text-green-600"
                                />
                                <p>
                                    Name :{" "}
                                    <span className="">{gurdian_name}</span>{" "}
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mb-2 md:text-xl">
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="text-green-600"
                                />
                                <p>
                                    Phone No:{" "}
                                    <span className="">{gurdian_phone_no}</span>{" "}
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mb-2 md:text-xl">
                                <FontAwesomeIcon
                                    icon={faLocation}
                                    className="text-green-600"
                                />
                                <p>
                                    Address:{" "}
                                    <span className="">
                                        {permanent_address}
                                    </span>{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-auto mx-auto md:w-1/3">
                        <UpdatePasswordForm />
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
