import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerate";
import BorderButton from "./ui/BorderButton";
import { Image } from "next/image";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="red" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="yellow" />
      </div> */}
      <div className="h-screen w-full flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[url('https://5.imimg.com/data5/SELLER/Default/2023/10/349567014/EG/PO/AP/33864707/bosch-hob-stove-repairing-service.png')] w-full 2xl:h-[55vh] h-full bg-no-repeat bg-cover bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Turning Appliance Headaches into Seamless Experiences"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I&apos;m Lorenzo Molli, an Appliance Repair Professional, based in
            NY
          </p>
          <a href="#about">
            <BorderButton title="Learn More About Me" position="left" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
