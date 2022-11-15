import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../../components/CheckoutProduct";
import { selectItems } from "../../redux/slices/basketSlice";

function checkout() {
  const items = useSelector(selectItems);
  return (
    <div className="">
      <div className="grid grid-cols-5">
        {items.map((item, i) => (
          <CheckoutProduct key={i} />
        ))}
      </div>
    </div>
  );
}

export default checkout;
