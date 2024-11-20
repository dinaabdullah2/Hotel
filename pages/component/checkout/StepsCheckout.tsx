"use client";
import { useEffect, useState } from "react";
import { Stepper, Button, Group, Modal, CheckIcon } from "@mantine/core";
import DetailsBooking from "./DetailsBooking";
import DetailsPayment from "./DetailsPayment";
import Confirmation from "./Confirmation";
import { useDisclosure } from "@mantine/hooks";
import ConfirmationModal from "../mucles/ConfirmationModal";

function StepsCheckOut() {
  const [active, setActive] = useState(1);
  const [reachBottom,setReachBottom] = useState<boolean>(false)
  const [windowSize, setWindowSize] = useState<number | any>();
  const [opened, { open, close }] = useDisclosure(true);
  
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

    console.log(active,'cc')

    const [scrollStatus, setScrollStatus] = useState({
      scrollDirection: null,
      scrollPos: 0,
    });
  
    useEffect(() => {
      window.addEventListener("scroll", handleScrollDocument);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScrollDocument);
      function handleResize() {
        setWindowSize(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    
    }, []);
  
    function handleScrollDocument() {
      setScrollStatus((prev):any => { 
        return {
          scrollDirection:
            document.body.getBoundingClientRect().top > prev.scrollPos
              ? "up"
              : "down",
          scrollPos: document.body.getBoundingClientRect().top,
        };
      });
    }

    useEffect(() => {
      function handleResize() {
        setWindowSize(window.innerWidth);
      
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, [windowSize]);

    function isScrollAtEnd() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const scrollTop = window.scrollY || window.scrollY;

      return scrollTop + windowHeight  >= documentHeight - 1800;
    }

    // Function to handle scroll events
    function handleScroll() {
      if (isScrollAtEnd()) {
        setReachBottom(isScrollAtEnd())
        // User has scrolled to the end of the page, you can trigger your action here
      }
    }
    
  return (
    <div >
      <Stepper active={active} onStepClick={setActive} breakpoint="xs">
        <Stepper.Step label="First step" description="Choose Room" disabled>
          <div className="text-lg font-semibold py-10">  Step 1 content: Create an account</div>
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Guest & Payment Details">
          <div className="grid grid-cols-12 mt-2 ">
            <div className="col-span-12 md:col-span-8 ">
              <div className="md:flex-row  flex flex-col gap-2 py-3">
                <p className="font-bold">Almost done!</p>
                <p>Enter your details and complete your booking now.</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 details-book">
              <DetailsBooking />
              
                {/* <Button variant="default" onClick={prevStep}>Complete Booking</Button> */}
                <div className= {scrollStatus.scrollPos > -2500 && reachBottom  ? " flex sticky  text-center  bottom-3 z-50  border-gray-300  p-5 mt-5 border shadow-md rounded-xl  w-full bg-white"  : " flex   text-center  bottom-3 z-50  border-gray-300  p-5 mt-5 border shadow-md rounded-xl  w-full bg-white" }>
                  <button
                    className="w-full font-bold text-lg text-white m-auto  text-center h-[50px] bg-bg_banfsgy rounded-xl hover:bg-bg_banfsgy"
                    onClick={nextStep}
                  >
                    Complete Booking
                  </button>
                </div>
             
            </div>
            
            <div className="md:block md:col-span-4 hidden details-payment">
              <DetailsPayment />
            </div>
          </div>
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Booking Confirmation" className="">
          {active == 2 ?
                <Modal opened={opened} size={windowSize > 900 ? '50%':'90%' }onClose={close} radius='xs'  className="confirmation-modal" >
                    <ConfirmationModal />
               </Modal> 
              :
              null
          }
          <Confirmation/>
          
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>
    </div>
  );
}

export default StepsCheckOut;
