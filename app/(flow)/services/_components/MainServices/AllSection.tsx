import TariffSection from "./TariffSection";

export default function AllSection({ tariffs }: { tariffs: any[] }) {
  return (
    <>
      <TariffSection title="Tarife" tariffs={tariffs} />
    </>
  );
}
