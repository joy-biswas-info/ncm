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
                "inline-flex items-center align-middle px-1 pt-2 mt-2 text-xl font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "border-green-400 text-green-700 focus:border-green-600 font-semibold "
                    : "border-transparent text-gray-600 hover:text-green-700 hover:border-gray-600 focus:text-gray-700 focus:border-gray-300 font-semibold") +
                className
            }
        >
            {children}
        </Link>
    );
}
