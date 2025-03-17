import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { setUserInfo } from "../redux/slices/auth/userInfo";
import UserLayout from "./UserLayout";
import AdminLayout from "./AdminLayout";
import Unauthorized from "./pages/Unauthorized";

const App = () => {
  const { cn, tc } = useSelector((state) => state.auth);
  const { role } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (tc) {
      const { id, email, userName, role, image, createdAt } = jwtDecode(tc);
      dispatch(setUserInfo({ id, email, userName, role, image, createdAt }));
    }
  }, [tc, cn]);

  return (
    <main className="font-body bg-mainBg dark:bg-darkMainBg">
      <Routes>
        <Route path="/*" element={<UserLayout />} />
        <Route
          path="/admin/*"
          element={
            role == import.meta.env.VITE_ADMIN ? (
              <AdminLayout />
            ) : (
              <Unauthorized
                role="USER"
                message="You Are Not Allowed To View This Page, Only Admins Can View !"
              />
            )
          }
        />
      </Routes>
      {/* <Footer /> */}
    </main>
  );
};

export default App;
