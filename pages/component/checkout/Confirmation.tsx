import {
  IconBedFilled,
  IconCat,
  IconCopy,
  IconMail,
  IconMan,
  IconPencil,
  IconPrinter,
  IconSmokingNo,
  IconSportBillard,
  IconStarFilled,
  IconWifi
} from "@tabler/icons-react";
import Image from "next/image";
import DetailsPayment from "./DetailsPayment";
import TabsConfirmation from "./TabsConfirmation";
import { IconBarbell } from "@tabler/icons-react";

export default function Confirmation() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 pt-3">
        <div className="col-span-1 ">
          <h6 className="text-2xl font-semibold  text-bg_banfsgy">
            Your trip to New York in 42 days
          </h6>
        </div>
        <div className="col-span-1 md:p-0 py-2 ">
          <div className="flex lg:justify-end">
            <p className="flex items-center justify-center gap-1 py-2 px-3  mx-2 text-sm border border-gray-400 rounded-xl text-bg_banfsgy">
              <IconPencil className="w-[18px] h-[18px]" />
              <span className="text-xs font-semibold">Manger</span>
            </p>
            <p className="flex items-center justify-center gap-1 py-2 px-3  text-sm border border-gray-400 rounded-xl text-bg_banfsgy">
              <IconMail className="w-[18px] h-[18px]"  />
              <span className="text-xs font-semibold">Email</span>
            </p>
            <p className="flex items-center justify-center gap-2 p-2 mx-2 text-sm border border-gray-400 rounded-xl text-bg_banfsgy">
              <IconPrinter className="w-[18px] h-[18px]"  />
              <span className="text-xs font-semibold">Print</span>
            </p>
          </div>
        </div>
    
      <div className="col-span-1">
        <div className="p-3 mt-2 border shadow-md rounded-xl text-gray-800">
          <div className="flex  gap-2">
            <IconBedFilled />
            <div >
              <p className=" font-semibold text-sm "> Intercontinental New Yourk Times Square</p>
              <p className="text-gray-500">
                Jul 31 - Aug 9 check-in:after 03:00 PM
              </p>
              <div className=" flex flex-row ">confirmation: 
              <div className="text-gray-500 grid md:grid-cols-3 gap-2 grid-cols-2">
               
                <div className=" col-span-1 inline-flex items-center  "><span className="bg-yellow-100"> #:2666489478</span> <IconCopy className="w-[20px] h-[20px]" /></div>
                <div className=" col-span-1 inline-flex items-center  "><span className="bg-yellow-100">#:2666489478</span> <IconCopy className="w-[20px] h-[20px]" /></div>
                <div className=" col-span-1 inline-flex items-center  "><span className="bg-yellow-100">#:2666489478</span> <IconCopy className="w-[20px] h-[20px]" /></div>
            
              </div>
              </div>
          </div>
          </div>
        </div>
      </div>
      </div>
      <div className="grid md:grid-cols-12 grid-cols-1 ">
        <div className="md:col-span-8 col-span-1">
          <div className="p-3 mt-5 border shadow-md rounded-xl">
            <div className="flex gap-2">
              <div>
                <Image
                  className="!w-[120px] max-w-[120px] h-[120px] rounded-xl"
                  src="https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768"
                  alt=""
                  width="300"
                  height="100"
                />
              </div>
              <div>
                <h2 className="font-semibold text-sm ">
                  Inter continental New Yourk Times Square
                </h2>
                <p className="text-gray-600">Time Square - Theatre District</p>
                <div className="flex ">
                  <IconStarFilled className="w-[15px] text-yellow-400" />
                  <IconStarFilled className="w-[15px] text-yellow-400" />
                  <IconStarFilled className="w-[15px] text-yellow-400" />
                  <IconStarFilled className="w-[15px] text-yellow-400" />
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between py-2 mt-4 border-t border-gray-400">
              <div className="flex gap-2">
                <h2 className=" font-bold text-sm">check-in </h2>
                <p className="text-sm">Mon, July 31 after 3:00 pm*</p>
              </div>
              <div className="flex gap-2">
                <h2 className="  font-bold  text-sm">check-out </h2>
                <p className="text-sm">Mon, July 31 after 3:00 pm*</p>
              </div>
            </div>
            <div className="pt-2 mt-1 border-t border-gray-400">
              <p className="p-2 bg-yellow-100 rounded-xl text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                quia consequatur voluptates nulla repelle.
              </p>
            </div>
            <div className="flex justify-between pt-2 mt-2 border-t border-gray-400">
              <div>
                <h3 className=" font-semibold text-sm">Address</h3>
                <p className="text-sm">300 W 44th street New York, NY 10036</p>
              </div>
              <div>
                <h6 className=" font-semibold text-sm">Top Amenities</h6>
                <div>
                  <p className="flex items-center gap-2 py-1">
                    <IconWifi  className="w-[20px] h-[20px]" />
                    <span className="text-xs font-semibold">Free WiFi</span>
                  </p>
                  <p className="flex items-center gap-2 py-1">
                    <IconCat className="w-[15px] h-[15px]" />
                    <span className="text-xs font-semibold">Pet Friendly </span>
                  </p>
                  <p className="flex items-center gap-2 py-1">
                    <IconSmokingNo  className="w-[20px] h-[20px]" />
                    <span className="text-xs font-semibold"> Non-smoking Rooms </span>
                  </p>
                  <p className="flex items-center gap-2 py-1">
                    <IconBarbell  className="w-[20px] h-[20px]" />
                    <span className="text-xs font-semibold">Fitness Center </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5">
                <TabsConfirmation/>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 col-span-1 mt-5 ">

        <DetailsPayment />
        </div>
      </div>
    </div>
  );
}
