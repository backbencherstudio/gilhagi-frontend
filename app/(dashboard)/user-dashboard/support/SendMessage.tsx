"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useSendMessageUserMutation } from "@/redux/features/contactsMessage/contactMsgApi";
import { toast } from "sonner";

type FormValues = {
  subject: string;
  message: string;
};

export default function SendMessage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      subject: "",
      message: "",
    },
  });


  const [sendMessageUser, { isLoading: isSendMessageUserLoading }] = useSendMessageUserMutation();

  const onSubmit = async (data: FormValues) => {
    const payload = {
      
      subject: data.subject,
      message: data.message,
    };
    const res = await sendMessageUser(payload);

    if (res.data?.status) {
      toast.success(res.data?.message);
      reset();
    } else {
      toast.error(res.data?.message);
    }
  };

  return (
    <div className="section-div">
      <div>
        <h3 className="self-stretch text-[#1C2022] text-xl font-medium leading-[130%] tracking-[0.1px] mb-2">
          Nehmen Sie Kontakt mit uns auf
        </h3>

        <p className="self-stretch text-[#5F728B] text-base font-normal leading-[140%] tracking-[0.08px]">
          Haben Sie Fragen? Wir helfen Ihnen gerne.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        {/* Subject */}
        <div>
          <label className="block mb-2 text-[#1C2022] text-base font-medium leading-[140%]">
            Betreff *
          </label>

          <input
            placeholder="Wählen Sie ein Thema"
            className="border border-[#E2E8EE] px-5 py-4 rounded-lg border-solid w-full outline-none"
            type="text"
            {...register("subject", { required: "Betreff ist erforderlich" })}
          />

          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="mt-5">
          <label className="block mb-2 text-[#1C2022] text-base font-medium leading-[140%]">
            Nachricht *
          </label>

          <textarea
            className="border border-[#E2E8EE] px-5 py-4 rounded-lg border-solid min-h-[114px] w-full outline-none"
            placeholder="Lassen Sie uns wissen, wie wir Ihnen helfen können...."
            {...register("message", { required: "Nachricht ist erforderlich" })}
          />

          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <Button type="submit" className="primary-btn mt-8" disabled={isSendMessageUserLoading}>
          {isSendMessageUserLoading ? "Wird gesendet..." : "Nachricht senden"}
        </Button>
      </form>
    </div>
  );
}
