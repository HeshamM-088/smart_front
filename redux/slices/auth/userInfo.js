import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  id: "",
  userName: "",
  profile_image: "",
  role: "",
  createdAt: "",
};

const userInfo = createSlice({
  name: "user-info",
  initialState,
  reducers: {
    setUserInfo: (
      state,
      {
        payload: { email, id, userName, image: profile_image, role, createdAt },
      }
    ) => {
      state.email = email;
      state.id = id;
      state.userName = userName;
      state.profile_image = profile_image;
      state.role = role;
      state.createdAt = createdAt.slice(0, 4);
    },
    initUserInfo: (state) => {
      state.email = "";
      state.id = "";
      state.userName = "";
      state.profile_image = "";
      state.role = "";
      state.createdAt = "";
    },
  },
});

export const userProfile = userInfo.reducer;

export const { setUserInfo, initUserInfo } = userInfo.actions;
