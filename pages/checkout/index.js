import React from "react";
import CheckoutHeader from "../../components/header/CheckoutHeader";

function Checkout() {
  return (
    <div className=" md:bg-lightEmerald ">
      <CheckoutHeader />
      <section className="flex flex-col items-center justify-center mt-10 py-10 ">
        <form className="  rounded-md md:shadow-md  flex flex-col space-y-3 items-start bg-white px-3 py-5">
          <h1 className="text-2xl md:text-3xl text-darkGray font-semibold py-4">
            Enter your delivery address
          </h1>
          <div className="flex flex-col items-start space-y-1 w-full">
            <label for="wilaya" className="">
              Wilaya
            </label>
            <input
              type="text"
              id="wilaya"
              className="py-3 px-2 w-full rounded-sm border-2 border-solid border-lightGray outline-greenSecondary shadow-sm"
              required
            />
          </div>
          <div className="flex flex-col items-start space-y-1 w-full">
            <label for="fullname" className=" ">
              Full name
            </label>
            <input
              type="text"
              id="fullname"
              className="py-3 px-2 w-full rounded-sm border-2 border-solid border-lightGray outline-greenSecondary shadow-sm"
              required
            />
          </div>
          <div className="flex flex-row items-center space-x-3 w-full">
            <div className="w-1/2">
              <label for="Street adresse" className=" ">
                Street address
              </label>
              <input
                type="text"
                id="Street adresse"
                className="py-3 px-2 w-full rounded-sm border-2 border-solid border-lightGray outline-greenSecondary shadow-sm"
                required
              />
            </div>
            <div className="flex flex-grow"></div>
            <div className="w-1/2">
              <label for="Flat/other" className="">
                Flat/other
              </label>
              <input
                type="text"
                id="Flat/other"
                className="py-3 px-2 w-full rounded-sm border-2 border-solid border-lightGray outline-greenSecondary shadow-sm"
                required
              />
            </div>
          </div>
          <div className="flex flex-row items-center space-x-3 w-full">
            <div className="w-1/2">
              <label for="City" className=" ">
                City
              </label>
              <input
                type="text"
                id="City"
                className="py-3 px-2 w-full rounded-sm border-2 border-solid border-lightGray outline-greenSecondary shadow-sm"
                required
              />
            </div>
            <div className="flex flex-grow"></div>
            <div className="w-1/2">
              <label for="County" className=" ">
                County
              </label>
              <input
                type="text"
                id="County"
                className="py-3 px-2 w-full rounded-sm border-2 border-solid border-lightGray outline-greenSecondary shadow-sm"
                required
              />
            </div>
            <div className="flex flex-grow"></div>
            <div className="w-1/2">
              <label for="Postal Code" className="">
                Postal code
              </label>
              <input
                type="text"
                id="Postal Code"
                className="py-3 px-2 w-full rounded-sm border-2 border-solid border-lightGray outline-greenSecondary shadow-sm"
                required
              />
            </div>
          </div>

          <div className="flex flex-grow"></div>
          <button className="rounded-3xl w-full py-3 text-white font-semibold bg-darkGray text-xl hover:scale-95 transition-all ease-in-out duration-150">
            Continue to payment
          </button>
        </form>
      </section>
    </div>
  );
}

export default Checkout;
