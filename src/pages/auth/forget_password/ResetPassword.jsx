"use client";
import React, { useEffect, useState } from "react";
import { MdAttachEmail } from "react-icons/md";
import { BiHide, BiShow, BiUser } from "react-icons/bi";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useActionState } from "react";
import { motion } from "framer-motion";
import { changePassword } from "../serverActions";

const ResetPassword = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const emailAfterOtp = searchParams.get("email");
  const [state, formAction, isPending] = useActionState(changePassword, "");

  useEffect(() => {
    if (!emailAfterOtp) {
      setTimeout(() => {
        navigate("/login");
      }, 6000);
    }
  }, [emailAfterOtp]);

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
        className="max-w-md w-full space-y-8 p-10 bg-white dark:bg-gray-600  rounded-xl shadow-lg"
      >
        <div className="text-center">
          <span className="text-red-500 font-semibold">
            {!emailAfterOtp && "Access to the page is not permitted"}
            {state?.data?.message}
          </span>
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
              Reset
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
              Your Password
            </motion.span>
          </div>
        </div>
        <form className="mt-8 space-y-6" action={formAction}>
          <div className="rounded-md shadow-sm space-y-2">
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
                  value={emailAfterOtp || ""}
                  readOnly
                  type="text"
                  className="dark:text-white cursor-not-allowed dark:placeholder:text-white rounded-none font-semibold relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900   focus:outline-none   sm:text-sm"
                  placeholder="Email"
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <div
                  onClick={() => setShowOtp(!showOtp)}
                  className="absolute cursor-pointer inset-y-0 z-50 left-0 pl-3 flex items-center "
                >
                  {showOtp ? (
                    <BiShow className="h-5 w-5 text-black" />
                  ) : (
                    <BiHide className="h-5 w-5 text-black z-40" />
                  )}
                </div>
                <input
                  id="otp"
                  name="otp"
                  readOnly={!emailAfterOtp}
                  type={showOtp ? "text" : "password"}
                  className={`dark:text-white dark:placeholder:text-white rounded-none font-semibold relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
                        ${!emailAfterOtp && "cursor-not-allowed"}
                    `}
                  placeholder="OTP"
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center z-50 cursor-not-allowed">
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
                </div>
                <input
                  id="password"
                  name="password"
                  readOnly={!emailAfterOtp}
                  type={showPass ? "text" : "password"}
                  className={`dark:text-white dark:placeholder:text-white rounded-none font-semibold relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
                    ${!emailAfterOtp && "cursor-not-allowed"}
                `}
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <div
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                  className="absolute cursor-pointer inset-y-0 z-50 left-0 pl-3 flex items-center "
                >
                  {showConfirmPass ? (
                    <BiShow className="h-5 w-5 text-black" />
                  ) : (
                    <BiHide className="h-5 w-5 text-black z-40" />
                  )}
                </div>
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  readOnly={!emailAfterOtp}
                  type={showConfirmPass ? "text" : "password"}
                  className={`dark:text-white dark:placeholder:text-white rounded-none font-semibold relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
                    ${!emailAfterOtp && "cursor-not-allowed"}
                `}
                  placeholder="Confirm Password"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-8">
            <button
              type="submit"
              disabled={!emailAfterOtp ? true : false}
              className={`group dark:bg-darkMainText cursor-not-allowed  relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400  duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                    ${emailAfterOtp && "hover:bg-orange-600 cursor-pointer"}
                `}
            >
              {false ? "Loading ..." : "Reset Password"}
            </button>

            {state?.status == "Failed" && (
              <button
                type="submit"
                disabled={!emailAfterOtp ? true : false}
                className={`group dark:bg-darkMainText cursor-not-allowed  relative  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400  duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                    ${emailAfterOtp && "hover:bg-orange-600 cursor-pointer"}
                `}
              >
                Request new OTP
              </button>
            )}
          </div>

          <span className="text-red-500 font-semibold text-center px-8 block">
            {!emailAfterOtp &&
              "You'll be Blocked for this site regarding to tampering with site security"}
          </span>
        </form>
      </motion.div>
    </div>
  );
};

export default ResetPassword;
