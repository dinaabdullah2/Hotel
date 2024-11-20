"use client"
import React, { useState } from 'react'
import SelectForm from '../atoms/SelectForm'
import CheckboxComp from '../atoms/CheckBox'
import {  Tabs } from '@mantine/core'
import Rating from "../atoms/Rating";
import Image from 'next/image'
import { IconPhone } from '@tabler/icons-react'
import imgCustomer from "../../../public/assets/c.webp";
import Link from 'next/link'

const FilterSearch = () => {
  const [activeTab, setActiveTab] = useState<any>('first');


    const onClick: React.MouseEventHandler<HTMLElement> = (e) => {
      //@ts-ignore
      e.currentTarget?.nextSibling?.setAttribute("data-active", true)  // <a data-id="0" class="active nav-link">Info</a>
    }
  

  return (
    <>
    <div className="mt-5 custom-navigation-filter-search">
            <p className="  font-semibold py-2">Sort By</p>
            <SelectForm />
          </div>
          <div className="mt-5 ">
            <h3 className="font-semibold py-2 border-b-[#ccc] border-b">Deals</h3>
          
            <CheckboxComp
              label="Retail - you pick the hotel"
            />
            <CheckboxComp
              label="Express Deals & Pricebreakers"
            />
            
          </div>
          <div className="mt-5">
            <h3 className="font-semibold py-2 border-b-[#ccc] border-b">Your Budget</h3>
            
              <CheckboxComp label="$$$$$" text='$0 to $80 per night' />
             
              <CheckboxComp label="$$$$$" text='$0 to $80 per night' />
              
              <CheckboxComp label="$$$$$" text='$0 to $80 per night' />
           
          </div>
          <div className="mt-5">
            <h3 className=" font-semibold py-2 border-b-[#ccc] border-b">Rate Options</h3>
       
              <CheckboxComp label=" Free Cancellation"  text='(22)'/>
              
              <CheckboxComp className="mt-3" label="Pay Later " text='(31)' />

          </div>
          <div className="mt-5">
            <h3 className=" font-semibold py-2 border-b-[#ccc] border-b">Hotel Star Level </h3>
            <div className="mt-5">
              <Rating  >
                <Tabs.List >
                  <Tabs.Tab
                    onClick={onClick}
                    value="five"
                    // icon={<IconSettings size="1rem" />}
                  >
                    5+
                  </Tabs.Tab>

                  <Tabs.Tab
                   onClick={onClick}
                    value="six"
                    // icon={<IconMessageCircle size="1rem" />}
                  >
                    6+
                  </Tabs.Tab>

                  <Tabs.Tab
                   onClick={onClick}
                    value="seven"
                    // icon={<IconPhoto size="1rem" />}
                  >
                    7+
                  </Tabs.Tab>
                  <Tabs.Tab 
                    onClick={onClick}
                    value="eight"
                    // icon={<IconPhoto size="1rem" />}
                  >
                    8+
                  </Tabs.Tab>
                  <Tabs.Tab
                    onClick={onClick}
                    value="night"
                    // icon={<IconPhoto size="1rem" />}
                  >
                    9+
                  </Tabs.Tab>
                </Tabs.List>
              </Rating>
            </div>
          </div>
          <div className="mt-5">
            <h3 className=" font-semibold py-2 border-b-[#ccc] border-b">Property Type </h3>
            <CheckboxComp className="mt-3" label="Hotels " text='(9)' />
         
          </div>
          <div className="mt-5 border border-[#5d22d5] rounded-xl p-3">
            <h4 className=" font-semibold ">Best Price Guaranteed</h4>
            <p className="text-sm">Exclusively for Priceline members</p>

            <p className="text-sm text-gray-500 py-1">
              Book now and well refund the difference if you find a lower price
            </p>
          </div>

          <div className="mt-5">
            <div className="p-4 m-auto text-center border rounded-xl">
              <Image width={300} height={150} className="m-auto  "  src={imgCustomer} alt="customer" />
              <h3 className="mt-3 text-lg font-bold">Special discounts when you call</h3>
              <p className="mt-3 font-medium text-sm text-gray-600">
                1 in 4 people saved 20% or more over the phone.
              </p>
              <p className=" text-gray-600 mt-3">
                <span className="font-bold text-black">StayExpo®</span> PHONE DEALS
              </p>
              <p className=" mt-1 inline-flex items-center justify-center  ">
                <span className="">
                  <IconPhone size={20} />
                </span>
                <Link href="/" className=" font-semibold">+20 122 108 3507</Link>
              </p>
            </div>
          </div>
          </>
  )
}

export default FilterSearch