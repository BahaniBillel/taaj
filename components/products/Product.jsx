import React, { useState } from "react";
import Image from "next/image";
import { ShoppingBagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { ShareIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import {
  addToBasket,
  decrementLikes,
  incrementLikes,
  handleHeartState,
} from "../../redux/slices/basketSlice";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

function Product({
  id,
  title,
  price,
  description,
  category,
  image,
  url,
  link,
}) {
  const dispatch = useDispatch();

  const [heart, setHeart] = useState(false);

  const HandleHeartLikes = () => {
    setHeart(!heart);

    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      url,
    };
    if (!heart) {
      dispatch(incrementLikes(product));
    } else {
      dispatch(decrementLikes({ id }));
    }
  };

  return (
    <section className="group relative overflow-hidden">
      <Link href={`listing/${link}`}>
        <div className="hover:bg-pink-400 hover:transition hover:duration-150 ease-in-out md:h-56 hover:ease-out pl-[1px] pr-[1px] pt-[1px] pb-10 m-2 rounded-b-md cursor-pointer overflow-hidden grid grid-rows-8 hover:shadow-md hover:scale-105 relative">
          <div
            className=" relative flex flex-col   bg-white z-30 p-5  space-y-2 group row-span-7  "
            onClick={url}
          >
            <div className="flex flex-row  text-xs   ">
              <div className="flex-grow"></div>
              <p className=" flex-none text-gray-500 italic">{category}</p>
            </div>

            <div className="w-full   h-full z-0 ">
              <Image src={image} objectFit="contain " alt="om" fill />
            </div>
          </div>

          <div className="justify-center hidden group-hover:flex    ease-in-out group ">
            <button
              className="    h-7    absolute bottom-2 right-1 z-30  px-5
         opacity-80  rounded-xl flex flex-row items-center "
            >
              {/* <ShoppingBagIcon className="h-4 text-white " /> */}
              <p className="text-xs text-darkGray pl-1 font-bold">
                {Math.round(price)} DA
              </p>
            </button>

            <p className="text-xs truncate p-1">{title}</p>
          </div>
        </div>
      </Link>
      <div className="z-40  flex flex-col space-y-3 absolute bottom-14 -right-10 p-2 group-hover:right-0 group ">
        <button onClick={HandleHeartLikes}>
          {heart ? (
            <HeartIcon className="h-4 text-red " />
          ) : (
            <HeartIcon className="h-4 text-lightGray " />
          )}
        </button>
        <ShareIcon className="h-4 text-darkGray cursor-pointer" />
      </div>
    </section>
  );
}

export default Product;
