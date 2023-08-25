import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import AdminLink from "@/Components/AdminLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDashboard,
    faSignOut,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function AdminLayout({ user, header, children }) {
    return (
        <>
            {user.role === "Admin" && (
                <div className="min-h-screen bg-gray-800 text-white grid grid-cols-[200px_minmax(900px,_1fr)]">
                    <div className="bg-white row-span-">
                        <ApplicationLogo />
                        <nav className=" flex flex-col justify-center px-4">
                            <AdminLink
                                href={route("admin.dashboard")}
                                active={route().current("admin.dashboard")}
                            >
                                <FontAwesomeIcon
                                    icon={faDashboard}
                                    className="mx-2"
                                />
                                Dashboard
                            </AdminLink>
                            <AdminLink
                                href={route("all.user")}
                                active={route().current("all.user")}
                            >
                                {" "}
                                <FontAwesomeIcon
                                    icon={faUser}
                                    className="mx-2"
                                />
                                All User
                            </AdminLink>
                            <AdminLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                {" "}
                                <FontAwesomeIcon
                                    icon={faSignOut}
                                    className="mx-2"
                                />
                                Log Out
                            </AdminLink>
                        </nav>
                    </div>
                    <main className="p-4 row-span-9">{children}</main>
                </div>
            )}
        </>
    );
}

{
    /* <div className="flex flex-col">
                    <ApplicationLogo />
                    <nav className=" flex flex-col justify-center px-4">
                        <NavLink
                            href={route("admin.dashboard")}
                            active={route().current("admin.dashboard")}
                        >
                            Dashboard
                        </NavLink>
                        <NavLink
                            href={route("all.user")}
                            active={route().current("all.user")}
                        >
                            Dashboard
                        </NavLink>
                    </nav>
                </div>
                <div className=" place-self-end">
                    <NavLink className=" text-start">Log Out</NavLink>
                </div> */
}
