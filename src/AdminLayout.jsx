import { Route, Routes } from "react-router-dom";
import Admin from "./admin/pages/Admin";
import NotFound from "./pages/NotFound";
import Header from "./admin/components/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/slices/users/getUsers";
import Users from "./admin/pages/Users";
import SideBar from "./admin/components/SideBar";
import FiltrationDropDown from "./admin/components/FiltrationDropDown";
import Unauthorized from "./pages/Unauthorized";

const AdminLayout = () => {
  const { tc } = useSelector((state) => state.auth);
  const { role } = useSelector((state) => state.userProfile);
  const { usersError } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers({ tc, role }));
  }, []);

  const listOfCategories = [
    {
      name: "Dashboard",
      route: "/admin",
    },
    {
      name: "Products",
      route: "/admin/products",
    },
    {
      name: "Users",
      route: "/admin/users",
    },
    {
      name: "Settings",
      route: "/admin/settings",
    },
  ];

  if (usersError) {
    return (
      <Unauthorized
        role="SysOp"
        message="Invalid Login Credentials, If You Confirm Your Login Data Please Contact Us To Investigate !"
      />
    );
  }

  return (
    <div className=" ">
      <Header />

      <div className="flex flex-col py-8 md:flex-row md:py-0">
        <div className="hidden md:flex">
          <SideBar />
        </div>

        <div className="flex flex-col md:hidden gap-5 items-center justify-center px-[4em]">
          <FiltrationDropDown listOfCategories={listOfCategories} />
        </div>

        <div className="w-full">
          <Routes>
            <Route index element={<Admin />} />
            <Route path="users" element={<Users />} />
            <Route path="*" element={<NotFound route="/admin" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
