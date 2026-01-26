"use client";

import { DataTable } from "@/components/dashoboard/DataTable"
import ModalWrapper from "@/components/dashoboard/ModalWrapper";
import TableTitle from "@/components/dashoboard/TableTitle";
import { useGetContactMessagesAdminQuery } from "@/redux/features/contactsMessage/contactMsgApi";
import { Mail, Phone, User, Calendar, FileText, CheckCircle2, XCircle } from "lucide-react";
import { useState } from "react";

type ContactMessageAdminType = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    telephone_number: string;
    reference: string;
    news: string;
    privacy_policy: boolean;
    created_at: string;
    updated_at: string;
}


const columns = [
    {
        key: "id",
        header: "ID",
        render: (value: number, row: Record<string, unknown>) => `USR-${row.id}`,
    },
    {
        key: "first_name",
        header: "Full Name",
        render: (value: string, row: Record<string, unknown>) => `${row.first_name} ${row.last_name}`,
    },
    {
        key: "email",
        header: "Email",
        render: (value: string, row: Record<string, unknown>) => `${row.email}`,
    },
    {
        key: "telephone_number",
        header: "Telephone Number",
        render: (value: string, row: Record<string, unknown>) => `${row.telephone_number}`,
    },

    {
        key: "news",
        header: "News",
    },

    {
        key: "created_at",
        header: "Sent At",
        render: (value: string) => new Date(value).toLocaleDateString("de-DE"),
    },


]


export default function ContactMessageTable() {
    const { data: contactMessages, isLoading: isLoadingContactMessages, isError: isErrorContactMessages } = useGetContactMessagesAdminQuery();

    const [isContactMessageOpen, setIsContactMessageOpen] = useState(false);
    const [selectedContactMessage, setSelectedContactMessage] = useState<ContactMessageAdminType | null>(null);

    const handleView = (row: Record<string, unknown>) => {
        setIsContactMessageOpen(true);
        setSelectedContactMessage(row as ContactMessageAdminType);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("de-DE", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <>
            <div className="mb-4">
                <TableTitle title="All Contact Messages" subtitle="All your contact messages at a glance" />
            </div>
            <DataTable columns={columns} data={contactMessages?.data ?? []} onView={(row) => handleView(row)} loading={isLoadingContactMessages} isError={isErrorContactMessages} />

            <ModalWrapper
                isOpen={isContactMessageOpen}
                onClose={() => setIsContactMessageOpen(false)}
                title="Contact Message Details"
                description="View the complete contact message information"
                size="lg"
            >
                {selectedContactMessage && (
                    <div className="space-y-6 py-4">
                        {/* Personal Information Section */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-[#1C2022] border-b pb-2">
                                Personal Information
                            </h3>

                            <div className="space-y-3">
                                <InfoRow
                                    icon={<User className="w-4 h-4" />}
                                    label="Full Name"
                                    value={`${selectedContactMessage.first_name} ${selectedContactMessage.last_name}`}
                                />
                                <InfoRow
                                    icon={<Mail className="w-4 h-4" />}
                                    label="Email Address"
                                    value={selectedContactMessage.email}
                                />
                                <InfoRow
                                    icon={<Phone className="w-4 h-4" />}
                                    label="Telephone Number"
                                    value={selectedContactMessage.telephone_number}
                                />
                            </div>
                        </div>

                        {/* Message Details Section */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-[#1C2022] border-b pb-2">
                                Message Details
                            </h3>

                            <div className="space-y-3">
                                {selectedContactMessage.reference && (
                                    <InfoRow
                                        icon={<FileText className="w-4 h-4" />}
                                        label="Reference"
                                        value={selectedContactMessage.reference}
                                    />
                                )}

                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2 text-[#5F728B] text-sm font-medium">
                                        <FileText className="w-4 h-4" />
                                        <span>Message</span>
                                    </div>
                                    <div className="pl-6">
                                        <p className="text-[#1C2022] text-base leading-relaxed whitespace-pre-wrap">
                                            {selectedContactMessage.news || "No message provided"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Information Section */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-[#1C2022] border-b pb-2">
                                Additional Information
                            </h3>

                            <div className="space-y-3">
                                <InfoRow
                                    icon={<Calendar className="w-4 h-4" />}
                                    label="Sent At"
                                    value={formatDate(selectedContactMessage.created_at)}
                                />

                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-2 text-[#5F728B] text-sm font-medium min-w-[140px]">
                                        {selectedContactMessage.privacy_policy ? (
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                        ) : (
                                            <XCircle className="w-4 h-4 text-red-500" />
                                        )}
                                        <span>Privacy Policy</span>
                                    </div>
                                    <span className={`text-sm font-medium ${selectedContactMessage.privacy_policy
                                        ? "text-green-600"
                                        : "text-red-600"
                                        }`}>
                                        {selectedContactMessage.privacy_policy ? "Accepted" : "Not Accepted"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </ModalWrapper>
        </>
    );
}

// InfoRow Component
interface InfoRowProps {
    icon?: React.ReactNode;
    label: string;
    value: string;
}

function InfoRow({ icon, label, value }: InfoRowProps) {
    return (
        <div className="flex items-start gap-3">
            <div className="flex items-center gap-2 text-[#5F728B] text-sm font-medium min-w-[140px]">
                {icon}
                <span>{label}</span>
            </div>
            <div className="flex-1">
                <p className="text-[#1C2022] text-base font-medium wrap-break-word">
                    {value}
                </p>
            </div>
        </div>
    );
}