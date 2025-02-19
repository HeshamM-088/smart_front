import { IoHome, IoBarChart, IoSettings } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <Link
          to="#"
          className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-700 rounded"
        >
          <IoHome className="h-6 w-6" />
          <span>Dashboard</span>
        </Link>
        <Link
          to="#"
          className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-700 rounded"
        >
          <IoBarChart className="h-6 w-6" />
          <span>Products</span>
        </Link>
        <Link
          to="#"
          className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-700 rounded"
        >
          <FaUsers className="h-6 w-6" />
          <span>Team</span>
        </Link>
        <Link
          to="#"
          className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-700 rounded"
        >
          <IoSettings className="h-6 w-6" />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
};

export default SideBar;
