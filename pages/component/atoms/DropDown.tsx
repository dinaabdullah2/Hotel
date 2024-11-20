"use client"
import { useState } from "react"
import Button from "./Button"
import Quantitiy from "./Quantitiy"
import { IconPlus, IconUser } from "@tabler/icons-react"
import DeleteIcon from "../icons/DeleteIcon"

function DropDown({mobile}:any) {
  const [open, setOpen] = useState(false)

  const ArrOfRooms = [
    {
      value: "",
    },
  ];

  const [arrRooms, setArrRooms] = useState(ArrOfRooms);

      const addRoom = () => {
        setArrRooms((prev: any) => {
          return [
            ...prev,
            {
              value: "",
            },
          ];
        });
        
      };
      console.log(arrRooms,'rooms')
      const removeRoom  = (index: any) => {
        console.log(index,'index')
        const rows = [...arrRooms];
        rows.splice(index, 1);
        console.log(rows)
        setArrRooms(rows);
      };

  return (
    <>
      {mobile ? (
      <div className="relative inline-block text-left w-[100%] ">

          <div
            className="absolute p-3 right-0 z-10 w-[100%]  origin-top-right bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
           {arrRooms.map((room,index)=>(
          <div className="px-3" key={index}>
            <div className=" flex flex-row ">

            <span className=" font-semibold">{index+1}</span>
              <p className="font-semibold ml-1">Room </p>
           
            </div>
            <div className="flex items-center py-2 ">
              <p className="p-2 text-sm">Adults</p>
              <div className="flex  px-2 pb-1">
                <Quantitiy />
              </div>
              <button onClick={() => removeRoom(index)}  disabled={arrRooms?.length > 1 ? false : true} >
                <DeleteIcon />
              </button>
            </div>
             
          </div>
        ))}
          <div className="sticky bottom-0 z-[100] bg-white py-2 flex flex-row items-center justify-between ">
            <button onClick={addRoom}  className="p-1  text-sm  inline-flex gap-1 items-center font-semibold">
               <IconPlus className="w-[15px] h-[15px]" />  Add Room
            </button>
            <Button  variant="primary" className="py-2 px-5   ">
                Done
            </Button>
          </div>
          </div>

      </div>
      )
      :
      (   <div className="relative inline-block text-left w-[100%] ">
      <div>
        <button
          
          type="button"
          className="inline-flex w-full rounded-lg justify-between  focus:border-bg_banfsgy focus:border-2 border   gap-x-1.5   border-gray-300 bg-white px-3 py-[12px]  text-sm font-semibold text-[#adb5bd] shadow-sm "
          id="menu-button"
          onClick={() => (!open ? setOpen(true) : setOpen(false))}
        >
         <span className=" inline-flex items-center"> 
            <IconUser className="w-[20px] h-[20px] mr-2  text-bg_banfsgy" /> 
             0 Room
          </span>
          <svg
            className="w-5 h-5 -mr-1 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {open && (
        <div
          className="absolute rooms-drop-down px-3 pt-2 right-0 z-10 overflow-y-scroll max-h-[200px] w-[100%] mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >  
        {arrRooms.map((room,index)=>(
          <div className="px-3" key={index}>
            <div className=" flex flex-row ">

            <span className=" font-semibold">{index+1}</span>
              <p className="font-semibold ml-1">Room </p>
           
            </div>
            <div className="flex items-center py-2 ">
              <p className="p-2 text-sm">Adults</p>
              <div className="flex  px-2 pb-1">
                <Quantitiy />
              </div>
              <button onClick={() => removeRoom(index)}  disabled={arrRooms?.length > 1 ? false : true} >
                <DeleteIcon />
              </button>
            </div>
             
          </div>
        ))}
          <div className="sticky bottom-0 z-[100] bg-white py-2 flex flex-row items-center justify-between ">
            <button onClick={addRoom}  className="p-1  text-sm  inline-flex gap-1 items-center font-semibold">
               <IconPlus className="w-[15px] h-[15px]" />  Add Room
            </button>
            <Button  variant="primary" className="py-2 px-5   ">
                Done
            </Button>
          </div>
        </div>
      )}
    </div>)
      }
    </>
  )
}

export default DropDown
