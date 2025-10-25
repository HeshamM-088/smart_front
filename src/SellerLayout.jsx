import { useDispatch, useSelector } from "react-redux";
import Header from "./seller/components/Header";
import SideBar from "./seller/components/SideBar";
import {
  LayoutDashboard,
  Package,
  BarChart4,
  Settings,
  ShoppingCart,
} from "lucide-react";
import { useState } from "react";

const SellerLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { tc } = useSelector((state) => state.auth);
  const { role, userName, profile_image } = useSelector(
    (state) => state.userProfile
  );
  const dispatch = useDispatch();

  const navItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Products", href: "/products", icon: Package },
    { name: "Analytics", href: "/analytics", icon: BarChart4 },
    { name: "Orders", href: "/orders", icon: ShoppingCart },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <div>
      <SideBar
        navItems={navItems}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        userName={userName}
        profile_image={profile_image}
      />

      <Header setSidebarOpen={setSidebarOpen} profile_image={profile_image} />
      <h1>Seller page</h1>
    </div>
  );
};

export default SellerLayout;
