import React, { useState, useContext } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BiSearchAlt2 } from "react-icons/bi";
import LoginDialog from "../login/LoginDialog";
import { dataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

const Header = () => {
  const [open, setOpen] = useState(false);
  const { data, setData } = useContext(dataContext);

  const {cartItems} = useSelector(state => state.cart)
  const openDialog = () => {
    setOpen(true);
  };

  return (
    <header>
      <div className="bg-[#2874f0] h-[55px] p-2 shadow-lg flex fixed top-0 left-0 right-0 z-[9999] justify-between">
        {/* left */}
        <div className="ml-[12%] text-white">
          <Link to={"/"}>
            <div className="">
              <img
                className="cursor-pointer"
                src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                alt="flipkart"
                width={75}
              />
              <div className="flex text-sm gap-1 ml-[-11%]">
                <p className="italic tracking-wide flex gap-1 cursor-pointer">
                  Explore <span className="text-yellow-300">plus</span>
                </p>
                <img
                  className="w-3 h-3 mt-1"
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                  alt="plus"
                />
              </div>
            </div>
          </Link>
        </div>

        {/* search */}
        <div className=" h-full ml-[1%] relative hidden lg:flex">
          <input
            className="p-5 rounded-md h-full w-[700px] outline-none placeholder-gray-500 "
            type="text"
            placeholder="Search for Products , Brands and More"
          />
          <BiSearchAlt2
            className="absolute right-3 top-[10px] cursor-pointer"
            size={22}
            color="#2874f0"
          />
        </div>

        {/* right */}

        <div className="flex text-white gap-5 font-bold ml-3 p-2 items-center justify-center">
          {/* login button  */}

          {data ? (
            <Profile data={data} setData={setData} />
          ) : (
            <p
              onClick={openDialog}
              className="bg-white px-8 py-1 text-[#2874f0] text-center items-center justify-center first-line:text-sm font-semibold shadow-md outline-white cursor-pointer hidden lg:flex"
            >
              Login
            </p>
          )}
          {/* end  */}

          <p className="cursor-pointer hidden md:block">Become a seller</p>
          <p className="cursor-pointer hidden md:block">More</p>
          <Link to='/cart' className="flex gap-1 cursor-pointer relative justify-end ">
            <HiOutlineShoppingCart size={25} className="mr-2"/>
            {
              cartItems.length > 0 && <span className="absolute bg-red-500 h-[20px] w-[20px] rounded-full text-white md:right-8 -top-2 -right-1 flex items-center justify-center"><p className="text-xs">{cartItems?.length}</p></span>
            }
            
            <p className="hidden md:block">Cart</p>
          </Link>
        </div>
        {/* ends */}
      </div>
      <LoginDialog isOpen={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
