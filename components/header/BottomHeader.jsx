import React, { useState } from "react";
import { links } from "./MyLinks";
import DropDownList from "./DropDownList";
import Link from "next/link";

function BottomHeader() {
  const [link, setLink] = useState(false);
  const [subHeading, setSubHeading] = useState("");

  const CheckHover = () => {
    setLink(!link);
  };

  return (
    <div className="hidden   md:flex flex-row items-center py-2 pl-40 bg-white relative ">
      <div className="text-xl text-greenSecondary font-semibold mr-2 hover:text-darkGray transition-colors duration-150 ease-in-out cursor-pointer">
        Handmade{" "}
      </div>

      <div className="text-lightGray">|</div>

      <div className="flex flex-row space-x-6 text-sm text-darkGray ml-2 group">
        <div
          className="cursor-pointer hover:scale-95 hover:text-greenSecondary transition-all duration-150 ease-in-out hover:italic"
          onClick={CheckHover}
        >
          Clothes
          {link && <DropDownList />}
        </div>
        <div className="cursor-pointer transition-all duration-200 hover:scale-95 hover:text-greenSecondary ease-in-out hover:italic">
          Jewelry & Accessories {link && <DropDownList />}
        </div>
        <div className="cursor-pointer hover:scale-95 hover:text-greenSecondary transition-all duration-150 ease-in-out hover:italic">
          Holidays & sales
        </div>
        <div className="cursor-pointer hover:scale-95 hover:text-greenSecondary transition-all duration-150 ease-in-out hover:italic">
          Home & Living
        </div>
        <div className="cursor-pointer hover:scale-95 hover:text-greenSecondary transition-all duration-150 ease-in-out hover:italic">
          Toy & Entertaiment
        </div>
        <div className="cursor-pointer hover:scale-95 hover:text-greenSecondary transition-all duration-150 ease-in-out hover:italic">
          Art & Collectible
        </div>
        <div className="cursor-pointer hover:scale-95 hover:text-greenSecondary transition-all duration-150 ease-in-out hover:italic">
          Craft Supplies
        </div>
        <div className="cursor-pointer hover:scale-95 hover:text-greenSecondary transition-all duration-150 ease-in-out hover:italic">
          Vintage
        </div>
      </div>
    </div>
  );
}

export default BottomHeader;

{
  /* <div>Clothes</div>
        <div>Jewelry & Accessories</div>
        <div>Holidays & sales</div>
        <div>Home & Living</div>
        <div>Toy & Entertaiment</div>
        <div>Art & Collectible</div>
        <div>Craft Supplies</div>
        <div>Vintage</div> */
}
