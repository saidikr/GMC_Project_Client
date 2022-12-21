import { Navigate } from "react-router-dom";
export const LoggedInRedirect = ({ children }) => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  if (token) {
    return <Navigate to="/admin" />;
  } else {
    return children;
  }
};
