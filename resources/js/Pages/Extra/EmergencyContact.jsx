import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const EmergencyContact = ({ auth }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Emergency Contact Number" />
            Emergency Contact Number
        </AuthenticatedLayout>
    );
};

export default EmergencyContact;
