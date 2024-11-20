"use client"
import Image from 'next/image';


type ServiceFeature_TP = {
    label?: string;
    description?: string;
    Icon?:any;
    className?:string;
    props?:any;
  };

export function ServiceFeature ({
    label,
    description,
    Icon,
    className,
    ...props
  }:ServiceFeature_TP) {
  return (
   
    <div className='py-5 lg:px-5 px-2 lg:col-span-6 md:col-span-1 max-sm:col-span-1'>
        <div className="flex flex-col lg:pt-[60px] ">
        <Image  src={Icon} width={50} height={50} alt="" />
        <h6 className='py-2 text-xl font-bold'>{label}</h6>
        <p className='text-lg font-medium '>
            {description}
        </p>
        </div>
    </div>
   
  );
}
export default ServiceFeature