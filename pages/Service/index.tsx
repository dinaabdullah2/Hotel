"use client";
import {
  Button,

  Title,
  createStyles,
  rem
} from "@mantine/core";
import apiImg from "./../../public/assets/api.svg";
import hotelImg from "./../../public/assets/hotels-icon.png";
import mapImg from "./../../public/assets/Resize_map (3).webp";
import shape from "./../../public/assets/primary-shape.png";
import { useForm } from "@mantine/form";
import Link from "next/link";
import DateInputComp from "../component/atoms/DateInput";
import DropDown from "../component/atoms/DropDown";
import SelectForm from "../component/atoms/SelectForm";
import ServiceFeature from "../component/atoms/ServiceFeature";
import SerachComponent from "../component/mucles/SearchComponent";
import Image from "next/image";


const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: "50%",
    marginRight: `calc(${theme.spacing.xl} * 6)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(40),
    lineHeight: 1.3,
    fontWeight: 500,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

const Service = () => {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <>
      <div className="px-10 py-2">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              For products requiring API integration
            </Title>
            <p className="my-3  font-medium text-[18px]  ">
              Build fully functional accessible web applications faster than
              ever Mantine includes more than 120 customizable components and
              hooks to cover you in any situation
            </p>
            <p className="my-3  font-medium text-[18px]  ">
              When devising integrations, we are guided by the need for simple
              code and the principle of reliability. The product will be fully
              adapted to meet your needs
            </p>
            <Button
              radius="sm"
              size="xl"
              className="px-10 mt-5 border bg-bg_banfsgy hover:bg-white hover:border-bg_banfsgy hover:text-bg_banfsgy"
            >
              Watch Demo
            </Button>
          </div>

          <Image src={apiImg.src}  className={classes.image} alt="img"  width={100} height={100}/>
        </div>
      </div>
      <div className="bg-[#f8f8f8]  max-sm:px-3">
        <div className="grid lg:grid-cols-12 md:grid-cols-1  max-sm:grid-cols-1 gap-5 ">
          <div className="col-span-6  lg:block md:hidden sm:hidden  max-sm:hidden  bg-[#f8f8f8]">
            <div className="w-[100%]">
              <Image src={mapImg.src} alt="img" width={800} height={200} className=""  />
            </div>
          </div>
          {/* <div className="col-span-6">
            <div className="w-[100%]">
              <Image src={mapImg.src} alt="img" width={700} height={500} className=""  />
            </div>
          </div>
           */}
          <ServiceFeature
            
            label="Huge choice of inventory"
            Icon={hotelImg.src}
            description="You choose from over 2,000,000 hotels, guest houses, hostels, and apartments at great prices for corporate clients and travel agencies. We work with the world’s largest hotel suppliers and tens of thousands of hotels directly. This enables us to provide the best rates and save your money."
          />
        </div>
      </div>
      <div className="grid gap-7 lg:grid-cols-12 md:grid-cols-2 max-sm:grid-cols-1 lg:px-[64px] p-5">
        <ServiceFeature
          label="Huge choice of inventory"
          Icon={hotelImg.src}
          description="You choose from over 2,000,000 hotels, guest houses, hostels, and apartments at great prices for corporate clients and travel agencies. We work with the world’s largest hotel suppliers and tens of thousands of hotels directly. This enables us to provide the best rates and save your money."
        />
        <ServiceFeature
          label="Huge choice of inventory"
          Icon={hotelImg.src}
          description="You choose from over 2,000,000 hotels, guest houses, hostels, and apartments at great prices for corporate clients and travel agencies. We work with the world’s largest hotel suppliers and tens of thousands of hotels directly. This enables us to provide the best rates and save your money."
        />
      </div>
      <div className=" relative  grid gap-7 lg:grid-cols-12 md:grid-cols-2 max-sm:grid-cols-1 lg:px-[64px] p-5">
        <ServiceFeature
          label="Huge choice of inventory"
          Icon={hotelImg.src}
          description="You choose from over 2,000,000 hotels, guest houses, hostels, and apartments at great prices for corporate clients and travel agencies. We work with the world’s largest hotel suppliers and tens of thousands of hotels directly. This enables us to provide the best rates and save your money."
        />
        <div className="lg:col-span-6 md:col-span-1 max-sm:col-span-1">
          <SerachComponent />
        </div>
        <div className="absolute shapeOne">
          <Image alt="shape" src={shape.src} width={100} height={100} />
        </div>
      </div>
    </>
  );
};
export default Service;
