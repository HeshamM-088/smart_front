import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdOutlineLaptop,
} from "react-icons/md";
import { useEffect, useState } from "react";

const MenuDarkMode = () => {
  const [IsDarkModeActive, setIsDarkModeActive] = useState(false);

  // handle localStorage
  const handleDarkMode = (bool) => {
    if (bool) {
      localStorage.theme = "dark";
      setIsDarkModeActive(bool);
    } else {
      setIsDarkModeActive(bool);
      localStorage.theme = "light";
    }
  };

  // Supporting system preference and manual selection
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkModeActive(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkModeActive(false);
    }
  }, [IsDarkModeActive]);

  return (
    <div>
      {IsDarkModeActive ? (
        <MdOutlineLightMode
          onClick={() => handleDarkMode(false)}
          className="font-bold text-2xl text-white cursor-pointer"
        />
      ) : (
        <MdOutlineDarkMode
          onClick={() => handleDarkMode(true)}
          className="font-bold text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default MenuDarkMode;
