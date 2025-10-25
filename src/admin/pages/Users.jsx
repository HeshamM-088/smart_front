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
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Swal from "sweetalert2";
import { approveSellerRequest } from "../server_requests/serverActions.jsx";
import { updateUsers } from "../../../redux/slices/users/getUsers.js";

const Users = () => {
  const { usersLoading, allUsers } = useSelector((state) => state.users);
  const { id, role } = useSelector((state) => state.userProfile);
  const { tc } = useSelector((state) => state.auth);
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  const filteredUsers = allUsers?.filter(({ userName }) =>
    [userName].some((field) =>
      field.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleMakeAdmin = (email) => {
    console.log(email);
  };

  const approveSellerRole = async ({ userId, role }) => {
    setErrorMsg("");

    const swal_result = await Swal.fire({
      title: "Upgrade Account ?",
      text: "User Will Be A Seller In Your WebSite With All Authorization For Seller Man 😊",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonText: "Yes, Upgrade Now ✅",
    });

    if (!swal_result.isConfirmed) {
      return;
    }

    const action_result = await approveSellerRequest({
      userId,
      role,
      tc,
      msg: "Upgrade",
    });

    if (
      action_result?.status == "Error" ||
      action_result.message == "Failed to fetch"
    ) {
      return setErrorMsg(
        action_result?.data?.message
          ? action_result?.data?.message
          : action_result.message
      );
    }

    let timerInterval;
    Swal.fire({
      title: "Account Upgrading..",
      html: "Just Wait <b></b> Seconds.",
      timer: 6000,
      timerProgressBar: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 300);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.isDismissed) {
        dispatch(updateUsers());
      }
    });
  };

  const removeSellerRole = async ({ userId, role }) => {
    setErrorMsg("");
    const swal_result = await Swal.fire({
      title: "Downgrade Account ?",
      text: "User Will Not Be A Seller In Your WebSite , All Authorization Will Be Removed From His Account 😊",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonText: "Yes, Downgrade Now ✅",
    });

    if (!swal_result.isConfirmed) {
      return;
    }

    const action_result = await approveSellerRequest({
      userId,
      role,
      tc,
      msg: "Downgrade",
    });

    if (
      action_result?.status == "Error" ||
      action_result.message == "Failed to fetch"
    ) {
      return setErrorMsg(
        action_result?.data?.message
          ? action_result?.data?.message
          : action_result.message
      );
    }

    let timerInterval;
    Swal.fire({
      title: "Account Downgrading..",
      html: "Just Wait <b></b> Seconds.",
      timer: 6000,
      timerProgressBar: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 300);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.isDismissed) {
        dispatch(updateUsers());
      }
    });
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

          {errorMsg && (
            <h1 className="text-red-400  text-center bg-black p-2 rounded-lg font-bold">
              {errorMsg.toUpperCase()}
            </h1>
          )}

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
              (
                {
                  _id,
                  image,
                  userName,
                  email,
                  role,
                  createdAt,
                  isApproved,
                  sellerApprovalRequest: { request, comment },
                },
                index
              ) => {
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
                        <p className="text-center">
                          {!isApproved && request ? (
                            <Button
                              color="deep-orange"
                              size="sm"
                              onClick={() =>
                                approveSellerRole({ userId: _id, role })
                              }
                            >
                              Approve Seller Request
                            </Button>
                          ) : role == "Vendor" ? (
                            <Button
                              color="red"
                              size="sm"
                              onClick={() =>
                                removeSellerRole({ userId: _id, role })
                              }
                            >
                              Remove Seller Rights
                            </Button>
                          ) : (
                            "--"
                          )}
                        </p>
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
