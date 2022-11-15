import React, { useState } from "react";
import SwitchComp from "../Switch";
import Product from "./Product";
import { Switch } from "@headlessui/react";

function ProductsDisplay({ products }) {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className=" flex flex-col items-center  md:py-5">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-greenSecondary" : "bg-lightGray"}
      relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-9" : "translate-x-0"}
        pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6  text-sx   px-10 md:px-40 mt-5 ">
        {enabled
          ? products.map(
              ({ id, title, price, description, category, image }) => (
                <Product
                  key={id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                />
              )
            )
          : products
              .filter((item) => item.price > 500)
              .map(({ id, title, price, description, category, image }) => (
                <Product
                  key={id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                />
              ))}
      </div>
    </div>
  );
}

export default ProductsDisplay;
