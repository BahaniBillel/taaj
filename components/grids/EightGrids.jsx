import React from "react";
import Image from "next/image";
import GridSpot from "./GridSpot";

const data = [
  {
    id: 1,
    img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    style: "col-span-1 row-span-3 bg-greenPrimary card ",
  },
  {
    id: 2,
    img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    style: "col-span-1 row-span-2  bg-greenSecondary card ",
  },
  {
    id: 3,
    img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    style: "col-span-1 row-span-3  bg-greenSecondary card ",
  },
  {
    id: 4,
    img: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    style: "col-span-1 row-span-3  bg-greenSecondary card ",
  },
  {
    id: 5,
    img: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    style: "col-span-1 row-span-3  bg-greenSecondary card ",
  },
  {
    id: 6,
    img: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    style: "col-span-1 row-span-3  bg-greenSecondary card ",
  },
  ,
  {
    id: 7,
    img: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    style: "col-span-1 row-span-2  bg-greenSecondary card ",
  },
  {
    id: 8,
    img: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    style: "col-span-1 row-span-2  bg-greenSecondary card ",
  },
];
function EightGrids() {
  return (
    <div className=" w-full h-[600px]  grid grid-cols-4  grid-rows-5 gap-2   py-5   px-10 md:px-40 ">
      {data.map((img) => (
        <GridSpot key={img.id} style={img.style} />
      ))}
    </div>
  );
}

export default EightGrids;

// cardStyleOne={`col-span-1 row-span-3 bg-greenPrimary card`}

// <div className="col-span-1 row-span-2  bg-greenSecondary card ">
// <Image src={img1} height={300} width={300} objectFit="cover" alt="om" />
// </div>
// <div className={cardStyleOne}>{img2}</div>
// <div className="col-span-1 row-span-2 bg-greenSecondary card">{img3}</div>
// <div className="col-span-1 row-span-3 bg-greenPrimary card">{img4}</div>
// <div className="col-span-1 row-span-3 bg-greenPrimary card">{img5}</div>
// <div className="col-span-1 row-span-3 bg-greenPrimary card">{img6}</div>
// <div className="col-span-1 row-span-2 bg-greenSecondary card">{img7}</div>
// <div className="col-span-1 row-span-2 bg-greenSecondary card">{img8}</div>
