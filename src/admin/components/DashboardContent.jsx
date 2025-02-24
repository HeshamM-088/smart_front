import { IoBarChart } from "react-icons/io5";
import { FaUsers, FaDollarSign, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg dark:bg-amber-800 dark:text-white duration-200">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-mainBg dark:bg-darkMainText rounded-md p-3 duration-200">
            {icon}
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate  dark:text-white duration-200">
                {title}
              </dt>
              <dd className="text-lg font-semibold text-gray-900 dark:bg-amber-800 dark:text-white duration-200">
                {value}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

const DashboardContent = () => {
  const { usersLoading, allUsers } = useSelector((state) => state.users);
  const givenDate = new Date(allUsers[allUsers?.length - 1]?.createdAt);
  const now = new Date();
  const diffInMs = now - givenDate;

  const diffInMinutes = Math.floor(diffInMs / 1000 / 60);
  const diffInHours = Math.floor(diffInMs / 1000 / 60 / 60);

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Total Users"
            value={usersLoading ? "--" : allUsers?.length}
            icon={<FaUsers className="h-6 w-6" />}
          />
          <StatCard
            title="Total Revenue"
            value="--"
            icon={<FaDollarSign className="h-6 w-6" />}
          />
          <StatCard
            title="Total Orders"
            value="--"
            icon={<FaShoppingCart className="h-6 w-6" />}
          />
          <StatCard
            title="Conversion Rate"
            value="--"
            icon={<IoBarChart className="h-6 w-6" />}
          />
        </div>
        <div className="bg-white shadow rounded-lg p-4 dark:bg-amber-800 duration-200">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-full p-2">
                <FaUsers className="h-4 w-4 text-gray-600" />
              </div>
              <div>
                <p className="font-medium">
                  {usersLoading
                    ? "..."
                    : allUsers[allUsers?.length - 1]?.userName}{" "}
                  registered
                </p>
                <p className="text-sm text-gray-500 dark:text-white duration-200 font-black">
                  {usersLoading
                    ? "..."
                    : diffInHours == 0
                    ? diffInMinutes
                    : diffInHours}{" "}
                  {diffInHours == 0 ? "Minutes Ago" : "Hours Ago"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
