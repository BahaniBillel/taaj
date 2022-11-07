import React from "react";
import BottomHeader from "./BottomHeader";
import MiddleHeader from "./MiddleHeader";
import UpperHeader from "./UpperHeader";

function Header() {
  return (
    <header className=" h-36 w-full md:border border-solid border-b-greenSecondary ">
      <UpperHeader />
      <MiddleHeader />
      <BottomHeader />
    </header>
  );
}

export default Header;
