import DashboardContent from "../components/DashboardContent";
import SideBar from "../components/SideBar";

const Admin = () => {
  return (
    <div className="flex  w-full bg-gray-100 dark:bg-darkMainBg dark:text-white duration-200">
      <div className="flex flex-col flex-1 overflow-hidden dark:bg-darkMainBg dark:text-white duration-200">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-darkMainBg dark:text-white duration-200">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
};

export default Admin;
