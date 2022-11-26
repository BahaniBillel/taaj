import React from "react";
import Image from "next/image";

function GridSpot({ style, img }) {
  return (
    <div className={style}>
      <Image src={img} height={300} width={300} objectFit="cover" alt="om" />
    </div>
  );
}

export default GridSpot;
