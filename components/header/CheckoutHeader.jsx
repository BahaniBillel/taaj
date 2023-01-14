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

function CheckoutHeader() {
  return (
    <div className="bg-darkGray border-lightGray border-solid border-b-[1px] h-auto w-full flex  py-5 px-5 md:px-36 ">
      {/* logo */}
      <Link href="/" className=" text-greenSecondary font-bold text-3xl  ">
        TAAJ
      </Link>

      {/* Order process */}
      <div className="flex flex-grow"></div>

      <form className="">
        <fieldset className=" flex flex-col md:flex-row md:space-x-48 items-start">
          <div className=" flex flex-row items-center space-x-1  ">
            <input
              type="radio"
              name="order"
              id="delivery"
              className="indeterminate:bg-greenSecondary "
              readOnly={true}
            />
            <label for="delivery" className="text-white mr-2">
              Delivery
            </label>
          </div>
          <div className=" flex flex-row items-center space-x-1  ">
            <input
              type="radio"
              name="order"
              id="payment"
              className="indeterminate:bg-greenSecondary "
              readOnly={true}
            />
            <label for="payment" className="text-white mr-2">
              Payment
            </label>
          </div>
          <div className=" flex flex-row items-center space-x-1  ">
            <input
              type="radio"
              name="order"
              id="review"
              className="indeterminate:bg-greenSecondary "
              readOnly={true}
            />
            <label for="review" className="text-white mr-2">
              Review
            </label>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default CheckoutHeader;
