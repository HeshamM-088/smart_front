import { Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import { useState } from "react";
import { MdNotes } from "react-icons/md";
import { Link } from "react-router-dom";

const FiltrationDropDown = ({ listOfCategories }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleInputClick = (e) => {
    e.stopPropagation();
  };
  return (
    <Menu dismiss={{ itemPress: false, clickOutside: true, escapeKey: true }}>
      <MenuHandler>
        <div className="flex px-4 justify-center items-center w-full sm:w-[40%] border-[2px] border-gray-500 h-12 rounded-2xl dark:bg-darkMainText">
          <button className="flex items-center gap-2 ">
            <span className="text-lg">
              <MdNotes className="dark:text-white" />
            </span>
            <span className="dark:text-white">Pages</span>
          </button>
        </div>
      </MenuHandler>
      <MenuList className="w-full z-50 block md:hidden bg-gray-700">
        <div className=" h-fit flex flex-col gap-4 w-full border-[1px] border-gray-500 rounded-xl py-5 px-4">
          <div className="flex flex-col gap-2">
            {listOfCategories?.map(({ name, route }, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white font-extrabold border-[2px] border-gray-500 flex items-center gap-2 py-2 px-6 rounded-2xl"
              >
                <Link to={route}>{name}</Link>
              </div>
            ))}
          </div>
        </div>
      </MenuList>
    </Menu>
  );
};

export default FiltrationDropDown;
