import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const EmergencyContact = ({ auth }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            Emergency Contact Number
        </AuthenticatedLayout>
    );
};

export default EmergencyContact;
