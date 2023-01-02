// Product actions here

import axios from "axios";
import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./product.types";

const productsAPI = async () => {
  let res = await axios.get(`http://localhost:8080/products`);
  return res.data;
};

export const getProduct = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    let data = await productsAPI();
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const getitem = async (id) => {
  let res = await axios.get(`http://localhost:8080/products/${id}`);
  return { type: GET_PRODUCTS_SUCCESS, payload: res.data };
};
