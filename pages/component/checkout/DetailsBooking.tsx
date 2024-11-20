import {
  IconBedFilled,
  IconCheck,
  IconFridge,
  IconMicrowave,
  IconParking,
  IconToolsKitchen,
  IconWifi,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import InputCustom from "../atoms/InputCustom";
import CheckboxComp from "../atoms/CheckBox";
import Link from "next/link";
import { Accordion } from "@mantine/core";
import DetailsPayment from "./DetailsPayment";

export default function DetailsBooking() {
  return (
   <>
    <div className="md:block hidden">
      
      <div className="p-4 border shadow-lg border-gray-300 rounded-xl">
        <div className="flex  max-md:flex-wrap gap-2 ">
          <Image
            alt="hotel img"
            width="350"
            height="240"
            className="rounded-xl md:w-[350px] w-[100%] md:h-[180px] "
            src="https://q-xx.bstatic.com/xdata/images/hotel/max300/378070506.jpg?k=462c2d479c4b46ae8c6de2f90e45cc188ce1add5a7214f7e8353b37c4d41c412&o="
          />
          <div className="px-2">
            <h6 className="text-xl font-bold">
              The Cleopatra Luxury Resort Collection
            </h6>
            <p className="text-sm  font-bold text-gray-600 py-3">Cincinnati North - Sharonville</p>
            <div className="flex  flex-row   gap-2 ">
              <span className=" font-extrabold text-white bg-[#f68013] text-xs p-1 px-3 rounded-lg">
                8.5
              </span>
              <span className=" font-[750] text-gray-800 text-xs py-1 uppercase">Good</span>
              <span>|</span>
              <span className="font-[750]  text-gray-800  text-xs py-1 uppercase">3-STAR HOTEL</span>
            
            </div>
            <div className="flex  gap-2 mt-5">
                <IconCheck className="text-green-600 w-[20px] h-[20px]" />
                <p className="text-sm w-[100%] text-green-600  "> <strong> Flexible Cancellation </strong> until 12:00AM (property local time) on Sep 15</p>
            </div>
          </div>
        </div>
        <div className="bg-[#fbf8fd] p-3 rounded-2xl mt-5">
          <div className="flex lg:flex-row flex-col justify-between ">
            <div className="px-5 ">
              <h6 className="font-bold  text-sm text-center text-gray-500">CHECK-IN</h6>
              <p className="font-bold text-sm  text-slate-800  text-center">Mon, Jun 19, 2023</p>
            </div>
            <div className="px-5">
              <h6 className="font-bold  text-sm text-center text-gray-500">CHECK-OUT</h6>
              <p className="font-bold text-sm  text-slate-800  text-center">Tue, Jun 20, 2023</p>
            </div>
            <div className="flex gap-10 px-5 ">
              <div className="text-center">
                <h6 className="font-bold  text-sm text-center text-gray-500">NIGHTS</h6>
                <p className="font-bold  text-sm  text-slate-800  text-center">1</p>
              </div>
              <span>|</span>
              <div className="text-center">
                <h6 className="font-bold  text-sm text-center text-gray-500">ROOMS</h6>
                <p className="font-bold text-sm  text-slate-800  text-center">1</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold text-slate-800 py-2">Superior Room with Garden View</p>
          <p className="flex gap-1">
            <IconBedFilled className="w-[20px]"/>
            <small className="">1 King Bed</small>
          </p>
          <div>
            <p className="flex gap-1">
              <IconParking className="w-[20px] text-white fill-green-600" />
              <small className="text-green-600 ">Free Parking</small>
            </p>
            <p className="flex gap-1">
              <IconWifi className="text-green-600 w-[20px]  " />
              <small className="text-green-600 ">Free WIFI</small>
            </p>
            {/* <p className="flex gap-1">
              <IconToolsKitchen className="w-[20px] " />
              <small className="">Kitchen</small>
            </p>
            <p className="flex gap-1">
              <IconFridge className="w-[20px] " />
              <small className="">Fridge</small>
            </p>
            <p className="flex gap-1">
              <IconMicrowave className="w-[20px] " />
              <small className="">Microwave</small>
            </p> */}
          </div>
        </div>
      </div>
      <div className="p-3 mt-5  border shadow-lg border-gray-300 rounded-xl">
        <div className="bg-[#fbf8fd] m-1 p-1 rounded-xl ">
          <p className="text-sm p-1 text-[#220e30]">
            The guest checking into each hotel room must be 21 or older, present
            a valid Photo ID and credit card.
          </p>
        </div>
        <div>
          <h6 className="font-bold px-2 py-1 text-xl">Guest Name</h6>
          <div className="mt-3">
            <div className="grid md:grid-cols-2 grid-cols-1  ">
              <div className="col-span-1 px-2 md:mb-0 mb-2">
                <InputCustom placeholder="First Name" />
              </div>

              <div className="col-span-1 px-2">
                <InputCustom placeholder="Last Name" />
              </div>
            </div>
            <CheckboxComp label={<span className="text-sm">Guest name and name on card are the same </span>} />
          </div>
        </div>
      </div>
      <div className="p-3 mt-5  border shadow-lg border-gray-300 rounded-xl">
        <h6 className="font-bold px-2 py-1 text-xl">Payment</h6>
        <div className="flex gap-2 py-2 px-2">
          <Image
            alt="visa"
            width="36"
            height="24"
            src="https://assets.pclncdn.com/web/cart-checkout/bb0eee0a70/public/images/creditCardLogos/visa.svg"
          />
          <Image
            alt="visa"
            width="36"
            height="24"
            src="https://assets.pclncdn.com/web/cart-checkout/bb0eee0a70/public/images/creditCardLogos/mastercard.svg"
          />
          <Image
            alt="visa"
            width="36"
            height="24"
            src="https://assets.pclncdn.com/web/cart-checkout/bb0eee0a70/public/images/creditCardLogos/amex.svg"
          />
        </div>
        <div>
          <InputCustom placeholder="Name on card *" className="!mt-2" />
          <InputCustom placeholder="Card number *" className="!mt-2" />
          <InputCustom placeholder="MM/YYYY *" className="!mt-2" />
        </div>
      </div>
      <div className="p-3 mt-5  border shadow-lg border-gray-300 rounded-xl">
        <h6 className="font-bold px-2 py-1 text-xl">Billing</h6>

        <div>
          <InputCustom placeholder="Street address *" className="!mt-2" />
          <InputCustom placeholder="Country" className="!mt-2" />
          <InputCustom placeholder="Zip code *" className="!mt-2" />
          <InputCustom placeholder="City *" className="!mt-2" />
          <InputCustom placeholder="Email address *" className="!mt-2" />
        </div>
      </div>
      <div className=" p-3 mt-5  border shadow-lg border-gray-300  rounded-xl">
        <h6 className="font-bold px-1 py-1 text-xl">Important Information</h6>
 
        <div className="px-4">
         <ul className="  list-disc ">
          <li  className="text-xs  text-gray-600 py-1"> Hotel partially <strong className="text-gray-700">refundable </strong> . Review the Booking Conditions for full details on the cancellation policy.</li>
          <li  className="text-xs text-gray-600 py-1  "><strong className="text-gray-700">By selecting Complete Booking you agree to the </strong><Link href='/' className="hover:underline font-bold text-blue-600">Booking Conditions</Link>,  <strong className="hover:underline text-blue-600">Terms & Conditions</strong> <Link href='/' className="hover:underline font-bold text-blue-600">Terms & Conditions</Link> and <Link href='/' className="hover:underline font-bold text-blue-600">Privacy Policy</Link>.</li>
         </ul>
        </div>
      </div>
    </div>

    <div className="md:hidden block">
          
    <div className="p-1 border shadow-lg border-gray-300 rounded-xl">
    <Accordion radius="xl" defaultValue="details">
      <Accordion.Item value="details">
        <Accordion.Control>     
          <div className="flex flex-row gap-2 ">
            <Image
              alt="hotel img"
              width="100"
              height="100"
              className="rounded-xl  w-[90px] h-[90px]"
              src="https://q-xx.bstatic.com/xdata/images/hotel/max300/378070506.jpg?k=462c2d479c4b46ae8c6de2f90e45cc188ce1add5a7214f7e8353b37c4d41c412&o="
            />
          <div className="px-1">
            <h6 className=" font-bold">
              The Cleopatra Luxury Resort Collectione
            </h6>
          </div>
      </div>
      </Accordion.Control>
        <Accordion.Panel >   
         <p className="text-sm  font-bold text-gray-600 pb-2 ">Cincinnati North - Sharonville</p>
          <div className="flex  flex-row  gap-2 ">
            <span className=" font-extrabold text-white bg-[#f68013] text-xs p-1 px-2 rounded">
              8.5
            </span>
            <span className=" font-[750] text-gray-800 text-xs py-1 uppercase">Good</span>
            <span>|</span>
            <span className="font-[750]  text-gray-800  text-xs py-1 uppercase">3-STAR HOTEL</span>
          
          </div>
          <div className="bg-[#fbf8fd] p-3 rounded-2xl mt-5">
          <div className="flex flex-row justify-between items-center border-b border-b-gray-300 pb-5 ">
            <div className="px-2 ">
              <h6 className="font-bold  text-sm text-center text-gray-500">CHECK-IN</h6>
              <p className="font-bold text-sm  text-slate-800  text-center">Mon, Jun 19, 2023</p>
            </div>
            <div className="px-2">
              <h6 className="font-bold  text-sm text-center text-gray-500">CHECK-OUT</h6>
              <p className="font-bold text-sm  text-slate-800  text-center">Tue, Jun 20, 2023</p>
            </div>
            </div>
           
            <div className="  flex flex-row justify-between items-center   ">
              <div className="text-center m-auto p-2 ">
                <h6 className="font-bold  text-sm   text-gray-500">NIGHTS</h6>
                <p className="font-bold  text-sm  text-slate-800 ">1</p>
              </div>
              <span className="  w-[1px] h-[40px] bg-gray-300"></span>
              <div className="text-center  m-auto p-2">
                <h6 className="font-bold  text-sm  text-gray-500">ROOMS</h6>
                <p className="font-bold text-sm  text-slate-800 ">1</p>
              </div>
            </div>
        </div>
        <div>
        <p className="font-bold text-slate-800 py-2">Superior Room with Garden View</p>
        <p className="flex gap-1">
          <IconBedFilled className="w-[20px]"/>
          <small className="">1 King Bed</small>
        </p>
        <div>
          <p className="flex gap-1">
            <IconParking className="w-[20px] text-white fill-green-600" />
            <small className="text-green-600 ">Free Parking</small>
          </p>
          <p className="flex gap-1">
            <IconWifi className="text-green-600 w-[20px]  " />
            <small className="text-green-600 ">Free WIFI</small>
          </p>
        
        </div>
      </div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
    </div>
    <div className="p-1 mt-5 border shadow-lg border-gray-300 rounded-xl">
    <Accordion radius="xl" defaultValue="Summary">
      <Accordion.Item value="Summary">
        <Accordion.Control>     
          <div className="px-1">
            <h6 className=" font-bold ">
              Summary of changes
            </h6>
          </div>
      </Accordion.Control>
        <Accordion.Panel >   
          <DetailsPayment />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
    </div>
    
    <div className="p-3 mt-5  border shadow-lg border-gray-300 rounded-xl">
      <div className="bg-[#fbf8fd] m-1 p-1 rounded-xl ">
        <p className="text-sm p-1 text-[#220e30]">
          The guest checking into each hotel room must be 21 or older, present
          a valid Photo ID and credit card.
        </p>
      </div>
      <div>
        <h6 className="font-bold px-2 py-1 text-xl">Guest Name</h6>
        <div className="mt-3">
          <div className="grid md:grid-cols-2 grid-cols-1  ">
            <div className="col-span-1 px-2 md:mb-0 mb-2">
              <InputCustom placeholder="First Name" />
            </div>

            <div className="col-span-1 px-2">
              <InputCustom placeholder="Last Name" />
            </div>
          </div>
          <CheckboxComp label={<span className="text-sm">Guest name and name on card are the same </span>} />
        </div>
      </div>
    </div>
    <div className="p-3 mt-5  border shadow-lg border-gray-300 rounded-xl">
      <h6 className="font-bold px-2 py-1 text-xl">Payment</h6>
      <div className="flex gap-2 py-2 px-2">
        <Image
          alt="visa"
          width="36"
          height="24"
          src="https://assets.pclncdn.com/web/cart-checkout/bb0eee0a70/public/images/creditCardLogos/visa.svg"
        />
        <Image
          alt="visa"
          width="36"
          height="24"
          src="https://assets.pclncdn.com/web/cart-checkout/bb0eee0a70/public/images/creditCardLogos/mastercard.svg"
        />
        <Image
          alt="visa"
          width="36"
          height="24"
          src="https://assets.pclncdn.com/web/cart-checkout/bb0eee0a70/public/images/creditCardLogos/amex.svg"
        />
      </div>
      <div>
        <InputCustom placeholder="Name on card *" className="!mt-2" />
        <InputCustom placeholder="Card number *" className="!mt-2" />
        <InputCustom placeholder="MM/YYYY *" className="!mt-2" />
      </div>
    </div>
    <div className="p-3 mt-5  border shadow-lg border-gray-300 rounded-xl">
      <h6 className="font-bold px-2 py-1 text-xl">Billing</h6>

      <div>
        <InputCustom placeholder="Street address *" className="!mt-2" />
        <InputCustom placeholder="Country" className="!mt-2" />
        <InputCustom placeholder="Zip code *" className="!mt-2" />
        <InputCustom placeholder="City *" className="!mt-2" />
        <InputCustom placeholder="Email address *" className="!mt-2" />
      </div>
    </div>
    <div className=" p-3 mt-5  border shadow-lg border-gray-300  rounded-xl">
      <h6 className="font-bold px-1 py-1 text-xl">Important Information</h6>

      <div className="px-4">
      <ul className="  list-disc ">
        <li  className="text-xs  text-gray-600 py-1"> Hotel partially <strong className="text-gray-700">refundable </strong> . Review the Booking Conditions for full details on the cancellation policy.</li>
        <li  className="text-xs text-gray-600 py-1  "><strong className="text-gray-700">By selecting Complete Booking you agree to the </strong><Link href='/' className="hover:underline font-bold text-blue-600">Booking Conditions</Link>,  <strong className="hover:underline text-blue-600">Terms & Conditions</strong> <Link href='/' className="hover:underline font-bold text-blue-600">Terms & Conditions</Link> and <Link href='/' className="hover:underline font-bold text-blue-600">Privacy Policy</Link>.</li>
      </ul>
      </div>
    </div>
    </div>
</>
  );
}
