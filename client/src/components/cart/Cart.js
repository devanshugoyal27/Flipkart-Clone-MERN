import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalMoney from "./TotalMoney";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      {cartItems.length ? (
        <div className="mt-[100px] grid grid-cols-3 md:px-[100px] px-4 gap-5 h-full w-full pb-6">
          {/* left  */}
          <div className="lg:col-span-2 col-span-3 mb-5 bg-white shadow-lg p-4 h-fit">
            <h1 className="font-semibold text-lg mb-5">My Cart ({cartItems.length})</h1>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <div className="flex justify-end">
              <button className="py-2 px-6 bg-orange-500 text-white font-semibold rounded-sm mt-4 ">
                PLACE ORDER
              </button>
            </div>
          </div>
          {/* right  */}
          <div className=" bg-white shadow-lg p-4 h-fit w-[90vw] lg:w-full md:w-[70vw]">
            <TotalMoney cartItems = {cartItems} />
          </div>
        </div>
      ) : (
        <div className="mt-[100px] h-full"><EmptyCart/></div>
      )}
    </>
  );
};

export default Cart;
