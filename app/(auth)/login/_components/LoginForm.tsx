import React from "react";

export default function LoginForm() {
  return (
    <form className="flex w-[709px] flex-col items-start gap-12">
        {/* form info */}
      <div className="max-w-[609px]">
        <h2 className="self-stretch text-[#1C2022] font-family:Geist] text-5xl font-semibold leading-[130%]">Ein Konto erstellen, um Strom zu sparen</h2>
        <p className="w-[511px] text-lg font-normal leading-[160%]">Jetzt registrieren und von vielen Vorteilen profitieren!</p>
      </div>

      {/* actual form */}
      <div></div>
    </form>
  );
}
