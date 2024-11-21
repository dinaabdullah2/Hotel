"use client";
import { Skeleton } from "@mantine/core";
import Image from "next/image";
import { useEffect, useState } from "react";
import CustomNavigatonDetails from "../component/mucles/CustomNavigatonDetails";
import ImageSlider from "../component/mucles/ImageSlider";
import CustomTabs from "../component/mucles/CustomTabs";
import DetailsRoom from "../component/mucles/DetailsRoom";
import LoacationSite from "../component/Search/LoacationSite";
import BreadCrumbs from "../component/atoms/BreadCrumbs";
import Link from "next/link";
import Fancybox from "../component/mucles/FancyBox";

const images = [
  {
    full_path:
      "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768",
  },
  {
    full_path:
      "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768",
  },
  {
    full_path:
      "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768",
  },
  {
    full_path:
      "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768",
  },
  {
    full_path:
      "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768",
  },
  {
    full_path:
      "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768",
  },
  {
    full_path:
      "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768",
  },
  {
    full_path:
      "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768",
  },
  {
    full_path:
      "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768",
  },
  {
    full_path:
      "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768",
  },
  {
    full_path:
      "https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768",
  },

  // Add more image objects as needed
];

export default function Page() {
  const [isLoading] = useState(false);

  const [activeSection, setActiveSection] = useState<any>();
  const [windowHeight, setWindowHeight] = useState<any>();
  const [imageGallery, setImageGallery] = useState<boolean>(false);
  const openImages = () => {
    setImageGallery(true);
    //@ts-ignore
    document.querySelector(".image-gallery-fullscreen-button")?.click();
  };
  const handleTabClick = () => {
    // scroll.scrollTo("content", {
    //   // smooth: true as boolean ,
    // });
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.scrollY);
    };
    window.addEventListener("scroll", handleResize); // ideally you need to throttle this event
    // fire on first render if needed
    handleResize();
    // cleanup this component
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <CustomNavigatonDetails rooms={true} />
      {windowHeight >= 420 ? (
        <div className="flex flex-row items-center  sticky top-0 z-[100] bg-white justify-between py-3 px-[5rem] border rounded ">
          {/* <ul className="hidden gap-10 md:flex ">
            <li>
              <Link
                activeClass="active"
                to="Overview"
                className="text-gray-700 hover:text-bg_banfsgy text-sm hover:border-b-4 hover:border-bg_banfsgy py-[.9rem]"
                spy={true}
                smooth={true}
                // offset={-50}
                // duration={500}
              >
                <button onClick={handleTabClick}>Overview</button>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="Rooms"
                className="text-gray-700 hover:text-bg_banfsgy text-sm hover:border-b-4 hover:border-bg_banfsgy py-[.9rem]"
                spy={true}
                smooth={true}
                // offset={-50}
                // duration={500}
              >
                <button onClick={handleTabClick}>Rooms</button>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="content"
                className="text-gray-700 hover:text-bg_banfsgy text-sm hover:border-b-4 hover:border-bg_banfsgy py-[.9rem]"
                spy={true}
                smooth={true}
                // offset={-50}
                // duration={500}
              >
                <button onClick={handleTabClick}>Facilities</button>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="text-gray-700 hover:text-bg_banfsgy text-sm hover:border-b-4 hover:border-bg_banfsgy py-[.9rem]"
                to="content"
                spy={true}
                smooth={true}
                // offset={-50}
                // duration={500}
              >
                <button onClick={handleTabClick}>Reviews</button>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="text-gray-700 hover:text-bg_banfsgy text-sm hover:border-b-4 hover:border-bg_banfsgy py-[.9rem]"
                to="content"
                spy={true}
                smooth={true}
                // offset={-50}
                // duration={500}
              >
                <button onClick={handleTabClick}>Location</button>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="text-gray-700 hover:text-bg_banfsgy text-sm hover:border-b-4 hover:border-bg_banfsgy py-[.9rem]"
                to="content"
                spy={true}
                smooth={true}
                // offset={-50}
                // duration={500}
              >
                <button onClick={handleTabClick}>Policies</button>
              </Link>
            </li>
          </ul> */}
          <div className="flex items-center gap-2">
            <small className="text-xs text-gray-600">from</small>
            <span className="text-lg text-red-600">$ 72</span>
            <button className="p-1 text-sm font-medium text-white rounded bg-bg_banfsgy">
              Select Room
            </button>
          </div>
        </div>
      ) : null}
      <div className=" md:m-auto lg:px-20">
        <div className="hidden md:block">
          <div className="grid grid-cols-5">
            <div className="col-span-5 pt-2 pb-3">
              <div className="flex flex-row items-center justify-between">
                <BreadCrumbs />
                <div>
                  <p className="text-xs text-bg_banfsgy hover:underline">
                    See all 2,211 properties in Cairo
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              {isLoading ? (
                <Skeleton height={310} radius="md" animate={false} />
              ) : (
                // <Fancybox>
                //   <Link
                //     data-fancybox="gallery"
                //     href="https://pix8.agoda.net/hotelImages/60410/-1/2e5457f6c6dd74c42e88ed55475c4b63.jpg?ca=29&ce=0&s=1024x768"
                //   >
                //     <Image
                //       className="w-full h-[312px] rounded"
                //       src="https://pix8.agoda.net/hotelImages/60410/-1/2e5457f6c6dd74c42e88ed55475c4b63.jpg?ca=29&ce=0&s=1024x768"
                //       alt=""
                //       width="100"
                //       height="250"
                //       // onClick={openImages}
                //     />
                //   </Link>
                // </Fancybox>
                null
              )}
            </div>
            <div className="grid grid-cols-3 col-span-3 ">
              {/*           
          <div className={imageGallery? '' : 'hidden' }>
               <ImageSlider media={images}/>
           </div> */}
              <div className="col-span-1">
                <div className="p-1">
                  {isLoading ? (
                    <Skeleton height={150} radius="md" animate={false} />
                  ) : (
                    <Image
                      className="w-full h-[150px] rounded"
                      src="https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768"
                      alt=""
                      width="100"
                      height="100"
                    />
                  )}
                </div>
                <div className="p-1">
                  {isLoading ? (
                    <Skeleton height={150} radius="md" animate={false} />
                  ) : (
                    <Image
                      className="w-full h-[150px] rounded"
                      src="https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768"
                      alt=""
                      width="100"
                      height="100"
                    />
                  )}
                </div>
              </div>
              <div className="col-span-1">
                <div className="p-1">
                  {isLoading ? (
                    <Skeleton height={150} radius="md" animate={false} />
                  ) : (
                    <Image
                      className="w-full h-[150px] rounded"
                      src="https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768"
                      alt=""
                      width="100"
                      height="100"
                    />
                  )}
                </div>
                <div className="p-1">
                  {isLoading ? (
                    <Skeleton height={150} radius="md" animate={false} />
                  ) : (
                    <Image
                      className="w-full h-[150px] rounded"
                      src="https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768"
                      alt=""
                      width="100"
                      height="100"
                    />
                  )}
                </div>
              </div>
              <div className="col-span-1">
                <div className="p-1">
                  {isLoading ? (
                    <Skeleton height={150} radius="md" animate={false} />
                  ) : (
                    <Image
                      className="w-full h-[150px] rounded"
                      src="https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768"
                      alt=""
                      width="100"
                      height="100"
                    />
                  )}
                </div>
                <div className="p-1">
                  {isLoading ? (
                    <Skeleton height={150} radius="md" animate={false} />
                  ) : (
                    <Image
                      className="w-full h-[150px] rounded"
                      src="https://pix8.agoda.net/hotelImages/604/60410/60410_15110714170037574774.jpg?ca=&ce=1&s=1024x768"
                      alt=""
                      width="100"
                      height="100"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <ImageSlider media={images} />
        </div>
        <div className="pb-5">
          <CustomTabs />
          <DetailsRoom />
          <DetailsRoom />
          <DetailsRoom />
          <DetailsRoom />
        </div>
        {/* <LoacationSite /> */}
        {windowHeight < 2394 ? (
          <div className="md:hidden flex max-sm:flex px-2 justify-between items-center sticky bottom-0 w-[100%] py-3 bg-violet-100 button-select-room">
            <div className="flex flex-col">
              <del className="text-sm font-semibold">USD 100 </del>
              <p className="text-sm font-semibold">
                USD <strong className="text-3xl ">88</strong>
              </p>
            </div>
            {/* <Link
              duration={1200}
              onSetActive={setActiveSection}
              spy={true}
              smooth={true}
              activeClass="active"
              to="Rooms"
              className="px-5 py-2 text-center text-white rounded-md bg-bg_banfsgy"
            >
              Select Room
            </Link> */}
          </div>
        ) : null}
      </div>
    </>
  );
}
