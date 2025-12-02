
"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import TarrifInfo from './_components/TarrifInfo';
import ConfirmPage from './_components/ConfirmPage';

export default function page() {

  const router = useRouter();

  const handleConfirm = () => {
    router.push("/services/provider/success")
  }

  return (
    <div className=''>
    <ConfirmPage/>
     <br />
     <button onClick={handleConfirm}>ok</button>
    </div>
  )
}
