import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ResetOtp from "./pages/auth/forget_password/ResetOtp";
import ResetPassword from "./pages/auth/forget_password/ResetPassword";
import NotFound from "./pages/NotFound";

const UserLayout = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="reset-otp" element={<ResetOtp />} />
        <Route path="reset-pass" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default UserLayout;
