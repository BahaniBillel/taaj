import React from "react";
import Image from "next/image";
import HeroImage from "../../images/hero.jpg";
import Header from "../header/Header";

function Hero() {
  return (
    <>
      <Header />
      <div className="h-96 overflow-hidden ">
        <Image src={HeroImage} alt="traditions in algeria" />
      </div>
    </>
  );
}

export default Hero;
