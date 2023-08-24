import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        blood_group: "",
        ready_to_donet: "",
        age: "",
        gender: "",
        weight: "",
        academic_year: "",
        class_roll: "",
        gurdian_name: "",
        gurdian_phone_no: "",
        permanent_address: "",
        password: "",
        password_confirmation: "",
        profile_photo: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="phone" value="Phone Number" />

                    <TextInput
                        id="phone"
                        type="text"
                        name="phone"
                        value={data.phone}
                        className="mt-1 block w-full"
                        autoComplete="phone"
                        onChange={(e) => setData("phone", e.target.value)}
                        required
                    />

                    <InputError message={errors.phone} className="mt-2" />
                </div>

                <div className="mt-4">
                    <label
                        htmlFor="blood_group"
                        className="block font-medium text-gray-700"
                    >
                        Blood Group
                    </label>
                    <select
                        id="blood_group"
                        name="blood_group"
                        value={data.blood_group}
                        className="mt-1 block w-full"
                        autoComplete="blood_group"
                        onChange={(e) => setData("blood_group", e.target.value)}
                        required
                    >
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                    {errors.blood_group && (
                        <p className="mt-2 text-sm text-red-600">
                            {errors.blood_group}
                        </p>
                    )}
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="gender"
                        className="block font-medium text-gray-700"
                    >
                        Gender
                    </label>
                    <select
                        id="gender"
                        name="gender"
                        value={data.gender}
                        className="mt-1 block w-full"
                        autoComplete="gender"
                        onChange={(e) => setData("gender", e.target.value)}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Femel">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.gender && (
                        <p className="mt-2 text-sm text-red-600">
                            {errors.gender}
                        </p>
                    )}
                </div>

                <div className="mt-4">
                    <label
                        htmlFor="ready_to_donet"
                        className="block font-medium text-gray-700"
                    >
                        Ready to Donate Blood
                    </label>
                    <div className="mt-1">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                className="form-radio"
                                name="ready_to_donet"
                                value="yes"
                                checked={data.ready_to_donet === "yes"}
                                onChange={(e) =>
                                    setData("ready_to_donet", e.target.value)
                                }
                            />
                            <span className="ml-2">Yes</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                            <input
                                type="radio"
                                className="form-radio"
                                name="ready_to_donet"
                                value="no"
                                checked={data.ready_to_donet === "no"}
                                onChange={(e) =>
                                    setData("ready_to_donet", e.target.value)
                                }
                            />
                            <span className="ml-2">No</span>
                        </label>
                    </div>
                    {errors.ready_to_donet && (
                        <p className="mt-2 text-sm text-red-600">
                            {errors.ready_to_donet}
                        </p>
                    )}
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="age" value="Your Age" />

                    <TextInput
                        id="age"
                        type="number"
                        name="age"
                        value={data.age}
                        className="mt-1 block w-full"
                        autoComplete="age"
                        onChange={(e) => setData("age", e.target.value)}
                        required
                    />

                    <InputError message={errors.age} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="weight" value="Your Weight (in kg)" />

                    <TextInput
                        id="weight"
                        type="number"
                        name="weight"
                        value={data.weight}
                        className="mt-1 block w-full"
                        autoComplete="weight"
                        onChange={(e) => setData("weight", e.target.value)}
                        required
                    />

                    <InputError message={errors.weight} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel
                        htmlFor="academic_year"
                        value="Your Academic Year"
                    />

                    <TextInput
                        id="academic_year"
                        type="text"
                        name="academic_year"
                        value={data.academic_year}
                        className="mt-1 block w-full"
                        autoComplete="academic_year"
                        placeholder="YYYY-YYYY"
                        onChange={(e) =>
                            setData("academic_year", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.academic_year}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="class_roll" value="Class Roll" />

                    <TextInput
                        id="class_roll"
                        type="number"
                        name="class_roll"
                        value={data.class_roll}
                        className="mt-1 block w-full"
                        autoComplete="class_roll"
                        onChange={(e) => setData("class_roll", e.target.value)}
                        required
                    />

                    <InputError message={errors.class_roll} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="gurdian_name" value="Gurdian name" />

                    <TextInput
                        id="gurdian_name"
                        type="text"
                        name="gurdian_name"
                        value={data.gurdian_name}
                        className="mt-1 block w-full"
                        autoComplete="gurdian_name"
                        onChange={(e) =>
                            setData("gurdian_name", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.gurdian_name}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4">
                    <InputLabel
                        htmlFor="gurdian_phone_no"
                        value="Gurdian Phone Number"
                    />

                    <TextInput
                        id="gurdian_phone_no"
                        type="text"
                        name="gurdian_phone_no"
                        value={data.gurdian_phone_no}
                        className="mt-1 block w-full"
                        autoComplete="gurdian_phone_no"
                        onChange={(e) =>
                            setData("gurdian_phone_no", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.gurdian_phone_no}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4">
                    <InputLabel
                        htmlFor="permanent_address"
                        value="Permanent Address"
                    />

                    <TextInput
                        id="permanent_address"
                        type="text"
                        name="permanent_address"
                        value={data.permanent_address}
                        className="mt-1 block w-full"
                        autoComplete="permanent_address"
                        onChange={(e) =>
                            setData("permanent_address", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.permanent_address}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="profile_photo" value="Profile Photo" />

                    <input
                        id="profile_photo"
                        type="file"
                        name="profile_photo"
                        className="mt-1 block w-full"
                        autoComplete="profile_photo"
                        onChange={(e) =>
                            setData("profile_photo", e.target.files[0])
                        }
                    />

                    <InputError
                        message={errors.profile_photo}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
