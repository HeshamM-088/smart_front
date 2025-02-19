import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-80px)]  bg-blue-gray-400 flex flex-col items-center justify-center text-center px-4">
      <div className="space-y-8">
        <h1 className="text-6xl font-bold text-white animate-pulse duration-300">
          4<span className="text-orange-500">0</span>4
        </h1>
        <div className="relative">
          <div className="w-40 h-40 bg-orange-600 rounded-full mx-auto animate-bounce">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-24 h-24 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-24 h-24 bg-orange-200 rounded-full animate-ping opacity-85"></div>
          </div>
        </div>
        <p className="text-2xl font-light text-white">
          Oops! You seem to be lost in space.
        </p>
        <p className="text-lg text-gray-400">
          The page you're looking for doesn't exist or has been moved to another
          universe.
        </p>
        <Link
          to="/"
          className="inline-block bg-orange-500 hover:bg-orange-800 text-white font-bold py-3 px-6 rounded-full transition duration-500 ease-in-out transform hover:scale-105"
        >
          Return to Earth
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
