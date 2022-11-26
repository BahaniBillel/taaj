import React, { useState } from "react";
import Image from "next/image";
import { ShoppingBagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { ShareIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import {
  addToBasket,
  decrement,
  increment,
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

  const AddItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      url,
    };
    dispatch(addToBasket(product));

    notify();
  };

  const HandleHeartState = () => {
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
      dispatch(increment(product));
    } else {
      dispatch(decrement({ id }));
    }
  };

  const notify = () => {
    // toast("Default Notification !");

    // toast.success("Success Notification !", {
    //   position: toast.POSITION.TOP_CENTER,
    // });

    // toast.error("Error Notification !", {
    //   position: toast.POSITION.TOP_LEFT,
    // });

    // toast.warn("Warning Notification !", {
    //   position: toast.POSITION.BOTTOM_LEFT,
    // });

    // toast.info("Info Notification !", {
    //   position: toast.POSITION.BOTTOM_CENTER,
    // });

    toast(" added  to cart", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "foo-bar",
    });
  };

  return (
    <Link href={`listing/${link}`}>
      <div className="hover:bg-pink-400 hover:transition hover:duration-150 ease-in-out md:h-56 hover:ease-out pl-[1px] pr-[1px] pt-[1px] pb-10 m-2 rounded-b-md cursor-pointer group  overflow-hidden grid grid-rows-8 hover:shadow-md hover:scale-105 relative">
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
              objectFit="contain "
              alt="om"
            />
          </div>
        </div>

        <div className="justify-center hidden group-hover:flex    ease-in-out group ">
          <button
            className="    h-7    absolute bottom-2 right-1 z-30  px-5
        bg-greenPrimary opacity-80  rounded-xl flex flex-row items-center "
            onClick={AddItemToBasket}
          >
            {/* <ShoppingBagIcon className="h-4 text-white " /> */}
            <p className="text-xs text-white pl-1 font-bold">
              {Math.round(price)} DA
            </p>
          </button>
        </div>

        <div className="z-40 flex flex-col space-y-3 absolute bottom-8 -right-10 p-2 group-hover:right-0 group">
          <button onClick={HandleHeartState}>
            {heart ? (
              <HeartIcon className="h-4 text-red " />
            ) : (
              <HeartIcon className="h-4 text-lightGray " />
            )}
          </button>
          <ShareIcon className="h-4 text-darkGray" />
        </div>
      </div>
    </Link>
  );
}

export default Product;
