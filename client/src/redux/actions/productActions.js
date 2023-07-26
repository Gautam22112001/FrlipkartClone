import axios from "axios";
import * as actionTypes from "../constants/productConstants";

const URL = "http://localhost:8000";

// const func = async () =>{} --> this is the syntax for a normal function but in redux we use middle ware when we want to call an reducer and dont call it directly like we did in api.js, thus

//const func = ()=> async(dispatch)=>{}
//this added middleware gives us the access to dispatc function which allows us to call the reduer function
export const fetchProducts = () => async (dispatch) => {
  try {
    //instead of passing our whole response from the get request we use the object destructuring to get the data feild only
    const { data } = await axios.get(`${URL}/products`);
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message });
  }
};
