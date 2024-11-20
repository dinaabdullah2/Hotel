"use client";
import { Button } from "@mantine/core";
import {
  IconChevronLeft,
  IconChevronRight,
  IconLayoutSidebarRight,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AccordionComp from "../component/accordion/Accordion";
import HeaderBanner from "../component/mucles/HeaderBanner";
import SideBar from "../component/template/SideBar";
import Header from "./../../public/assets/banner.png";
import useFetch from "@/hooks/useFetch";
import EventCart from "../component/mucles/EventCart";
export default function Events() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: Events } = useFetch<any>({
    endpoint: `api/section/event`,
    queryKey: [`All-Events-page`],
  });
  
  return (
    <div>
      <div className="flex justify-between sticky top-0  z-[1000] bg-bg_banfsgy md:hidden">
        <button
          className="inline-flex items-center p-2 ml-auto text-sm font-medium text-center text-white rounded-lg bg-bg_banfsgy hover:bg-bg_banfsgy focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-bg_banfsgy dark:focus:bg-bg_banfsgy"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex ">
            <div className="m-auto text-white">
              <IconLayoutSidebarRight />
            </div>
          </div>
        </button>

        <SideBar closeButton={true} onOpen={isOpen} onClose={setIsOpen}>
          <AccordionComp padding={false} />
          Trade fairs and conferences
        </SideBar>
      </div>
      <HeaderBanner
        label="Trade fairs and conferences"
        bannerImg={Header.src}
        descriptionBoolean={false}
        description="We are so grateful for you, our loyal clients and now you can be our judges! All our hard work to provide you with the best accommodations and travel services is paying off."
      />
      <div className="grid grid-cols-12 gap-5 px-5 pt-5 bg-gray-50 ">
        <div className="col-span-12 hidden lg:block  lg:col-span-3 relative z-[100]  translate-y-[-60px]  bg-white  shadow rounded-xl ">
          <AccordionComp />
        </div>
        <div className="col-span-12   lg:col-span-6 relative z-[100]   translate-y-[-60px]  bg-white  shadow rounded-xl ">
          <div className="grid grid-cols-12 p-5 align-middle border-b border-gray-200 ">
            <div className="col-span-12 ">
              <div className="flex flex-col p-5 lg:flex-row lg:justify-between lg:items-center">
                <div>
                  <h6 className="pb-3 text-xl font-light ">
                    We found <span>768</span> events
                  </h6>
                </div>
                <div className="inline-flex items-center justify-between ">
                  <div className="mr-5">
                    <span className="">1 - 6 </span>of{" "}
                    <span className=""> 758 </span>
                  </div>
                  <div>
                    <button className="p-3 rounded-full hover:bg-gray-100 hover:shadow">
                      <IconChevronLeft className="text-gray-500 w-[20px] h-[20px]" />
                    </button>
                    <button className="p-3 rounded-full hover:bg-gray-100 hover:shadow">
                      <IconChevronRight className="text-gray-500 w-[20px] h-[20px]" />
                    </button>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-span-12 ">
            <EventCart Events={Events} />
            </div>

          </div>
          
        </div>
        <div className="col-span-12  p-5 lg:col-span-3 relative z-[100]   translate-y-[-60px]  bg-white  shadow rounded-xl">
          <div className="flex flex-col justify-center p-10 align-middle ali rounded-xl">
            <div className="mt-2 text-center">
              <Image
                alt="comp"
                width="100"
                height="100"
                className="m-auto"
                src="https://ik.imagekit.io/etg/tr:w-85,h-85,cm-pad_resize,bg-FFFFFF/venue-web/amsterdam-rai/amsterdam-rai-0Nux-thumb.png"
              />
              <p>Amsterdam RAI</p>
              <small>Amsterdam, Netherlands </small>
            </div>
            <div className="mt-2 text-center">
              <Image
                alt="comp"
                width="100"
                height="100"
                className="m-auto"
                src="https://ik.imagekit.io/etg/tr:w-85,h-85,cm-pad_resize,bg-FFFFFF/venue-web/amsterdam-rai/amsterdam-rai-0Nux-thumb.png"
              />
              <p>Amsterdam RAI</p>
              <small>Amsterdam, Netherlands </small>
            </div>
            <div className="mt-2 text-center">
              <Image
                alt="comp"
                width="100"
                height="100"
                className="m-auto"
                src="https://ik.imagekit.io/etg/tr:w-85,h-85,cm-pad_resize,bg-FFFFFF/venue-web/amsterdam-rai/amsterdam-rai-0Nux-thumb.png"
              />
              <p>Amsterdam RAI</p>
              <small>Amsterdam, Netherlands </small>
            </div>
            <div className="mt-2 text-center">
              <Image
                alt="comp"
                width="100"
                height="100"
                className="m-auto"
                src="https://ik.imagekit.io/etg/tr:w-85,h-85,cm-pad_resize,bg-FFFFFF/venue-web/amsterdam-rai/amsterdam-rai-0Nux-thumb.png"
              />
              <p>Amsterdam RAI</p>
              <small>Amsterdam, Netherlands </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
