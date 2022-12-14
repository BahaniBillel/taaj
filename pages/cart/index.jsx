import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../../components/CheckoutProduct";
import Header from "../../components/header/Header";
import { selectItems, selectTotal } from "../../redux/slices/basketSlice";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function Cart() {
  // const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const items = useSelector(selectItems);

  const getTotalQuantity = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <div className="bg-lightEmerald">
      <Header />
      <div className=" px-2 md:px-24 mt-10  flex flex-col md:flex-row items-start flex-nowrap md:space-x-5">
        <div className="md:w-9/12 order-2 md:order-1">
          <p className="font-semibold text-lg p-2 rounded-sm bg-white">
            Basket
          </p>
          {items?.map((item, i) => (
            <CheckoutProduct
              key={i}
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              category={item.category}
              url={item.url}
              quantity={item.quantity}
            />
          ))}
        </div>

        <div className="md:w-3/12 bg-white rounded-sm p-3 shadow-sm order-1 md:order-2">
          <p className="py-1 font-semibold text-sm uppercase">Basket Summary</p>
          <div className="flex flex-rox space-x-3 py-5 border-t-[1px] border-solid border-lightGray">
            <p>Sub-total ({items.length}) :</p>
            <div className="flex flex-grow"></div>
            <p className="font-semibold text-lg">
              {" "}
              {items.length ? total : 0} DA
            </p>
          </div>
          <p className="text-darkGray text-xs pb-2 border-b-[1px] border-solid border-lightGray ">
            Delivery fees are not included at this stage.
          </p>

          <div className="py-5  rounded-sm shadow-md mt-2 p-2">
            <p className="text-xs text-greenPrimary p-1 bg-lightEmerald  font-semibold   ">
              Delivery is free to Blida City.
            </p>
            <p className="text-xs py-3 font-semibold uppercase tracking-wider flex flex-row">
              Taaj
              <span className="text-greenPrimary italic uppercase flex flex-row">
                <RocketLaunchIcon className="h-4" />
                Express
              </span>
            </p>
            <p className="text-xs text-darkGray mb-4">
              TAAJ Express items are eligible for free delivery to a pick-up
              point in Algiers.
            </p>
            <Link href="/checkout">
              <div
                className="border-t-[1px] border-solid border-lightGray bg-darkGray text-white text-center cursor-pointer
             px-3 py-2 rounded-md hover:scale-95 transition-all duration-150 hover:shadow-md"
              >
                BUY
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
