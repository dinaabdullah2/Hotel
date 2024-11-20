import { IconMessage } from '@tabler/icons-react'
import React from 'react'
import hill from "./../../../public/assets/hill.jpg"
import Image from 'next/image'
import Link from 'next/link'

export const BookingCard = () => {
  return (
    <div className='rounded-xl shadow-md  mb-2 py-2'>
        <p className='  rounded-t-md flex flex-row items-center py-2 px-2 text-sm text-bg_banfsgy bg-violet-200'><IconMessage className='text-bg_banfsgy mx-2' /> Contect Stay Expo Customer services</p>
        <div className='flex flex-row justify-between items-center py-5 px-4 border border-gray-100 '>
        <p className='font-semibold text-sm'>ID: 122322434</p>
        <span className='text-green-700 bg-green-200 text-sm p-1 rounded-md'>Confirmed</span>
        </div>
        <div className='flex flex-row  items-center  border border-gray-100 '>
           
            <Image src={hill.src} alt="" width='100' height='300' />
          
            <div className='ml-4' >
               <p className='text-base font-semibold pb-2 '>Coral Hills Resort Sharm El-Sheikh</p>
               <div className='flex flex-row  items-center'>
                    <div className='flex flex-col '>
                        <span className='text-gray-700 text-sm'>Check in</span>
                        <span className='text-950 text-sm'>Tue, Dec 05</span>
                    </div>
                    <div className='flex flex-col px-2'>
                        <span className='text-gray-700 text-sm'>Check out</span>
                        <span className='text-950 text-sm'>Tue, Dec 05</span>
                    </div>
                </div>

            </div>
          
        </div>
        <div className='text-end  p-3  '>
                <Link className='text-sm text-blue-500 px-5' href="">Manage booking</Link>
        </div>
    </div>
  )
}
export default BookingCard