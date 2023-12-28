import React from "react";
import { removeFromCart } from "../../redux/action/cartAction";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {

  const dispatch = useDispatch();
  const removeItem = (id)=>{
    dispatch(removeFromCart(id))
  }


    const date = new Date(new Date().getTime() + 5 * 24 * 60 * 100);
  return (
    <div className="flex justify-between flex-col lg:flex-row border-b-2 lg:p-6 p-1 mb-5">
      <div className="flex gap-4 ">
        <div className="">
           <img src={item.url} alt="img" className="w-[14vw] h-[15vw] md:w-[13vw] md:h-[14vw]" />
        <div className="flex justify-center items-center gap-1 mt-3">
          <button className="border rounded-full w-7 h-7 text-center font-bold">-</button>
          <input type="number" className="focus:outline-none w-8 border text-center " id="remove-arrow" />
          <button className="border rounded-full w-7 h-7 text-center font-bold">+</button>
          <button onClick={()=>removeItem(item.id)} className="font-semibold ml-4 hidden lg:block">Remove</button>
        </div>
        </div>
       
        <div>
          <p className="font-semibold">{item.title.longTitle}</p>
          <p className="flex items-center gap-2">
            seller: RetailNet{" "}
            <span>
              <img
                src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                alt="img"
                width={60}
              />
            </span>
          </p>
          <div className="flex gap-3  items-center">
            <p className="font-bold text-xl">₹{item.price.cost}</p>
            <p className=" text-lg text-gray-500">
              <strike>₹{item.price.mrp}</strike>
            </p>
            <p className="text-green-600 font-semibold text-sm">
              {item.price.discount} Off
            </p>
          </div>
            <p className="text-green-700 font-semibold text-sm">2 offers applied</p>
        </div>
      </div>

      <div className="mt-5">
      <p className="text-sm"> Deliverd by {date.toDateString()} | charges ₹40</p>
      <p className="text-gray-600 text-xs">7 Days Replacement Policy</p>
      <div className="flex before:justify-between w-[80vw] mb-3">
        <button onClick={()=>removeItem(item.id)} className="font-semibold py-1 px-3 border lg:hidden text-gray-500 mt-4 text-sm">Remove</button>
      <button className="font-semibold py-1 px-3 border lg:hidden text-gray-500 mt-4 text-sm">Save for later</button>
      <button className="font-semibold py-1 px-3 border lg:hidden text-gray-500 mt-4 text-sm">Buy this now</button>
      </div>
      
      
      </div>
    </div>
  );
};

export default CartItem;
