import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { resolvePath } from "react-router-dom";
import { getProduct } from "../../redux/product/product.actions";
import Product from "./Product/Product";

const Products = () => {
  const { loading, error, data } = useSelector((el) => el.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  console.log(data);
  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error...</h3>;
  return (
    <div
      style={{
        width: "1000px",
        marginLeft: "25%",
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "10px",
      }}
    >
      {data.map((el) => (
        <Product key={el.id} {...el} />
      ))}
    </div>
  );
};

export default Products;
