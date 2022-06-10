import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IauthState, IsignUpState, IsignInState } from "../global/types";
import { loginUser, registerUser } from "../helpers/authFunctions";
import { toast } from "react-toastify";

const initialState: IauthState = {
  isLoggedIn: false,
  token: "",
  status: "idle",
  userData: {},
};

export const registerUserThunk = createAsyncThunk(
  "/register",
  (inputState: IsignUpState, thunkAPI) => registerUser(inputState, thunkAPI)
);

export const loginUserThunk = createAsyncThunk(
  "/login",
  (inputState: IsignInState, thunkAPI) => loginUser(inputState, thunkAPI)
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetStatus: (state: IauthState) => {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUserThunk.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(registerUserThunk.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.status = "success";
      const data = action.payload;
      state.token = data.encodedToken;
      state.userData = data.user;
    });
    builder.addCase(registerUserThunk.rejected, (state, action: any) => {
      state.status = "failed";
      toast.error(action.payload);
    });
    builder.addCase(loginUserThunk.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.status = "success";
      const data = action.payload;
      state.token = data.encodedToken;
      state.userData = data.user;
    });
    builder.addCase(loginUserThunk.rejected, (state, action: any) => {
      state.status = "failed";
      toast.error(action.payload);
    });
  },
});

export const authActions = authSlice.actions;
