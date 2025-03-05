import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { MdPrivacyTip, MdCookie, MdGppGood } from "react-icons/md";
import { FaBell, FaLongArrowAltRight, FaChrome } from "react-icons/fa";
import { BiArrowToBottom } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const AllowCookiemsg = ({ show }) => {
  const [open, setOpen] = useState(show);

  const handleOpen = () => setOpen(!show);

  return (
    <>
      <Dialog open={show} handler={handleOpen}>
        <DialogHeader>
          <div
            className="bg-gray-100 space-y-4 border-t-4 w-full border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
            role="alert"
          >
            <div className="flex items-center  gap-2">
              <div className="flex justify-center items-center">
                <MdPrivacyTip className="text-sm md:text-5xl text-blue-900" />
              </div>
              <div>
                <p className="font-bold">Important Privacy Policy Alert</p>
                <p className="text-sm md:text-lg font-bold">
                  Make sure you Enable Cookies for the Best Experience
                </p>
              </div>
            </div>

            <div role="alert" className="">
              <span className="bg-red-500 w-full block text-sm md:text-lg text-white font-bold rounded-md px-4 py-2">
                Noted : If you don't allow cookies in your browser you will not
                be able to reset password before login
              </span>
            </div>
          </div>
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
          <FaBell color="blue" size={40} className="text-sm md:text-lg" />
          <Typography color="blue" variant="h4" className="text-sm md:text-lg">
            You can allow third-party cookies by{" "}
            <BiArrowToBottom className="inline text-blue-600" />
          </Typography>
          <Typography className="text-start text-sm text-wrap md:text-lg font-normal text-blue-600">
            1. On your computer{" "}
            <FaLongArrowAltRight className="text-sm md:text-lg inline text-black" />{" "}
            open Chrome{" "}
            <FaChrome className="text-sm md:text-lg inline text-black" /> <br />
            2. At the top right{" "}
            <FaLongArrowAltRight className="text-sm md:text-lg inline text-black" />{" "}
            select More and then Settings Settings{" "}
            <IoSettingsSharp className="text-sm md:text-lg inline text-black" />
            <br />
            3. Select Privacy and security{" "}
            <FaLongArrowAltRight className="text-sm md:text-lg inline text-black" />{" "}
            then Third-party cookies{" "}
            <MdCookie className="text-sm md:text-lg inline text-black" />
            <br />
            4. Select an option{" "}
            <FaLongArrowAltRight className="text-sm md:text-lg inline text-black" />{" "}
            Allow third-party cookies{" "}
            <MdGppGood className="text-sm md:text-lg inline text-black" />
            <br />
          </Typography>
        </DialogBody>
        <DialogFooter className="">
          <Link to="/reset-otp">
            <Button className="bg-blue-900 cursor-pointer hover:bg-green-600 duration-200">
              Ok, Got it
            </Button>
          </Link>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default AllowCookiemsg;
