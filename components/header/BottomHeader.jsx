import React, { useState } from "react";
import DropDownList from "./DropDownList";

function BottomHeader() {
  let grid;

  const [dropdown, setDropdown] = useState(false);

  const ShowMenu = () => {
    setDropdown(!dropdown);
  };
  return (
    <div className="hidden  md:flex flex-row items-center py-2 pl-40 bg-white relative ">
      <div className="text-xl text-greenSecondary font-semibold">Handmade </div>

      <div className="text-lightGray">|</div>

      <div className="flex flex-row space-x-6 text-sm text-darkGray">
        <div onMouseOver={ShowMenu} value={dropdown} className="cursor-pointer">
          Clothes
        </div>
        <div>Jewelry & Accessories</div>
        <div>Holidays & sales</div>
        <div>Home & Living</div>
        <div>Toy & Entertaiment</div>
        <div>Art & Collectible</div>
        <div>Craft Supplies</div>
        <div>Vintage</div>
      </div>

      {dropdown ? <DropDownList /> : null}
    </div>
  );
}

export default BottomHeader;
