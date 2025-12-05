import Image from "next/image";
import React from "react";
import RegisterForm from "./RegisterForm";

const RegisterPageContent = () => {
  return (
    <div
      className="
        max-w-[1320px] mx-auto 
        flex flex-col lg:flex-row 
        gap-12 lg:gap-20 
        px-4 lg:px-0
      "
    >
      {/* LEFT */}
      <div className="w-full lg:max-w-[709px]">
        {/* Info */}
        <div className="max-w-[609px] mb-10 lg:mb-12">
          <h2 className="text-[#1C2022] font-semibold text-3xl md:text-5xl leading-[130%] mb-4">
            Ein Konto erstellen, um Strom zu sparen
          </h2>
          <p className="text-[#5F728B] text-base md:text-lg leading-[160%] max-w-[511px]">
            Jetzt registrieren und von vielen Vorteilen profitieren!
          </p>
        </div>

        {/* Form */}
        <RegisterForm />
      </div>

      {/* RIGHT */}
      <div className="w-full lg:max-w-[542px] h-auto rounded-3xl overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src="/images/register-pic.png"
          alt="register"
          width={1000}
          height={1000}
          priority
        />
      </div>
    </div>
  );
};

export default RegisterPageContent;
