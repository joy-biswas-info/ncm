import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            phone: user.phone,
            age: user.age,
            weight: user.weight,
            class_roll: user.class_roll,
            blood_group: user.blood_group,
            ready_to_donet: user.ready_to_donet,
            academic_year: user.academic_year,
            gurdian_name: user.gurdian_name,
            gurdian_phone_no: user.gurdian_phone_no,
            permanent_address: user.permanent_address,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            {status && setTimeout(300) && (
                <p className="p-2 bg-green-500 text-white">{status}</p>
            )}

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>
                <div>
                    <InputLabel htmlFor="phone" value="Phone" />

                    <TextInput
                        id="phone"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.phone}
                        onChange={(e) => setData("phone", e.target.value)}
                        required
                        autoComplete="phone"
                    />

                    <InputError className="mt-2" message={errors.phone} />
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

                <div className="mt-1">
                    <label
                        htmlFor="blood_group"
                        className="block font-medium text-gray-700"
                    >
                        Interested to Donate Blood
                    </label>
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            className="form-radio"
                            name="ready_to_donet"
                            value="Yes"
                            checked={data.ready_to_donet === "Yes"}
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
                            value="No"
                            checked={data.ready_to_donet === "No"}
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

                <div className="mt-4">
                    <InputLabel htmlFor="age" value="Your Age" />

                    <TextInput
                        id="age"
                        type="text"
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
                    <InputLabel htmlFor="weight" value="Your Weight" />

                    <TextInput
                        id="weight"
                        type="text"
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
                        type="text"
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

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
