import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Teacher = ({ auth }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            Teachers Contact Number
        </AuthenticatedLayout>
    );
};

export default Teacher;
