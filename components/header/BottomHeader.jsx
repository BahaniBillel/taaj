import React from "react";

function BottomHeader() {
  return (
    <div className="hidden  md:flex flex-row space-x-8 items-center py-2 pl-40 bg-white">
      <div className="text-xl text-greenSecondary font-semibold">
        Tradition & Innovation{" "}
      </div>

      <div className="text-lightGray">|</div>

      <div className="flex flex-row space-x-6 text-sm text-darkGray">
        <div>Clothes</div>
        <div>Jewelry & Accessories</div>
        <div>Holidays & sales</div>
        <div>Home & Living</div>
        <div>Toy & Entertaiment</div>
        <div>Art & Collectible</div>
        <div>Craft Supplies</div>
        <div>Vintage</div>
      </div>
    </div>
  );
}

export default BottomHeader;
