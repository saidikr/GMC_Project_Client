import http from "../httpcommun";
import 'react-toastify/dist/ReactToastify.css';

export const login = (
  { email, password },
  successNotification,
  errorNotification
) => {
  ///api call
  http
    .post("/auth/login", { email, password })
    .then((res) => {
      if (res.status === 200) {
        const data = res.data;
        sessionStorage.setItem("token", JSON.stringify(data));
        successNotification("Login succesfully");
        setTimeout(() => {
          window.location = "/admin";
        }, 2000);
      }
    })
    .catch((err) => {
      console.log(err.response.data);
      errorNotification(err.response.data);
    });
};

export const logout = () => {
  if (sessionStorage.getItem("token")) {
    sessionStorage.removeItem("token");
    window.location = "/";
  }
};
