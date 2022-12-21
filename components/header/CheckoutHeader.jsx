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
    <div className="bg-darkGray border-lightGray border-solid border-b-[1px] h-auto w-full grid grid-cols-10  md:grid-rows-1 py-5 px-3 md:px-36 ">
      {/* logo */}
      <Link
        href="/"
        className="col-span-5  md:col-span-5 text-greenSecondary font-bold text-3xl  "
      >
        TAAJ
      </Link>

      {/* Order process */}

      <div className="col-span-5 md:col-span-5 flex flex-row space-x-48 ">
        <div>
          <label for="delivery" className="text-white mr-2">
            Delivery
          </label>
          <input
            type="radio"
            name="delivery"
            id="delivery"
            className="indeterminate:bg-greenSecondary "
            readOnly={true}
          />
        </div>
        <div>
          <label for="payment" className="text-white mr-2">
            Payment
          </label>
          <input
            type="radio"
            name="payment"
            id="payment"
            className="indeterminate:bg-greenSecondary "
            readOnly={true}
          />
        </div>
        <div>
          <label for="review" className="text-white mr-2">
            Review
          </label>
          <input
            type="radio"
            name="review"
            id="review"
            className="indeterminate:bg-greenSecondary "
            readOnly={true}
          />
        </div>
      </div>
    </div>
  );
}

export default CheckoutHeader;
