import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-12 py-8">
      <img
        src="https://mona.media/wp-content/uploads/2023/03/loi-403-la-gi.png"
        alt=""
        className="w-[50%] rounded-3xl"
      />

      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-medium text-center">
          You are not authorized
        </h1>
        <p className="text-xl text-center ">
          You tried to access a page you did not have prior authorization for.
        </p>

        <div className="w-full flex justify-center gap-8 items-center px-[4em]">
          <Link to="/">
            <Button className="cursor-pointer bg-darkSecondText">
              Back Home
            </Button>
          </Link>
          <Button className="cursor-pointer bg-green-600" disabled>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
