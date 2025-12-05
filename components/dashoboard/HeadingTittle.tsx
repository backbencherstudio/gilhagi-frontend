import React from 'react';

interface HeadingProps {
  title: string;
  subtitle: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const HeadingTitle: React.FC<HeadingProps> = ({ 
  title, 
  subtitle, 
  titleClassName = "text-[#1C2022] text-[32px] font-semibold leading-[130%]", 
  subtitleClassName = "text-[#5F728B] text-base font-normal leading-[140%] tracking-[0.08px]" 
}) => {
  return (
    <div>
      <h1 className={titleClassName}>
        {title}
      </h1>
      <p className={subtitleClassName}>
        {subtitle}
      </p>
    </div>
  );
};

export default HeadingTitle;
