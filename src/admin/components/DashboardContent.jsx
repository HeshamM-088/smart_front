import { IoBarChart } from "react-icons/io5";
import { FaUsers, FaDollarSign, FaShoppingCart } from "react-icons/fa";

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
            {icon}
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {title}
              </dt>
              <dd className="text-lg font-semibold text-gray-900">{value}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

const DashboardContent = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Total Users"
            value="10,483"
            icon={<FaUsers className="h-6 w-6" />}
          />
          <StatCard
            title="Total Revenue"
            value="$54,237"
            icon={<FaDollarSign className="h-6 w-6" />}
          />
          <StatCard
            title="Total Orders"
            value="1,245"
            icon={<FaShoppingCart className="h-6 w-6" />}
          />
          <StatCard
            title="Conversion Rate"
            value="13.5%"
            icon={<IoBarChart className="h-6 w-6" />}
          />
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center space-x-4">
                <div className="bg-gray-200 rounded-full p-2">
                  <FaUsers className="h-4 w-4 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">New user registered</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
