"use server";

const URL = import.meta.env.VITE_URL;

export const createNewUser = async (prevState, data) => {
  const userName = await data.get("userName");
  const email = await data.get("email");
  const password = await data.get("password");
  const image = await data.get("profile_picture");

  if (!userName || !email || !password) {
    return { data: { message: "All Fields Are Required *" } };
  }

  const formData = new FormData();
  formData.append("userName", userName);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("userImage", image);

  try {
    const req = await fetch(`${URL}/register`, {
      method: "POST",
      credentials: "include",
      cache: "no-cache",
      body: formData,
    });

    const res = await req.json();

    return res;
  } catch (e) {
    return e.message;
  }
};

export const signInLogin = async (prevState, data) => {
  const email = await data.get("email");
  const password = await data.get("password");

  if (!email || !password) {
    return { data: { message: "All Fields Are Required *" } };
  }

  try {
    const req = await fetch(`${URL}/login`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      credentials: "include",
      cache: "no-cache",
      body: JSON.stringify({ email, password }),
    });

    const res = await req.json();

    return res;
  } catch (e) {
    return e.message;
  }
};

export const requestOtp = async (prevState, data) => {
  const email = await data.get("email");

  if (!email) {
    return { data: { message: "Email Is Required*" } };
  }

  try {
    const req = await fetch(`${URL}/request-otp`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      credentials: "include",
      cache: "no-cache",
      body: JSON.stringify({ email }),
    });

    const res = await req.json();

    return { res, email };
  } catch (e) {
    return e.message;
  }
};

export const changePassword = async (prevState, data) => {
  const email = await data.get("email");
  const otp = await data.get("otp");
  const password = await data.get("password");
  const confirmPassword = await data.get("confirmPassword");

  if (!password || !otp) {
    return { data: { message: "All Fields Are Required *" } };
  }

  if (password != confirmPassword) {
    return { data: { message: "Passwords didn't matchs" } };
  }

  try {
    const req = await fetch(`${URL}/reset-password`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      cache: "no-cache",
      body: JSON.stringify({ email, otp, password }),
    });
    const res = await req.json();

    return res;
  } catch (e) {
    return e.message;
  }
};

export const updateUser = async (prev, { tc, user }) => {
  const { id, role, userName, email, password, profile_image } = await user;
  const formData = new FormData();
  formData.append("userName", userName);
  formData.append("email", email);
  if (profile_image.name) {
    formData.append("userImage", profile_image);
  }

  if (password) {
    if (password.length < 5) {
      return {
        status: "pass failed",
        message: "Error: Password Must Be At Least 5 Characters",
      };
    }
    formData.append("password", password);
  }

  try {
    const req = await fetch(`${URL}/user/${id}?role=${role}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${tc}`,
      },
      credentials: "include",
      cache: "no-cache",
      body: formData,
    });

    if (!req.ok) {
      throw new Error(`Error: ${req.status} - ${req.statusText}`);
    }

    const res = await req.json();
    return res;
  } catch (e) {
    return e.message;
  }
};
