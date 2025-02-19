import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { setUserInfo } from "../redux/slices/auth/userInfo";
import UserLayout from "./UserLayout";
import AdminLayout from "./AdminLayout";
import Unauthorized from "./pages/Unauthorized";
import Footer from "./components/Footer";

const App = () => {
  const { cn, tc } = useSelector((state) => state.auth);
  const { role } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (tc) {
      const { id, email, userName, role, image } = jwtDecode(tc);
      dispatch(setUserInfo({ id, email, userName, role, image }));
    }
  }, [cn]);

  return (
    <main className="font-display bg-mainBg dark:bg-darkMainBg">
      <Routes>
        <Route path="/*" element={<UserLayout />} />
        <Route
          path="/admin/*"
          element={role == "ADMIN" ? <AdminLayout /> : <Unauthorized />}
        />
      </Routes>
      {/* <Footer /> */}
    </main>
  );
};

export default App;
