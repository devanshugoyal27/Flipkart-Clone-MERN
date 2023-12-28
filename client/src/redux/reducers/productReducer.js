import * as actionTypes from "../constant/productConstant";

const getproductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_SUCESS:
      return { products: action.payload };

    case actionTypes.GET_PRODUCTS_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export default getproductReducer;

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return { loding: true };

    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return { loding: false, product: action.payload };
    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return { loding: false, error: action.payload };
    case actionTypes.GET_PRODUCT_DETAILS_RESET:
      return { product: {} };

    default:
      return state;
  }
};
