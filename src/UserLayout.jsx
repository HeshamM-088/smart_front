import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ResetOtp from "./pages/auth/forget_password/ResetOtp";
import ResetPassword from "./pages/auth/forget_password/ResetPassword";
import NotFound from "./pages/NotFound";
import UserProfile from "./pages/user_profile/UserProfile";
import { useSelector } from "react-redux";
import Unauthorized from "./pages/Unauthorized";

const UserLayout = () => {
  const { tc, cn } = useSelector((state) => state.auth);

  return (
    <div>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="reset-otp" element={<ResetOtp />} />
        <Route path="reset-pass" element={<ResetPassword />} />
        <Route
          path="user-profile"
          element={
            cn && tc ? (
              <UserProfile />
            ) : (
              <Unauthorized
                role="EndUser"
                message="You Are Not Allowed To View This Page, Only Login Users Can View !"
              />
            )
          }
        />
        <Route path="*" element={<NotFound route="/" />} />
      </Routes>
    </div>
  );
};

export default UserLayout;
