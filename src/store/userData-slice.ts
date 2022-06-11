import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IuserData } from "../global/types";

const initialState: IuserData = {
  _id: "",
  email: "",
  firstName: "",
  lastName: "",
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData: (state: IuserData, action: PayloadAction<IuserData>) => {
      const { firstName, lastName, _id, email } = action.payload;
      state._id = _id;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
    },
    logout: (state: IuserData) => {
      return initialState;
    }
  },
  extraReducers: {},
});

export const userDataActions = userDataSlice.actions;
