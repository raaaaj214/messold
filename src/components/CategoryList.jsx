import React, { useRef, useState, useEffect } from "react";
import arrow from "../assets/arrow.png";
import Category from "./Category";
import rakhi from "../assets/rakhi.avif";
import evilEye from "../assets/evil eye.avif";
import poojaThali from "../assets/pooja thali.webp";
import roseQuartz from "../assets/rose quartz.avif";
import urlis from "../assets/urlis.webp";
import pyrite from "../assets/pyrite.webp";
import citrine from "../assets/citrine.webp";
import chantingBox from "../assets/chanting box.avif";
import amethyst from "../assets/amethyst.webp";
import auraCleansing from "../assets/aura cleansing.webp";
import clearQuartz from "../assets/clear quartz.avif";
import moonstone from "../assets/moonstone.webp";

const categories = [
  { name: "RAKHI", image: rakhi },
  { name: "EVIL EYE", image: evilEye },
  { name: "POOJA THALI", image: poojaThali },
  { name: "ROSE QUARTZ", image: roseQuartz },
  { name: "URLIS", image: urlis },
  { name: "PYRITE", image: pyrite },
  { name: "CITRINE", image: citrine },
  { name: "CHANTING BOX", image: chantingBox },
  { name: "AMETHYST", image: amethyst },
  { name: "AURA CLEANSING", image: auraCleansing },
  { name: "CLEAR QUARTZ", image: clearQuartz },
  { name: "MOONSTONE", image: moonstone },
];

const CategoryList = () => {
  const carouselRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

    setIsAtStart(scrollLeft === 0);
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
  };

  useEffect(() => {
    const scrollableDiv = carouselRef.current;

    scrollableDiv.addEventListener("scroll", checkScrollPosition);

    checkScrollPosition();

    return () => {
      scrollableDiv.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex justify-center items-center">
      <div className="w-full max-w-[1500px] flex justify-center items-center relative py-5 px-2">
        <button
          onClick={scrollLeft}
          className={` hidden md:block p-2 rounded-full ${
            isAtStart ? "opacity-20" : "opacity-100"
          }`}
          disabled={isAtStart}
        >
          <img src={arrow} className="-rotate-90 w-10" alt="<" />
        </button>
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll gap-5 p-4  no-scrollbar"
        >
          {categories.map((category, index) => (
            <Category key={index} name={category.name} image={category.image} />
          ))}
        </div>
        <button
          onClick={scrollRight}
          className={`hidden md:block  p-3 rounded-full ${
            isAtEnd ? "opacity-20" : "opacity-100"
          }`}
          disabled={isAtEnd}
        >
          <img src={arrow} className="rotate-90 w-10" alt=">" />
        </button>
      </div>
    </div>
  );
};

export default CategoryList;
