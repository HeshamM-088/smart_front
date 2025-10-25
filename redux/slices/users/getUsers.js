import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = import.meta.env.VITE_URL;

export const getAllUsers = createAsyncThunk(
  "/get_users",
  async ({ tc: token, role }, { rejectWithValue }) => {
    try {
      const req = await fetch(`${URL}/users?role=${role}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        method: "get",
      });

      if (!req.ok) {
        const error = await req.json();
        return rejectWithValue(error);
      }

      const res = await req.json();

      return res;
    } catch (e) {
      return rejectWithValue(e.message || "Something went wrong");
    }
  }
);

const initialState = {
  usersLoading: true,
  userChangedFlag: false,
  allUsers: [],
  usersError: null,
};

const getUsers = createSlice({
  name: "get_users",
  initialState,
  reducers: {
    updateUsers: (state, action) => {
      state.userChangedFlag = !state.userChangedFlag;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state) => {
      state.usersLoading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.usersLoading = false;
      state.allUsers = action.payload.data.users;
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.usersLoading = false;

      state.usersError = action.payload.data;
    });
  },
});

export const users = getUsers.reducer;
export const { updateUsers } = getUsers.actions;
