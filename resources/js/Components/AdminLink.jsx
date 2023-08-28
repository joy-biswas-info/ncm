import { Link } from "@inertiajs/react";

export default function AdminLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center align-middle px-1 pt-2 mt-2 leading-5 transition duration-250 ease-in-out focus:outline-none " +
                (active
                    ? "text-green-500 focus:border-green-600  font-semibold text-xl transition duration-250 ease-in-out "
                    : "border-transparent text-gray-200 hover:text-green-200 hover:border-gray-600 focus:text-gray-700 focus:border-gray-300 font-semibold ") +
                className
            }
        >
            {children}
        </Link>
    );
}
