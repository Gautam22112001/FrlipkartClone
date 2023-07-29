// in redux when a dispatch function is called it simultaneously calls all the reducers and then based upon the state and action type a particular reducer is triggered
import * as actionTypes from "../constants/productConstants";

//it is ccompulsary to return something from this reducer function otherwise the frontend will break thus using the default

// if we get something other than the products array for whatever reasn(it could be null, object, int anythig) then the UI will break as the mapping of products in return statement will be undefined, thus to prevent that we passed in a default products array in state.
export const getProductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return { products: action.payload };

    case actionTypes.GET_PRODUCTS_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return { loading: true };

    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };

    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    case actionTypes.GET_PRODUCT_DETAILS_RESET:
      return { product: {} };

    default:
      return state;
  }
};
