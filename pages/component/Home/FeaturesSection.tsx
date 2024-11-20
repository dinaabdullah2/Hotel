"use client";

import useFetch from "@/hooks/useFetch";
import {
  Accordion,
  Col,
  Grid,
  SimpleGrid,
  Tabs,
  Text,
  ThemeIcon,
  createStyles,
  rem,
} from "@mantine/core";
import { IconArrowRight, IconPackage } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import cloud_ico from "../../../public/assets/cloud-icon.png";
import hotel_icon from "../../../public/assets/hotels-icon.png";
import loyalty_program_icon from "../../../public/assets/loyalty-program-icon.png";
import pricecomparison_icon from "../../../public/assets/pricecomparison-icon.png";
import rich_feature_icon from "../../../public/assets/rich-features-icon.png";
import richcontent_icon from "../../../public/assets/richcontent-icon.png";
import support_icon from "../../../public/assets/support-icon.png";
import user_level_icon from "../../../public/assets/user-level-icon.png";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `calc(${theme.spacing.xl} * 3) ${theme.spacing.xl}`,
    backgroundColor :"#F8F8F8"
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(36),
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

type Feature = {
  img: StaticImageData;
  title: string;
  description: string;
};
const features: Feature[] = [
  {
    img: hotel_icon,
    title: "Huge choice of inventory",
    description: "Get access to the best hotel, flight and travel deals.",
  },
  {
    img: cloud_ico,
    title: "Exclusive Hotels Offers",
    description:
      "Take advantage of exclusive discounts and offers from top brands.",
  },
  {
    img: loyalty_program_icon,
    title: "Great value Loyalty Program",
    description: " Earn points and use them to pay for bookings..",
  },

  {
    img: pricecomparison_icon,
    title: " Exclusive precheck",
    description:
      "You will get manual prechecks of all your bookings. We will manually pre-check all bookings and booking details with the hotel directly.",
  },
];

const featuresTow: Feature[] = [
  {
    img: support_icon,
    title: "Reliable Customer Support",
    description:
      "All your issues will be resolved by our 24/7 multi-lingual support service",
  },

  {
    img: user_level_icon,
    title: "For different user levels",
    description:
      "You can assign user roles and limit access for safety and transparency.",
  },
  {
    img: richcontent_icon,
    title: "High-quality Back-office",
    description:
      "All information about orders, invoices, vouchers, and reports is available to you in real-time",
  },

  {
    img: rich_feature_icon,
    title: "Rich functionality",
    description:
      "In a single system with a user-friendly interface, you can quickly book hotels and other travel-related services at great prices.",
  },
];

