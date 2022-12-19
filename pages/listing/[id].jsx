import React from "react";
import Header from "../../components/header/Header";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import StarRatings from "react-star-ratings";
import ListBox from "../../components/reusables/ListBox";
import ReviewForm from "../../components/reusables/reviewForm";
import Closure from "../../components/reusables/Closure";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Tabs from "../../components/reusables/Tabs";
import { addToBasket } from "../../redux/slices/basketSlice";
import { toast, ToastContainer } from "react-toastify";

// ListBox Data
const ListItems = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

function Listing({ page }) {
  // Dispatching product to store
  const dispatch = useDispatch();
  const { id, title, price, description, category, image, url } = page;
  const AddItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      url,
    };
    dispatch(addToBasket(product));

    notify(page.title);
  };

  // Notifying the dispatched product
  const notify = (name) => {
    toast(`${name} was added to basket`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "foo-bar text-xs font-light",
    });
  };

  // setting up the Caroussel
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <div>
      <Header />

      <div className="px-1 flex flex-col md:px-16 md:grid  md:grid-cols-3 gap-5 md:mt-5">
        {/* Left side */}
        <div className="col-span-3 md:col-span-2  p-1 md:p-2">
          <div>
            <div ref={sliderRef} className="keen-slider ">
              {page.pictures.map((pic) => (
                <div className="keen-slider__slide  " key={nanoid()}>
                  <Image
                    src={pic}
                    width={900}
                    height={900}
                    objectFit="contain"
                    alt="/"
                  />
                </div>
              ))}
            </div>

            <div ref={thumbnailRef} className="keen-slider thumbnail">
              {page.pictures.map((pic) => (
                <div className="keen-slider__slide " key={nanoid()}>
                  <Image
                    src={pic}
                    width={300}
                    height={300}
                    objectFit="cover"
                    alt="/"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* reviews counts and ratings */}
          <div className="mt-10 hidden md:block">
            <div className="mt-2 flex flex-row items-center space-x-4">
              <p className=" text-xl md:text-3xl font-light text-darkGray">
                {" "}
                256 Reviews
              </p>

              <StarRatings
                rating={parseFloat(page.rating.rate)}
                starRatedColor="black"
                changeRating={3}
                numberOfStars={5}
                name="rating"
                starDimension="26px"
              />
            </div>
          </div>

          {/* Store name and the follow button */}
          <div className="flex md:hidden flex-row space-x-5">
            <h4 className="uppercase">{page.category}</h4>
            <div
              className="flex flex-row space-x-1 items-center text-xs cursor-pointer px-3 py-1 rounded-xl bg-white w-24 hover:bg-lightGray
              transition-all ease-in-out duration-200 hover:scale-95 hover:shadow-sm hover:origin-bottom"
            >
              <HandThumbUpIcon className="h-5  " />
              <p>Follow</p>
            </div>
          </div>

          {/* price */}
          <div className="flex md:hidden mt-5  flex-row space-x-3 items-center">
            <p className="text-2xl md:text-3xl font-bold rounded-2xl px-auto py-1 bg-greenSecondary">
              {page.price} DA
            </p>
            <p className=" text-xs font-light line-through">{page.price} DA</p>
            <p className="text-xs font-light">(70% remise)</p>
            <div className="flex-grow"></div>
            <p className="text-greenSecondary text-xs font-semibold">
              Stock available
            </p>
          </div>

          {/* consumers reviews */}
          <Tabs visibility={"hidden md:block"} />

          <div className="hidden md:block">{/* <ReviewForm /> */}</div>
        </div>

        {/* Right side  bottom side mobile*/}
        <div className="h-full  md:block p-2 md:mt-5 mb-20">
          <div>
            {/* Store name and the follow button */}
            <div className="hidden md:flex flex-row space-x-5">
              <h4 className="uppercase">{page.category}</h4>
              <div
                className="flex flex-row space-x-1 items-center text-xs cursor-pointer px-3 py-1 rounded-xl bg-white w-24 hover:bg-lightGray
              transition-all ease-in-out duration-200 hover:scale-95 hover:shadow-sm hover:origin-bottom"
              >
                <HandThumbUpIcon className="h-5  " />
                <p>Follow</p>
              </div>
            </div>

            {/* number of sales and ratings  */}

            <div className="mt-2 flex flex-row items-center space-x-4">
              <p className="text-xs text-darkGray"> 1,923 sales</p>
              <div>|</div>

              <StarRatings
                rating={parseFloat(page.rating.rate)}
                starRatedColor="black"
                changeRating={3}
                numberOfStars={5}
                name="rating"
                starDimension="14px"
              />
            </div>

            {/* product description ,title and price */}
            <div className="mt-5">
              <p className="text-xl font-semibold text-darkGray">
                {page.title}
              </p>
              <p className="text-2xl font-light text-darkGray mt-2">
                {page.description}
              </p>

              <div className="hidden md:flex mt-5  flex-row space-x-3 items-center">
                <p className="text-2xl md:text-3xl font-bold rounded-2xl px-auto py-1 bg-greenSecondary">
                  {page.price} DA
                </p>
                <p className=" text-xs font-light line-through">
                  {page.price} DA
                </p>
                <p className="text-xs font-light">(70% remise)</p>
                <div className="flex-grow"></div>
                <p className="text-greenSecondary text-xs font-semibold">
                  Stock available
                </p>
              </div>
            </div>
            {/* CTA */}
            <div className="my-5 flex flex-col space-y-3">
              {/* CTA: buy now */}
              <button className="py-1 px-5 w-full border-[1px] rounded-2xl font-semibold text-xl hover:scale-95 transition-all duration-150 ease-in-out">
                Buy it now
              </button>
              {/* CTA: add to basket */}
              <button
                className="py-1 px-5 w-full border-[1px] rounded-2xl font-semibold text-xl 
               bg-darkGray text-white hover:scale-95 transition-all duration-150 ease-in-out"
                onClick={AddItemToBasket}
              >
                Add to basket
              </button>
            </div>

            {/* selling infos */}
            <p className="text-xs font-normal text-darkGray mt-3 ">
              Local taxes included (where applicable)
            </p>
            {/* Options selector dropdown */}
            <ListBox data={ListItems} />
            <Closure />
            {/* consumers reviews */}

            <div className="block md:hidden">
              <Tabs />
            </div>

            <div className="block md:hidden">
              <ReviewForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;

// -----------------------------------------------------------------------------------------------------------------------------------------

async function getData() {
  // Fetching data from firestore
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
  return products;
}

// export async function getStaticProps(context) {
//   // searching for the page id in the firestore database
//   const { params } = context;
//   const id = params.id;

//   const products = await getData();

//   const page = products.find((x) => x.title === id);
//   if (!page) return { notFound: true };

//   return {
//     props: { page },
//   };
// }

// export async function getStaticPaths() {
//   const products = await getData();

//   const ids = products.map((product) => product.id.toString());
//   const params = ids.map((id) => ({ params: { id: id } }));
//   return {
//     paths: params,
//     fallback: "blocking",
//   };
// }

export async function getServerSideProps(context) {
  const products = await getData();

  // searching for the page id in the firestore database
  const { params, req, res } = context;
  const id = params.id;
  const page = products.find((x) => x.title === id);
  if (!page) return { notFound: true };
  // console.log(req);
  // console.log(res);
  return {
    props: { page },
  };
}
