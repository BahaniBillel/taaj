import React from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  Bars3BottomLeftIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { selectItems, selectLikes } from "../../redux/slices/basketSlice";
import Link from "next/link";

function UpperHeader() {
  const items = useSelector(selectItems);
  const likes = useSelector(selectLikes);

  // console.log(likes);
  return (
    <div className="bg-darkGray h-auto grid grid-cols-12 grid-flow-row-2 md:grid-rows-1 py-2 px-3 md:px-5 ">
      {/* logo */}
      <Link
        href="/"
        className="order-1 col-span-6 md:col-span-2 text-greenSecondary font-bold text-3xl "
      >
        TAAJ
      </Link>
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
        {/* likes */}

        <div className="flex flex-row space-x-1  items-end ">
          <Link href="/likes">
            <div className="relative items-center ">
              <HeartIcon className="h-5 md:h-8 " />
              <span className=" absolute -top-2 left-2/4 text-white text-xs font-bold   z-10  bg-red py-1 px-2 rounded-full">
                {likes.length}
              </span>
            </div>
          </Link>
        </div>
        {/* cart */}
        <div className="flex flex-row space-x-1  items-end ">
          <Link href="/cart">
            <div className="relative items-center ">
              <ShoppingCartIcon className="h-5 md:h-8 " />
              <span className=" absolute -top-2 left-2/4 text-white text-xs font-bold   z-10  bg-greenSecondary py-1 px-2 rounded-full">
                {items ? items.length : 0}
              </span>
            </div>
          </Link>
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
