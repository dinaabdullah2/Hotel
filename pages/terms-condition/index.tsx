"use client";
import React from 'react'
import ContactImg from "./../../public/assets/contact-us.webp";
import HeaderBanner from '../component/mucles/HeaderBanner';
function Terms_condition(){
  return (
    <>
      <HeaderBanner label='Terms Of Condition' bannerImg={ContactImg.src} descriptionBoolean={true} description='We are so grateful for you, our loyal clients and now you can be our judges! All our hard work to provide you with the best accommodations and travel services is paying off.' />
    </>
  )
}
export default Terms_condition