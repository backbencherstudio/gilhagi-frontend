"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Eye,
  CheckCircle2,
  XCircle,
  Image,
  ArrowLeft,
} from "lucide-react";
import ImagePreviewModal from "./ImagePreviewModal";
import HeadingTitle from "@/components/dashoboard/HeadingTittle";
import { useParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useGetContractByIdQuery, useUpdateContractWindowMutation, useApproveContractMutation, useRejectContractMutation } from "@/redux/features/contracts/contractsApi";
import { toast } from "sonner";
import { useGetUserDocumentByIdQuery } from "@/lib/api/documentApi";
import { convertApiResponseToDocumentSections } from "./convertApiResponseToDocumentSections";

const defaultDocumentSections = [
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
  const { cid: contractId } = useParams() as { cid: string };
  const id = contractId?.split("-")[1];
  const { data: contract } = useGetContractByIdQuery(id as string) as any;

  const [windowStart, setWindowStart] = useState<string>("");
  const [windowEnd, setWindowEnd] = useState<string>("");
  const [renewalDate, setRenewalDate] = useState<string>("");
  const [updateContractWindow, { isLoading: isUpdateContractWindowLoading }] = useUpdateContractWindowMutation();
  const [approveContract, { isLoading: isApproveContractLoading }] = useApproveContractMutation();
  const [rejectContract, { isLoading: isRejectContractLoading }] = useRejectContractMutation();
  const [documentSections, setDocumentSections] = useState<any[]>(defaultDocumentSections);
  
  // Store original dates to track changes
  const originalDatesRef = useRef<{
    windowStart: string;
    windowEnd: string;
    renewalDate: string;
  }>({
    windowStart: "",
    windowEnd: "",
    renewalDate: "",
  });

  // Get user documents query
  const userId = contract?.data?.user_id;
  const { data: documentData } = useGetUserDocumentByIdQuery(userId  ?? "", {
    skip: !userId, // Skip the query if userId is not available
  }) as any;

  // Log document data when available
  useEffect(() => {
    if (documentData) {
      const documentSections = convertApiResponseToDocumentSections(documentData);
      setDocumentSections(documentSections);
    }
  }, [documentData]);


  // console.log(documentSections);

  const userData = {
    name: contract?.data?.user?.first_name + " " + contract?.data?.user?.last_name,
    city: contract?.data?.location,
    status: contract?.data?.status === "approved" ? "Active" : "Pending",
    avatar: "/diverse-user-avatars.png",
    userId: `USR${String(contract?.data?.user_id).padStart(3, '0')}`,
    phone: contract?.data?.phone_number,
    email: contract?.data?.email,
    provider: contract?.data?.vendor?.provider_name || "N/A",
    tariff: contract?.data?.tariff?.tariff_name,
    location: contract?.data?.location,
    monthlyCost: contract?.data?.tariff?.price_kwh,
    endDate: contract?.data?.created_at?.split("T")[0],
  };

  // Helper function to convert ISO date string to YYYY-MM-DD format (for input)
  const formatDateForInput = (isoDateString: string | undefined): string => {
    if (!isoDateString) return "";
    try {
      return new Date(isoDateString).toISOString().split("T")[0];
    } catch {
      return "";
    }
  };

  // Helper function to convert YYYY-MM-DD to MM/DD/YYYY format (for API)
  const formatDateForAPI = (dateString: string): string => {
    if (!dateString) return "";
    try {
      const [year, month, day] = dateString.split("-");
      return `${month}/${day}/${year}`;
    } catch {
      return "";
    }
  };

  // Check if dates have changed (isDirty)
  const isDirty =
    windowStart !== originalDatesRef.current.windowStart ||
    windowEnd !== originalDatesRef.current.windowEnd ||
    renewalDate !== originalDatesRef.current.renewalDate;

  // Update state when contract data loads
  useEffect(() => {
    if (contract?.data) {
      const formattedWindowStart = formatDateForInput(contract.data.window_start);
      const formattedWindowEnd = formatDateForInput(contract.data.window_end);
      const formattedRenewalDate = formatDateForInput(contract.data.renewal_date);

      setWindowStart(formattedWindowStart);
      setWindowEnd(formattedWindowEnd);
      setRenewalDate(formattedRenewalDate);

      // Store original values for comparison
      originalDatesRef.current = {
        windowStart: formattedWindowStart,
        windowEnd: formattedWindowEnd,
        renewalDate: formattedRenewalDate,
      };
    }
  }, [contract?.data]);

  const handleApprove = () => {
    approveContract(id as string).unwrap().then((res: any) => {
      toast.success(res.message || "Contract approved successfully");
    }).catch((err: any) => {
      toast.error(err.message || "Failed to approve contract");
    });
  };

  const handleReject = () => {
    rejectContract(id as string).unwrap().then((res: any) => {
      toast.success(res.message || "Contract rejected successfully");
    }).catch((err: any) => {
      toast.error(err.message || "Failed to reject contract");
    });
  };

  const handleSaveDates = async () => {
    try {
      const formattedWindowStart = formatDateForAPI(windowStart);
      const formattedWindowEnd = formatDateForAPI(windowEnd);
      const formattedRenewalDate = formatDateForAPI(renewalDate);

      const response = await updateContractWindow({
        id: id as string,
        windowStart: formattedWindowStart,
        windowEnd: formattedWindowEnd,
        renewalDate: formattedRenewalDate,
      });

      if (response.data) {
        toast.success("Contract window updated successfully");
        // Update original dates after successful save
        originalDatesRef.current = {
          windowStart,
          windowEnd,
          renewalDate,
        };
      }
    } catch (error) {
      toast.error("Failed to update contract window");
    }
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
                src={userData.avatar || "/placeholder.svg"}
                alt={userData.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-2xl font-bold">{userData.name}</h2>
                <p className="text-muted-foreground">{userData.city}</p>
              </div>
            </div>
            <div
              className={`px-3 py-1 rounded-full text-sm font-medium border ${userData.status === "Active"
                ? "bg-green-50 text-green-700 border-green-200"
                : "bg-gray-50 text-gray-700 border-gray-200"
                }`}
            >
              {userData.status}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">User ID:</p>
              <p className="font-semibold">{userData.userId}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Phone:</p>
              <p className="font-semibold">{userData.phone}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Provider:</p>
              <p className="font-semibold">{userData.provider}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Email:</p>
              <p className="font-semibold">{userData.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Tariff:</p>
              <p className="font-semibold">{userData.tariff}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Location:</p>
              <p className="font-semibold">{userData.location}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                Monthly Cost:
              </p>
              <p className="font-semibold">{userData.monthlyCost}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">End Date:</p>
              <p className="font-semibold">{userData.endDate}</p>
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
            <Button
              onClick={handleSaveDates}
              className="primary-btn"
              disabled={!isDirty || isUpdateContractWindowLoading}
            >
              {isUpdateContractWindowLoading ? "Saving..." : "Save"}
            </Button>
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
                {section.files.map((file: any, fileIdx: number) => (
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
          {contract?.data?.status === "pending" ? (
            <>
              <Button
                onClick={handleReject}
                variant="outline"
                size="lg"
                className="gap-2 bg-transparent"
                disabled={isRejectContractLoading}
              >
                <XCircle className="w-5 h-5" />
                {isRejectContractLoading ? "Rejecting..." : "Reject"}
              </Button>
              <Button
                onClick={handleApprove}
                size="lg"
                className="gap-2 bg-green-600 hover:bg-green-700 text-white"
                disabled={isApproveContractLoading}
              >
                <CheckCircle2 className="w-5 h-5" />
                {isApproveContractLoading ? "Approving..." : "Approve"}
              </Button>
            </>
          ) : (
            <div
              className={`px-4 py-3 rounded-lg text-sm font-medium ${contract?.data?.status === "approved"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
                }`}
            >
              {contract?.data?.status === "approved"
                ? "Contract Approved"
                : "Contract Rejected"}
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