
"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

export default function page() {

  const router = useRouter();

  const handleSwitch = () => {
    router.push(`/services/provider/sp-1/details`);

  }

  return (
    <div className='py-25'>
      this is tarif id with detail pages 
      Tariff Summary page
      <br />
      <button onClick={handleSwitch} className='px-2 py-3 border bg-black text-white'>switch noww</button>
    </div>
  )
}
