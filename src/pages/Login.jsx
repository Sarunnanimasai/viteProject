import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/auth/auth.actions";

const Login = () => {
  const { isAuthenticated } = useSelector((store) => store.auth);
  const [loginCreds, setLoginCreds] = useState({});
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginCreds));
  };

  useEffect(() => {
    if (isAuthenticated) {
      if ("login") {
        navigate("/");
      } else {
        navigate("/login");
      }
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          data-cy="login-email"
          name="email"
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
        <input
          data-cy="login-password"
          name="password"
          type={"password"}
          placeholder="Enter Password..."
          onChange={handleChange}
        />
        <button data-cy="login-submit" type="submit">
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
