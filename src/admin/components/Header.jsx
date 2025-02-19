import { IoNotifications } from "react-icons/io5";
import {
  Menu,
  MenuHandler,
  MenuList,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MenuDarkMode from "../../components/systemMode/MenuDarkMode";
import { logout } from "../../../redux/slices/auth/login";
import { initUserInfo } from "../../../redux/slices/auth/userInfo";

const Header = () => {
  const { id, email, userName, profile_image } = useSelector(
    (state) => state.userProfile
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(initUserInfo());
    navigate("/");
  };

  return (
    <header className="bg-white dark:bg-darkMainBg  shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link
          to={`/`}
          className="text-3xl font-extrabold text-mainText dark:text-darkMainText hover:text-orange-500 duration-200 cursor-pointer "
        >
          Smart.
        </Link>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700">
            <IoNotifications className="h-6 w-6 dark:text-white" />
          </button>
          <button className="flex items-center gap-4 text-sm font-medium text-gray-700 hover:text-gray-800">
            {/*  */}
            <div>
              <Menu>
                <MenuHandler>
                  <Avatar
                    alt="tania andrew"
                    className="cursor-pointer w-[30px] h-[30px] object-cover"
                    src={`${
                      profile_image
                        ? profile_image
                        : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                    }`}
                  />
                </MenuHandler>
                <MenuList className="bg-mainBg cursor-pointer hover:bg-gray-800 duration-200 hover:text-white  dark:bg-darkMainBg dark:text-darkMainText">
                  <Typography
                    variant="paragraph"
                    className="font-bold"
                    onClick={handleLogout}
                  >
                    Log-out
                  </Typography>
                </MenuList>
              </Menu>
            </div>

            {/*  */}
            <span className="dark:text-white font-bold">
              {userName.toUpperCase()}
            </span>
          </button>
          <MenuDarkMode />
        </div>
      </div>
    </header>
  );
};

export default Header;
