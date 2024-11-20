import React from 'react'


type InputContainer_TP = {
    label?: string;
    placeholder?: string;
    description?: string;
    error?: string;
    className?:string;
    span?:boolean;
  };
export const InputContainer = (
    {
        label,
        placeholder,
        description,
        error,
        className,
        span
    }:InputContainer_TP
) => {
  return (
    <div className={className}>
        <label className='font-semibold  text-sm'>
            {label} 
            {span?<span className=' text-red-800 '>*</span>: null}
        </label>
        <input placeholder={placeholder} className='py-1 px-2 mt-1 rounded w-[100%] border-[.5px]  focus:border-2  focus:border-bg_banfsgy focus:outline-none border-neutral-800' />
        {description?
        <p className='text-sm text-gray-900 py-2'>{description}</p>
        :
        null
        }
    </div>
  )
}
export default InputContainer