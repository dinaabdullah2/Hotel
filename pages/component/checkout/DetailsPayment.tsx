import { Accordion } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import InputCustom from "../atoms/InputCustom";

export default function DetailsPayment() {
  return (
    <>
    <div className="md:block sticky top-2 z-50  hidden">
      <div className=" px-3 md:py-0 py-4 ">
        <div className="p-3 border shadow-lg border-gray-300 rounded-xl">
          <div className="">
            <div className="py-2 border-b ">
              <div className="flex justify-between items-end  ">
                <h6 className="text-green-600 font-semibold">Price per night</h6>
                <p className="text-green-600 font-semibold items-center flex flex-col">
                  <del className="text-gray-600  ">$45.64</del>
                  <span>$94.00</span> 
                </p>
              </div>
              <div>
                <p className="px-5 text-sm text-gray-600">1 room</p>
              </div>
              <div className="flex justify-between  items-center pt-2">
                <h6 className="text-gray-600 font-semibold text-sm">Number of nights</h6>
                <p className="text-gray-600 font-semibold text-sm">1</p>
              </div>
              <div className="flex justify-between  items-center pt-2 ">
                <h6 className="text-gray-600 font-semibold text-sm">Taxes and fees</h6>
                <p className="text-gray-600 font-semibold text-sm">$15.51</p>
              </div>
            </div>
            {/* <div className="py-3 border-b">
              <div className="flex justify-between">
                <h6 className="text-gray-600 font-semibold text-sm">Taxes and fees</h6>
                <h3 className="font-bold text-green-500 ">You pay today</h3>
                <h3>$0.00</h3>
              </div>
            </div> */}
            <div className="py-3 border-b">
              <div className="flex justify-between  items-center">
                <h6 className="text-gray-600 font-semibold text-sm">Due later</h6>
                <p className="text-gray-600 font-semibold text-sm">$109.51</p>
              </div>
            </div>

            <div className="py-3  ">
              <div className="flex justify-between  items-center">
                <h6 className="font-bold text-lg text-green-600  ">Total charges</h6>
                <p className="text-green-600 font-semibold text-sm">$109.51</p>
              </div>
              <div className="text-end">
                <Link href='/' className="py-2 hover:underline mr-auto text-bg_banfsgy font-semibold text-sm">as low as <strong>$23</strong>/month</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 mt-5 border shadow-lg border-gray-300 rounded-xl promo-code">
        <Accordion radius="xl" >
            <Accordion.Item   value="customization">
              <Accordion.Control  ><p className="text-sm font-semibold !text-bg_banfsgy hover:underline">Have a promo code?</p></Accordion.Control>
              <Accordion.Panel>
                <div className="grid grid-cols-12 gap-2 pt-2">
                  <div className="col-span-9  ">
                    <InputCustom placeholder="Enter promo code" />
                  </div>
                  <div className="col-span-3">
                    <button className=" bg-bg_banfsgy text-white p-3  text-sm font-semibold  rounded-lg ">Apply</button>
                  </div>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
      </Accordion>
        </div>
      </div>
    </div>

    <div className="md:hidden block">
      <div className=" px-1  sticky top-1 z-50 ">
          <div className="">
            <div className="py-2 border-b ">
              <div className="flex justify-between items-end  ">
                <h6 className="text-green-600 font-semibold">Price per night</h6>
                <p className="text-green-600 font-semibold items-center flex flex-col">
                  <del className="text-gray-600  ">$45.64</del>
                  <span>$94.00</span> 
                </p>
              </div>
              <div>
                <p className="px-5 text-sm text-gray-600">1 room</p>
              </div>
              <div className="flex justify-between  items-center pt-2">
                <h6 className="text-gray-600 font-semibold text-sm">Number of nights</h6>
                <p className="text-gray-600 font-semibold text-sm">1</p>
              </div>
              <div className="flex justify-between  items-center pt-2 ">
                <h6 className="text-gray-600 font-semibold text-sm">Taxes and fees</h6>
                <p className="text-gray-600 font-semibold text-sm">$15.51</p>
              </div>
            </div>
          
            <div className="py-3 border-b">
              <div className="flex justify-between  items-center">
                <h6 className="text-gray-600 font-semibold text-sm">Due later</h6>
                <p className="text-gray-600 font-semibold text-sm">$109.51</p>
              </div>
            </div>
            <div className="py-3 border-b">
              <div className="flex justify-between  items-center">
                <h6 className="text-green-600 font-semibold text-lg">You pay today</h6>
                <p className="text-green-600 font-semibold text-lg">$109.51</p>
              </div>
            </div>
            <div className="py-3 border-b">
              <div className="flex justify-between  items-center">
                <h6 className="text-gray-600 font-semibold text-sm">Service Charge*</h6>
                <p className="text-gray-600 font-semibold text-sm">$109.51</p>
              </div>
            </div>
            <div className="py-3  ">
              <div className="flex justify-between  items-center">
                <h6 className="font-bold text-lg text-bg_banfsgy ">Total charges</h6>
                <p className="font-bold text-lg text-bg_banfsgy">$109.51</p>
              </div>
            
            </div>
          </div>


        {/* <div className="p-3 mt-5 border shadow-lg border-gray-300 rounded-xl promo-code">
        <Accordion radius="xl" >
            <Accordion.Item   value="customization">
              <Accordion.Control  ><p className="text-sm font-semibold !text-bg_banfsgy hover:underline">Have a promo code?</p></Accordion.Control>
              <Accordion.Panel>
                <div className="grid grid-cols-12 gap-2 pt-2">
                  <div className="col-span-9  ">
                    <InputCustom placeholder="Enter promo code" />
                  </div>
                  <div className="col-span-3">
                    <button className=" bg-bg_banfsgy text-white p-3  text-sm font-semibold  rounded-lg ">Apply</button>
                  </div>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
      </Accordion>
        </div> */}
      </div>
    </div>
  </>
  );
}
