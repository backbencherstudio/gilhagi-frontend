import React from "react";

interface BadgeProps {
  status: "approved" | "pending" | "open" ; // Define possible status values
}

const CustomBadge: React.FC<BadgeProps> = ({ status }) => {
  // Define different styles based on the status
  const badgeStyles = {
    approved: "bg-[rgba(14,181,128,0.10)] text-[#0EB580] border-[#0EB580]",
    pending: "bg-[rgba(255,136,0,0.10)] text-[#F80] border-[#F80]",
    open: "bg-[rgba(37,133,246,0.10)]  border-[#2585F6] text-[#2585F6]",
  };

  return (
    <span
      className={`inline-flex justify-center items-center gap-2 border px-4 py-2 rounded-lg border-solid  text-xs font-medium leading-[132%] tracking-[0.06px] capitalize ${badgeStyles[status]}`}
    >
      {/* {status.charAt(0).toUpperCase() + status.slice(1)}{" "} */}
      {status}
      {/* Capitalizes the first letter of the status */}
    </span>
  );
};

export default CustomBadge;
