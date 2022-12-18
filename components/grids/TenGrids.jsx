import React from "react";
import Image from "next/image";
import GridSpot from "./GridSpot";

const data = [
  {
    id: 1,
    url: "https://picsum.photos/id/20/200/300",
    style: "col-span-1 row-span-5 bg-greenPrimary card-2  ",
    price: 99.99,
    isHeartDisplayed: true,
  },
  {
    id: 2,
    url: "https://picsum.photos/id/40/200/300",
    style: "col-span-1 row-span-5  bg-greenSecondary card-2 ",
    price: 99.99,
    isHeartDisplayed: true,
  },
  {
    id: 3,
    url: "https://picsum.photos/id/46/200/300",
    style: "col-span-1 row-span-5  bg-greenSecondary card-2 ",
    price: 99.99,
    isHeartDisplayed: true,
  },
  {
    id: 4,
    url: "https://picsum.photos/id/72/200/300",
    style: "col-span-1 row-span-5  bg-greenSecondary card-2 ",
    price: 99.99,
    isHeartDisplayed: true,
  },
  {
    id: 5,
    url: "https://picsum.photos/id/93/200/300",
    style: "col-span-1 row-span-5  bg-greenSecondary card-2 ",
    price: 99.99,
    isHeartDisplayed: true,
  },
  {
    id: 6,
    url: "https://picsum.photos/id/84/200/300",
    style: "col-span-1 row-span-5  bg-greenSecondary card-2 ",
    price: 99.99,
    isHeartDisplayed: true,
  },
  ,
  {
    id: 7,
    url: "https://picsum.photos/id/65/200/300",
    style: "col-span-1 row-span-5  bg-greenSecondary card-2",
    price: 99.99,
    isHeartDisplayed: true,
  },
  {
    id: 8,
    url: "https://picsum.photos/id/56/200/300",
    style: "col-span-1 row-span-5  bg-greenSecondary card-2 ",
    price: 99.99,
    isHeartDisplayed: true,
  },
  {
    id: 9,
    url: "https://picsum.photos/id/55/200/300",
    style: "col-span-1 row-span-5  bg-greenSecondary card-2 ",
    price: 99.99,
    isHeartDisplayed: true,
  },
  {
    id: 10,
    url: "https://picsum.photos/id/45/200/300",
    style: "col-span-1 row-span-5  bg-greenSecondary card-2 ",
    price: 99.99,
    isHeartDisplayed: true,
  },
];
function TenGrids() {
  return (
    <section className="py-5   px-5 md:px-20 mt-20">
      <div className="flex flex-col space-y-2 items-start py-5">
        <h1 className="text-3xl font-semibold text-darkGray">
          Sponsored by Etsy sellersLearn more
        </h1>
        <p className="text-darkGray font-light">
          Fun fact: behind every sponsored item there is an Etsy seller hoping
          you'll check out their shop
        </p>
      </div>
      <div className=" w-full h-[450px]   grid grid-cols-2 md:grid-cols-5  md:grid-rows-10 gap-2 md:gap-5    ">
        {data.map((img) => (
          <GridSpot
            key={img.id}
            style={img.style}
            img={img.url}
            price={img.price}
            heartDisplayed={img.isHeartDisplayed}
          />
        ))}
      </div>
    </section>
  );
}

export default TenGrids;
