
"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {

  const router = useRouter();

  const handleConfirm = () => {
    router.push("/services/provider/success")
  }

  return (
    <div className='py-25'>
     FFFFFFFFFFFFFFFFFFFFFFFinal confirm
     <br />
     <button onClick={handleConfirm}>ok</button>
    </div>
  )
}
