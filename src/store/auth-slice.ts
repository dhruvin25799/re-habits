import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IauthState, IsignUpState, IsignInState } from "../global/types";
import { toast } from "react-toastify";
import { userDataActions } from "./userData-slice";
import axios from "axios";
import { habitActions } from "./habit-slice";

const initialState: IauthState = {
  isLoggedIn: false,
  token: "",
  status: "idle",
};

export const registerUserThunk = createAsyncThunk(
  "/register",
  async (inputState: IsignUpState, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post("/api/register", {
        firstName: inputState.fName,
        lastName: inputState.lName,
        email: inputState.email,
        password: inputState.password,
      });
      if (response.status === 200) {
        dispatch(userDataActions.setUserData(response.data.user));
        dispatch(
          habitActions.setHabitData({
            habits: response.data.user.habits,
            labels: response.data.user.labels,
            deleted: response.data.user.deleted,
          })
        );
        return response.data;
      }
    } catch (err: any) {
      if (err.response.data.error) {
        return rejectWithValue(err.response.data.error);
      }
      return rejectWithValue("Something went wrong");
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  "/login",
  async (inputState: IsignInState, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post("/api/login", {
        email: inputState.email,
        password: inputState.password,
      });
      if (response.status === 200) {
        dispatch(userDataActions.setUserData(response.data.user));
        dispatch(
          habitActions.setHabitData({
            habits: response.data.user.habits,
            labels: response.data.user.labels,
            deleted: response.data.user.deleted,
          })
        );
        return response.data;
      }
    } catch (err: any) {
      if (err.response.data.error) {
        return rejectWithValue(err.response.data.error);
      }
      return rejectWithValue("Something went wrong");
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetStatus: (state: IauthState) => {
      state.status = "idle";
    },
    logout: (state: IauthState) => {
      state.isLoggedIn = false;
      state.status = "idle";
      state.token = "";
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
    });
    builder.addCase(loginUserThunk.rejected, (state, action: any) => {
      state.status = "failed";
      toast.error(action.payload);
    });
  },
});

export const authActions = authSlice.actions;
