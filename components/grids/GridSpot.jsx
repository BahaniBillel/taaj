import React, { useState } from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/slices/basketSlice";

function GridSpot({ style, img, price, heartDisplayed }) {
  const [heart, setHeart] = useState(false);
  const dispatch = useDispatch();

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
  return (
    <div className={`${style} group `}>
      {heartDisplayed ? (
        <div className=" top-96 transition-all duration-200  ease-in-out hidden group-hover:block z-30 group-hover:text-white absolute right-5 group-hover:top-5">
          <button onClick={HandleHeartState}>
            {heart ? (
              <div className=" rounded-full bg-white py-[5px] w-7 h-7  relative  hover:border-white hover:scale-105 hover:shadow-md hover:shadow-white">
                <HeartIcon className="h-4 text-red  absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4" />
              </div>
            ) : (
              <div className=" rounded-full bg-white py-[5px] w-7 h-7  relative border-[1px] border-darkGray border-solid hover:border-white hover:scale-105 hover:shadow-md hover:shadow-white">
                <HeartIcon className="h-4 text-darkGray absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 " />
              </div>
            )}
          </button>
        </div>
      ) : null}

      <Image src={img} alt="om" fill objectFit="cover" />
      {price ? (
        <span className="py-1 px-2 bg-white rounded-2xl absolute bottom-5 left-5 font-semibold text-sm  text-darkGray">
          {price} DA
        </span>
      ) : null}
    </div>
  );
}

export default GridSpot;
