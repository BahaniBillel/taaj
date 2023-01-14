import React from "react";
import Image from "next/image";
import GridSpot from "./GridSpot";

const data = [
  {
    id: 1,
    url: "https://picsum.photos/id/2/200/300",
    style: "col-span-1 row-span-3 bg-greenPrimary card  ",
  },
  {
    id: 2,
    url: "https://picsum.photos/id/230/200/300",
    style: "col-span-1 row-span-2  bg-greenSecondary card ",
  },
  {
    id: 3,
    url: "https://picsum.photos/id/116/200/300",
    style: "col-span-1 row-span-3  bg-greenSecondary card ",
  },
  {
    id: 4,
    url: "https://picsum.photos/id/232/200/300",
    style: "col-span-1 row-span-2  bg-greenSecondary card ",
  },
  {
    id: 5,
    url: "https://picsum.photos/id/233/200/300",
    style: "col-span-1 row-span-3  bg-greenSecondary card ",
  },
  {
    id: 6,
    url: "https://picsum.photos/id/234/200/300",
    style: "col-span-1 row-span-3  bg-greenSecondary card ",
  },
  ,
  {
    id: 7,
    url: "https://picsum.photos/id/235/200/300",
    style: "col-span-1 row-span-2  bg-greenSecondary card",
  },
  {
    id: 8,
    url: "https://picsum.photos/id/25/200/300",
    style: "col-span-1 row-span-2  bg-greenSecondary card ",
  },
];
function EightGrids({ x1, x2 }) {
  return (
    <div className=" w-full h-[500px]   grid grid-cols-2 md:grid-cols-4 grid-rows-5 gap-2 md:gap-5   py-5   px-5 md:px-20 ">
      {data
        .filter((img) => img.id < x1 || img.id > x2)
        .map((img) => (
          <GridSpot key={img.id} style={img.style} img={img.url} />
        ))}
    </div>
  );
}

export default EightGrids;
