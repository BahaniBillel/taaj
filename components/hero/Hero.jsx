import React from "react";
import Image from "next/image";
import HeroImage from "../../images/hero.jpg";

function Hero() {
  return (
    <div className="h-96 overflow-hidden ">
      <Image src={HeroImage} alt="traditions in algeria" />
    </div>
  );
}

export default Hero;