export default function FeaturesSection() {
  const [windowSize, setWindowSize] = useState<number | any>();
  const [tapDefault,setTapDefault] = useState<any>()

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(windowSize);
  // Blogs
  interface Feature {
    name: string;
    description: string;
    subfeatures: {
      name: string;
      description: string;
      // Add more properties if needed...
    }[];
  }
  const { data: Feature, isLoading } = useFetch<{
    data: {
      features: Feature[];
    };
  }>({
    endpoint: `api/section/feature`,
    queryKey: [`All-Feature`],
    onSuccess : ()=>{
    //   notify("success", "done")
    setTapDefault(Feature?.data?.features[0]?.name)
    }
  });
  console.log(
    "🚀 ~ file: FeaturesSection.tsx:108 ~ FeaturesSection ~ Feature:",
    Feature
  );

  const ref = useRef<any>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title} className="p-3 m-2 shadow-sm"></div>
  ));

  const items2 = featuresTow.map((feature) => (
    <div key={feature?.title} className="p-3 m-2 shadow-sm">
      <div className="flex justify-between gap-2">
        <Text fz="lg" mt="sm" fw={500}>
          {feature.title}
        </Text>
        <ThemeIcon
          size={44}
          radius="md"
          // variant="gradient"
          // gradient={{ deg: 133, from: "blue", to: "cyan" }}
          className="bg-transparent"
        >
          {/* <feature.icon size={rem(26)} stroke={1.5} /> */}
          <Image src={feature.img} alt="clud" />
        </ThemeIcon>
      </div>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={`${classes.wrapper}  px-20  `}>
      <div className="  text-center py-5 mb-[50px]">
        <h4 className="relative m-auto w-[200px]  lg:w-[350px]  py-5 text-3xl font-bold text-center after:w-[50px] after:absolute after:left-[10px] lg:after:left-[25px] after:bg-bg_banfsgy after:bottom-[10%] after:h-[3px]">
          Save time and money
        </h4>
        <p className="text-gray-500">
          comfort and the best prices for your business and Events
        </p>
      </div>
      <Grid gutter={100} className={windowSize <= 700 ? "hidden" : "block"}>
        <Col span={12} md={12} className="p-4">
          <Tabs
            radius="md"
            orientation="vertical"
            color="violet"
            fz={"xl"}
            defaultValue="Feature 1"
          >
            <Tabs.List>
              {Feature?.data?.features.map((item: any) => (
                <Tabs.Tab
                  key={item?.name}
                  value={item?.name}
                  className="border-r-0 border-black "
                  fz={"md"}
                  fw="normal"
                  py="xl"
                >
                  <h5 className="flex items-center gap-2 py-1 text-base font-medium">
                    <IconPackage className=" text-bg_banfsgy" size="1.5rem" />
                    {item?.name}
                  </h5>
                  <p className="py-1 text-sm font-normal text-gray-500">
                    {item?.description}
                  </p>
                </Tabs.Tab>
              ))}
            </Tabs.List>
            {Feature?.data?.features.map((item: any) => (
              <Tabs.Panel value={item?.name} key={item?.name}>
                <SimpleGrid
                  cols={2}
                  spacing={20}
                  breakpoints={[{ maxWidth: "md", cols: 1 }]}
                  className="p-0 md:px-20"
                >
                  {item.subfeatures.map((feature: any) => (
                    <div key={feature?.title} className="p-3 rounded-lg shadow-sm bg-white">
                      <div className="flex justify-between ">
                        <Text fz="lg" mt="sm" fw={500}>
                          {feature.name}
                        </Text>

                        <ThemeIcon
                          size={44}
                          radius="md"
                          className="bg-transparent"
                        >
                          <Image
                            src={feature?.icon}
                            alt="clud"
                            width="100"
                            height="100"
                          />
                        </ThemeIcon>
                      </div>
                      <Text c="dimmed" fz="sm">
                        {feature.description}
                      </Text>
                    </div>
                  ))}
                 
                
                </SimpleGrid>
                <div  className=" p-0 md:px-20">
                  <Link href="" className=" mt-2 p-3  read-link text-[#5d22d5] text-base float-right inline-flex items-center   font-bolder">
                    Read more <IconArrowRight className="ml-2 read-icon duration-200 w-6" />
                  </Link>
                  </div>
              </Tabs.Panel>
              
            ))}
          </Tabs>
        </Col>
      </Grid>
      <Grid gutter={100} pt={"lg"} className={windowSize > 700 ? "hidden" : "block"}>
        {Feature?.data?.features.map((item: any) => (
          <Accordion defaultValue={tapDefault} key={item?.name}>
            <Accordion.Item ref={ref}   value={item?.name} onClick={handleClick}>
              <Accordion.Control >
                <h5 className="flex items-center gap-2 py-1 text-base font-medium">
                  <IconPackage className=" text-bg_banfsgy" size="1.5rem" />
                  {item?.name}
                </h5>
                <p className="py-1 text-sm font-normal text-gray-500">
                  {item?.description}
                </p>
              </Accordion.Control>

             
                <Accordion.Panel  key={item?.name}>
                {item.subfeatures.map((feature: any) => (
                  <div key={feature?.title} className="p-3 m-2 shadow-sm">
                    <div className="flex justify-between gap-2">
                      <Text fz="lg" mt="sm" fw={500}>
                        {feature.name}
                      </Text>

                      <ThemeIcon
                        size={44}
                        radius="md"
                        className="bg-transparent"
                      >
                        <Image
                          src={feature?.icon}
                          alt="clud"
                          width="100"
                          height="100"
                        />
                      </ThemeIcon>
                    </div>
                    <Text c="dimmed" fz="sm">
                      {feature.description}
                    </Text>
                  </div>
              ))}
               <div  className=" p-0 md:px-20">
                  <Link href="" className=" mt-2 p-3  read-link text-[#5d22d5] text-base float-right inline-flex items-center  font-bolder">
                    Read more <IconArrowRight className="ml-2 read-icon w-6" />
                  </Link>
              </div>
                  
                </Accordion.Panel>
 
             
            </Accordion.Item>
          </Accordion>
        ))}
      </Grid>
    </div>
  );
}
