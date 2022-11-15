import React, { useState } from "react";
import Image from "next/image";
import { ShoppingBagIcon, HeartIcon } from "@heroicons/react/24/solid";

function Product({ id, title, price, description, category, image, url }) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const [heart, setHeart] = useState(false);

  const HandleHeartColor = () => {
    setHeart(!heart);
  };

  return (
    <div
      className="hover:bg-pink-400 hover:transition hover:duration-150 ease-in-out md:h-56
    hover:ease-out pl-[1px] pr-[1px] pt-[1px] pb-10 m-2 rounded-b-md cursor-pointer group  overflow-hidden grid grid-rows-8 hover:shadow-md hover:scale-105 relative"
    >
      <div
        className=" relative flex flex-col   bg-white z-30 p-5  space-y-2 group row-span-7  "
        onClick={url}
      >
        <div className="flex flex-row  text-xs   ">
          <div className="flex-grow"></div>
          <p className=" flex-none text-gray-500 italic">{category}</p>
        </div>

        <div className="w-full   h-full z-0 ">
          <Image
            src={image}
            height={300}
            width={300}
            objectFit="cover"
            alt="om"
          />
        </div>
      </div>
      <div className="mt-auto text-xs   grid   h-10 w-full  grid-cols-2 grid-rows-1    group row-span-1 absolute -bottom-1 z-30 pt-1">
        <button className="col-span-1 row-span-1 bg-transparent  group-hover:bg-slate-900 group-hover:bg-greenSecondary h-full  hidden group-hover:block hover:scale-95 space-x-6 ">
          <div className="flex-grow"></div>
          <ShoppingBagIcon className="h-4 text-white " />
          <div className=" flex-grow"></div>
        </button>
        <button
          className="col-span-1 hidden group-hover:block  group-hover:bg-darkGray group-hover:text-white hover:scale-95 space-x-6 "
          onClick={HandleHeartColor}
        >
          <div className="flex-grow"></div>
          {heart ? (
            <HeartIcon className="h-4 text-greenSecondary " />
          ) : (
            <HeartIcon className="h-4 text-white " />
          )}

          <div className="flex-grow"></div>
        </button>
      </div>
    </div>
  );
}

export default Product;
