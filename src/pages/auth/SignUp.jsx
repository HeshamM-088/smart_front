"use client";
import React, { useEffect, useState } from "react";
import { MdAttachEmail, MdPhotoCamera } from "react-icons/md";
import { BiHide, BiShow, BiUser } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useActionState } from "react";
import { createNewUser } from "./serverActions";
import { motion } from "framer-motion";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [showPp, setShowPp] = useState(null);
  const [state, formAction, isPending] = useActionState(createNewUser, "");
  const navigate = useNavigate();

  useEffect(() => {
    if (state?.status == "Success") {
      navigate("/login");
    } else {
      setShowPp(null);
    }
  }, [state]);

  return (
    <div className="h-screen flex items-center justify-center px-[2em]">
      <motion.div
        initial={{ y: 0, opacity: 0, scale: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1.1,
          transition: { duration: 0.6 },
          boxShadow: "0px 0px 4px #dcc8ff",
        }}
        className="max-w-md w-full space-y-8 p-10 bg-white dark:bg-gray-800/50  rounded-xl shadow-lg"
      >
        <div className="text-center">
          {state == "Failed to fetch" && (
            <h1 className="text-red-400 dark:text-red-600 text-xs font-semibold">
              Internal Server Error .. Please Try Again Later
            </h1>
          )}

          {state.data && (
            <h1 className="text-red-400 dark:text-red-600 text-xs font-semibold">
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
              Create
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
              Account
            </motion.span>
          </div>
          <p className="mt-2 text-sm text-secondText dark:text-white">
            Join us today and start your journey
          </p>
        </div>
        <form className="mt-8 space-y-6" action={formAction}>
          <div className="rounded-md shadow-sm space-y-[1em]">
            {/* User Name */}
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center z-50 cursor-not-allowed">
                  <BiUser className="h-5 w-5 text-black " aria-hidden="true" />
                </div>
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  className="dark:text-darkMainText dark:placeholder:text-gray-600 rounded-[6px] font-semibold relative block w-full px-3 py-2 pl-10  placeholder-gray-500 text-gray-900  border border-gray-300  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="User Name"
                />
              </div>
            </div>
            {/* Email */}
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center z-50 cursor-not-allowed">
                  <MdAttachEmail
                    className="h-5 w-5 text-black "
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="email-address"
                  name="email"
                  type="text"
                  className="dark:text-darkMainText dark:placeholder:text-gray-600 rounded-[6px] font-semibold relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>
            {/* Password */}
            <div>
              <div className="relative">
                <div
                  onClick={() => setShowPass(!showPass)}
                  className="absolute cursor-pointer inset-y-0 z-50 left-0 pl-3 flex items-center "
                >
                  {showPass ? (
                    <BiShow className="h-5 w-5 text-black " />
                  ) : (
                    <BiHide className="h-5 w-5 text-black z-40 " />
                  )}
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPass ? "text" : "password"}
                  className="dark:text-darkMainText dark:placeholder:text-gray-600 rounded-[6px] relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 font-semibold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            {/* Profile Image */}
            <div className="relative flex justify-between items-center gap-6">
              <label
                htmlFor="pp"
                className=" w-full border border-gray-300  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 overflow-hidden bg-white text-gray-600 p-2 flex justify-start gap-3 items-center rounded-md cursor-pointer text-center "
              >
                <MdPhotoCamera className="h-5 w-5 text-black hover:text-darkMainText" />

                <span className="text-gray-900/55 dark:placeholder:text-gray-600/55  font-medium">
                  {showPp ? showPp.name : "Upload Your Photo"}
                </span>
                {showPp && (
                  <img
                    src="/signupimage.gif"
                    width="8%"
                    className="rounded-lg"
                  />
                )}
              </label>

              <input
                id="pp"
                onChange={(e) => setShowPp(e.target.files[0])}
                name="profile_picture"
                type="file"
                className="hidden"
                placeholder="Profile Picture"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isPending}
              className="group dark:bg-darkMainText cursor-pointer relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-orange-600 duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isPending ? "SIGNING UP..." : "SIGN UP"}
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="mt-2 text-sm text-secondText dark:text-white">
            Already have an account?{" "}
            <Link
              to={`/login`}
              className="dark:text-darkMainText dark:hover:text-[#ff9952] font-medium text-indigo-600 cursor-pointer hover:text-indigo-500"
            >
              LOG IN
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
