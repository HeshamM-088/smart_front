import { NavLink } from "react-router-dom";
import { Avatar } from "@material-tailwind/react";
import { X } from "lucide-react";

const SideBar = ({ navItems, isOpen, setIsOpen, userName, profile_image }) => {
  return (
    <>
      {/* Mobile sidebar */}
      <div
        className={`lg:hidden fixed inset-0 z-40 flex ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`relative flex-1 flex flex-col max-w-xs w-full bg-indigo-700 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <h1 className="text-xl font-bold text-white">Control Page</h1>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                      isActive
                        ? "bg-indigo-800 text-white"
                        : "text-indigo-100 hover:bg-indigo-600"
                    }`
                  }
                  end
                >
                  <item.icon className="mr-4 h-6 w-6 text-indigo-300" />
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:bg-indigo-700 lg:border-r lg:border-indigo-800 lg:pt-5 lg:pb-4">
        <div className="flex items-center flex-shrink-0 px-6">
          <h1 className="text-2xl font-bold text-white">Control Page</h1>
        </div>
        <div className="mt-6 h-0 flex-1 flex flex-col overflow-y-auto">
          <nav className="px-3 mt-6">
            <div className="space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                      isActive
                        ? "bg-indigo-800 text-white"
                        : "text-indigo-100 hover:bg-indigo-600"
                    }`
                  }
                  end
                >
                  <item.icon className="mr-3 h-5 w-5 text-indigo-300" />
                  {item.name}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideBar;
