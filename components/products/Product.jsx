import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
// import ReactStars from "react-rating-stars-component";
import { HomeIcon, TrophyIcon, WrenchIcon } from "@heroicons/react/24/outline";

function Product({ id, title, price, description, category, image, url }) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div
      className="hover:bg-pink-400 hover:transition hover:duration-150
    hover:ease-out pl-[1px] pr-[1px] pt-[1px] pb-10 m-2 rounded-b-md cursor-pointer group  overflow-hidden grid grid-rows-8 hover:shadow-md hover:scale-105"
    >
      <div
        className=" relative flex flex-col   bg-white z-30 p-5  space-y-2 group row-span-7  "
        onClick={url}
      >
        <div className="flex flex-row  text-xs   ">
          <div className="flex-grow"></div>
          <p className=" flex-none text-gray-500 italic">{category}</p>
        </div>

        <div className="w-full   ">
          <Image
            src={image}
            height={300}
            width={300}
            objectFit="contain"
            alt="om"
          />
        </div>
      </div>
      <div className="mt-auto text-xs   grid   h-1/6 w-full  grid-cols-2 grid-rows-1   text-transparent group-hover:text-white row-span-1">
        <button className="col-span-1 row-span-1 bg-transparent  group-hover:bg-slate-900 ">
          Buy
        </button>
        <button className="col-span-1 ">Cart</button>
      </div>
    </div>
  );
}

export default Product;
