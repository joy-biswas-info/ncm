import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <nav className="sm:fixed sm:top-0 sm:right-0 p-6 text-right z-10">
                <Link
                    href={route("login")}
                    className="font-semibold text-gray-600 hover:text-gray-100 dark:text-gray dark:hover:text-gray-700 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Log in
                </Link>

                <Link
                    href={route("register")}
                    className="ml-4 font-semibold text-gray-900 hover:text-gray-900 dark:text-gray-900 dark:hover:text-gray-700 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Register
                </Link>
            </nav>
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
