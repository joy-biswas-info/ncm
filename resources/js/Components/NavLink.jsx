import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "border-indigo-400 text-white focus:border-indigo-700 font-semibold"
                    : "border-transparent text-gray-100 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 font-semibold") +
                className
            }
        >
            {children}
        </Link>
    );
}
