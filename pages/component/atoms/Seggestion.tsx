import React from "react";
import home from "./../../../public/assets/home (2).png";
import Image from "next/image";
import Link from "next/link";
export const Seggestion = () => {
  return (
    <div className="mx-2 border border-bg_banfsgy rounded-3xl bg-violet-200">
      <div className="flex flex-col ">
        <div className="m-auto">
          <Image src={home.src} height="80" width="80" alt="" />
        </div>
        <div className="px-10 py-2 bg-white rounded-b-3xl ">
          <Link
            href=""
            className="m-auto text-sm font-semibold  text-bg_banfsgy"
          >
            Place to stay ?
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Seggestion;
