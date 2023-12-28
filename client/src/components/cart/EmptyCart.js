import React from "react";

const EmptyCart = () => {
  return (
    <div className=" w-[95vw] p-6 m-auto bg-white my-shadow">
      <h1 className="font-semibold text-2xl ml-8">My Cart</h1>
      <div className="flex justify-center items-center flex-col gap-4 mt-[100px]">
        <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="img"  width={200}/>
        <h1 className="font-semibold text-2xl">Your cart is empty</h1>
        <p className=" text-lg">Add items to cart now</p>
        {/* <button className="py-2 px-12 bg-orange-500 text-white rounded">
          Login
        </button> */}
      </div>
    </div>
  );
};

export default EmptyCart;
