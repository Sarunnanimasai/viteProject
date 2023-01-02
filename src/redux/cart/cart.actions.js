// Cart Actions here

import axios from "axios";
import { GET_CART_ITEMS_SUCCESS } from "./cart.types";

export const getCart = async (dispatch) => {
  let res = await axios.get(`http://localhost:8080/cartItems`);
  dispatch({ type: GET_CART_ITEMS_SUCCESS, payload: res.data });
};

export const addCart = async (newitem) => {
  let res = await axios.post(`http://localhost:8080/cartItems`, {
    ...newitem,
  });
  return { type: GET_CART_ITEMS_SUCCESS, payload: res.data };
};

export const deleteCart = async (id) => {
  let res = await axios.delete(`http://localhost:8080/cartItems/${id}`);
  return { type: GET_CART_ITEMS_SUCCESS, payload: res.data };
};
