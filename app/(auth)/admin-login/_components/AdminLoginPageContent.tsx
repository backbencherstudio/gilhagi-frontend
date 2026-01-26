import Image from "next/image";
import React from "react";
import AdminLoginForm from "./AdminLoginForm";

const AdminLoginPageContent = () => {
  return (
    <div
      className="
        max-w-[1320px] mx-auto
        flex flex-col lg:flex-row-reverse
        gap-12 lg:gap-20
        px-4 lg:px-0
        py-10 lg:py-20
      "
    >
      {/* RIGHT SIDE: Content & Form */}
      <div className="w-full lg:max-w-[709px] flex flex-col justify-center">
        {/* Info */}
        <div className="max-w-[600px] mb-10 lg:mb-12">
          <h2 className="text-[#1C2022] font-semibold text-3xl md:text-5xl leading-[130%] mb-4">
            Admin Anmelden
          </h2>
          <p className="text-[#5F728B] text-base md:text-lg leading-[160%] max-w-[511px]">
            Melden Sie sich als Administrator an, um das System zu verwalten und
            alle Funktionen zu nutzen.
          </p>
        </div>

        {/* Form */}
        <AdminLoginForm />
      </div>

      {/* LEFT SIDE: Image Background */}
      {/* Added relative positioning and dimensions to hold the image */}
      <div className="w-full lg:flex-1 relative min-h-[300px] lg:min-h-[600px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/images/admin-login-bg.png" // Path relative to the public folder
          alt="Electricity Grid Background"
          fill
          className="object-cover"
          priority // Loads this image immediately as it is above the fold
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        
        {/* Optional: Dark Overlay if text needs to go over it, 
            or to make the blue pop more against the white page */}
        <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
      </div>
    </div>
  );
};

export default AdminLoginPageContent;