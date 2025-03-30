"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
// import jsImage from "../"

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm Noah{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                2000,
                "A Web Developer",
                2000,
                "A React Developer",
                2000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            accusantium vel corporis quibusdam est nesciunt ut. Sunt, sed at
            impedit nulla soluta illum vel. A officiis corporis modi molestias
            animi!
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-white hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-transparent hover:bg-slate-800 text-white  mt-3 ">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg-mt-0">
          <div className="rounded-full bg-[#181818] bg-[red] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="skills text-white flex items-center">
        <h2 className="font-bold text-xl mr-10 ">Tech Stack | </h2>
        <div className="flex items-center justify-center [&>*]:mx-5">
          <Image
            src="/images/techicons/file_type_html_icon_130541.png"
            width={50}
            height={50}
          />
          <Image
            src="/images/techicons/file_type_css_icon_130661.png"
            width={50}
            height={50}
          />
          <Image
            src="/images/techIcons/file_type_js_official_icon_130509.png"
            width={50}
            height={50}
          />
          <Image
            src="/images/techIcons/react_original_logo_icon_146374.png"
            width={50}
            height={50}
          />
          {/* <Image
            src="/images/techIcons/file_type_tailwind_icon_130128.png"
            width={50}
            height={50}
          /> */}
          <Image
            src="/images/techIcons/tailwindcss-mark.d52e9897.svg"
            width={50}
            height={50}
          />

          <Image
            src="/images/techIcons/file_type_sass_icon_130182.png"
            width={50}
            height={50}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
