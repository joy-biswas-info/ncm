import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const List = ({ auth, mustVerifyEmail, status }) => {
    const [search, setSearch] = useState("");
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [blood_group, setBloodGroup] = useState([]);
    const [bloodResult, setBloodResult] = useState(false);
    const allStudent = usePage().props.students;

    // Handeling Search
    const handleSearch = (e) => {
        e.preventDefault();
    };
    useEffect(() => {
        setBloodResult(true);
        const searchTerm = search.toLowerCase();
        const filtered = allStudent.filter(
            (student) =>
                student.name.toLowerCase().includes(searchTerm) ||
                student.blood_group.toLowerCase().includes(searchTerm) ||
                student.academic_year.toLowerCase().includes(searchTerm)
        );
        setFilteredStudents(filtered);
    }, [search]);

    useEffect(() => {
        setBloodResult(false);
        setSearch("");
        const filtered = allStudent.filter(
            (student) => !blood_group || student.blood_group === blood_group
        );
        setFilteredStudents(filtered);
    }, [blood_group]);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="All Student" />
            <section className="container mx-auto my-6">
                <div className="flex items-center-justify-center">
                    <form onSubmit={handleSearch}>
                        <select
                            name="blood_group"
                            value={blood_group}
                            onChange={(e) => setBloodGroup(e.target.value)}
                        >
                            <option value=" ">Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </form>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            name="search"
                            placeholder="Search by name or email"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        {/* <button type="submit">Search</button> */}
                    </form>
                </div>

                <div>
                    {blood_group &&
                        filteredStudents.length > 0 &&
                        !bloodResult && (
                            <h3 className="mt-4">
                                Result Showing for {blood_group}
                            </h3>
                        )}
                </div>
                <div>
                    {blood_group &&
                        filteredStudents.length <= 0 &&
                        !bloodResult && (
                            <h3 className="mt-4">You are showing all</h3>
                        )}
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {filteredStudents.length === 0 && search && (
                        <div>
                            No students found for your search. <br /> Displaying
                            all result
                        </div>
                    )}
                    {(filteredStudents.length > 0
                        ? filteredStudents
                        : allStudent
                    ).map((student) => (
                        <Card key={student.id} student={student} />
                    ))}
                </div>
            </section>
        </AuthenticatedLayout>
    );
};

export default List;
