import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Avatar,
  Tooltip,
  Alert,
} from "@material-tailwind/react";
import { GoShieldLock } from "react-icons/go";
import { IoIosMailUnread } from "react-icons/io";
import { TbLockPassword } from "react-icons/tb";
import { GiConfirmed } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import { FaRegUser, FaRegEdit, FaUpload } from "react-icons/fa";
import { FcApprove } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { updateUser } from "../auth/serverActions";
import { useActionState } from "react";
import { jwtDecode } from "jwt-decode";
import { setUserInfo } from "../../../redux/slices/auth/userInfo";
import { setAuth } from "../../../redux/slices/auth/login";

const UserProfile = () => {
  const { email, id, userName, profile_image, role, createdAt } = useSelector(
    (state) => state.userProfile
  );
  const { cn, tc } = useSelector((state) => state.auth);

  const [showUser, setShowUser] = useState(true);
  const [showEmail, setShowEmail] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [originalImage, setOriginalImage] = useState(true);
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  const [state, formAction, isPending] = useActionState(updateUser, null);

  const [user, setuser] = useState({
    userName,
    email,
    password: "",
    profile_image,
    id: "",
    role: "",
  });

  useEffect(() => {
    if (id) {
      setuser({
        userName,
        email,
        password: "",
        profile_image,
        id,
        role,
      });
    }
  }, [id]);

  useEffect(() => {
    if (state?.status == "Success") {
      dispatch(setAuth(state));
      setOriginalImage(true);
    }
  }, [state]);

  return (
    <div className="flex justify-center items-center">
      <div className="min-h-screen  md:w-[50%] rounded-2xl  dark:bg-transparent  p-4 flex items-center justify-center">
        <form
          action={() => formAction({ user, tc })}
          className="w-full max-w-md mx-auto"
        >
          <Card className="dark:bg-darkSecondText dark:text-white">
            <motion.div
              initial={{ y: 0, opacity: 0, scale: 0 }}
              animate={{
                y: -20,
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8 },
              }}
              className="w-full"
            >
              <CardHeader className="py-1 dark:bg-orange-600 dark:text-white">
                <div className="flex w-full flex-col  items-center gap-1 justify-center">
                  {originalImage ? (
                    <Avatar
                      loading="lazy"
                      src={profile_image ? profile_image : "/waitingImage.gif"}
                      alt="avatar"
                      size="xxl"
                    />
                  ) : (
                    <Avatar
                      src="/waitingImage.gif"
                      loading="lazy"
                      alt="avatar"
                      size="xxl"
                    />
                  )}

                  <Tooltip
                    content={
                      <h1 className="text-gray-200 font-bold opacity-80">
                        Upload New Image
                      </h1>
                    }
                  >
                    <div className="flex flex-col w-fit cursor-pointer py-5 relative items-center justify-center">
                      <input
                        type="file"
                        name="image"
                        id="image"
                        onChange={(e) => {
                          setOriginalImage(false);
                          setuser({
                            ...user,
                            profile_image: e.target.files[0],
                          });
                        }}
                        className="absolute top-[-0.2em] w-[4em] h-[3em] left-[-2em] z-50 opacity-0 cursor-pointer "
                      />
                      <FaUpload className="text-2xl font-bold drop-shadow-[6px_6px_4px_rgba(0,0,0,0.4)]  absolute z-0" />
                    </div>
                  </Tooltip>
                </div>
                <div className="text-center space-y-1">
                  <h2 className="text-2xl font-bold">
                    {userName?.toUpperCase()}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Member since {createdAt}
                  </p>
                </div>
              </CardHeader>
            </motion.div>

            {state?.status == "Success" && (
              <div className="mx-2">
                <Alert
                  color="green"
                  open={open}
                  className="font-display font-bold flex flex-col md:flex-row items-center  "
                  onClose={() => setOpen(false)}
                  icon={<FcApprove className="text-2xl" />}
                >
                  Congrates .. Account Updated Successfully
                </Alert>
              </div>
            )}

            <CardBody className="space-y-4">
              <motion.div
                initial={{ opacity: 0.01 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 3 },
                }}
                className="space-y-2 flex hesham flex-col justify-center items-start gap-1  md:px-0"
              >
                <Typography
                  as="label"
                  htmlFor="username"
                  variant="small"
                  color="blue-gray"
                  className="mb-1 font-medium  items-center gap-2 hidden md:flex"
                >
                  <FaRegUser className="w-4 h-4" />
                  Username
                </Typography>
                <FaRegUser className="w-4 h-4 block md:hidden" />
                <label className="input relative w-full">
                  <FaRegEdit
                    className="absolute right-5 top-3 cursor-pointer"
                    onClick={() => setShowUser(false)}
                  />
                  <input
                    type="text"
                    name="userName"
                    className="input bg-transparent w-full px-4 py-2 border-gray-300 dark:border-gray-500 border rounded-md focus-visible:outline-0 focus-visible:border-gray-500 dark:focus-visible:border-gray-300  duration-75 transition-all"
                    id="username"
                    value={user?.userName}
                    readOnly={showUser}
                    onChange={(e) =>
                      setuser({
                        ...user,
                        userName: e.target.value,
                      })
                    }
                  />
                </label>
              </motion.div>
              <motion.div
                initial={{ opacity: 0.01 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 3 },
                }}
                className="space-y-2"
              >
                <Typography
                  htmlFor="email"
                  variant="small"
                  color="blue-gray"
                  className="mb-1 font-medium  items-center gap-2 hidden md:flex"
                  as="label"
                >
                  <IoIosMailUnread className="w-4 h-4" />
                  Email
                </Typography>
                <IoIosMailUnread className="w-4 h-4 block md:hidden" />
                <label className="input relative w-full">
                  <FaRegEdit
                    className="absolute right-5 top-0.5 cursor-pointer"
                    onClick={() => setShowEmail(false)}
                  />
                  <input
                    name="email"
                    id="email"
                    value={user?.email}
                    type="text"
                    className="input bg-transparent w-full px-4 py-2 border-gray-300 dark:border-gray-500 border rounded-md focus-visible:outline-0 focus-visible:border-gray-500 dark:focus-visible:border-gray-300  duration-75 transition-all"
                    readOnly={showEmail}
                    onChange={(e) =>
                      setuser({
                        ...user,
                        email: e.target.value,
                      })
                    }
                  />
                </label>
              </motion.div>
              <motion.div
                initial={{ opacity: 0.01 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 3 },
                }}
                className="space-y-2"
              >
                <Typography
                  htmlFor="password"
                  variant="small"
                  color="blue-gray"
                  className="mb-1  font-medium hidden md:flex items-center gap-2"
                  as="label"
                >
                  <TbLockPassword className="w-4 h-4" />
                  Password
                </Typography>
                <TbLockPassword className="w-4 h-4 block md:hidden" />
                <label className="input relative w-full">
                  <FaRegEdit
                    className="absolute right-5 top-0.5 cursor-pointer"
                    onClick={() => setShowPassword(false)}
                  />
                  <input
                    id="password"
                    name="password"
                    value={user?.password}
                    type="password"
                    placeholder="******"
                    className="input bg-transparent dark:placeholder:text-white placeholder:text-gray-700  w-full px-4 py-2 border-gray-300 dark:border-gray-500 border rounded-md focus-visible:outline-0 focus-visible:border-gray-500 dark:focus-visible:border-gray-300  duration-75 transition-all"
                    readOnly={showPassword}
                    onChange={(e) =>
                      setuser({
                        ...user,
                        password: e.target.value,
                      })
                    }
                  />
                </label>
              </motion.div>
              {state?.status == "pass failed" && (
                <div className="w-full px-2 text-center">
                  <span className="text-sm rounded-sm dark:text-red-600 text-darkMainText font-bold p-2 shadow-2xl dark:bg-white bg-gray-800">
                    {state?.message}
                  </span>
                </div>
              )}
            </CardBody>
            <CardFooter>
              <motion.div
                initial={{ opacity: 0.01, y: 50 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.8 },
                }}
                className="w-full flex justify-center flex-col md:flex-row items-center gap-4"
              >
                <div className="md:hidden block w-full  space-y-4 text-center text-wrap">
                  <Typography color="blue" className="font-medium text-[100%]">
                    Upgrade To Seller
                  </Typography>
                  <Typography
                    variant="small"
                    color="yellow"
                    className="font-bold "
                  >
                    When You Confirm Upgrade To Seller , You Will Wait For Admin
                    Confirmation Then You Can Manage Your New Seller Account
                  </Typography>
                </div>

                <Button
                  size="md"
                  type="submit"
                  onClick={() => setOpen(true)}
                  className="w-full py-2 px-0 cursor-pointer text-xl md:text-xs  flex flex-col md:flex-row justify-center items-center  transition-all duration-300 hover:bg-darkMainText gap-2"
                >
                  <GiConfirmed className="text-xl font-extrabold" />
                  {isPending ? "Updating ..." : "Confirm"}
                </Button>

                <Button
                  size="md"
                  type="reset"
                  disabled={isPending}
                  onClick={() => {
                    window.location.reload();
                  }}
                  className="w-full py-2 px-0 cursor-pointer text-xl md:text-xs  flex flex-col md:flex-row justify-center items-center  transition-all duration-300 hover:bg-darkMainText gap-2"
                >
                  <ImCancelCircle className="text-xl font-extrabold" />
                  Discard
                </Button>

                <Tooltip
                  className="hidden md:block"
                  content={
                    <div className="w-80">
                      <Typography color="blue" className="font-medium">
                        Upgrade To Seller
                      </Typography>
                      <Typography
                        variant="small"
                        color="yellow"
                        className="font-bold "
                      >
                        When You Confirm Upgrade To Seller , You Will Wait For
                        Admin Confirmation Then You Can Manage Your New Seller
                        Account
                      </Typography>
                    </div>
                  }
                  placement="top"
                  animate={{
                    mount: { scale: 1, y: 0, transition: { duration: 0.5 } },
                    unmount: { scale: 0, y: 0 },
                  }}
                >
                  <span
                    disabled={role == "SysOp"}
                    className="w-full bg-slate-900 text-white text-xl md:text-xs rounded-lg font-bold py-2 px-0 cursor-pointer flex flex-col md:flex-row justify-center items-center  transition-all duration-300 hover:bg-darkMainText gap-2"
                  >
                    <GoShieldLock className="text-xl font-extrabold" />
                    Upgrade
                  </span>
                </Tooltip>
              </motion.div>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
