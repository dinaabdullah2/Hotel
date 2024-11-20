import Image from "next/image";
import Link from "next/link";
import { type } from "os";
import React from "react";

type EventCart_TP = {
  Events?: any;
};
const EventCart = ({ Events }: EventCart_TP) => {
  return (
    <>
      {Events?.data?.events?.map((item: any) => (
        <div  key={item?.id}> 
          <div className="grid grid-cols-12 border-b ">
            <div className="col-span-12 py-2 lg:col-span-3 ">
              <Image
                src={
                  item?.image
                    ? item?.image
                    : "https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                }
                width="100"
                height="100"
                alt="company"
                className="lg:w-[100px] lg:h-[100px] w-[150px] h-[150px] m-auto "
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="flex flex-col py-2 ">
                <div className="max-md:m-auto md:m-auto lg:m-0 max-sm:text-center ">
                  <Link
                    className="text-2xl hover:text-bg_banfsgy lg:text-lg "
                    href={`/events/${item.id}`}
                  >
                    {item?.title}
                  </Link>
                  <span className="bg-[#f30] lg:text-xs lg:ml-2 text-base px-1 max-sm:block max-sm:w-[80px] max-sm:m-auto max-sm:my-1 max-sm:text-sm rounded text-white">
                    ⚑ Trending
                  </span>
                </div>
                <div className="max-md:m-auto md:m-auto lg:m-0 max-sm:text-center ">
                  <small className="text-base lg:text-sm ">
                    from {item?.start_date}
                  </small>
                  <small className="text-base lg:text-sm">
                    {" "}
                    to {item?.end_date}
                  </small>
                  <p className="text-lg lg:text-base truncate w-[250px]">
                    {" "}
                    {item?.location}{" "}
                  </p>
                  {item?.domains.map((domain: any) => (
                    <span className="pr-2 text-xs text-gray-500 lg:text-sm" key={item?.domain}>
                      {domain?.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 max-md:pt-5 md:pt-5 max-sm:pt-2">
            <div className="flex flex-row items-center justify-around lg:flex-col ">
              <Link
                href="/"
                className="px-3 py-1 text-sm text-white border bg-bg_banfsgy hover:bg-white hover:text-bg_banfsgy hover:border-bg_banfsgy rounded-2xl"
              >
                Book Now
              </Link>
              <Link
                href="/"
                className=" lg:mt-3  text-sm    px-5 py-1  text-[#f30] hover:text-[#f30] hover:bg-white border-gray-300 bg-white border  rounded-2xl"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default EventCart;
