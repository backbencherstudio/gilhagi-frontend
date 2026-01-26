import AllSection from '@/app/(flow)/services/_components/MainServices/AllSection'
import TariffSection from '@/app/(flow)/services/_components/MainServices/TariffSection'


const bestProviderData = [
  {
    id: "bp-1",
    name: "NaturEnergie Max",
    rating: 4.9,
    energyPrice: 29.5,
    basePrice: 6.95,
    newCustomerBonus: 100,
    instantBonus: 40,
    guarantee: 24,
    duration: 12,
    price: 79,
    savings: 720.5,
    provider: "NaturEnergie",
  },
  {
    id: "bp-2",
    name: "ÖkoFair Strom",
    rating: 4.7,
    energyPrice: 30.1,
    basePrice: 7.5,
    newCustomerBonus: 80,
    instantBonus: 20,
    guarantee: 12,
    duration: 12,
    price: 85,
    savings: 512.2,
    provider: "ÖkoFair",
  },
];

export default function AllProviderList() {
  return (
    <div>
       <TariffSection title="Tarife" tariffs={bestProviderData} />
    </div>
  )
}
