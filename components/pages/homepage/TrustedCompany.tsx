import Marquee from "react-fast-marquee";

export default function TrustedCompany() {
  return (
    <div className="py-10 md:py-20 max-w-[1600px] mx-auto p-4 md:p-0">
      <p className="self-stretch text-[#5F728B] text-center text-xl md:text-2xl font-medium leading-[130%] tracking-[0.12px] mb-8 md:mb-10">
       Vertrauenswürdige und geprüfte Energieanbieter in Österreich
      </p>

      {/* Marquee start */}
      <Marquee
        speed={40}
        gradient={true}
        gradientWidth={100}
        gradientColor={"#ffffff"} // match your bg (#F3F8FF)
        pauseOnHover
      >
        {Array.from({ length: 7 }, (_, i) => (
          <div key={i} className="mr-6">
            <CompanyCard i={i + 1} />
          </div>
        ))}
      </Marquee>
      {/* Marquee end */}
    </div>
  );
}

const CompanyCard = ({ i }: { i: number }) => {
  return (
    <div className="flex flex-col items-start gap-2.5 border border-[#D8DEE4] [background:#F3F8FF] rounded-md md:rounded-[15px] border-solid">
      <img
        className="px-2 py-1 md:py-6 md:px-7.5"
        src={`/company/com_${i}.svg`}
      />
    </div>
  );
};
