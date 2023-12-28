import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/action/cartAction';

const ActionItem = ({product}) => {
  const [quantity,setQuantity]= useState(1)
const navigate = useNavigate();
const dispatch = useDispatch();
const {id} = product

  const addItemToCart = ()=>{
    dispatch(addToCart(id,quantity))
      navigate('/cart')
  }


  return (
    <div className='flex flex-col justify-center items-center mb-4'>
      <img src={product.detailUrl} alt="img" className='md:min-w-[110%] border p-3 '/>
      <div className='lg:flex lg:gap-2 mt-4 w-full'>
         <button onClick={()=>addItemToCart()} className='px-3 py-1 w-full  bg-yellow-500 mb-4 lg:mb-0 text-white rounded text-lg font-semibold flex items-center justify-center gap-2'><FaShoppingCart /><span>Add to Cart</span></button>
      <button className='px-3 py-2 w-full bg-orange-500 text-white rounded text-lg font-semibold flex items-center justify-center gap-2'><MdElectricBolt /><span>Buy Now</span></button>
      </div>
     
    </div>
  )
}

export default ActionItem
