import Image from "next/image";
import React from "react";
import RegisterForm from "./RegisterForm";

const RegisterPageContent = () => {
  return (
    <div className="max-w-[1320px] mx-auto py-25 flex  gap-20">
      {/* LEFT */}
      <div className="max-w-[709px] ">
        {/* info */}
        <div className="max-w-[609px] mb-12">
          <h2 className="self-stretch text-[#1C2022] font-family:Geist] text-5xl font-semibold leading-[130%] mb-4">
            Ein Konto erstellen, um Strom zu sparen
          </h2>
          <p className="w-[511px] text-lg font-normal leading-[160%] text-[#5F728B]">
            Jetzt registrieren und von vielen Vorteilen profitieren!
          </p>
        </div>
        {/* form */}
        <RegisterForm />
      </div>

      {/* RIGHT */}
      <div className="max-w-[542px] max-h-[776px] overflow-hidden rounded-3xl">
        <Image
          className="w-full h-full object-cover"
          src="/images/register-pic.png"
          alt="register"
          height={1000}
          width={1000}
        />
      </div>
    </div>
  );
};

export default RegisterPageContent;
