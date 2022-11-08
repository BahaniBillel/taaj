import React from "react";

import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  Bars3BottomLeftIcon,
} from "@heroicons/react/24/solid";

function UpperHeader() {
  return (
    <div className="bg-darkGray h-auto grid grid-cols-12 grid-flow-row-2 md:grid-rows-1 py-2 px-3 md:px-5 ">
      {/* logo */}
      <div className=" order-1 col-span-6 md:col-span-2 text-white ">logo</div>
      {/* search bar */}
      <div className=" mt-3 md:mt-0 order-last md:order-2 col-span-12 md:col-span-7 flex flex-row items-center relative overflow-hidden">
        <Bars3BottomLeftIcon className="h-8 text-white mr-4 md:hidden" />
        <input
          type="search"
          name=""
          id=""
          placeholder="search for any item"
          className="w-full h-full border border-solid border-greenPrimary rounded-full outline-none px-4 placeholder:text-lightGray py-2 md:py-2  "
        />
        <div className="absolute -right-0 bg-greenSecondary p-3 rounded-full hover:bg-greenPrimary transition-all duration-200 cursor-pointer ">
          <MagnifyingGlassIcon className="text-darkGray h-5 md:h-8 " />
        </div>
      </div>

      {/* user infos */}
      <div className=" order-3 col-span-6 md:col-span-3 text-white px-3 text-xs flex flex-row space-x-5 items-center md:space-x-8">
        <div className="flex flex-grow "></div>
        <div className="">
          Hello
          <br />
          <span className="font-bold ">Billel</span>{" "}
        </div>
        {/* cart */}
        <div className="flex flex-row space-x-1  items-end ">
          <div className="relative items-center ">
            <ShoppingCartIcon className="h-5 md:h-8 " />
            <span className=" absolute -top-2 left-2/4 text-white text-xs  md:text-sm font-light z-10  bg-greenSecondary p-[1px] md:p-1 rounded-full">
              0
            </span>
          </div>
          <div className="font-bold hidden md:block">Cart</div>{" "}
        </div>

        {/* user */}
        <div className="flex items-end">
          <UserCircleIcon className="h-5 md:h-8  " />
        </div>
      </div>
    </div>
  );
}

export default UpperHeader;
