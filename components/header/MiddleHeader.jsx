import React from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";

function MiddleHeader() {
  return (
    <div className="hidden md:flex bg-greenPrimary  items-center text-white space-x-3 px-5 md:px-40 text-sm md:text-[10px]">
      <p className="link flex items-center">
        <Bars3BottomLeftIcon className="h-10  mr-1 " />
        All
      </p>

      <p className="link">Prime Video</p>
      <p className="link">Khoukhi Business</p>
      <p className="link">Today Deals</p>
      <p className="link hidden lg:inline-flex">Elocronics</p>
      <p className="link hidden lg:inline-flex">Food & Grocery</p>
      <p className="link hidden lg:inline-flex">Prime</p>
      <p className="link hidden lg:inline-flex">Buy Again</p>
      <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
      <p className="link hidden lg:inline-flex">Health & Personal Care</p>
    </div>
  );
}

export default MiddleHeader;
