import axios from "axios";

const URL = "http://localhost:8000";

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error while calling signup api: ", error);
  }
};

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Error while calling Login api: ", error);
    return error.response; // because in case of invalid login the api throws error in 400s and in the case of 400s errors the control comes to catch statement .
    // now in logindialogBox when login will be failed error.response will be returned whereas in earlier case without this retrn statement nothing was returned
  }
};

export const paywWithPaytm = async (data) => {
  try {
    let response = await axios.post(`${URL}/payment`, data);
    return response.data;
  } catch (error) {
    console.log("error while calling payment gateway", error);
  }
};
