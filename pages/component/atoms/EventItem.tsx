// EventItem.js
import React from 'react';

const EventItem = ({ title, body }:any) => {
  return (
    <>
      <h1 className="relative mt-2 text-3xl font-bold after:w-[50px] after:absolute after:left-[0px] after:bg-bg_banfsgy after:bottom-[10%] after:h-[3px]">
        {title}
      </h1>
      <p className="w-full py-2 md:w-1/2">{body}</p>
    </>
  );
};

export default EventItem;
