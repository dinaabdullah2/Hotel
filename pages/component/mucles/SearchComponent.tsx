"use client";
import React, { useEffect, useState } from "react";
import SelectForm from "../atoms/SelectForm";
import DateInputComp from "../atoms/DateInput";
import DropDown from "../atoms/DropDown";
import Button from "../atoms/Button";
import Link from "next/link";
import { Input } from "@mantine/core";
import ModalComp from "../template/Modal";
import { IconArrowBigLeftLines, IconArrowNarrowLeft } from "@tabler/icons-react";

export default function SearchComponent({width}:any) {
  const [openDestniation, setOpenDestination] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [openGuest, setOpenGuest] = useState(false);
  const [value, setValue] = useState<any>();

  useEffect(()=>{
    if(value){
      
      //@ts-ignore
      document.getElementsByClassName('mantine-1e6hn20')[0]?.click()
    }
   
})
 
    
    
  return (
    <>
      <div>
        <div className={ width? "w-[100%] mt-5 md:ml-auto hidden md:block" :"w-[100%] lg:w-[60%] md:w-[70%] mt-5 md:ml-auto hidden md:block"}>
          <div className="p-3 shadow-2xl rounded-md !bg-white">
            <SelectForm value={value} setValue={setValue}/>
            <div className="grid grid-cols-2 mt-4">
              <div className="col-span-2 ">
                <DateInputComp placeholder="Check-in - Check-out " />
                
              </div>
            </div>
            <div className="mt-4">
              <DropDown  />
            </div>
            <Button variant="primary" className="p-2 px-4 w-[100%] mt-5">
              <Link href="/search">Explore Hotels</Link>
            </Button>
          </div>
        </div>
        <div className="w-[100%] md:w-[60%] mt-10 md:ml-auto block md:hidden  ">
          <div className="p-3 px-3 shadow-2xl rounded-md !bg-white">
            <Input
              component="button"
              className="!p-0 text-[#adb5bd]"
              onClick={() => setOpenDestination(true)}
            >
              Destination
            </Input>

            <div className="grid grid-cols-2 mt-4">
              <div className="col-span-2">
                <Input
                  component="button"
                  className="p-0 text-[#adb5bd]"
                  onClick={() => setOpenDate(true)}
                >
                  Check-in - Check-out
                </Input>
              </div>
            </div>
            <Input
              component="button"
              className="p-0 mt-5"
              onClick={() => setOpenGuest(true)}
            >
              0 guesets
            </Input>
            <Button variant="primary" className="p-2 px-4 w-[100%] mt-5">
              <Link href="/search">Explore Hotels</Link>
            </Button>
          </div>
        </div>
      </div>
      <ModalComp
        opened={openDestniation}
        isClose={() => setOpenDestination(false)}
        title={<button className="px-5 py-2 rounded-md bg-bg_banfsgy text-white " onClick={()=>setOpenDestination(false)}><IconArrowBigLeftLines className="text-white font-bold" /></button>}
        fullScreen={true}
        withCloseButton={false}
      >
        <SelectForm mobile={true} />
      </ModalComp>
      <ModalComp
        opened={openDate}
        isClose={() => setOpenDate(false)}
        title={<button className="px-5 py-2 rounded-md bg-bg_banfsgy text-white " onClick={()=>setOpenDate(false)}><IconArrowBigLeftLines className="text-white font-bold" /></button>}
        fullScreen={true}
        withCloseButton={false}
      >
        <DateInputComp placeholder="Check-in - Check-out " mobile={true} setOpen={setOpenDate}/>
        {/* <CoustomDatePickerMobile/> */}
      </ModalComp>
      <ModalComp
        opened={openGuest}
        isClose={() => setOpenGuest(false)}
        title={<button className="px-5 py-2 rounded-md bg-bg_banfsgy text-white " onClick={()=>setOpenGuest(false)}><IconArrowBigLeftLines className="text-white font-bold" /></button>}
        fullScreen={true}
        withCloseButton={false}
      >
        <DropDown mobile={true}  />
      </ModalComp>
    </>
  );
}
