import React from 'react';

interface PurposeCardProps {
  title: string;
  description: string;
}

function PurposeCard({ title, description }: PurposeCardProps) {
  return (
    <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[20px] max-w-full lg:max-w-[370px] mx-auto lg:mx-0">
      {/* Purpose Header */}
      <div className="flex items-center gap-3 sm:gap-4 lg:gap-[20px]">
        <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[24px] lg:h-[22.704px] bg-[#939498] rounded-[4px] flex-shrink-0"></div>
        <h3 className="text-white font-montserrat text-base sm:text-lg lg:text-[20px] font-normal leading-6 sm:leading-7 lg:leading-[28px]">
          {title}
        </h3>
      </div>

      {/* Purpose Description */}
      <p className="text-white font-montserrat text-sm sm:text-base lg:text-[20px] font-normal leading-5 sm:leading-6 lg:leading-[28px] max-w-full lg:max-w-[370px]">
        {description}
      </p>
    </div>
  );
}

interface OurPurposeSectionProps {
  backgroundColor?: string;
  accentColor?: string;
}

function OurPurposeSection({
  backgroundColor = "#040404",
  accentColor = "#AB322C"
}: OurPurposeSectionProps = {}) {
  
  const purposes = [
    {
      title: "We Build What Matter",
      description: "We prioritize solving real issues for users, enterprises, and the future. Every solution we craft is developed considering user experience, trends, and market relevance at its core."
    },
    {
      title: "We Code with a Product Mindset",
      description: "We're not just developers—we own our products. Every line of code is composed to solve user challenges, enhance usability, and deliver long-term value."
    },
    {
      title: "We Build in Sync",
      description: "Innovative products are built through collaboration. Our engineers, designers, product managers, and collaborators work as a cohesive team, making every decision to enhance both the product and the business."
    }
  ];

  return (
    <div className="relative z-10 bg-[#040404] px-4 sm:px-6 lg:px-16 xl:px-[70px] py-16 sm:py-20 lg:py-28 xl:py-[110px]">
      <div className="">
        {/* Section Title */}
        <div className="mb-12 lg:mb-[59px]">
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl xl:text-[49.64px] font-bold leading-tight uppercase max-w-[1246px]">
            <span className="text-white">OUR </span>
            <span className={`text-[${accentColor}]`}>PURPOSE</span>
          </h2>
        </div>

        {/* Purpose Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[80px] ">
          {purposes.map((purpose, index) => (
            <PurposeCard 
              key={index}
              title={purpose.title}
              description={purpose.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPurposeSection;
