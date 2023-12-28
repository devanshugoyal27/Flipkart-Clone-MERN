import React from "react";
import { bannerData } from "../constant/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Slider = () => {
  return (
    <div className="">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        swipeable={false}
        draggable={false}
        autoPlaySpeed={2000}
      >
        {bannerData.map((data,i) => (
            <img key={i} className="cursor-pointer w-full h-[120px] object-cover md:h-[250px]" src={data.url} alt="slider" />
        ))}
      </Carousel>
      
    </div>
  );
};

export default Slider;
