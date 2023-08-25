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
                "inline-flex items-center px-1 pt-1 border-b-2 font-medium leading-5 transition duration-150 ease-in-out focus:outline-none text-xl" +
                (active
                    ? "border-green-600 text-green-600 focus:border-green-600 font-semibold"
                    : "border-transparent text-green-600 hover:text-green-700 hover:border-green-300 focus:text-green-700 focus:border-green-600 font-semibold") +
                className
            }
        >
            {children}
        </Link>
    );
}
