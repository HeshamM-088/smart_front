import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { setUserInfo } from "../redux/slices/auth/userInfo";
import UserLayout from "./UserLayout";
import AdminLayout from "./AdminLayout";
import Unauthorized from "./pages/Unauthorized";
import Footer from "./components/Footer";
import SellerLayout from "./SellerLayout";

const App = () => {
  const { cn, tc } = useSelector((state) => state.auth);
  const { role, userChanged } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (tc) {
      const {
        id,
        email,
        userName,
        role,
        image,
        createdAt,
        isApproved,
        sellerApprovalRequest: { request, comment },
      } = jwtDecode(tc);
      dispatch(
        setUserInfo({
          id,
          email,
          userName,
          role,
          image,
          createdAt,
          isApproved,
          request,
          comment,
        })
      );
    }
  }, [tc, cn, userChanged]);

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

        <Route
          path="/vendor/*"
          element={
            role == import.meta.env.VITE_SELLER ? (
              <SellerLayout />
            ) : (
              <Unauthorized
                role="Vendor"
                message="You Are Not Allowed To View This Page, Only Vendors Can View !"
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
