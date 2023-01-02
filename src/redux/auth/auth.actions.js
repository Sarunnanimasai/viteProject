// Auth Actions here
import axios from "axios";
import { RESET_PRODUCTS } from "../product/product.types";
import {
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
} from "./auth.types";

//

let authApi = async (creds) => {
  let res = await axios.post(`https://reqres.in/api/login`, creds);
  return res.data;
};

export const login = (creds) => async (dispatch) => {
  dispatch({ type: AUTH_SIGN_IN_LOADING });
  try {
    let data = await authApi(creds);
    dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: AUTH_SIGN_IN_ERROR });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: AUTH_SIGN_OUT });
  dispatch({ type: RESET_PRODUCTS });
};
