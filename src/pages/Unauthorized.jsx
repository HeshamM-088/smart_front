import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Unauthorized = ({ message, role }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-12 py-8">
      <img
        loading="lazy"
        src="/unauthorized.png"
        alt=""
        className="w-[50%] rounded-3xl"
      />

      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold text-center dark:text-amber-500 text-red-600">
          You are not authorized
        </h1>
        <p className="text-xl text-center dark:text-amber-500 text-red-600 font-bold">
          {message}
        </p>

        <div className="w-full flex justify-center gap-8 items-center px-[4em]">
          <Link to="/">
            <Button className="cursor-pointer bg-blue-700">Back Home</Button>
          </Link>
          <Button
            className="cursor-pointer bg-green-600"
            disabled={role == "EndUser"}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
