"use client"

import { Checkbox } from "@/components/ui/checkbox";
import { Mail, MapPin, Phone } from "lucide-react";
import { useCreateContactMessageUserMutation } from "@/redux/features/contactsMessage/contactMsgApi";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-16 md:py-32 bg-[#F9F9F9] relative overflow-hidden px-4 xl:px-0"
    >
      {/* Background thunder effect */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="/images/bolt-bg.svg"
          alt=""
        />
      </div>

      <div className="relative z-10 max-w-[1256px] mx-auto flex flex-col lg:flex-row lg:items-start lg:gap-16">
        {/* LEFT CONTENT */}
        <ContactInfo />

        {/* RIGHT FORM */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

const ContactInfo = () => {
  return (
    <div className="w-full space-y-10 lg:space-y-14 max-w-full lg:max-w-[528px] shrink-0">
      <div>
        <h2 className="text-[#1C2022] text-3xl sm:text-4xl md:text-5xl font-semibold leading-[130%] mb-4">
          Kontaktieren Sie uns
        </h2>
        <p className="text-[#5F728B] text-base sm:text-lg font-normal leading-[160%]">
          Haben Sie Fragen oder benötigen Sie Hilfe beim Wechsel Ihres
          Stromanbieters? Unser Team ist hier, um es einfach und stressfrei zu
          machen. Kontaktieren Sie uns jederzeit, wir helfen Ihnen gerne beim
          Sparen.
        </p>
      </div>

      {/* Contact Info */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#085EC4] text-white rounded-lg">
            <Mail className="w-6 h-6" />
          </div>
          <p className="text-[#1C2022] text-lg font-medium leading-[160%] break-words">
          support@wechselsicher.at
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#085EC4] text-white rounded-lg">
            <Phone className="w-6 h-6" />
          </div>
          <p className="text-[#1C2022] text-lg font-medium leading-[160%] break-words">
          +41 78 447 44 67
          </p>
        </div>

        {/* <div className="flex items-center gap-3">
          <div className="p-2 bg-[#085EC4] text-white rounded-lg">
            <MapPin className="w-6 h-6" />
          </div>
          <p className="text-[#1C2022] text-lg font-medium leading-[160%] break-words">
            Musterstraße 12, 10115 Berlin, Deutschland
          </p>
        </div> */}
      </div>
    </div>
  );
};

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from "sonner";

// Define the interface based on your JSON structure
interface FormValues {
  first_name: string;
  last_name: string;
  email: string;
  telephone_number: string;
  reference: string;
  news: string;
  privacy_policy: boolean;
}

const ContactForm = () => {
  // Initialize useForm
  const [createContactMessageUser, { isLoading: isCreateContactMessageUserLoading }] = useCreateContactMessageUserMutation(); 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      telephone_number: "",
      reference: "",
      news: "",
      privacy_policy: false,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log("Form Data:", data);
    // Add your API call logic here
    try {
      const res = await createContactMessageUser(data);
      console.log(res.data);
      toast.success(res.data?.message);
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="bg-white border border-[#D8DEE4] shadow-lg rounded-2xl p-6 sm:p-8 space-y-5"
    >
      {/* Name and Contact Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
        <div>
          <label className="form-label">Vorname *</label>
          <input
            {...register("first_name", { required: "Required" })}
            type="text"
            placeholder="z.B. Tonu"
            className={`form-input ${errors.first_name ? 'border-red-500' : ''}`}
          />
        </div>

        <div>
          <label className="form-label">Nachname *</label>
          <input
            {...register("last_name", { required: "Required" })}
            type="text"
            placeholder="z.B. Islam"
            className={`form-input ${errors.last_name ? 'border-red-500' : ''}`}
          />
        </div>

        <div>
          <label className="form-label">E-Mail *</label>
          <input
            {...register("email", { 
              required: "Required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
            })}
            type="email"
            placeholder="tonu@example.com"
            className={`form-input ${errors.email ? 'border-red-500' : ''}`}
          />
        </div>

        <div>
          <label className="form-label">Telefonnummer *</label>
          <input
            {...register("telephone_number", { required: "Required" })}
            type="text"
            placeholder="z.B. +46 123 4567 89"
            className={`form-input ${errors.telephone_number ? 'border-red-500' : ''}`}
          />
        </div>
      </div>

      {/* Subject / Reference */}
      <div>
        <label className="form-label block">Betreff *</label>
        <input
          {...register("reference", { required: "Required" })}
          type="text"
          placeholder="z.B. Support"
          className={`form-input w-full ${errors.reference ? 'border-red-500' : ''}`}
        />
      </div>

      {/* Message / News */}
      <div>
        <label className="form-label">Nachricht *</label>
        <textarea
          {...register("news", { required: "Required" })}
          rows={4}
          placeholder="Teilen Sie uns mit, wie wir Ihnen helfen können…"
          className={`form-input max-h-60 ${errors.news ? 'border-red-500' : ''}`}
        />
      </div>

      {/* Checkbox */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5">
          {/* Note: If you use a custom UI component like <Checkbox />, 
            use the 'register' on the underlying hidden input or use <Controller /> 
          */}
          <input 
            type="checkbox"
            {...register("privacy_policy", { required: true })}
            className="w-5 h-5 accent-[#085EC4]"
          />
          <p className="text-[#707070] text-sm sm:text-base font-normal leading-[160%] tracking-[0.08px]">
            Ich stimme der Datenschutzrichtlinie zu und erkläre mich damit
            einverstanden, von Wechselsicher kontaktiert zu werden.
          </p>
        </div>
        {errors.privacy_policy && (
          <span className="text-red-500 text-xs">Sie müssen zustimmen, um fortzufahren.</span>
        )}
      </div>

      {/* Submit Button */}
      <button 
        type="submit"
        disabled={isCreateContactMessageUserLoading}
        className="bg-[#085EC4] text-white font-semibold py-3.5 px-6 rounded-full hover:bg-blue-700 transition cursor-pointer w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isCreateContactMessageUserLoading ? "Nachricht senden..." : "Nachricht senden"}
      </button>
    </form>
  );
};

