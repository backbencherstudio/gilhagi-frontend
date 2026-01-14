import Image from "next/image";
import React from "react";
import LoginForm from "./LoginForm";
import { publicAxios } from "@/lib/api/publicAxios";

const LoginPageContent = () => {

  return (
    <div
      className="
        max-w-[1320px] mx-auto
        flex flex-col lg:flex-row-reverse
        gap-12 lg:gap-20
        px-4 lg:px-0
      "
    >
      {/* LEFT */}
      <div className="w-full lg:max-w-[709px]">
        {/* Info */}
        <div className="max-w-[600px] mb-10 lg:mb-12">
          <h2 className="text-[#1C2022] font-semibold text-3xl md:text-5xl leading-[130%] mb-4">
            Anmelden
          </h2>
          <p className="text-[#5F728B] text-base md:text-lg leading-[160%] max-w-[511px]">
            Melden Sie sich an, um Ihren Stromanbieter zu verwalten und den
            Wechselstatus einzusehen.
          </p>
        </div>

        {/* Form */}
        <LoginForm />
      </div>

      {/* RIGHT */}
      <div className="w-full lg:max-w-[580px] h-auto rounded-3xl overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src="/images/login.png"
          alt="login"
          width={1000}
          height={1000}
          priority
        />
      </div>
    </div>
  );
};

export default LoginPageContent;
