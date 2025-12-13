import React from "react";

interface HeadingProps {
  title: string;
  subtitle: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const HeadingTitle: React.FC<HeadingProps> = ({
  title,
  subtitle,
  titleClassName = `
    text-[#1C2022]
    font-semibold
    leading-[130%]
    text-2xl
    sm:text-3xl
    lg:text-[32px]
  `,
  subtitleClassName = `
    text-[#5F728B]
    font-normal
    leading-[140%]
    tracking-[0.08px]
    text-sm
    sm:text-base
    mt-1
  `,
}) => {
  return (
    <div>
      <h1 className={titleClassName.trim()}>
        {title}
      </h1>
      <p className={subtitleClassName.trim()}>
        {subtitle}
      </p>
    </div>
  );
};

export default HeadingTitle;
