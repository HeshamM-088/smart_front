import DashboardContent from "../components/DashboardContent";
import SideBar from "../components/SideBar";

const Admin = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
};

export default Admin;
