import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import SocialLogin from "../components/shared/SocialLogin";
import UseAuth from "../Hooks/UseAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const { signIn } = UseAuth();
  const [visible, setVisible] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  // console.log(from);

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then(() => {
        reset();
        toast.success("Logged in successfully", {
          duration: 1500,
          style: {
            background: "#E3F4F4",
            fontWeight: "700",
          },
        });

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const showPassword = () => {
    setVisible((preState) => !preState);
  };

  return (
    <div className="pt-20 font-kanit pb-10">
      <div className="w-full px-2 lg:p-0 lg:w-96 mx-auto border-4 rounded-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white bg-opacity-75 shadow-lg"
        >
          <SocialLogin></SocialLogin>
          <div className="divider px-3">OR</div>
          <div className="px-8 pt-6 pb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                {...register("email")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="flex">
                <input
                  {...register("password")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg "
                  id="password"
                  type={visible ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <div
                  onClick={showPassword}
                  type="button"
                  className="flex items-center"
                >
                  {visible ? (
                    <FaEyeSlash className="-ml-7 w-6 h-6 text-gray-500"></FaEyeSlash>
                  ) : (
                    <FaEye className="-ml-7 w-6 h-6 text-gray-500"></FaEye>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                
                className="bg-1 text-white hover:bg-black transition font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </div>

          <p className="ml-8 pb-7 pt-2">
            New Here?{" "}
            <Link to="/signup">
              <span className="text-yellow-600 hover:text-blue-950">
                Create an Corano account
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
