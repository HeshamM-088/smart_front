import React, { useEffect, useState } from "react";
import { MdAttachEmail } from "react-icons/md";
import { BiHide, BiShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useActionState } from "react";
import { signInLogin } from "./serverActions";
import { useDispatch } from "react-redux";
import { setAuth } from "../../../redux/slices/auth/login";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const [state, formAction, isPending] = useActionState(signInLogin, "");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (state?.status == "Success") {
      dispatch(setAuth(state));
      navigate("/");
    }
  }, [state]);

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-[2em]">
      <motion.div
        initial={{ y: 0, opacity: 0, scale: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1.1,
          transition: { duration: 0.6 },
          boxShadow: "4px 4px 6px #dcc8ff",
        }}
        className="max-w-md w-full space-y-8 p-10 bg-white dark:bg-gray-600 rounded-xl shadow-lg"
      >
        <div className="text-center">
          {state == "Failed to fetch" && (
            <h1 className="text-red-400 dark:text-red-600 text-xs font-semibold">
              Internal Server Error .. Please Try Again Later
            </h1>
          )}

          {state?.data && (
            <h1 className="text-red-400 dark:text-red-600 text-xl font-bold">
              {state?.data?.message}
            </h1>
          )}

          <div className="w-full mt-6 overflow-hidden flex items-center gap-2 justify-center">
            <motion.span
              initial={{ x: -300, opacity: 0, scale: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 1.2 },
                scale: 1,
              }}
              className=" text-3xl font-extrabold text-mainText dark:text-darkMainText"
            >
              Welcome
            </motion.span>
            <motion.span
              initial={{ x: 300, opacity: 0, scale: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 1.2 },
                scale: 1,
              }}
              className=" text-3xl font-extrabold text-mainText dark:text-darkMainText"
            >
              Back
            </motion.span>
          </div>
          <p className="mt-2 text-sm text-secondText dark:text-white">
            Please sign in to your account
          </p>
        </div>
        <form className="mt-8 space-y-6" action={formAction}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center z-50 cursor-not-allowed">
                  <MdAttachEmail
                    className="h-5 w-5 text-black"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="email-address"
                  name="email"
                  type="text"
                  className=" rounded-none dark:text-white dark:placeholder:text-white font-semibold relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <div
                  onClick={() => setShowPass(!showPass)}
                  className="absolute cursor-pointer inset-y-0 z-50 left-0 pl-3 flex items-center "
                >
                  {showPass ? (
                    <BiShow className="h-5 w-5 text-black" />
                  ) : (
                    <BiHide className="h-5 w-5 text-black z-40" />
                  )}
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPass ? "text" : "password"}
                  className=" rounded-none dark:text-white dark:placeholder:text-white relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 font-semibold rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group dark:bg-darkMainText cursor-pointer relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-orange-600 duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isPending ? "Signing in ..." : "Login"}
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="mt-2 text-sm text-secondText dark:text-white">
            Don't have an account?{" "}
            <Link
              to={`/signup`}
              className="font-medium text-indigo-600 dark:text-darkMainText dark:hover:text-[#ff9952] cursor-pointer hover:text-indigo-500"
            >
              Sign up
            </Link>
          </p>
        </div>

        <div className="text-center">
          <p className="mt-2 text-sm text-secondText dark:text-white">
            Can't Remember your password?{" "}
            <Link to="/reset-otp">
              <span className="font-medium text-indigo-600 cursor-pointer hover:text-indigo-500 dark:text-darkMainText dark:hover:text-[#ff9952]">
                Forget Password
              </span>
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
