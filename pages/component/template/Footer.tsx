import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconLocation,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import {
  createStyles,
  Text,
  Title,
  TextInput,
  Button,
  rem,
  Loader,
} from "@mantine/core";
import image from "../../../public/assets/image.969ed1dc.svg";
import useFetch from "@/hooks/useFetch";
import { useMutate } from "@/hooks/useMutate";
import { useState } from "react";
import { useForm } from "@mantine/form";
import { notify } from "@/utils/toast";
import Image from "next/image";
import Link from "next/link";
import img from "../../../public/assets/footer-payments.png";
import img2 from "../../../public/assets/footer-sectigo.png";
import LogoWhite from "../atoms/LogoWhite";

function Footer() {
   
  const [isLoading, setIsLoading] = useState(false); 
  const form = useForm({
    initialValues: {
      email: "",
     
    },

    validate: {
      // email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      // password: (val) =>
      //   val.length <= 6
      //     ? "Password should include at least 6 characters"
      //     : null,
    },
  });

  const { mutate: addSubscriber } = useMutate({
    mutationKey: [`subscribe`],
    endpoint: `api/section/subscriber/store`,
    onSuccess: (data: any) => {
      setIsLoading(false);
      notify("success", "Subscribed Successfully");
      console.log('done');
    },
    onError: (err: any) => {
      console.log('error', err);
      setIsLoading(false);
      notify("error", `${err?.response?.data?.message}`);   
    },
    formData: true,
});
  


  return (
    <>
      <footer className=" bg-slate-950">
        <main className="p-5 md:p-10 bg-slate-900">
          <div className="text-white">
            <li className="flex flex-row justify-between max-sm:flex-col">
              <div className="">
                <Link href="/">
                  <LogoWhite />
                </Link>
              </div>
              <div>
                <div className="flex flex-row items-center max-sm:mt-3 ">
                  <Link
                    href="/"
                    className="p-1 mr-2 border border-gray-600 border-solid rounded-full hover:text-white  "
                  >
                    <IconBrandFacebook className="text-gray-600 hover:text-white" />
                  </Link>

                  <Link
                    href="/"
                    className="p-1 mr-2 border border-gray-600 border-solid rounded-full hover:text-white "
                  >
                    <IconBrandYoutube className="text-gray-600 hover:text-white" />
                  </Link>
                  <Link
                    href="/"
                    className="p-1 mr-2 border border-gray-600 border-solid rounded-full hover:text-white  "
                  >
                    <IconBrandInstagram className="text-gray-600 hover:text-white" />
                  </Link>
                  <Link
                    href="/"
                    className="p-1 mr-2 border border-gray-600 border-solid rounded-full hover:text-white "
                  >
                    <IconBrandTelegram className="text-gray-600 hover:text-white" />
                  </Link>
                  <Link
                    href="/"
                    className="p-1 mr-2 border border-gray-600 border-solid rounded-full hover:text-white "
                  >
                    <IconBrandTwitter className="text-gray-600 hover:text-white" />
                  </Link>
                </div>
              </div>
            </li>

            <div className="grid lg:grid-cols-12 md:grid-cols-2 sm:grid-cols-1 gap-7">
              <ul className="mt-5 lg:col-span-4 md:col-span-2 sm:col-span-1 ">
                <h6 className="w-[100px] border-b border-b-[#8900a1] py-2">
                  About
                </h6>
                <li className="py-3 text-gray-600">
                  We are a travel business that specializes in hotel
                  accommodations for business travel and are looking to expand
                  our offerings shortly to include car rental and airline
                  tickets (offline).
                </li>
              </ul>

              <ul className="lg:col-span-2 md:col-span-1 sm:col-span-1 lg:mt-5 lg:mb-5 ">
                <h6 className="w-[100px]  border-b border-b-[#8900a1] py-2">
                  Quick Links
                </h6>
                <li className="pt-2 ">
                  <Link
                    className="text-sm font-semibold text-gray-600 hover:text-white "
                    href="/about"
                  >
                    {" "}
                    About Us
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="text-sm font-semibold text-gray-600 hover:text-white "
                    href="/Service"
                  >
                    {" "}
                    Services
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="text-sm font-semibold text-gray-600 hover:text-white"
                    href="/privacy-policy"
                  >
                    {" "}
                    Privacy Policy
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="text-sm font-semibold text-gray-600 hover:text-white"
                    href="/terms-condition"
                  >
                   terms of condition
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="text-sm font-semibold text-gray-600 hover:text-white"
                    href="/faq"
                  >
                    F&amp;Qs
                  </Link>
                </li>
              </ul>
              <ul className="lg:col-span-2 md:col-span-1 sm:col-span-1 lg:mt-5 lg:mb-5 ">
                <h6 className="w-[100px]  border-b border-b-[#8900a1]  mb-2  py-2">
                  {" "}
                  Contact Us
                </h6>
                <li className="flex flex-row pt-2 hover:text-white ">
                  <Link
                    className="flex flex-row items-center hover:text-white "
                    href="tel:20 999 999 9999"
                  >
                    {" "}
                    <IconPhone className="w-5 mr-2 text-sm text-gray-600" />
                    <span className="text-sm font-semibold text-gray-600 hover:text-white ">
                      +20 999 999 9999
                    </span>
                  </Link>
                </li>
                <li className="flex flex-row pt-2 hover:text-white ">
                  <Link
                    className="flex flex-row items-center hover:text-white "
                    href="mailto:info@stayexpo.com"
                  >
                    {" "}
                    <IconMail className="w-5 mr-2 text-sm text-gray-600 " />
                    <span className="text-sm font-semibold text-gray-600 hover:text-white ">
                      {" "}
                      info@stayexpo.com
                    </span>
                  </Link>
                </li>
                <li className="flex flex-row pt-2 hover:text-white ">
                  <Link
                    className="flex flex-row items-center hover:text-white "
                    href="http://maps.google.com/?q=1200"
                  >
                    {" "}
                    <IconLocation className="w-5 mr-2 text-sm text-gray-600 " />
                    <span className="text-sm font-semibold text-gray-600 hover:text-white ">
                      Cairo,Egypt
                    </span>
                  </Link>
                </li>
                <li className="flex flex-row pt-2 hover:text-white ">
                  <Link
                    className="flex flex-row items-center hover:text-white "
                    href="tel:20 999 999 9999"
                  >
                    {" "}
                    <IconPhone className="w-5 mr-2 text-sm text-gray-600" />
                    <span className="text-sm font-semibold text-gray-600 hover:text-white ">
                      +20 999 999 9999
                    </span>
                  </Link>
                </li>
              </ul>
              <ul className="lg:col-span-4 md:col-span-2 sm:col-span-1 lg:mt-5 lg:mb-5 ">
                <h6 className="w-[100px]  mb-3 border-b border-b-[#8900a1] py-2">
                  {" "}
                  Subscription
                </h6>
                <li className="flex flex-row pt-2 ">
                    <form onSubmit={form.onSubmit((values) => {
                              console.log(values);
                            
                              addSubscriber(values);
                            })}> 
                    
                      <input
                        name="email"
                        value={form.values.email}
                        onChange={(event) =>
                          form.setFieldValue("email", event.currentTarget.value)
                        }
                        placeholder="Your email"
                        className="w-2/3 px-2 py-2 bg-transparent border border-r-0 border-gray-400 rounded-r-none rounded-l-g"
                      />
                          <button      
                            onClick={() => setIsLoading(true)} 
                            type="submit" 
                            className="px-2  py-2 rounded-lg  rounded-l-none hover:text-bg_banfsgy hover:bg-transparent hover:border-gray-400 hover:border bg-bg_banfsgy "
                          >
                            Subscribe
                          {/* {isLoading ? <Loader color="#fff" size={'xs'} /> : null} */}
                        </button>
                      
                    </form>
                    
                  {/* <input
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    className="w-2/3 px-2 py-2 bg-transparent border border-r-0 border-gray-400 rounded-r-none rounded-l-g"
                  />
                  <button className="px-2 py-2 rounded-lg rounded-l-none hover:text-bg_banfsgy hover:bg-transparent hover:border-gray-400 hover:border bg-bg_banfsgy ">
                    Sign Up
                  </button> */}
                </li>
              </ul>
            </div>

            <div className="grid gap-4 mt-5 lg:grid-cols-12 md:grid-cols-2 sm:grid-cols-1">
              <ul className="mt-5 lg:col-span-1 md:col-span-1 sm:col-span-1 ">
                <li className="py-3 text-gray-600">
                  <Image
                    className="lg:w-[100%] w-[50%] lg:pr-2  h-auto"
                    src={img2.src}
                    alt="img"
                    width="10"
                    height="10"
                  />
                </li>
              </ul>

              <ul className="lg:col-span-8 md:col-span-2 sm:col-span-1 lg:mt-5 lg:mb-5 ">
                <li className="pt-2 ">
                  <div className="p-5 border border-gray-600 rounded-lg ">
                    <fieldset className=" relative">
                      <legend className="font-semibold  text-gray-600 test-xsm  absolute -top-[31px] z-100 left-[15px] bg-[#0F172A] px-2">DISCLAIMER</legend>
                      <p className="font-semibold text-gray-600 test-xsm ">
                        StayExpo is an independent and privately owned tour
                        operator. Any names or logos of hotel properties, events
                        or venues may be registered trademarks of their
                        respective holders. Our use of these trademarks does not
                        imply any affiliation with, or endorsement by their
                        owners unless otherwise specified on the relevant
                        webpage.
                      </p>
                    </fieldset>
                    {/* <div className="absolute -top-3 z-1 left-5 ">
                          <span className="p-3 font-semibold text-gray-600 test-sm bg-slate-900" >DISCLAIMER</span>
                        </div> */}
                  </div>
                </li>
              </ul>
              <ul className="lg:col-span-3 md:col-span-2 sm:col-span-1 lg:mt-5 lg:mb-5 ">
                <li className="flex flex-row pt-5 hover:text-white ">
                  <Image
                    src={img.src}
                    className="w-[100%] h-auto"
                    alt="img"
                    width="10"
                    height="10"
                  />
                </li>
              </ul>
            </div>
          </div>
        </main>

        <div className="p-2 lg:flex lg:flex-row lg:justify-between lg:items-center">
          <p className="p-1 text-gray-600 ">
            StayExpo ® is a registered trademark of 360StayExpo Group ®
          </p>

          <p className="p-1 text-gray-600 ">
            2016 - 2023 StayExpo®. All rights reserved. powered by SavvyHost
          </p>
        </div>

      </footer>
    </>
  );
}

export default Footer;
