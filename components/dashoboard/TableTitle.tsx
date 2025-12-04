import React from "react";

interface TitleProps {
  title: string;
  subtitle: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const TableTitle: React.FC<TitleProps> = ({
  title,
  subtitle,
  titleClassName = "text-[#1C2022]  text-lg font-semibold leading-[160%]",
  subtitleClassName = "text-[#5F728B]  text-base font-normal leading-[140%] tracking-[0.08px]",
}) => {
  return (
    <div>
      <h1 className={titleClassName}>{title}</h1>
      <p className={subtitleClassName}>{subtitle}</p>
    </div>
  );
};

export default TableTitle;
