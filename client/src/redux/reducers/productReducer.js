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
