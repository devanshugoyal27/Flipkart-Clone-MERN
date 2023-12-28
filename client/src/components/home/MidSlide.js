import React from "react";
import Slides from "./Slides";

const MidSlide = ({ products, title, timer }) => {
  return (
    <div className="flex gap-3 justify-center items-center">
      <div className="lg:w-[83%] w-full">
        <Slides products={products} title={title} timer={timer} />
      </div>
      <div className="bg-white p-2 cursor-pointer hidden lg:block">
        <img src='https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70' alt="ad" className="h-[342px] w-full" />
      </div>
    </div>
  );
};

export default MidSlide;
