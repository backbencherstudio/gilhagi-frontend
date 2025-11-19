export default function TrustedCompany() {
  return (
    <div className="py-10 md:py-20">
      <p className="self-stretch text-[#5F728B] text-center  text-2xl font-medium leading-[130%] tracking-[0.12px] mb-5 md:mb-10">
        Vertrauenswürdige und geprüfte Energieanbieter in Deutschland
      </p>

      {/* marquer cards */}
      <div className="flex gap-6 justify-center items-center">
        {Array.from({ length: 7 }, (_, i) => (
          <CompanyCard key={i} i={i + 1} />
        ))}
      </div>
    </div>
  );
}

const CompanyCard = ({ i }: { i: number }) => {
  return (
    <div className="flex flex-col items-start gap-2.5 border border-[#D8DEE4] [background:#F3F8FF]   rounded-[15px] border-solid">
      <img className="py-6 px-7.5" src={`/company/com_${i}.svg`} />
    </div>
  );
};
