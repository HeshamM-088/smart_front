import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Avatar,
  Input,
} from "@material-tailwind/react";
import { GoShieldLock } from "react-icons/go";
import { IoIosMailUnread } from "react-icons/io";
import { TbLockPassword } from "react-icons/tb";
import { FaRegUser, FaRegEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const UserProfile = () => {
  const { email, id, userName, profile_image, role, createdAt } = useSelector(
    (state) => state.userProfile
  );

  return (
    <div className="flex justify-center items-center">
      <div className="min-h-screen  w-[50%] rounded-2xl  dark:bg-transparent  p-4 flex items-center justify-center">
        <Card className="w-full max-w-md mx-auto dark:bg-darkSecondText dark:text-white">
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
            <CardHeader className="space-y-6 py-1 dark:bg-orange-600 dark:text-white">
              <div className="flex w-full justify-center">
                <Avatar
                  src={
                    profile_image
                      ? profile_image
                      : "https://docs.material-tailwind.com/img/face-2.jpg"
                  }
                  alt="avatar"
                  size="xxl"
                />
              </div>
              <div className="text-center space-y-1">
                <h2 className="text-2xl font-bold">{userName}</h2>
                <p className="text-sm text-muted-foreground">
                  Member since {createdAt}
                </p>
              </div>
            </CardHeader>
          </motion.div>
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
              <input
                type="text"
                className="input bg-transparent w-full px-4 py-2 border-gray-300 dark:border-gray-500 border rounded-md focus-visible:outline-0 focus-visible:border-gray-500 dark:focus-visible:border-gray-300  duration-75 transition-all"
                id="username"
                value={userName}
                readOnly
              />
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
              <input
                id="email"
                value={email}
                type="text"
                className="input bg-transparent w-full px-4 py-2 border-gray-300 dark:border-gray-500 border rounded-md focus-visible:outline-0 focus-visible:border-gray-500 dark:focus-visible:border-gray-300  duration-75 transition-all"
                readOnly
              />
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
                className="mb-1 font-medium hidden md:flex items-center gap-2"
                as="label"
              >
                <TbLockPassword className="w-4 h-4" />
                Password
              </Typography>
              <TbLockPassword className="w-4 h-4 block md:hidden" />
              <input
                id="password"
                value="********"
                type="password"
                className="input bg-transparent w-full px-4 py-2 border-gray-300 dark:border-gray-500 border rounded-md focus-visible:outline-0 focus-visible:border-gray-500 dark:focus-visible:border-gray-300  duration-75 transition-all"
                readOnly
              />
            </motion.div>
          </CardBody>
          <CardFooter>
            <motion.div
              initial={{ opacity: 0.01, y: 50 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8 },
              }}
              className="w-full flex justify-center flex-col md:flex-row items-center gap-6"
            >
              <Button
                size="lg"
                className="w-full p-2 cursor-pointer text-xs  flex flex-col md:flex-row justify-center items-center  transition-all duration-300 hover:bg-darkMainText"
              >
                <FaRegEdit className="text-xl font-extrabold" />
                Edite Profile
              </Button>
              <Button
                size="lg"
                disabled={role == "SysOp"}
                className="w-full p-2 cursor-pointer text-xs  flex flex-col md:flex-row justify-center items-center  transition-all duration-300 hover:bg-darkMainText"
              >
                <GoShieldLock className="text-xl font-extrabold" />
                Upgrade Seller
              </Button>
            </motion.div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;
