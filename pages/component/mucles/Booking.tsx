"use client"

import { Tabs } from '@mantine/core'
import { IconNews, IconSettings2 } from '@tabler/icons-react'
import React from 'react'
import SelectSorting from '../atoms/SelectSorting'
import InputFloatingLabel from '../atoms/InputFloatingLabel'
import BookingCard from './BookingCard'
import Image from 'next/image'
import activity from "./../../../public/assets/activity.png"
import Button from '../atoms/Button'
import flight from "./../../../public/assets/flight (2).png"
import Seggestion from '../atoms/Seggestion'
export const Booking = () => {
  return (
    <Tabs color="violet"  defaultValue="Upcoming">
    <Tabs.List grow  position="center">
      <Tabs.Tab value="Upcoming"  px='xl' fw='bold'>Upcoming</Tabs.Tab>
      <Tabs.Tab value="Completed"  px='xl' fw='bold' >Completed</Tabs.Tab>
      <Tabs.Tab value="Cancelled"  px='xl'  fw='bold'  >Cancelled</Tabs.Tab>
    </Tabs.List>

    <Tabs.Panel value="Upcoming" pt='xs'>
        
        <div className='flex flex-row justify-between items-center'>
            <SelectSorting />
            <InputFloatingLabel />  
        </div>
        <div className='grid grid-cols-1 gap-1'>
            <div className='col-span-1'>
                <h6 className=' font-semibold text-lg'>Sharm El Sheikh</h6>
                <p className='text-sm text-gray-500'>tue,Dec 05</p>
            </div>
            <div className='col-span-1'>
                <BookingCard />
            </div>
            <div className='col-span-1 '>
                <div className='flex flex-row justify-between items-center rounded-lg py-5 px-3 bg-[rgb(253,29,29)]  bg-gradient-to-r  from-[#fd1d1d] to-[#fcb045]'>
                    <div className='flex flex-row justify-between items-center'>
                       <Image src={activity.src} alt="" width={150} height={50} />
                       <div className='flex flex-col ml-2'>
                        <p className='text-white text-sm font-semibold' >Got plans in Sharm El-Sheikh</p>
                        <p className='text-white text-sm  font-normal' >Book the best deals on activties for Sharm El-Sheikh</p>
                       </div>
                   </div>
                   <div>
                        <Button className='bg-white rounded-2xl py-2 px-3 text-orange-500 text-sm' >
                            Book Activities 
                        </Button>
                    </div>
               </div>
              
            </div>
            <div className='col-span-1'>
                <BookingCard />
            </div>
        </div>
      
    </Tabs.Panel>

    <Tabs.Panel value="Completed" pt="xs">
        <div className='flex flex-row justify-between items-center'>
            <SelectSorting />
            <InputFloatingLabel />  
        </div>
        <div className='flex p-5 '>
           <div className='m-auto '>
                <Image src={flight.src} className='m-auto' alt='' width={150} height={150} />
                <p className='text-lg font-semibold m-auto'>Abdo A... you have no recent Complete booking </p>
                <p className='text-sm text-gray-500 m-auto'>Start planning your next trip ! </p>
            </div>
        </div>
        <div className='flex flex-row justify-center '>
             <Seggestion />
             <Seggestion />
             <Seggestion />
        </div>


    
    </Tabs.Panel>

    <Tabs.Panel value="Cancelled" pt="xs">
      Settings tab content
    </Tabs.Panel>
  </Tabs>
  )
}
export default Booking
