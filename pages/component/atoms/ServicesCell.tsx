import Image from 'next/image';
import React from 'react'

type ServicesCustom_TP = {
    label?: string;
    description?: string;
    img?:any;
    Icon?:any;
    className?:string;
    props?:any;
  };
export const ServicesCell = ({
    label,
    description,
    img,
    Icon,
    className,
    ...props
  }:ServicesCustom_TP) => {
  return (
    <div className='lg:col-span-4 md:col-span-1  col-span-1'>
    <div className='p-6  w-[100%]  bg-white'>
        <div className='flex flex-row  justify-between'>
          <div className=''>
               <h6 className='capitalize font-bold text-xl max-sm:text-sm  text-left px-4'>{label}</h6>
               <p className=' text-xs text-gray-600  text-left px-4 py-2 '>{description}</p>
           </div>
           <div className=''>
               <Image src={img} width={120} height={120} alt=""  />
           
           </div>
        </div>
    </div>
</div>
  )
}
export default ServicesCell