import React, { useEffect } from "react";
import ProductNav from "./ProductNav";
import Slider from "./Slider";
import getProducts from "../../redux/action/productAction";
import { useDispatch, useSelector } from "react-redux";
import Slides from "./Slides";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Home = () => {
const {products} =  useSelector((state) => state.getProducts);



  const dispatch = useDispatch();
                                                                                                                           
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="bg-[#eeeaea] pl-2">
      <ProductNav />
      <Slider />
      <MidSlide products = {products} title = 'Deal Of The Day' timer = {true}/>
      <MidSection/>
      <Slides products = {products} title = 'Discount for you' timer = {false}/>
      <Slides products = {products} title = 'Top Selection' timer = {false}/>
      <Slides products = {products} title = 'Recommended Items' timer = {false}/>
      <Slides products = {products} title = 'Trending Offer' timer = {false}/>
   
    
     
      
    </div>
  );
};

export default Home;
