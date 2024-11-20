import { Tabs } from "@mantine/core";
import Image from "next/image";
import Button from "../atoms/Button";
import Link from "next/link";
import { IconLoader, IconLoader2, IconLoader3, IconReload, IconRepeat } from "@tabler/icons-react";

export default function TabsConfirmation() {
  return (
    <div>
      <Tabs defaultValue="gallery"  color="violet">
        <Tabs.List>
          <Tabs.Tab value="gallery" className="font-bold"><div className="text-base font-bold">Manage</div></Tabs.Tab>
          <Tabs.Tab value="messages" className="font-bold"> <div className="text-base font-bold">Room</div></Tabs.Tab>
          <Tabs.Tab value="settings" className="font-bold"><div className="text-base font-bold">important info</div></Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery" pt="xs">
          <div className="flex justify-between">
            <div className="w-full">
              <div>
                <div className="grid md:grid-cols-3 gap-2 grid-cols-2 px-2">
                  <div className=" col-span-1 font-semibold ">confirmation:</div>
                  <div className=" col-span-1 bg-yellow-100">#:2666489478</div>
                  <div className=" col-span-1 bg-yellow-100">#:2666489478</div>
                  <div className=" col-span-1 bg-yellow-100">#:2666489478</div>
                </div>
                <div className="flex justify-between py-2 px-2">
                  <h6 className=" font-semibold">number</h6>
                  <p className="bg-yellow-100">25498064919841</p>
                </div>
                <div className="flex justify-between py-2 px-2">
                  <h6 className="font-semibold">Hotel phone number</h6>
                  <p className="bg-yellow-100">212-803-4500</p>
                </div>
              </div>
              <div className="pt-2 mt-5 border-t border-gray-400">
                <Link href="/" className="font-bold gap-2 inline-flex  items-center text-bg_banfsgy">
                <IconReload className="w-[18px] h-[18px]" />  Book again
                </Link>
              </div>
              <div className="pt-2 mt-2 border-t border-gray-400">
                <h6 className="font-semibold">Cancellation policy</h6>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Saepe dolores possimus incidunt modi aspernatur, sint neque
                  accusantium, voluptatem, ea officiis nam libero optio.
                  Obcaecati, unde consectetur. Fugiat eligendi aperiam omnis
                  dolor temporibus adipisci harum consequuntur ipsa tenetur,
                  dolores ab impedit inventore perferendis culpa? Sunt
                  asperiores dignissimos, quae ut sequi ipsum!
                </p>
                <Button className="p-2 px-4 mt-5">Cancel</Button>
              </div>
            </div>
            <div className="md:flex  hidden flex-col w-full  px-3 border-l">
              <p className="font-semibold text-sm"> Top FAQs</p>
              <Link href="/" className="font-semibold text-sm py-1 text-bg_banfsgy">
                Can i cancel thisd reservation ?
              </Link>
              <Link href="/" className="font-semibold text-sm py-1 text-bg_banfsgy">
                Can i cancel this reservation ?
              </Link>
              <Link href="/" className="font-semibold text-sm py-1 text-bg_banfsgy">
                print a receipt
              </Link>
              <Link href="/" className="font-semibold text-sm py-1 text-bg_banfsgy">
                see all FAQs
              </Link>
            </div>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="messages" pt="xs">
          <div className="flex gap-2 mt-2 px-2">
            <div>
              <Image
                className="!w-[120px] max-w-[120px] h-[120px] rounded-xl"
                src="https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768"
                alt=""
                width="300"
                height="100"
              />
            </div>
            <div >
              <h6 className="font-bold">
                interContinental New Yourk Times Square
              </h6>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis estiae sint,
              </p>

              <p className="text-gray-500">Time Square - Theatre District</p>
            </div>
          </div>
          <div className="px-2">
            <h6 className=" font-semibold text-sm py-1 "> Reservation Name</h6>
            <div className="flex gap-2">
              <h2 className="font-semibold text-sm">Room 1 </h2>
              <p className="text-sm">Abood Azmy</p>
            </div>
            <div className="flex gap-2" >
              <h2 className="font-semibold text-sm">Room 2 </h2>
              <p className="text-sm">Abood Azmy</p>
            </div>
            <div className="flex gap-2">
              <h2 className="font-semibold text-sm">Room 3 </h2>
              <p className="text-sm">Abood Azmy</p>
            </div>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="settings" pt="xs">
          <h6 className="font-bold text-gray-600">
            credit card required
          </h6>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus quidem repudiandae similique temporibus reiciendis cumque, perferendis, veniam, nesciunt eum commodi? Saepe esse doloremque possimus nam eligendi quaerat atque voluptate.
          </p>
          <h6 className="font-bold text-gray-600">
            Additional check-in information
          </h6>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus quidem repudiandae similique temporibus reiciendis cumque, perferendis, veniam, nesciunt eum commodi? Saepe esse doloremque possimus nam eligendi quaerat atque voluptate.
          </p>
          <h6 className="font-bold text-gray-600">
            Additional  information
          </h6>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus quidem repudiandae similique temporibus reiciendis cumque, perferendis, veniam, nesciunt eum commodi? Saepe esse doloremque possimus nam eligendi quaerat atque voluptate.
          </p>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
