import React, { useEffect } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { getCart } from "../../redux/cart/cart.actions";

const Navbar = () => {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    getCart(dispatch);
  }, [dispatch]);

  return (
    <div
      data-cy="navbar"
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <Link to="/" data-cy="navbar-home-link">
          Logo
        </Link>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div data-cy="navbar-cart-items-count">Cart : ({cart.data.length})</div>
        <button data-cy="navbar-login-logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
