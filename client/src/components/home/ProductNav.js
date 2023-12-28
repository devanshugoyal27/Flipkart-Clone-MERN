import React from "react";
import { navData } from "../constant/data";

const ProductNav = () => {
  return (
    <div className="shadow-md mb-4 lg:p-3 bg-white">
      <div className="mt-[70px] flex md:gap-7 items-center justify-start gap-[45px] overflow-hidden ">
        {navData.map((data,i) => (
          <div key={i} className="m-auto w-full md:px-5">
            <img className="cursor-pointer" src={data.url} alt="products" width={90} />
            <p className="text-center text-sm font-semibold cursor-pointer">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductNav;
