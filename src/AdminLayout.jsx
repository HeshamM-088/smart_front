import { Route, Routes } from "react-router-dom";
import Admin from "./admin/pages/Admin";
import NotFound from "./pages/NotFound";
import Header from "./admin/components/Header";

const AdminLayout = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route index element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AdminLayout;
