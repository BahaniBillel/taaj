import React from "react";

function DropDownList({ onClick }) {
  return (
    <div className="w-full h-96 bg-white absolute left-0 top-12 z-50 ml-0 shadow-sm shadow-darkGray hidden md:grid px-5 py-2">
      <div className="border-b border-b-greenPrimary w-full h-full"></div>
    </div>
  );
}

export default DropDownList;
