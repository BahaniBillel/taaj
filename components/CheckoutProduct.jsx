import { StarIcon, TrashIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StarRatings from "react-star-ratings";
import {
  addToBasket,
  removeFromBasket,
  selectItems,
  incrementQuantity,
  decrementQuantity,
} from "../redux/slices/basketSlice";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  url,
  rating,
  quantity,
}) {
  const dispatch = useDispatch();

  const increaseProduct = () => {
    dispatch(incrementQuantity(id));
  };

  const decrementProduct = () => {
    dispatch(decrementQuantity(id));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
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

    toast("One more item added  to cart", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "foo-bar",
    });
  };

  const items = useSelector(selectItems);

  const getTotalQuantity = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

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
          onClick={removeItemFromBasket}
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
          <button
            className="bg-greenSecondary py-1 px-3 rounded-sm text-white hover:scale-95 transition-shadow duration-150"
            onClick={decrementProduct}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            className="bg-greenPrimary py-1 px-3 rounded-sm text-white shadow-md hover:scale-95 transition-shadow duration-150"
            onClick={increaseProduct}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
