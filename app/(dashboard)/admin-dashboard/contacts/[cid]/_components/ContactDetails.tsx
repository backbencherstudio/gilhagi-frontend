"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  FileIcon,
  Eye,
  CheckCircle2,
  XCircle,
  Image,
  ArrowLeft,
} from "lucide-react";
import ImagePreviewModal from "./ImagePreviewModal";
import HeadingTitle from "@/components/dashoboard/HeadingTittle";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

const mockUserData = {
  name: "Peter Weber",
  city: "Berlin",
  status: "Active",
  avatar: "/diverse-user-avatars.png",
  userId: "USR001",
  phone: "+46 123 4567 89",
  provider: "Vattenfall",
  email: "peter.weber@email.de",
  tariff: "Green Basic",
  location: "Musterstraße 10, 10115, Berlin",
  monthlyCost: "€89/month",
  endDate: "2025-01-01",
};

const documentSections = [
  {
    title: "Old Contract",
    subtitle: "SEPA Direct Debit Mandate",
    files: [{ name: "meter_photo_001.jpg", image: "/contract-document.png" }],
  },
  {
    title: "Power of Attorney",
    files: [
      { name: "meter_photo_001.jpg", image: "/power-of-attorney-document.png" },
    ],
  },
  {
    title: "Photo of The Meter",
    files: [{ name: "meter_photo_001.jpg", image: "/meter-photo.jpg" }],
  },
  {
    title: "Contract confirmation",
    files: [
      { name: "meter_photo_001.jpg", image: "/contract-confirmation.jpg" },
    ],
  },
  {
    title: "Price Increases",
    files: [
      { name: "meter_photo_001.jpg", image: "/price-increases-document.jpg" },
    ],
  },
  {
    title: "Invoices",
    files: [{ name: "meter_photo_001.jpg", image: "/invoice-document.png" }],
  },
];

export default function ContractDetailsPage() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    name: string;
  } | null>(null);
  const [approvalStatus, setApprovalStatus] = useState<
    "pending" | "approved" | "rejected"
  >("pending");
  const [windowStart, setWindowStart] = useState<string>("");
  const [windowEnd, setWindowEnd] = useState<string>("");
  const [renewalDate, setRenewalDate] = useState<string>("");
  const [saveStatus, setSaveStatus] = useState<"idle" | "saved">("idle");

  const handleApprove = () => {
    setApprovalStatus("approved");
  };

  const handleReject = () => {
    setApprovalStatus("rejected");
  };
  const handleSaveDates = () => {
    setSaveStatus("saved");
    setTimeout(() => setSaveStatus("idle"), 1500);
  };

  return (
    <div className="min-h-screen bg-background ">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <HeadingTitle
            title="Contract Details"
            subtitle="Review and approve the contract documents"
          />

          <Button
            onClick={() => router.back()}
            className="flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Go back
          </Button>
        </div>

        {/* User Card */}
        <Card className="mb-8 p-4">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start gap-4">
              <img
                src={mockUserData.avatar || "/placeholder.svg"}
                alt={mockUserData.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-2xl font-bold">{mockUserData.name}</h2>
                <p className="text-muted-foreground">{mockUserData.city}</p>
              </div>
            </div>
            <div
              className={`px-3 py-1 rounded-full text-sm font-medium border ${
                mockUserData.status === "Active"
                  ? "bg-green-50 text-green-700 border-green-200"
                  : "bg-gray-50 text-gray-700 border-gray-200"
              }`}
            >
              {mockUserData.status}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">User ID:</p>
              <p className="font-semibold">{mockUserData.userId}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Phone:</p>
              <p className="font-semibold">{mockUserData.phone}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Provider:</p>
              <p className="font-semibold">{mockUserData.provider}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Email:</p>
              <p className="font-semibold">{mockUserData.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Tariff:</p>
              <p className="font-semibold">{mockUserData.tariff}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Location:</p>
              <p className="font-semibold">{mockUserData.location}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                Monthly Cost:
              </p>
              <p className="font-semibold">{mockUserData.monthlyCost}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">End Date:</p>
              <p className="font-semibold">{mockUserData.endDate}</p>
            </div>
          </div>
        </Card>

        <Card className="mb-8 p-4">
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Cancellation Window</h3>
            <p className="text-sm text-muted-foreground">
              Set the cancellation period and optional renewal date
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground">Window Start</p>
              <Input
                type="date"
                value={windowStart}
                onChange={(e) => setWindowStart(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground">Window End</p>
              <Input
                type="date"
                value={windowEnd}
                onChange={(e) => setWindowEnd(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground">Renewal Date (optional)</p>
              <Input
                type="date"
                value={renewalDate}
                onChange={(e) => setRenewalDate(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <Button onClick={handleSaveDates} className="primary-btn">
              Save
            </Button>
            {saveStatus === "saved" && (
              <span className="text-green-600 text-sm">Saved</span>
            )}
          </div>
        </Card>

        {/* Document Sections */}
        <div className=" mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {documentSections.map((section, idx) => (
            <div
              key={idx}
              className="p-3 flex flex-col justify-between border border-gray-100 rounded-2xl "
            >
              <div>
                <h3 className="text-lg font-semibold mb-1 text-muted-foreground">
                  {section.title}
                </h3>
                {section.subtitle && (
                  <p className="text-sm text-muted-foreground mb-2">
                    {section.subtitle}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                {section.files.map((file, fileIdx) => (
                  <div
                    key={fileIdx}
                    className="flex flex-wrap gap-2 items-center justify-between p-3 bg-muted/50 rounded-lg border border-border"
                  >
                    <div className="flex  items-center gap-2.5">
                      <Image className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium text-sm text-wrap">
                        {file.name}
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        setSelectedImage({ url: file.image, name: file.name })
                      }
                      className="flex  items-center gap-2 px-3 py-1.5 text-sm text-primary hover:bg-primary/10 rounded-md transition-colors border cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      Preview
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-end">
          {approvalStatus === "pending" ? (
            <>
              <Button
                onClick={handleReject}
                variant="outline"
                size="lg"
                className="gap-2 bg-transparent"
              >
                <XCircle className="w-5 h-5" />
                Reject
              </Button>
              <Button
                onClick={handleApprove}
                size="lg"
                className="gap-2 bg-green-600 hover:bg-green-700 text-white"
              >
                <CheckCircle2 className="w-5 h-5" />
                Approve
              </Button>
            </>
          ) : (
            <div
              className={`px-4 py-3 rounded-lg text-sm font-medium ${
                approvalStatus === "approved"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {approvalStatus === "approved"
                ? "✓ Contract Approved"
                : "✗ Contract Rejected"}
            </div>
          )}
        </div>
      </div>

      {/* Image Preview Modal */}
      <ImagePreviewModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
