"use server";

const URL = import.meta.env.VITE_URL;

export const createNewUser = async (prevState, data) => {
  const userName = await data.get("userName");
  const email = await data.get("email");
  const password = await data.get("password");
  let image = await data.get("profile_picture");

  if (!userName || !email || !password) {
    return { data: { message: "All Fields Are Required *" } };
  }

  const formData = new FormData();
  formData.append("userName", userName);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("file", image);
  formData.append("role", "USER");

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
      body: JSON.stringify({ email, otp, password }),
    });
    const res = await req.json();

    return res;
  } catch (e) {
    return e.message;
  }
};
