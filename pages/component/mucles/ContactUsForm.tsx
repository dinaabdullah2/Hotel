import React from "react";
import InputCustom from "../atoms/InputCustom";
import SelectNormal from "../atoms/Select";
import CheckboxComp from "../atoms/CheckBox";
import TextereaCustom from "../atoms/Texterea";
import Button from "../atoms/Button";

export const ContactUsForm = () => {
  return (
    <form className="">
      <div className="grid gap-3 lg:grid-cols-12 md:grid-cols-1 sm:grid-cols-1 mb-7">
        <div className="lg:col-span-4 max-md:col-span-6 sm:col-span-6 max-sm:col-span-12 ">
          <InputCustom
            placeholder="Campany name"
            className="rounded-md border-bg_banfsgy placeholder:text-md focus:border-bg_banfsgy "
          />
        </div>
        <div className="lg:col-span-2 max-md:col-span-6 sm:col-span-6 max-sm:col-span-12 select-ContactUs ">
          <SelectNormal  />
        </div>
        <div className="lg:col-span-3 max-md:col-span-6 sm:col-span-6 max-sm:col-span-12">
          <InputCustom
            placeholder="Contact name"
            className="rounded-md border-bg_banfsgy placeholder:text-md focus:border-bg_banfsgy"
          />
        </div>
        <div className="lg:col-span-3 max-md:col-span-6 sm:col-span-6 max-sm:col-span-12">
          <InputCustom
            placeholder="Phone number"
            className="rounded-md border-bg_banfsgy placeholder:text-md focus:border-bg_banfsgy"
          />
        </div>
        <div className="col-span-12 lg:mt-[9px] mt-[4px]">
          <InputCustom
            placeholder="Email"
            className="rounded-md border-bg_banfsgy placeholder:text-md focus:border-bg_banfsgy"
          />
        </div>
        <div className="col-span-12 lg:mt-3 mt-2">
          <TextereaCustom
            placeholder="Message"
            className="rounded-md border-bg_banfsgy placeholder:text-md focus:border-bg_banfsgy"
          />
        </div>
        <div className="col-span-5 mt-3">
          <CheckboxComp
            label={`I am OK with StayExpo''`}
            text="Privacy Policy"
            className="rounded-md border-bg_banfsgy placeholder:text-md focus:border-bg_banfsgy"
          />
        </div>
        <div className="col-span-5 mt-3"></div>
      </div>
      <div className="flex pb-5">
        <Button
          className="py-2  m-auto text-xl font-light px-14 rounded-3xl"
        >
          Send
        </Button>
      </div>
    </form>
  );
};
export default ContactUsForm;
