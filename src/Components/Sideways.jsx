import React, { useRef, useState } from "react";
import Data from "../JSON/Scrollables.json";
import { BiMouseAlt } from "react-icons/bi";
import { BiCabinet } from "react-icons/bi";
import { pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10 } from './icons';

//importing icons
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import PreviewImage from "./Modal/PreviewImage";
import Contact from "./Modal/Contact";

const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10];

const Sideways = () => {
  const containerRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const [imagesSrc, setImagesSrc] = useState("");
  const handleScrollRight = (scrollOffset) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
    }
  };

  const handleScrollLeft = (scrollOffset) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= scrollOffset;
    }
  };

  return (
  <>
    <div
      className="flex items-center justify-center w-full overflow-hidden bg-[#FAF5FF] z-[1]"
      id="cabinet"
    >
      <div className="flex flex-col items-start justify-center w-full lg:w-4/5 pt-20 px-12 font-figtree antialiased">
        <div className="w-full flex-col">
          <div className="flex items-center justify-start gap-4 w-full">
            <div className="text-sm lg:text-xl p-3 text-white hover:text-[#2f2f2f] bg-[#2f2f2f] hover:bg-gray-200 ease-in-out duration-500 rounded-full flex items-center justify-center">
              <BiCabinet />
            </div>
            <div className="flex flex-col w-3/4">
              <p className="text-lg lg:text-2xl font-semibold truncate capitalize font-signika">
                Cabinet, Vanity, and Countertop
              </p>
              <p className="font-figtree text-sm font-normal truncate lowercase">
              Discover the perfect blend of style and functionality with our premium selection of cabinets, vanities, and countertops. Whether you're renovating your kitchen, bathroom, or any other space, our products are designed to meet your needs and exceed your expectations.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full flex items-center group">
          <div
            className="flex flex-row overflow-x-auto scrollbar-hide w-full py-8 gap-6"
            ref={containerRef}
          >
            {images.map((data, index) => (
              <div
                className="relative flex bg-gray-200 rounded-md min-w-[280px] max-w-[280px] h-[250px] overflow-hidden cursor-pointer"
                key={index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => {
                  setShowImage(!showImage);
                  setImagesSrc(data);
                }}
              >
                <img
                  src={data}
                  alt="/"
                  className="w-full object-cover object-center hover:scale-110 ease-in-out duration-500 antialiased"
                />
                <div
                  className={
                    hoverIndex === index
                      ? "absolute w-full h-full bg-gradient-to-t from-black/5 via-black/20 to-black/50 pointer-events-none ease-in-out duration-500 "
                      : "absolute w-full h-full bg-gradient-to-t from-black/5 via-black/10 to-black/20 pointer-events-none ease-in-out duration-500 "
                  }
                ></div>
              </div>
            ))}
          </div>
          <div
            className="absolute place-items-center text-md rounded-full bg-white/50 p-4 left-[-40%] cursor-pointer shadow-md group-hover:left-[-20px] ease-in-out duration-500"
            onClick={() => handleScrollLeft(160)}
          >
            <div className="">
              <MdOutlineArrowBackIosNew />
            </div>
          </div>
          <div
            className="absolute rounded-full place-items-center text-md bg-white/50 p-4 right-[-40%] cursor-pointer shadow-md group-hover:right-[-20px] ease-in-out duration-500"
            onClick={() => handleScrollRight(160)}
          >
            <div>
              <MdOutlineArrowForwardIos />
            </div>
          </div>
        </div>
      </div>
    </div>
            {showImage && (
              <PreviewImage
                showImage={showImage}
                closeImage={() => setShowImage(!showImage)}
                imageName={imagesSrc}
              />
            )}
    </>
  );
};

export default Sideways;
