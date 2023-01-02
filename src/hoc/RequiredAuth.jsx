import { useSelector } from "react-redux";

import { useLocation, Navigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const { isAuthenticated } = useSelector((store) => store.auth);
  const { pathname } = useLocation();

  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login" state={{ form: pathname }} replace />;
  }
};

export default RequiredAuth;
