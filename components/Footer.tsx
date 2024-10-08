import React from "react";
import { socialMedia } from "@/data";
import Image from "next/image";
// import { ImFacebook } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="w-full pb-10 md:mb-5" id="contact">
      <div className="flex  md:justify-between justify-center items-center md:flex-row flex-col">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Allset Appliance Repair
        </p>
        <div className="cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg  gap-2 md:mt-0 mt-4">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={profile.link}>
                <Image
                  src={profile.img}
                  alt={profile.id}
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
