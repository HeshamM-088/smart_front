import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cn: false,
  tc: "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.tc = action.payload.data.token;
      if (action.payload.data.token) {
        state.cn = true;
      }
    },

    logout: (state, action) => {
      state.tc = "";
      state.cn = false;
    },
  },
});
export const { setAuth, logout } = authSlice.actions;
export const auth = authSlice.reducer;
