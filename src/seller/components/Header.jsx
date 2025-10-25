import { Avatar } from "@material-tailwind/react";
import { Menu, Bell, Search } from "lucide-react";
import UserProfileMenu from "../../components/header/userProfileMenu/UserProfileMenu";

const Header = ({ setSidebarOpen, profile_image }) => {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              type="button"
              className="lg:hidden -ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-xl hidden lg:block sm:text-2xl font-semibold text-gray-900 ml-2 lg:ml-0">
              Control Page
            </h1>
          </div>

          <div className="ml-4 flex flex-1 w-full items-center justify-center gap-4 md:ml-6">
            <div className="hidden md:block flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search products..."
                />
              </div>
            </div>

            <div className="flex-1 flex justify-end">
              <UserProfileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
