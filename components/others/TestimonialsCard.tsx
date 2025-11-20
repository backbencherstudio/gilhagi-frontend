import React from "react";
import VerifiedIcon from "@/components/icons/VerifiedIcon"; // update path if needed
import Star from "../icons/StarIcon";

type TestimonialsCardProps = {
  image: string;
  name: string;
  date: string;
  title: string;
  feedback: string;
  verified?: boolean;
  rating?: number;
};

const TestimonialsCard = ({
  image,
  name,
  date,
  title,
  feedback,
  verified = true,
  rating = 5,
}: TestimonialsCardProps) => {
  return (
    <div className="flex md:max-w-[419px] h-[350px] flex-col items-start gap-8 shrink-0 self-stretch border border-[#D8DEE4] p-6 rounded-2xl border-solid ">
      {/* Top Section */}
      <div>
        <div className="flex gap-2 mb-4">
          <img
            className="w-[54px] h-[54px] rounded-full"
            src={image}
            alt={name}
          />

          <div className="flex flex-col">
            <p className="text-[#1C2022] text-lg font-semibold leading-[160%]">
              {name}
            </p>

            <p className="text-[#5F728B] text-base font-medium leading-[160%] tracking-[0.08px] flex items-center gap-1">
              <span>{date}</span>
              <span className="mx-1">|</span>

              {verified && (
                <span className="flex items-center gap-1">
                  <VerifiedIcon /> Verifiziert
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex gap-0.5">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-[#1C2022] text-lg font-semibold leading-[160%]">
          {title}
        </h3>

        <p className="text-[#5F728B] text-lg font-normal leading-[160%]">
          “{feedback}”
        </p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
