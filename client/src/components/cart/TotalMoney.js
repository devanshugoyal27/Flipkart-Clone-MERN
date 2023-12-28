import React, { useEffect, useState } from 'react'

const TotalMoney = ({cartItems}) => {

const [price,setPrice] = useState(0);
const [discount,setDiscount] = useState(0);

useEffect(()=>{
  totalAmount();
},[cartItems])

const totalAmount = ()=>{
  let price = 0;
  let discount = 0;
  cartItems.map(item => {
    price += item.price.mrp;
    discount += item.price.mrp - item.price.cost
  })
  setPrice(price);
  setDiscount(discount);

}


  return (
    <div className='p-3'>
      <h1 className='text-gray-500 text-md mb-4'>PRICE DETAILS</h1>


    <table className='w-full flex flex-col gap-2'>
        <tr className='flex justify-between'>
            <td>Price ({cartItems?.length} Items)</td>
            <td>₹{price}</td>
        </tr>
        <tr className='flex justify-between'>
            <td>Discount</td>
            <td>₹ {discount}</td>
        </tr>
        <tr className='border-b-2 pb-2 flex justify-between '>
            <td>Delivery Charges</td>
            <td>40</td>
        </tr>
        <tr className='my-2 flex justify-between'>
            <td>Total Amount</td>
            <td>₹{price-discount + 40}</td>
        </tr>
    </table>
    <p className='text-green-500 font-semibold'>You will save ₹{discount-40} on this order</p>
    </div>
  )
}

export default TotalMoney
