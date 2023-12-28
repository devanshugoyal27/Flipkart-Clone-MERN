import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import {Link}  from 'react-router-dom';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

const Slides = ({products , title , timer}) => {
    const renderer = ({ hours, minutes, seconds}) => {
          return <span>{hours}:{minutes}:{seconds} Left</span>;
      };
  return (
    <div className='shadow-md mt-4 bg-white mb-5'>
        <div className='flex gap-3 justify-start items-center mb-4 ml-1 relative border-b-2 p-4'>
          <div className='flex md:flex-row flex-col gap-1'>
            <h3 className='font-bold text-lg'>{title}</h3>
            {timer && <div className='flex gap-1'><img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg' alt="timer" width={20} />
            <Countdown date={Date.now() + 5.04e+7} renderer={renderer} /></div> }
          </div>
            
            
            <button className='py-1 px-3 bg-[#2874f0] rounded text-white absolute right-5'>View All</button>
        </div>
      <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={false}
      swipeable={false}
      draggable={false}
      >
    
        {
         products.map((product,i) => 
              <Link key={i} to = {`/product/${product.id}`}>
              
                <div  className='p-4 '>
                     <img src={product.url} alt='product' className='h-[150px] cursor-pointer m-auto'  />
                     <p className='font-bold text-center'>{product.title.shortTitle}</p>
                     <p className='text-green-700 text-center'>{product.discount}</p>
                     <p className='text-gray-600 text-center'>{product.tagline}</p>
                </div>
                </Link>
               )
        }
      </Carousel>
    </div>
  )
}

export default Slides
