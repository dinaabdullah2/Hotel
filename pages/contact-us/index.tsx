"use client";
import React from "react";
import ContactImg from "./../../public/assets/contact-us.webp";
import Image from "next/image";
import {
  Title,
  Text,
  Container,
  Overlay,
  createStyles,
  rem,
  Select,
  Textarea,
  Checkbox,
} from "@mantine/core";
import HeaderBanner from "../component/mucles/HeaderBanner";
import ContactUsSideBar from "../component/mucles/ContactUsSideBar";
import ContactUsForm from "../component/mucles/ContactUsForm";

function Contact_us() {
  return (
    <>
    <HeaderBanner label='Get In Touch' bannerImg={ContactImg.src} descriptionBoolean={true} />
     
      <div className="w-[100%] bg-gray-100 h-auto">
        <div className=" grid lg:grid-cols-12 md:grid-cols-1   p-3 gap-10  relative z-[100] -translate-y-14 ">
            <div className="lg:col-span-4 md:col-span-12 sm:col-span-12">
                <div className="rounded-md p-8 block bg-white h-auto  w-[100%]">
                  <h3 className="py-4 text-4xl font-light ">Give us a call</h3>
                  <p><strong>Give us a call </strong> at any of the following phone numbers to discuss how can we help with your business travels.</p>
                  <ContactUsSideBar />
                </div>
                <div className=" rounded-md mt-5 p-10 bg-white h-auto w-[100%]">
                  <h3 className="py-4 text-2xl font-bold ">Expo Travel Group Ltd.</h3>
                  <p className="mb-2 text-sm font-extralight">Level 1, The Chase, Carmanhall Road, Sandyford,Dublin D18 Y3X2, Ireland.</p>
                  <p className="text-sm font-extralight"><strong > VAT:</strong> IE3589513WH</p>
                  <p className="text-sm font-extralight"><strong> Reg. Number:</strong>  640015</p>
                </div>
            </div>
            <div className="lg:col-span-8 md:col-span-12 sm:col-span-12 ">
                <div className="rounded-md lg:p-10 p-4   bg-white w-[100%]">
                  <h3 className="py-4 text-4xl font-light max-sm:text-3xl">Send us a message</h3>
                  <p className="font-light ">If you prefer you can send us a quick message using the form below and we will get back to you within 24 hours.</p>
                  <div className="h-auto lg:p-8 px-4 py-5  mt-5 bg-gray-100 rounded-md ">
                      <ContactUsForm />

                  </div>
                    
                </div>
                
            </div>
        </div>
      </div>
    </>
  );
}

export default Contact_us;
