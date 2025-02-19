import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to={`/`}
      className="text-3xl font-extrabold text-mainText dark:text-darkMainText hover:text-orange-500 duration-200 cursor-pointer "
    >
      Smart.
    </Link>
  );
};

export default Logo;
