"use server";

const URL = import.meta.env.VITE_URL;
const SELLER = import.meta.env.VITE_SELLER;
const EndUser = import.meta.env.VITE_USER;

export const approveSellerRequest = async ({ userId, role, tc, msg }) => {
  if (msg == "Upgrade") {
    try {
      const req = await fetch(`${URL}/user/${userId}?role=${role}`, {
        headers: {
          Authorization: `Bearer ${tc}`,
          "Content-Type": "application/json",
        },
        method: "PATCH",
        credentials: "include",
        cache: "no-cache",
        body: JSON.stringify({
          sellerApprovalRequest: {
            comment: "your request is approved, Good Luck 😊",
            request: true,
          },
          isApproved: true,
          role: SELLER,
        }),
      });

      const res = await req.json();

      return res;
    } catch (e) {
      return e;
    }
  } else {
    try {
      const req = await fetch(`${URL}/user/${userId}?role=${role}`, {
        headers: {
          Authorization: `Bearer ${tc}`,
          "Content-Type": "application/json",
        },
        method: "PATCH",
        credentials: "include",
        cache: "no-cache",
        body: JSON.stringify({
          sellerApprovalRequest: {
            comment: "The request was rejected based on copyright.",
            request: false,
          },
          isApproved: false,
          role: EndUser,
        }),
      });

      const res = await req.json();

      return res;
    } catch (e) {
      return e;
    }
  }
};
