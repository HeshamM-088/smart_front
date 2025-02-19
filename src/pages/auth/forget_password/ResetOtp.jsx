import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { useActionState, useEffect, useRef, useState } from "react";
import { requestOtp } from "../serverActions";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

const ResetOtp = () => {
  const [state, formAction, isPending] = useActionState(requestOtp, "");
  const navigate = useNavigate();

  useEffect(() => {
    if (state?.res?.status == "Success") {
      navigate(`/reset-pass/?email=${state.email}`);
    }
  }, [state]);

  return (
    <Dialog size="xs" open={true} className="bg-transparent shadow-none">
      <Card className="mx-auto w-full max-w-[24rem]">
        <form action={formAction}>
          <CardBody className="flex flex-col gap-4">
            <Typography
              className="font-bold text-center"
              variant="h5"
              color="orange"
            >
              Forget Password.
            </Typography>

            {state?.data?.message && (
              <Typography
                className=" font-bold text-center"
                variant="paragraph"
                color="red"
              >
                {state?.data?.message}
              </Typography>
            )}

            {state == "Failed to fetch" && (
              <Typography
                className="font-medium text-center"
                variant="small"
                color="red"
              >
                Opps we have a problem .. Please try again later
              </Typography>
            )}

            <input
              id="email-address"
              name="email"
              type="text"
              className="rounded-xl text-red-700 dark:text-blue-600 dark:placeholder:text-gray-400 placeholder:text-gray-400  font-semibold relative block w-full px-3 py-2 pl-10 border border-gray-300   focus:outline-none  sm:text-sm"
              placeholder="Email address"
            />
          </CardBody>
          <CardFooter className="pt-0 flex flex-col justify-center items-center gap-4">
            <Button
              className="cursor-pointer bg-darkSecondText hover:bg-[#17293d]"
              fullWidth
              type="submit"
            >
              {isPending ? "Sending OTP ..." : " Submit"}
            </Button>
            <Typography
              variant="small"
              color="blue"
              className="text-center font-bold"
            >
              OTP code will be sent on your mail once submitted
            </Typography>

            <Typography
              variant="small"
              as={Link}
              to="/login"
              color="blue"
              className="text-center hover:text-blue-900 cursor-pointer font-bold"
            >
              Back To Login
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </Dialog>
  );
};

export default ResetOtp;
