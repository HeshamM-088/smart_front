import Container from "./Container";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { FaUnlockAlt, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import MenuDarkMode from "../systemMode/MenuDarkMode";
import { useSelector } from "react-redux";
import UserProfileMenu from "./userProfileMenu/UserProfileMenu";

const Header = () => {
  const { cn } = useSelector((state) => state.auth);

  return (
    <motion.div
      className="bg-transparent w-full px-[0.5em] md:px-0 shadow-lg shadow-gray-300 dark:shadow-gray-700"
      initial={{
        y: 0,
        scale: 0,
      }}
      animate={{
        y: 0,
        scale: 1,
        transition: { duration: 0.8 },
      }}
    >
      <Container
        className={
          " flex items-center md:gap-x-5 justify-between md:justify-start"
        }
      >
        <Logo />
        {/* search bar */}
        <div className="w-full hidden group md:flex items-center gap-x-1 border-[1px] border-lightText/50 dark:border-gray-600 rounded-full px-4 py-1.5 focus-within:border-orange-600">
          <CiSearch className="text-gray-400 dark:text-darkSecondText group-focus-within:text-gray-800 dark:group-focus-within:text-darkMainText" />
          <input
            type="text"
            placeholder="Search for products"
            className="placeholder:text-sm placeholder:text-lightText/40 dark:placeholder:text-darkMainText hover:placeholder:text-lightText/100 hover:cursor-pointer flex-1 outline-none bg-transparent  rounded-3xl px-2"
          />
        </div>
        {/* authintication inputs */}
        {cn ? (
          <UserProfileMenu />
        ) : (
          <Link
            to={`/login`}
            className="flex justify-center items-center gap-1 bg-gray-300 rounded-full px-6 py-[6px] cursor-pointer text-mainText hover:text-white hover:bg-gray-600 duration-200"
          >
            <FaUnlockAlt />
            <span className="font-semibold">Login</span>
          </Link>
        )}

        {/* card button */}
        <div className="flex relative justify-center items-center gap-1 bg-black dark:bg-darkSecondText rounded-full px-6 py-[6px] cursor-pointer text-white ">
          <FaShoppingCart />
          <span className="font-semibold ">$0.00</span>
          <span className="bg-white z-50 drop-shadow-[0px_3px_6px_gray] rounded-[50%] text-orange-900 w-5 h-5 font-semibold flex justify-center items-center  absolute -top-1 -right-0">
            0
          </span>
        </div>

        <MenuDarkMode />
      </Container>
    </motion.div>
  );
};

export default Header;
