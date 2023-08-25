import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const UsefulLink = ({ auth }) => {
    return (
        <AuthenticatedLayout user={auth.user}>UseFul Link</AuthenticatedLayout>
    );
};

export default UsefulLink;
