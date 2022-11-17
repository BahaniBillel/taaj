import { StarIcon, TrashIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import StarRatings from "react-star-ratings";

function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  url,
  rating,
}) {
  return (
    <div
      className="grid grid-cols-5 gap-y-10  border-lightGray border-solid border mb-1 py-2 px-5 h-36 overflow-hidden bg-white cursor-pointer
      hover:shadow-md rounded-sm "
    >
      <div className="flex flex-col space-y-2 ">
        <Image
          src={image}
          width={50}
          height={50}
          objectFit="contain"
          alt={title}
          className="p-2"
        />
        <div className="flex flex-grow"></div>
        <div
          className="flex flex-row rounded-md p-2  hover:border-greenSecondary
         hover:shadow-md hover:bg-lightEmerald hover:scale-95 transition-all duration-150 ease-in-out group"
        >
          <TrashIcon className="h-5 text-greenSecondary mr-1 group-hover:text-greenSecondary" />
          <p className="text-greenSecondary text-sm tracking-wide group-hover:text-greenSecondary">
            Remove
          </p>
        </div>
      </div>

      {/* middle section */}
      <div className="col-span-3 mx-5 flex flex-col">
        <p className="font-bold ">{category}</p>

        <div className="">
          <StarRatings
            rating={2}
            starRatedColor="gold"
            changeRating={3}
            numberOfStars={5}
            name="rating"
            starDimension="20px"
          />
        </div>
        <p className="font-light text-sm mt-2 line-clamp-3">{description}</p>
      </div>
      {/* right section */}
      <div className="col-span-1  flex flex-col items-end  ">
        <div className="font-semibold text-sm">{price} DA</div>
        <div className="flex flex-row space-x-3 items-center mt-5">
          <button className="bg-greenSecondary py-1 px-3 rounded-sm text-white hover:scale-95 transition-shadow duration-150">
            -
          </button>
          <p>0</p>
          <button className="bg-greenPrimary py-1 px-3 rounded-sm text-white shadow-md hover:scale-95 transition-shadow duration-150">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
