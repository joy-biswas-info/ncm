import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const List = ({ auth, mustVerifyEmail, status }) => {
    const [search, setSearch] = useState("");
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [blood_group, setBloodGroup] = useState([]);
    const allStudent = usePage().props.users;

    // Handeling Search
    const handleSearch = (e) => {
        setBloodGroup("");
        e.preventDefault();
        const searchTerm = search.toLowerCase(); // Convert search term to lowercase for case-insensitive search
        const filtered = allStudent.filter(
            (student) =>
                student.name.toLowerCase().includes(searchTerm) ||
                student.blood_group.toLowerCase().includes(searchTerm)
        );
        setFilteredStudents(filtered);
    };

    useEffect(() => {
        const filtered = allStudent.filter(
            (student) => !blood_group || student.blood_group === blood_group
        );
        setFilteredStudents(filtered);
    }, [blood_group]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    List
                </h2>
            }
        >
            <Head title="All Student" />
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    name="search"
                    placeholder="Search by name or email"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">Search</button>

                <select
                    name="blood_group"
                    value={blood_group}
                    onChange={(e) => setBloodGroup(e.target.value)}
                >
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    {/* Add more options for other blood groups */}
                </select>
                {/* <button type="submit">Filter</button> */}
            </form>
            {filteredStudents.length <= 0 && <div>All Student</div>}
            {blood_group && filteredStudents.length > 0 && (
                <h3>Result Showing for {blood_group}</h3>
            )}
            {search && filteredStudents.length > 0 && (
                <p>Search result for {search}</p>
            )}
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {(filteredStudents.length > 0
                    ? filteredStudents
                    : allStudent
                ).map((student) => (
                    <Card key={student.id} student={student} />
                ))}
            </div>
        </AuthenticatedLayout>
    );
};

export default List;
