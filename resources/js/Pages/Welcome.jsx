import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome to NCM" />
            <div className="sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right z-10">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-100 dark:text-gray-100 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
                <div className="w-full top-20 lg:h-full container">
                    <div className="mx-auto w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                                <span className="block xl:inline dark:text-white">
                                    Information to Enrich
                                </span>{" "}
                                <span className="block text-indigo-600 xl:inline">
                                    Your Exprience
                                </span>
                            </h1>
                            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl dark:text-white">
                                Sign Up here and update your information so you
                                can find information about student of Manikganj
                                Nursing College, Manikganj. You will get blood
                                group, if one ready to donate blood, contact
                                information and many more.
                            </p>
                            {auth.user ? (
                                <div className="rounded-md shadow mt-5">
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                    >
                                        Log Out
                                    </Link>
                                </div>
                            ) : (
                                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <Link
                                            href={route("register")}
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                        >
                                            Get started
                                        </Link>
                                    </div>
                                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                        <Link
                                            href={route("login")}
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                                        >
                                            Log In
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                        <img
                            className="absolute inset-0 w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
