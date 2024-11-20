import React from 'react'

const ButtonToggleNav = ({onClick}:any) => {
  return (
    <button className="relative group block lg:hidden  focus:border-0" onClick={onClick}>
       <div className="relative flex items-center justify-center rounded-full w-[30px] h-[30px] transform transition-all ring-0  ring-bg_banfsgy hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 ">
         <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all  duration-500 group-focus:-rotate-[45deg] origin-center">
           <div className=" bg-bg_banfsgy h-[2px] w-1/2 rounded transform transition-all duration-200 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
           <div className=" bg-bg_banfsgy h-[1px] rounded"></div>
           <div className=" bg-bg_banfsgy h-[2px] w-1/2 rounded self-end transform transition-all duration-200 group-focus:-rotate-90  group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
         </div>
       </div>
    </button>
  )
}

export default ButtonToggleNav