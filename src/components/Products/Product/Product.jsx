import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, deleteCart, getCart } from "../../../redux/cart/cart.actions";
import { getitem } from "../../../redux/product/product.actions";

const Product = ({ id, name, description }) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    getitem(id).then((d) => setData(d.payload));
  }, []);
  // You can change this variable value to each product id

  const handleAdd = async () => {
    addCart(data);
    getCart(dispatch);
  };

  const handledelete = async () => {
    deleteCart(data.id);
    getCart(dispatch);
  };

  return (
    <div
      data-cy={`product-${id}`}
      style={{
        border: "1px solid black",
        borderRadius: "10px",
        padding: "5%",
      }}
    >
      <h3 data-cy="product-name">{data.name}</h3>
      <h6 data-cy="product-description">{data.description}</h6>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          data-cy="product-increment-cart-item-count-button"
        >
          +
        </button>
        <span data-cy="product-count">{count}</span>
        <button
          disabled={count == 0}
          onClick={() => setCount(count - 1)}
          data-cy="product-decrement-cart-item-count-button"
        >
          -
        </button>
        <button onClick={handleAdd} data-cy="product-add-item-to-cart-button">
          Add To Cart
        </button>
        <button
          onClick={handledelete}
          data-cy="product-remove-cart-item-button"
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
