"use client";
import { Tabs } from "@mantine/core";
import {
  IconBellQuestion,
  IconFaceMask,
  IconLockDollar,
  IconStatusChange,
  IconUserCheck,
  IconUserOff,
  IconUserQuestion,
} from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import ask from "./../../public/assets/ask.png";
import banner from "./../../public/assets/banner.png";
import HeaderBanner from "../component/mucles/HeaderBanner";
import QuestionsSection from "../component/mucles/QuestionsSection";
function Freq_questions() {
  const [windowSize, setWindowSize] = useState<number | any>();

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(windowSize);

  return (
    <>
      <HeaderBanner
        label="Need Help?"
        bannerImg={banner.src}
        descriptionBoolean={true}
        description="We are so grateful for you, our loyal clients and now you can be our judges! All our hard work to provide you with the best accommodations and travel services is paying off."
      />
      <div className="w-[100%] bg-gray-100 h-auto">
        <div className="flex relative z-[100] lg:px-3 lg:-translate-y-20 -translate-y-10 ">
          <div className="m-auto lg:w-[60%] w-[70%]  justify-between rounded-lg  p-5 bg-white flex lg:flex-row flex-col   items-center">
            <div className="">
              <Image
                src={ask.src}
                width={170}
                height={100}
                alt="ask_question"
              />
            </div>
            <div className="px-0 py-1 lg:px-2 ">
              <h6 className="font-bold ">Need help We are here for you</h6>
              <p className="pt-2 font-light text-md">
                Get quick answers, contact properties or StayExpo customer care,
                and more with our self-service help features.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="px-10 pb-5 container w-[100] m-auto">
            <Tabs
              orientation={windowSize >= 768 ? `vertical` : "horizontal"}
              defaultValue="Popular"
              color="violet"
              fz={"xl"}
            >
              <Tabs.List>
                <Tabs.Tab
                  value="Popular"
                  fz={"md"}
                  fw="normal"
                  py="xl"
                  icon={<IconUserQuestion size="1.5rem" />}
                >
                  Popular Questions
                </Tabs.Tab>
                <Tabs.Tab
                  value="Booking"
                  fz={"md"}
                  py="xl"
                  icon={<IconUserCheck size="1.5rem" />}
                >
                  Booking details
                </Tabs.Tab>
                <Tabs.Tab
                  value="Cancellation"
                  fz={"md"}
                  py="xl"
                  icon={<IconUserOff size="1.5rem" />}
                >
                  Cancellation
                </Tabs.Tab>
                <Tabs.Tab
                  value="Change"
                  fz={"md"}
                  py="xl"
                  icon={<IconStatusChange size="1.5rem" />}
                >
                  Change a booking
                </Tabs.Tab>
                <Tabs.Tab
                  value="Special"
                  fz={"md"}
                  py="xl"
                  icon={<IconBellQuestion size="1.5rem" />}
                >
                  Special requests
                </Tabs.Tab>
                <Tabs.Tab
                  value="Price"
                  fz={"md"}
                  py="xl"
                  icon={<IconLockDollar size="1.5rem" />}
                >
                  Price Freeze
                </Tabs.Tab>
                <Tabs.Tab
                  value="COVID"
                  fz={"md"}
                  py="xl"
                  icon={<IconFaceMask size="1.5rem" />}
                >
                  COVID-19
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="Popular" pt="xl" pl="xl">
                <QuestionsSection title="Popular Questions" />
              </Tabs.Panel>

              <Tabs.Panel value="Booking" pt="xl" pl="xl">
                <QuestionsSection title="Booking details" />
              </Tabs.Panel>

              <Tabs.Panel value="Cancellation" pt="xl" pl="xl">
                <QuestionsSection title="Cancellation" />
              </Tabs.Panel>

              <Tabs.Panel value="Change" pt="xl" pl="xl">
                <QuestionsSection title="Change a booking" />
              </Tabs.Panel>

              <Tabs.Panel value="Special" pt="xl" pl="xl">
                <QuestionsSection title="Special requests" />
              </Tabs.Panel>

              <Tabs.Panel value="Price" pt="xl" pl="xl">
                <QuestionsSection title="Price Freeze" />
              </Tabs.Panel>

              <Tabs.Panel value="COVID" pt="xl" pl="xl">
                <QuestionsSection title="Settings tab content" />
              </Tabs.Panel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
export default Freq_questions;
