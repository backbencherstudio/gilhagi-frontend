import TariffSection from "./TariffSection";


export default function AllSection({ sponsorData, topMatchData, bestProviderData }:any) {
  return (
    <>
      <TariffSection 
        title="Sponsor" 
        ribbon="Top-Service: Servicequalität zertifiziert von TÜV Süd" 
        tariffs={sponsorData} 
      />

      <TariffSection 
        title="Top Match"
        subtitle="Berlin / Mitte - 6 von 220 Tarifen ab 47,27 €/Monat"
        ribbon="Top-Service: Servicequalität zertifiziert von TÜV Süd"
        tariffs={topMatchData}
      />

      <TariffSection 
        title="Bester Anbieter"
        subtitle="Berlin / Mitte - 6 von 220 Tarifen ab 47,27 €/Monat"
        tariffs={bestProviderData}
      />
    </>
  );
}
