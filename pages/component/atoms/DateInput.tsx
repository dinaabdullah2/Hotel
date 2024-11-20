"use client";
import { useEffect, useState } from "react";
import { DatePickerInput  , DatePicker} from "@mantine/dates";
import { Icon123, IconCalendar } from "@tabler/icons-react";
function DateInputComp({ placeholder, mobile,setOpen }: any) {
  
  const [date, setDate] = useState<[Date | null, Date | null]>([null, null]);
  const [range,setRange] = useState<number|null>(null)
  const [windowSize, setWindowSize] = useState<number | any>();

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  function getDayDiff(startDate: any, endDate: any) {
    const msInDay = 24 * 60 * 60 * 1000;
  
    setRange(Math.round(Math.abs(Number(endDate) - Number(startDate)) / msInDay))
  }

  useEffect(()=>{
    if(date[0] && date[1]){
    getDayDiff(date[0],date[1])
    }
  },[date])
 
  
   console.log(Date,"date")
  return (
    <div>
      {mobile ? (
        <>
        <DatePicker
          type="range"
  
          //@ts-ignore
          placeholder={<><IconCalendar  className="w-[20px] h-[20px] text-bg_banfsgy" /> {placeholder}</>}
          value={date}
          onChange={setDate}
          mx="auto"
          maw={400}
          numberOfColumns={12}
          weekendDays={[]}
          //@ts-ignore
          // withSelectButtons
        />
        <div className="py-2 px-2  sticky bottom-0 bg-white">
           <button onClick={()=>{setOpen(false)}}  className="w-[100%] bg-bg_banfsgy py-2 rounded-lg text-lg text-white font-semibold  "> {range ?  `OK (${range} Nights)`: `OK(0 Night)`} </button>
        </div>
        </>
      ) : (
        <div className=" relative ">
        <DatePickerInput
          type="range"   
          id="date-picker"
          valueFormat={`MM/DD/YYYY`}
          // label="Pick dates range"
          //@ts-ignore
          placeholder={<span className=" inline-flex items-center h-[100%]"><IconCalendar  className="w-[20px] h-[20px] text-bg_banfsgy mr-2" /> {placeholder}</span>}
          value={date}
          onChange={(value)=>{
            setDate(value)
            setRange(0)
          }}
          mx="auto"
          maw={400}
          weekendDays={[]}
          numberOfColumns={1}
          clearable
          className="bg-white rounded-lg  font-semibold  "
        />
         {range && windowSize >800 ? 
        <span className=" absolute h-[100%] z-[200] top-3 left-[180px] text-[0.875rem] font-semibold text-gray-500 ">({range}) nights</span>
        : 
        null
        }
        </div>
      )}
    </div>
  );
}

export default DateInputComp;
