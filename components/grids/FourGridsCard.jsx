import React, { useState } from "react";
import Image from "next/image";
import GridSpot from "./GridSpot";
import StarRatings from "react-star-ratings";
import { HeartIcon } from "@heroicons/react/24/solid";

const data = [
  {
    id: 1,
    url: "https://picsum.photos/id/20/200/300",
    style: "col-span-4 row-span-4 bg-greenPrimary card-2  ",
  },
  {
    id: 2,
    url: "https://picsum.photos/id/40/200/300",
    style: "col-span-4 row-span-4   bg-greenSecondary card-2 ",
  },
  {
    id: 3,
    url: "https://picsum.photos/id/46/200/300",
    style: "col-span-4 row-span-4   bg-greenSecondary card-2 ",
  },
  {
    id: 4,
    url: "https://picsum.photos/id/72/200/300",
    style: "col-span-4 row-span-4   bg-greenSecondary card-2 ",
  },
  {
    id: 5,
    url: "https://picsum.photos/id/93/200/300",
    style: "col-span-4 row-span-4   bg-greenSecondary card-2 ",
  },
  {
    id: 6,
    url: "https://picsum.photos/id/84/200/300",
    style: "col-span-4 row-span-4    bg-greenSecondary card-2 ",
  },
  ,
  {
    id: 7,
    url: "https://picsum.photos/id/65/200/300",
    style: "col-span-4 row-span-4    bg-greenSecondary card-2",
  },
  {
    id: 8,
    url: "https://picsum.photos/id/56/200/300",
    style: "col-span-4 row-span-4    bg-greenSecondary card-2 ",
  },
  {
    id: 9,
    url: "https://picsum.photos/id/55/200/300",
    style: "col-span-4 row-span-4    bg-greenSecondary card-2 ",
  },
  {
    id: 10,
    url: "https://picsum.photos/id/45/200/300",
    style: "col-span-4 row-span-4   bg-greenSecondary card-2 ",
  },
];
function FourGridsCard() {
  const [heart, setHeart] = useState(false);
  const HandleHeartState = () => {
    setHeart(!heart);
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      url,
    };
    if (!heart) {
      dispatch(increment(product));
    } else {
      dispatch(decrement({ id }));
    }
  };
  return (
    <section className=" md:px-20  flex flex-col md:flex-row md:space-x-5 my-36 items-center">
      <div className="flex flex-col space-y-2 items-start py-5">
        <h1 className="text-3xl font-semibold text-darkGray">
          Shops we think you’ll love
        </h1>
        <p className="text-darkGray font-light">
          Based on your recent activity
        </p>
      </div>
      {/* First Box */}
      <div
        className=" flex flex-col w-[345px] h-[330px] p-4 bg-white border-[1px] border-solid border-lightGray  rounded-md 
      hover:shadow-md transition-all duration-150 ease-in-out "
      >
        <div
          className="  h-5/6 grid   grid-rows-8  grid-cols-8 gap-2 md:gap-2
        "
        >
          {data
            .filter((img) => img.id < 5)
            .map((img) => (
              <GridSpot key={img.id} style={img.style} img={img.url} />
            ))}
        </div>

        {/* bottom info bar */}
        <div className="h-1/6 py-4 flex flex-row  space-x-2 justify-center items-center mt-1 ">
          {/* image */}
          <div className="relative w-10 h-10 rounded-md overflow-hidden">
            <Image src="https://picsum.photos/id/77/200/300" fill />
          </div>
          {/* The title and the rating stars */}
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-sm font-semibold text-darkGray">
              Southern kits Elma
            </h1>
            <div className="flex flex-row  items-center">
              <StarRatings
                rating={4.5}
                starRatedColor="black"
                changeRating={3}
                numberOfStars={5}
                name="rating"
                starDimension="14px"
              />
              <div className="font-light text-sm pl-5">16 items</div>
            </div>
          </div>
          <div className="flex-grow"></div>

          {/* Heart Like button */}
          <div className="h-full">
            <button onClick={HandleHeartState}>
              {heart ? (
                <div className=" rounded-full bg-white py-[5px] w-7 h-7  relative  hover:border-white hover:scale-105 hover:shadow-md hover:shadow-white">
                  <HeartIcon className="h-4 text-red  absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4" />
                </div>
              ) : (
                <div className=" rounded-full bg-white py-[5px] w-7 h-7  relative border-[1px] border-darkGray border-solid hover:border-white hover:scale-105 hover:shadow-md hover:shadow-white">
                  <HeartIcon className="h-4 text-darkGray absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 " />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Second Box */}

      <div
        className=" flex flex-col w-[345px] h-[330px] p-4 bg-white border-[1px] border-solid border-lightGray  rounded-md 
      hover:shadow-md transition-all duration-150 ease-in-out "
      >
        <div
          className="  h-5/6 grid   grid-rows-8  grid-cols-8 gap-2 md:gap-2
        "
        >
          {data
            .filter((img) => img.id < 5)
            .map((img) => (
              <GridSpot key={img.id} style={img.style} img={img.url} />
            ))}
        </div>

        {/* bottom info bar */}
        <div className="h-1/6 py-4 flex flex-row  space-x-2 justify-center items-center mt-1 ">
          {/* image */}
          <div className="relative w-10 h-10 rounded-md overflow-hidden">
            <Image src="https://picsum.photos/id/77/200/300" fill />
          </div>
          {/* The title and the rating stars */}
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-sm font-semibold text-darkGray">
              Southern kits Elma
            </h1>
            <div className="flex flex-row  items-center">
              <StarRatings
                rating={4.5}
                starRatedColor="black"
                changeRating={3}
                numberOfStars={5}
                name="rating"
                starDimension="14px"
              />
              <div className="font-light text-sm pl-5">16 items</div>
            </div>
          </div>
          <div className="flex-grow"></div>

          {/* Heart Like button */}
          <div className="h-full">
            <button onClick={HandleHeartState}>
              {heart ? (
                <div className=" rounded-full bg-white py-[5px] w-7 h-7  relative  hover:border-white hover:scale-105 hover:shadow-md hover:shadow-white">
                  <HeartIcon className="h-4 text-red  absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4" />
                </div>
              ) : (
                <div className=" rounded-full bg-white py-[5px] w-7 h-7  relative border-[1px] border-darkGray border-solid hover:border-white hover:scale-105 hover:shadow-md hover:shadow-white">
                  <HeartIcon className="h-4 text-darkGray absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 " />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Third Box */}

      <div
        className=" flex flex-col w-[345px] h-[330px] p-4 bg-white border-[1px] border-solid border-lightGray  rounded-md 
      hover:shadow-md transition-all duration-150 ease-in-out "
      >
        <div
          className="  h-5/6 grid   grid-rows-8  grid-cols-8 gap-2 md:gap-2
        "
        >
          {data
            .filter((img) => img.id < 5)
            .map((img) => (
              <GridSpot key={img.id} style={img.style} img={img.url} />
            ))}
        </div>

        {/* bottom info bar */}
        <div className="h-1/6 py-4 flex flex-row  space-x-2 justify-center items-center mt-1 ">
          {/* image */}
          <div className="relative w-10 h-10 rounded-md overflow-hidden">
            <Image src="https://picsum.photos/id/77/200/300" fill />
          </div>
          {/* The title and the rating stars */}
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-sm font-semibold text-darkGray">
              Southern kits Elma
            </h1>
            <div className="flex flex-row  items-center">
              <StarRatings
                rating={4.5}
                starRatedColor="black"
                changeRating={3}
                numberOfStars={5}
                name="rating"
                starDimension="14px"
              />
              <div className="font-light text-sm pl-5">16 items</div>
            </div>
          </div>
          <div className="flex-grow"></div>

          {/* Heart Like button */}
          <div className="h-full">
            <button onClick={HandleHeartState}>
              {heart ? (
                <div className=" rounded-full bg-white py-[5px] w-7 h-7  relative  hover:border-white hover:scale-105 hover:shadow-md hover:shadow-white">
                  <HeartIcon className="h-4 text-red  absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4" />
                </div>
              ) : (
                <div className=" rounded-full bg-white py-[5px] w-7 h-7  relative border-[1px] border-darkGray border-solid hover:border-white hover:scale-105 hover:shadow-md hover:shadow-white">
                  <HeartIcon className="h-4 text-darkGray absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 " />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FourGridsCard;
