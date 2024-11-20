"use client";
import { Checkbox } from "@mantine/core";

type CheckboxComp_TP = {
  label: any;
  className?: string;
  text?: any;
};

function CheckboxComp({ label, className, text }: CheckboxComp_TP) {
  return (
    <Checkbox
      label={
        <>
          <div className=" flex  items-center justify-between h-[100%] cursor-pointer p-2">
            <span className="  text-xs ml-2">{label}</span>
            <span className="text-gray-500  text-xs ">{text}</span>
            
          </div>
        </>
      }
      className={`${className} w-full text-sm hover:bg-[#5d22d529]  rounded  pl-2 `}
    />
  );
}
export default CheckboxComp;
