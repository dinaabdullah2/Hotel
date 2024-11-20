"use client";
import { Button, Tabs } from "@mantine/core";
import { IconPhone } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import imgCustomer from "../../public/assets/discount.jpg";
import CustomNavigatonDetails from "../component/mucles/CustomNavigatonDetails";
import SelectForm from "../component/atoms/SelectForm";
import CheckboxComp from "../component/atoms/CheckBox";
import Rating from "../component/atoms/Rating";
import Link from "next/link";
import CardSearch from "../component/template/CardSearch";
import FilterSearch from "../component/template/FilterSearch";

const images = [
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
];

export default function Search() {
  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [openMap, setOpenMap] = useState(false);

  return (
    <>
      <CustomNavigatonDetails/>
    <div className=" m-auto lg:px-10 px-2 p-2">



      <div className="grid grid-cols-12 py-2 px-2  md:px-6">
        <div className="hidden col-span-3  py-5 lg:block">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2503345.0294716563!2d5.27937025!3d52.21299185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2snl!4v1686505162649!5m2!1sar!2snl"
              height="150"
              allowFullScreen
              loading="lazy"
              className="w-full rounded-xl"
            ></iframe>
          </div>
          <FilterSearch />
        </div>

        <div className="col-span-12 md:px-5 lg:col-span-9">
          <CardSearch
            image={images}
            title="New York Marriott Marquis"
            date="12/8/2005"
            category="Sharm Inn Amarein"
            
          />
          <CardSearch
            image={images}
            title="New York Marriott Marquis"
            date="12/8/2005"
            category="Sharm Inn Amarein"
          />
          <CardSearch
            image={images}
            title="New York Marriott Marquis"
            date="12/8/2005"
            category="Sharm Inn Amarein"
          />
          <CardSearch
            image={images}
            title="New York Marriott Marquis"
            date="12/8/2005"
            category="Sharm Inn Amarein"
          />
        </div>
      </div>

    </div>
    </>
  );
}
