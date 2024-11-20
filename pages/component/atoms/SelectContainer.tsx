import React from "react";

type selectionContainer_TP = {
  label?: string;
  placeholder?: string;
  description?: string;
  error?: string;
  className?: string;
  SelectType?: string;
  span?: boolean;
};
export const SelectContainer = ({
  label,
  placeholder,
  description,
  error,
  SelectType,
  className,
  span,
}: selectionContainer_TP) => {
  return (
    <div className={className}>
      <label className="font-semibold  text-sm">
        {label}
        {span ? <span className=" text-red-800 ">*</span> : null}
      </label>
      <select className="py-1 px-2  mt-1 rounded w-[100%] border  focus:border-2  focus:border-bg_banfsgy focus:outline-none border-neutral-800">
        <option className="hover:bg-bg_banfsgy  hover:text-white ">
          {placeholder}
        </option>
        <option className="hover:bg-bg_banfsgy  hover:text-white ">
          Egyption
        </option>
        <option className="hover:bg-  hover:text-white">Korean</option>
      </select>

      <p className="text-sm text-gray-900 py-2">{description}</p>
    </div>
  );
};
export default SelectContainer;
