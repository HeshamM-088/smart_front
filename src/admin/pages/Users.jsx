import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { TABLE_HEAD } from "../../../utilitis/Admin-Users.js";
import { useSelector } from "react-redux";
import { useState } from "react";

const Users = () => {
  const { usersLoading, allUsers } = useSelector((state) => state.users);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = allUsers?.filter(({ userName }) =>
    [userName].some((field) =>
      field.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleMakeAdmin = (email) => {
    console.log(email);
  };

  return (
    <Card className="h-full w-full dark:bg-darkMainBg dark:text-white">
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded-none dark:bg-darkMainBg dark:text-white"
      >
        <div className="mb-8 flex items-center justify-center md:justify-between gap-8">
          <div>
            <Typography variant="h5" color="black" className="dark:text-white ">
              Registered Members list : {allUsers?.length} Memebers
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
          <div className="flex flex-col justify-center items-start">
            <span className="text-gray-500 dark:text-gray-400">
              {filteredUsers?.length} Users Found
            </span>
          </div>

          <div className="w-full md:w-fit px-[2em]">
            <Input
              variant="static"
              label="Search By User Name"
              placeholder="User Name"
              color="orange"
              className=""
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-0 overflow-auto">
        <table className="w-full min-w-max table-auto text-start">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-center gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredUsers?.map(
              ({ image, userName, email, role, createdAt }, index) => {
                const isLast = index === filteredUsers?.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={image} alt={userName} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {userName}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          className={`${
                            role == "ADMIN" ? "bg-green-600" : "bg-indigo-600"
                          }   font-normal text-white text-center rounded-2xl p-1`}
                        >
                          {role}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className=" w-full text-center">
                        <Button
                          color="green"
                          size="sm"
                          disabled={role == "SysOp"}
                          onClick={() => handleMakeAdmin(email)}
                        >
                          Make Admin
                        </Button>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {createdAt?.split("T")[0]}
                      </Typography>
                    </td>
                    <td className={classes}>
                      {role == "SELLER" ? (
                        <div className="flex items-center justify-center flex-col md:flex-row gap-2">
                          <Button color="green" size="sm">
                            Confirm
                          </Button>
                          <Button color="red" size="sm">
                            Decline
                          </Button>
                        </div>
                      ) : (
                        <p className="text-center">--</p>
                      )}
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default Users;
