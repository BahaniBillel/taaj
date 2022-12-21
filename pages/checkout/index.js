import React from "react";
import CheckoutHeader from "../../components/header/CheckoutHeader";

function Checkout() {
  return (
    <div className="h-[100vh] bg-lightEmerald ">
      <CheckoutHeader />
      <section className="flex flex-col items-center justify-center mt-10">
        <form className="w-[800px] h-[560px] max-h-[650px] rounded-md shadow-md p-10 flex flex-col space-y-3 items-start bg-white">
          <h1 className="text-5xl text-darkGray">
            Enter your delivery address
          </h1>
          <div className="flex flex-col items-start space-y-1 w-full">
            <label for="wilaya" className="font-semibold ">
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
            <label for="fullname" className="font-semibold ">
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
              <label for="Street adresse" className="font-semibold ">
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
              <label for="Flat/other" className="font-semibold ">
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
              <label for="City" className="font-semibold ">
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
              <label for="County" className="font-semibold ">
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
              <label for="Postal Code" className="font-semibold ">
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
