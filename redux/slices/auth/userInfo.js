import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userChanged: false,
  email: "",
  id: "",
  userName: "",
  profile_image: "",
  role: "",
  createdAt: "",
  isApproved: false,
  sellerApprovalRequest: {
    comment: "",
    request: false,
  },
};

const userInfo = createSlice({
  name: "user-info",
  initialState,
  reducers: {
    userChanged: (state) => {
      state.userChanged = !state.userChanged;
    },
    setUserInfo: (
      state,
      {
        payload: {
          email,
          id,
          userName,
          image: profile_image,
          role,
          createdAt,
          isApproved,
          request,
          comment,
        },
      }
    ) => {
      state.email = email;
      state.id = id;
      state.userName = userName;
      state.profile_image = profile_image;
      state.role = role;
      state.createdAt = createdAt?.slice(0, 4);
      state.isApproved = isApproved;
      state.sellerApprovalRequest.comment = comment;
      state.sellerApprovalRequest.request = request;
    },
    initUserInfo: (state) => {
      state.email = "";
      state.id = "";
      state.userName = "";
      state.profile_image = "";
      state.role = "";
      state.createdAt = "";
      state.isApproved = false;
    },
  },
});

export const userProfile = userInfo.reducer;

export const { setUserInfo, initUserInfo, userChanged } = userInfo.actions;
