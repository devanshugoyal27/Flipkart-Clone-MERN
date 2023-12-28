import axios from "axios";
import * as actionTypes from "../constant/productConstant";

const url = "http://localhost:8000";

const getProducts = () => async (dispatch) => {
  try {
    const {data} = await axios.get(`${url}/products`);
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCESS, payload: data });
  } catch (error) {
    console.log("error while calling getProducts api", error.message);
    dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message });
  }
};

export default getProducts;

export const getProductDetails = (id) => async (dispatch)=>{
  try {
    dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQUEST})
    const {data} = await axios.get(`${url}/product/${id}`);
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.message });
  }
}