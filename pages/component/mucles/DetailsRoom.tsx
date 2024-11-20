import { IconAlertCircle, IconAlertHexagon, IconArrowAutofitWidth, IconBath, IconBedFilled, IconCheck, IconChevronRight, IconClock, IconDoorExit, IconExternalLink, IconHomeLink, IconMan, IconResize, IconUnlink, IconUser } from "@tabler/icons-react";
import React from "react";
import ImageGallery from "react-image-gallery";
import Button from "../atoms/Button";
import { IconLink } from "@tabler/icons-react";
import Link from "next/link";
import RadioGroup from "../atoms/RadioGroup";
import Balacon from "../icons/Balacon";
import ManIcon from "../icons/ManIcon";
import Child from "../icons/Child";
import { Radio } from "@mantine/core";
import KingBedIcon from "../icons/KindBedIcon";
import TwinBedIcon from "../icons/TwinBedIcon";
import SelectNormal from "../atoms/Select";



const images = [
  {
    original:
      "https://q-xx.bstatic.com/xdata/images/hotel/max300/339393130.jpg?k=d7004d96ff7ea818771268ef59ca775da3412a60e40c0029449d7c495ed56292&o=",
    thumbnail:
      "https://q-xx.bstatic.com/xdata/images/hotel/max300/339393130.jpg?k=d7004d96ff7ea818771268ef59ca775da3412a60e40c0029449d7c495ed56292&o=",
  },
  {
    original:
      "https://q-xx.bstatic.com/xdata/images/hotel/max300/339393130.jpg?k=d7004d96ff7ea818771268ef59ca775da3412a60e40c0029449d7c495ed56292&o=",
    thumbnail:
      "https://q-xx.bstatic.com/xdata/images/hotel/max300/339393130.jpg?k=d7004d96ff7ea818771268ef59ca775da3412a60e40c0029449d7c495ed56292&o=",
  },
];
export default function DetailsRoom() {
  return (
    <>
 
    <div className="md:mt-10 hidden md:block">
      <div className="flex flex-row justify-between items-center max-sm:hidden">
           <div>
              <p className="text-sm font-semibold">5 room types | 20 room offers</p>
              <p className="text-gray-700 inline-flex items-center text-xs "> <IconLink  className="w-[15px] h-[15px]"/> Prices do not include taxes & fees</p>
           </div>
           <div className=" ">
              <p className="flex flex-row items-center text-sm bg-red-200 text-red-600 p-1 rounded">
                <IconClock className="mr-2" />
              Hurry up! <strong className="px-1"> 1 room type</strong> has already sold out for your dates!
              </p>
                
           </div>
      </div>
      <div className="p-0 mt-4 overflow-hidden border rounded-sm">
        <h6 className="px-3 py-1 hover:underline">Standard Twin Room</h6>
        <p className="text-red-600 px-3 text-sm">Last booked 6 hours ago</p>

        <div className="bg-[#f7f7f7] py-2">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-2 px-2">
              <ImageGallery
                items={images}
                showNav={false}
                showFullscreenButton={false}
                showPlayButton={false}
              />
              <button  className=" text-bg_banfsgy hover:underline text-xs pb-2">Room photo and details</button>
              <hr />
              <Radio.Group
                defaultValue="rea"
                name="favoriteFramework"
                label="Bed preference (if available)"
                >
                  <Radio value="rea"  label={<div className='ml-1 flex justify-between hover:text-bg_banfsgy label_radio '>1 queen bed <KingBedIcon className='w-[30px] h-[30px]' /></div> } />
                  <Radio value="svelte" label={<div className='ml-1 flex justify-between hover:text-bg_banfsgy label_radio '>2 single beds <TwinBedIcon className='w-[30px] h-[30px]' /></div> } />  
                </Radio.Group>
             <hr />
              <div className="flex items-center gap-2 pt-4 pb-1">
                <IconArrowAutofitWidth className="w-[20px] h-[20px] text-gray-400"/>
                <p className="text-sm flex "> Room size: 23 m²/248 ft²</p>
              </div>
              <div className="flex items-center gap-2 py-1">
                <IconBath className="w-[20px] h-[20px] text-gray-400"/>
                <p className="text-sm flex "> Shower</p>
              </div>
              <div className="flex items-center gap-2 py-1">
              <Balacon className="w-[20px] h-[20px] text-gray-400"/>
                <p className="text-sm flex "> Balcony/terrace</p>
              </div>
              <div className="flex items-center gap-2 py-1">
              <IconDoorExit className="w-[20px] h-[20px] text-gray-400"/>
                <p className="text-sm flex "> Outdoor view</p>
              </div>
           
           
            </div>
            <div className="grid grid-cols-12 col-span-12 md:col-span-10">
              <div className="grid grid-cols-12 col-span-12 ">
                <div className="col-span-12 pr-0 md:col-span-4">
                  <p className="px-2 text-sm font-semibold pb-2">Benefits</p>
                  <div className="h-full p-2 bg-white border-r">
                    <p className="text-xs  font-semibold pt-1"> Your price includes:</p>
                    <div className="flex  gap-2 mt-3">
                      <IconCheck className="text-green-600 w-[20px] h-[20px]" />
                      <p className="text-sm w-[100%] ">Free cancellation before September 13, 2023</p>
                    </div>
                    <div className="flex  gap-2 mt-3">
                      <IconCheck className="text-green-600 w-[20px] h-[20px]" />
                      <p className="text-sm w-[100%] ">Free Breakfast</p>
                    </div>
                    <div className="flex  gap-2 mt-3">
                      <IconCheck className="text-green-600 w-[20px] h-[20px]" />
                      <p className="text-sm w-[100%]">Pay nothing until September 11, 2023</p>
                    </div>
                    <div className="flex  gap-2 mt-3">
                      <IconCheck className="text-green-600 w-[20px] h-[20px]" />
                      <p className="text-sm w-[100%] ">All Inclusive, Dinner included, Lunch included, Parking, Welcome drink, Express check-in, Free WiFi, Free fitness center access</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-xs font-semibold ">Other rewards & discounts</p>
                      <p className="text-[#bc9c2e] flex mt-2  items-center gap-1 border border-[#bc9c2e] p-1 text-xs">
                        <IconAlertHexagon className="w-[20px] h-[20px] " />  Limited Time Offer. Price includes 20% discount!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-1">
                  <p className="px-2 text-sm font-semibold pb-2" >Sleeps</p>
                  <div className="h-full text-center m-auto bg-white">
                    <IconLink className="w-[20px] h-[20px] m-auto pt-2"/>
                    <div className="flex justify-center pt-2">
                      <ManIcon />
                      <Child />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">1 kid under</p>
                      <p className="text-xs text-gray-500">12 years</p>
                      <p className="text-xs text-gray-500">stays</p>
                      <p className="text-xs text-green-500">FREE!</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4 payment-radio">
                <p className="px-2 text-sm font-semibold pb-2 " >Payment & cancellation</p>
                  <div className="h-full p-5 bg-[#f8f5ff] ">
                  <Radio.Group
                    name="Cancellation"
                    label="Cancellation"
                    >
                      <Radio value="reac" label={<div className='ml-1  flex justify-between text-bg_banfsgy label_radio '>Free cancellation before September 13, 2023 </div> } /> 
                    </Radio.Group>
                    <Radio.Group
                      mt={'xs'}
                      name="Payment"
                      label="Payment"
                    >
                      <Radio value="react" label={<div className='ml-1  flex justify-between text-bg_banfsgy label_radio '>Pay nothing until September 11, 2023 </div> } />     
                    </Radio.Group>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-3 px-3 ">
                  <p className="px-2 text-sm font-semibold pb-2 " >Payment & cancellation</p>
                  <div className="pt-[1px] h-full bg-white border-l pb-5">
                    <div className="mt-5  bg-[#e12d2d] w-[55%]">
                      <p className="p-1 text-xs text-white font-semibold ">SAVE 75% TODAY!</p>
                    </div>
                    <div className="flex flex-col items-end justify-end mt-3">
                      
                      <del className="text-lg px-1">$ 158</del>
                      <p className=" px-1 text-red-500 ">USD <strong className="text-3xl font-bold">39 </strong></p>
                    </div>
                    <div className="text-center">
                      {/* <span className="text-[#bc9c2e] text-[10px] m-auto">
                        Coupon 7PCTCAP17MIN250 applied
                      </span> */}
                    </div>
                    <div className="py-1 px-4 mt-5 text-center">
                      <Button className="w-full px-3 py-3  m-auto text-xs text-white bg-bg_banfsgy">
                        Reserve
                      </Button>
                    </div>
                    <div className="py-1 px-4  text-center">
                      <Button className="w-full  px-3 py-3 m-auto text-xs text-black bg-white border border-bg_banfsgy">
                        Book Now
                      </Button>
                    </div>
                    <div className="py-1 px-4  text-center ">
                          <div className=" px-3 py-3 bg-[#f6f1ff]   m-auto">
                             <p className="text-sm">NO RISK!</p>
                             <p className="text-xs">No cancellation fee</p>  
                          </div>
                          <p className="text-xs py-1 font-semibold text-right text-green-500">
                            Limited availability
                          </p>
                    </div>
                    <div className="m-auto mt-4 text-end ">
                      <p className="text-[#e12d2d] text-sm font-semibold px-1 pb-5">Our last 5 rooms!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 col-span-12 mt-10 border border-[#e12d2d] ">
                <div className="col-span-12 p-0 md:col-span-4">
           
                  <div className="h-full p-2 bg-white border-r">
                  <p className="text-xs  font-semibold pt-1"> Your price includes:</p>
                    <div className="flex  gap-2 mt-3">
                      <IconCheck className="text-green-600 w-[20px] h-[20px]" />
                      <p className="text-sm w-[100%] ">Free cancellation before September 13, 2023</p>
                    </div>
                    <div className="flex  gap-2 mt-3">
                      <IconCheck className="text-green-600 w-[20px] h-[20px]" />
                      <p className="text-sm w-[100%] ">Free Breakfast</p>
                    </div>
                    <div className="flex  gap-2 mt-3">
                      <IconCheck className="text-green-600 w-[20px] h-[20px]" />
                      <p className="text-sm w-[100%]">Pay nothing until September 11, 2023</p>
                    </div>
                    <div className="flex  gap-2 mt-3">
                      <IconCheck className="text-green-600 w-[20px] h-[20px]" />
                      <p className="text-sm w-[100%] ">All Inclusive, Dinner included, Lunch included, Parking, Welcome drink, Express check-in, Free WiFi, Free fitness center access</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-xs font-semibold ">Other rewards & discounts</p>
                      <p className="text-[#bc9c2e] flex mt-2  items-center gap-1 border border-[#bc9c2e] p-1 text-xs">
                        <IconAlertHexagon className="w-[20px] h-[20px] " />  Limited Time Offer. Price includes 20% discount!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-1">
         
                  <div className="h-full text-center bg-white">
                    <IconLink className="w-[20px] h-[20px] m-auto pt-2"/>
                    <div className="flex justify-center pt-2">
                      <ManIcon />
                      <Child />
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4 payment-radio">
                 
                  <div className="h-full p-5 bg-[#f6f1ff] ">
                  <Radio.Group
                    name="Cancellation"
                    label="Cancellation"
                    >
                      <Radio value="reac" label={<div className='ml-1  flex justify-between text-bg_banfsgy label_radio '>Free cancellation before September 13, 2023 </div> } /> 
                    </Radio.Group>
                    <Radio.Group
                      mt={'xs'}
                      name="Payment"
                      label="Payment"
                    >
                      <Radio value="react" label={<div className='ml-1  flex justify-between text-bg_banfsgy label_radio '>Pay nothing until September 11, 2023 </div> } />     
                    </Radio.Group>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-3 px-3 ">
                  <div className="pt-[1px] h-full bg-white border-l pb-5">
                    <div className="mt-5 bg-[#e12d2d] w-[55%]">
                      <p className="p-1 text-xs text-white font-semibold ">SAVE 75% TODAY!</p>
                    </div>
                    <div className="flex flex-col items-end justify-end mt-3">
                      
                      <del className="text-lg px-1">$ 158</del>
                      <p className=" px-1 text-red-500 ">USD <strong className="text-3xl font-bold">39 </strong></p>
                    </div>
                    <div className="text-center">
                      {/* <span className="text-[#bc9c2e] text-[10px] m-auto">
                        Coupon 7PCTCAP17MIN250 applied
                      </span> */}
                    </div>
                    <div className="py-1 px-4 mt-5 text-center">
                      <Button className="w-full px-3 py-3  m-auto text-xs text-white bg-bg_banfsgy">
                        Reserve
                      </Button>
                    </div>
                    <div className="py-1 px-4  text-center">
                      <Button className="w-full  px-3 py-3 m-auto text-xs text-black bg-white border border-bg_banfsgy">
                        Book Now
                      </Button>
                    </div>
                    <div className="py-1 px-4  text-center ">
                          <div className=" px-3 py-3 bg-[#f6f1ff]   m-auto">
                             <p className="text-sm">NO RISK!</p>
                             <p className="text-xs">No cancellation fee</p>  
                          </div>
                          <p className="text-xs py-1 font-semibold text-right text-green-500">
                            Limited availability
                          </p>
                    </div>
                    <div className="m-auto mt-4 text-end ">
                      <p className="text-[#e12d2d] text-sm font-semibold px-1 pb-5">Our last 5 rooms!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* sm screen  */}
    <div className=" block md:hidden">
      <div className="flex flex-row justify-between items-center max-sm:hidden">
           <div>
              <p className="text-sm font-semibold">5 room types | 20 room offers mmm</p>
              <p className="text-gray-700 inline-flex items-center text-xs "> <IconLink  className="w-[15px] h-[15px]"/> Prices do not include taxes & fees</p>
           </div>
           <div className=" ">
              <p className="flex flex-row items-center text-sm bg-red-200 text-red-600 p-1 rounded">
                <IconClock className="mr-2" />
                Hurry up! <strong className="px-1"> 1 room type</strong> has already sold out for your dates!
              </p>
                
           </div>
      </div>
      <div className="p-0 mt-4 overflow-hidden border rounded-sm">
    
        <div className="bg-white py-2">
          <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-2  ">
           <ImageGallery
                items={images}
                showNav={true}
                showBullets={true}
                showThumbnails={false}
              />
          </div>
            <div className="col-span-12 md:col-span-2 px-2 ">
              <h6 className=" py-2 text-xl hover:underline">Standard Twin Room</h6>
              <p className="text-red-600  text-sm">Last booked 6 hours ago</p>
              <button  className=" text-bg_banfsgy hover:underline text-xs pb-2">Room photo and details</button>
              <hr />
              {/* <Radio.Group
                defaultValue="rea"
                name="favoriteFramework"
                label="Bed preference (if available)"
                >
                  <Radio value="rea"  label={<div className='ml-1 flex justify-between hover:text-bg_banfsgy label_radio '>1 queen bed <KingBedIcon className='w-[30px] h-[30px]' /></div> } />
                  <Radio value="svelte" label={<div className='ml-1 flex justify-between hover:text-bg_banfsgy label_radio '>2 single beds <TwinBedIcon className='w-[30px] h-[30px]' /></div> } />  
                </Radio.Group>
             <hr /> */}
              <div className="flex items-center gap-2 pt-2 pb-1">
                <IconArrowAutofitWidth className="w-[20px] h-[20px] text-gray-400"/>
                <p className="text-sm flex "> Room size: 23 m²/248 ft²</p>
              </div>
              <div className="flex items-center gap-2 py-1">
                <IconBath className="w-[20px] h-[20px] text-gray-400"/>
                <p className="text-sm flex "> Shower</p>
              </div>
              <div className="flex items-center gap-2 py-1">
              <Balacon className="w-[20px] h-[20px] text-gray-400"/>
                <p className="text-sm flex "> Balcony/terrace</p>
              </div>
              <div className="flex items-center gap-2 py-1">
              <IconDoorExit className="w-[20px] h-[20px] text-gray-400"/>
                <p className="text-sm flex "> Outdoor view</p>
              </div>
           
           
            </div>
            <div className="grid grid-cols-12 col-span-12 md:col-span-10">
              <div className="grid grid-cols-12 col-span-12 ">
                <div className="col-span-12 pr-0 md:col-span-4">
                  {/* <p className="px-2 text-sm font-semibold pb-2 ">Benefits</p> */}
                  <div className="h-full  bg-[#f6f1ff] pb-5 border-r">
                  <div className="flex flex-row justify-between  ">
                    <div className="w-[60%] p-2">
                       <p className="text-xs  font-semibold pt-1"> Your price includes:</p>
                        <div className="flex  gap-2 mt-1">
                          <IconCheck className="text-green-700 w-[20px] h-[20px]" />
                          <p className="text-xs w-[100%] text-green-700 ">Free cancellation before September 13, 2023</p>
                        </div>
                        <div className="flex  gap-2 mt-1">
                          <IconCheck className="text-green-700 w-[20px] h-[20px]" />
                          <p className="text-xs w-[100%] text-green-700 ">Free Breakfast</p>
                        </div>
                        <div className="flex  gap-2 mt-1">
                          <IconCheck className="text-green-700 w-[20px] h-[20px]" />
                          <p className="text-xs w-[100%] text-green-700 ">Pay nothing until September 11, 2023</p>
                        </div>
                        <div className="flex  gap-2 mt-1">
                          <IconCheck className="text-green-700 w-[20px] h-[20px]" />
                          <p className="text-xs w-[100%] text-green-700 "> Dinner included </p>
                        </div>
                        <div className="flex  gap-2 mt-1">
                          <IconCheck className="text-green-700 w-[20px] h-[20px]" />
                          <p className="text-xs w-[100%] text-green-700  "> Lunch included</p>
                        </div>
                        <div className="flex  gap-2 mt-1">
                          <IconCheck className="text-green-700 w-[20px] h-[20px]" />
                          <p className="text-xs w-[100%] text-green-700 "> Parking</p>
                        </div>
                        <div className="flex  gap-2 mt-1">
                          <IconCheck className="text-green-700 w-[20px] h-[20px]" />
                          <p className="text-xs w-[100%] text-green-700 "> Welcome drink</p>
                        </div>
                        <div className="flex  gap-2 mt-1">
                          <IconCheck className="text-green-700 w-[20px] h-[20px]" />
                          <p className="text-xs w-[100%] text-green-700 "> Express check-in</p>
                        </div>
                        <div className="flex  gap-2 mt-1">
                          <IconCheck className="text-green-700 w-[20px] h-[20px]" />
                          <p className="text-xs w-[100%] text-green-700 "> Free WiFi</p>
                        </div>
                         <div className="flex  gap-2 mt-1">
                          <IconCheck className="text-green-700 w-[20px] h-[20px]" />
                          <p className="text-xs w-[100%] text-green-700 "> Free fitness center acces</p>
                        </div>
                        
                    </div>
                    
                    <div className="flex flex-col py-2">
                      <p className=" text-bg_banfsgy flex flex-row text-xs justify-end font-semibold items-center">Room details <IconChevronRight className="text-bg_banfsgy" /></p>
                        <div className="flex justify-end px-3 py-1 ">

                           <span className="flex items-center px-1 text-xs text-bg_banfsgy"><IconUser className="w-[12px] h-[12px] fill-bg_banfsgy text-bg_banfsgy  mr-1" />1</span> 
                           <span className="flex items-center px-1 text-xs text-bg_banfsgy"><IconUser className="w-[12px] h-[12px] fill-bg_banfsgy text-bg_banfsgy  mr-1" />1</span> 
                        </div>
                        <div className="flex flex-col mt-2 bg-green-600 px-2 text-white ">
                             <small className="font-semibold text-sm">Limited time offer</small>
                             <small className="text-xs">54% OFF TODAY</small>
                        </div>
                        <div className="flex flex-col items-end justify-end mt-3">
                      
                      <del className="text-xs px-1">USD 158</del>
                      <p className=" px-1 text-red-500 text-xs ">USD <strong className="text-3xl  font-semibold">39 </strong></p>
                    </div>
                    </div>
                    </div>
                    <div className="flex flex-row  justify-between mt-3 px-1">
                       <div className="w-[50%] px-2">
                          <SelectNormal placeholder="Rooms" />
                        </div>
                        <div className=" flex w-[50%] px-2 relative ">
                            <button className=" w-full shadow-md rounded-md text-center pb-5 relative bg-bg_banfsgy text-white pt-2 px-5 m-auto ">
                               <p className="text-lg font-semibold">Book now</p>
                               <p className="text-sm pb-2">PAY LATER</p>
                                <p className=" absolute  bottom-0 py-1 text-xs font-semibold  left-0 bg-green-100 text-green-700  h-[25px] w-full"> FREE Cancellation</p>
                            </button>
                        </div>
                    </div>
                    <div className="px-2 mt-3">
                       
                       
                            <button className=" w-full shadow-md rounded-md text-center border border-bg_banfsgy relative bg-white text-bg_banfsgy py-3 px-5 m-auto ">
                               Add to cart
                            </button>
                        
                    </div>
                    {/* <div className="mt-4">
                      <p className="text-xs font-semibold ">Other rewards & discounts</p>
                      <p className="text-[#bc9c2e] flex mt-2  items-center gap-1 border border-[#bc9c2e] p-1 text-xs">
                        <IconAlertHexagon className="w-[20px] h-[20px] " />  Limited Time Offer. Price includes 20% discount!
                      </p>
                    </div> */}
                  </div>
                </div>
                {/* <div className="col-span-12 md:col-span-1">
                  <p className="px-2 text-sm font-semibold pb-2" >Sleeps</p>
                  <div className="h-full text-center m-auto bg-white">
                    <IconLink className="w-[20px] h-[20px] m-auto pt-2"/>
                    <div className="flex justify-center pt-2">
                      <ManIcon />
                      <Child />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">1 kid under</p>
                      <p className="text-xs text-gray-500">12 years</p>
                      <p className="text-xs text-gray-500">stays</p>
                      <p className="text-xs text-green-500">FREE!</p>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-span-12 md:col-span-4 payment-radio">
                <p className="px-2 text-sm font-semibold pb-2 " >Payment & cancellation</p>
                  <div className="h-full p-5 bg-[#f6f1ff] ">
                  <Radio.Group
                    name="Cancellation"
                    label="Cancellation"
                    >
                      <Radio value="reac" label={<div className='ml-1  flex justify-between text-bg_banfsgy label_radio '>Free cancellation before September 13, 2023 </div> } /> 
                    </Radio.Group>
                    <Radio.Group
                      mt={'xs'}
                      name="Payment"
                      label="Payment"
                    >
                      <Radio value="react" label={<div className='ml-1  flex justify-between text-bg_banfsgy label_radio '>Pay nothing until September 11, 2023 </div> } />     
                    </Radio.Group>
                  </div>
                </div> */}
                {/* <div className="col-span-12 md:col-span-3 px-3 ">
                  <p className="px-2 text-sm font-semibold pb-2 " >Payment & cancellation</p>
                  <div className="pt-[1px] h-full bg-white border-l pb-5">
                    <div className="mt-5 bg-red-500 w-[70%]">
                      <p className="p-1 text-xs text-white font-semibold ">SAVE 75% TODAY!</p>
                    </div>
                    <div className="flex flex-col items-end justify-end mt-3">
                      
                      <del className="text-lg px-1">$ 158</del>
                      <p className=" px-1 text-red-500 ">USD <strong className="text-3xl font-bold">39 </strong></p>
                    </div>
                    <div className="text-center">
                      <span className="text-[#bc9c2e] text-[10px] m-auto">
                        Coupon 7PCTCAP17MIN250 applied
                      </span>
                    </div>
                    <div className="py-1 px-4 mt-5 text-center">
                      <Button className="w-full px-3 py-3  m-auto text-xs text-white bg-bg_banfsgy">
                        Reserve
                      </Button>
                    </div>
                    <div className="py-1 px-4  text-center">
                      <Button className="w-full  px-3 py-3 m-auto text-xs text-black bg-white border border-bg_banfsgy">
                        Book Now
                      </Button>
                    </div>
                    <div className="py-1 px-4  text-center ">
                          <div className=" px-3 py-3 bg-[#f6f1ff]   m-auto">
                             <p className="text-sm">NO RISK!</p>
                             <p className="text-xs">No cancellation fee</p>  
                          </div>
                          <p className="text-xs py-1 font-semibold text-right text-green-500">
                            Limited availability
                          </p>
                    </div>
                    <div className="m-auto mt-4 text-end ">
                      <p className="text-red-500 text-sm font-semibold px-1 pb-5">Our last 5 rooms!</p>
                    </div>
                  </div>
                </div> */}
              </div>
              {/* <div className="grid grid-cols-12 col-span-12 mt-10 border border-red-500 ">
                <div className="col-span-12 p-0 md:col-span-4">
           
                  <div className="h-full p-2 bg-white border-r">
                  <p className="text-xs  font-semibold pt-1"> Your price includes:</p>
                    <div className="flex  gap-2 mt-3">
                      <IconCheck className="text-green-600 w-[20px] h-[20px]" />
                      <p className="text-sm w-[100%] ">Free cancellation before September 13, 2023</p>
                    </div>
                    <div className="flex  gap-2 mt-3">
                      <IconCheck className="text-green-600 w-[20px] h-[20px]" />
                      <p className="text-sm w-[100%] ">Free Breakfast</p>
                    </div>
                    <div className="flex  gap-2 mt-3">
                      <IconCheck className="text-green-600 w-[20px] h-[20px]" />
                      <p className="text-sm w-[100%]">Pay nothing until September 11, 2023</p>
                    </div>
                    <div className="flex  gap-2 mt-3">
                      <IconCheck className="text-green-600 w-[20px] h-[20px]" />
                      <p className="text-sm w-[100%] ">All Inclusive, Dinner included, Lunch included, Parking, Welcome drink, Express check-in, Free WiFi, Free fitness center access</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-xs font-semibold ">Other rewards & discounts</p>
                      <p className="text-[#bc9c2e] flex mt-2  items-center gap-1 border border-[#bc9c2e] p-1 text-xs">
                        <IconAlertHexagon className="w-[20px] h-[20px] " />  Limited Time Offer. Price includes 20% discount!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-1">
         
                  <div className="h-full text-center bg-white">
                    <IconLink className="w-[20px] h-[20px] m-auto pt-2"/>
                    <div className="flex justify-center pt-2">
                      <ManIcon />
                      <Child />
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4 payment-radio">
                 
                  <div className="h-full p-5 bg-[#f6f1ff] ">
                  <Radio.Group
                    name="Cancellation"
                    label="Cancellation"
                    >
                      <Radio value="reac" label={<div className='ml-1  flex justify-between text-bg_banfsgy label_radio '>Free cancellation before September 13, 2023 </div> } /> 
                    </Radio.Group>
                    <Radio.Group
                      mt={'xs'}
                      name="Payment"
                      label="Payment"
                    >
                      <Radio value="react" label={<div className='ml-1  flex justify-between text-bg_banfsgy label_radio '>Pay nothing until September 11, 2023 </div> } />     
                    </Radio.Group>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-3 px-3 ">
                  <div className="pt-[1px] h-full bg-white border-l pb-5">
                    <div className="mt-5 bg-red-500 w-[70%]">
                      <p className="p-1 text-xs text-white font-semibold ">SAVE 75% TODAY!</p>
                    </div>
                    <div className="flex flex-col items-end justify-end mt-3">
                      
                      <del className="text-lg px-1">$ 158</del>
                      <p className=" px-1 text-red-500 ">USD <strong className="text-3xl font-bold">39 </strong></p>
                    </div>
                    <div className="text-center">
                  
                    </div>
                    <div className="py-1 px-4 mt-5 text-center">
                      <Button className="w-full px-3 py-3  m-auto text-xs text-white bg-bg_banfsgy">
                        Reserve
                      </Button>
                    </div>
                    <div className="py-1 px-4  text-center">
                      <Button className="w-full  px-3 py-3 m-auto text-xs text-black bg-white border border-bg_banfsgy">
                        Book Now
                      </Button>
                    </div>
                    <div className="py-1 px-4  text-center ">
                          <div className=" px-3 py-3 bg-[#f6f1ff]   m-auto">
                             <p className="text-sm">NO RISK!</p>
                             <p className="text-xs">No cancellation fee</p>  
                          </div>
                          <p className="text-xs py-1 font-semibold text-right text-green-500">
                            Limited availability
                          </p>
                    </div>
                    <div className="m-auto mt-4 text-end ">
                      <p className="text-red-500 text-sm font-semibold px-1 pb-5">Our last 5 rooms!</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
