import {
  Drawer,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { MdPrivacyTip, MdCookie, MdGppGood } from "react-icons/md";
import { FaLongArrowAltRight, FaChrome } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { useState } from "react";

const AllowCookiemsg = () => {
  const [openBottom, setOpenBottom] = useState(true);
  const [open, setOpen] = useState(false);

  return (
    <Drawer
      placement="top"
      open={openBottom}
      onClose={() => setOpenBottom(false)}
      className="p-4 pt-8 w-full flex flex-col justify-start items-center dark:bg-darkMainBg gap-10 bg-slate-700 rounded-b-xs dark:text-darkMainText font-extrabold"
    >
      <div
        className="bg-gray-100 border-t-4 w-full border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
        role="alert"
      >
        <div className="flex space-y-6 gap-2">
          <div className="py-1">
            <MdPrivacyTip className="text-3xl text-black" />
          </div>
          <div>
            <p className="font-bold">Important Privacy Policy Alert</p>
            <p className="text-sm">
              Make sure you Enable Cookies for the Best Experience
            </p>
          </div>
        </div>

        <div role="alert" className="">
          <div className="bg-red-500 text-white font-bold rounded-t-xl px-4 py-2">
            Noted :
          </div>
          <div className="border border-t-0 border-red-400 rounded-b bg-transparent px-4 py-3 text-red-800">
            <span className="font-medium">
              If you don't allow cookies in your browser you will not be able to
              reset password before login
            </span>
          </div>
        </div>
      </div>

      <Button
        onClick={() => setOpen(!open)}
        size="sm"
        className="hover:bg-darkMainText bg-transparent border duration-200 opacity-100 cursor-pointer font-bold text-white"
      >
        Learn How To Enable Cookie
      </Button>
      <Dialog open={open} handler={() => setOpen(!open)}>
        <DialogHeader className="font-bold text-blue-600">
          You can allow third-party cookies by default.
        </DialogHeader>
        <DialogBody className="font-medium text-blue-800">
          1. On your computer{" "}
          <FaLongArrowAltRight className="text-xl inline text-black" /> open
          Chrome <FaChrome className="text-xl inline text-black" /> <br />
          2. At the top right{" "}
          <FaLongArrowAltRight className="text-xl inline text-black" /> select
          More and then Settings Settings{" "}
          <IoSettingsSharp className="text-xl inline text-black" />
          <br />
          3. Select Privacy and security{" "}
          <FaLongArrowAltRight className="text-xl inline text-black" /> then
          Third-party cookies <MdCookie className="text-xl inline text-black" />
          <br />
          4. Select an option{" "}
          <FaLongArrowAltRight className="text-xl inline text-black" /> Allow
          third-party cookies{" "}
          <MdGppGood className="text-xl inline text-black" />
          <br />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="blue"
            onClick={() => {
              setOpenBottom(false);
              setOpen(!open);
            }}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Drawer>
  );
};

export default AllowCookiemsg;
