import React from "react";
import { useRouter } from "next/router";
import products from "../../utils/data.json";
import Header from "../../components/header/Header";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

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

function Listing() {
  // finding id router
  const router = useRouter();
  const { id } = router.query;
  const page = products.find((x) => x.title === id);

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

      <div className="px-1 md:px-16 grid grid-cols-3 gap-5 md:mt-5">
        <div className="col-span-3 md:col-span-2  h-screen p-1 md:p-2">
          <div>
            <div ref={sliderRef} className="keen-slider ">
              {page.pictures.map((pic) => (
                <div className="keen-slider__slide  " key={pic}>
                  <Image
                    src={pic}
                    width={900}
                    height={900}
                    objectFit="contain"
                  />
                </div>
              ))}
              {/* <div className="keen-slider__slide ">2</div>
              <div className="keen-slider__slide ">3</div>
              <div className="keen-slider__slide ">4</div>
              <div className="keen-slider__slide ">5</div>
              <div className="keen-slider__slide">6</div> */}
            </div>

            <div ref={thumbnailRef} className="keen-slider thumbnail">
              {page.pictures.map((pic) => (
                <div className="keen-slider__slide " key={pic}>
                  <Image src={pic} width={300} height={300} objectFit="cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span- bg-red h-screen hidden md:block">right</div>
      </div>
    </div>
  );
}

export default Listing;
