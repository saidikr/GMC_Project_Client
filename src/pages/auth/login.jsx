import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../helper/validation";
import { HomeLayout } from "../../layouts/homeLayout";
import { login } from "../../service/auth.service";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import {
  successNotification,
  errorNotification,
} from "../../helper/notifications";


const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const handleFormSubmit = (data) => {
    // login
    const { email, password } = data;
    login(
      { email, password },
      successNotification,
      errorNotification
    );
  };

  return (
        <div className="container flex justify-center mt-40 mx-auto sm:px-4" >
            <div className="md:w-1/2">
                <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 shadow">
                    <div className="flex-auto p-6">
                        <h3 className="text-center font-semibold ">Login</h3>
                        <form onSubmit={handleSubmit(handleFormSubmit)}>
                            <div className="mb-4 mt-3">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mt-3"
                                    placeholder="enter your email"
                                    {...register("email")}
                                />
                                <p className="text-red-600">{errors.email?.message}</p>
                            </div>
                            <div className="mb-4 mt-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mt-3"
                                    placeholder="enter your password"
                                    {...register("password")}
                                />
                                <p className="text-red-600">{errors.password?.message}</p>
                            </div>
                            <div className="mb-4 mt-3">
                                <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-site-color text-black hover:text-white">login</button>
                            </div>
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default LoginPage;
