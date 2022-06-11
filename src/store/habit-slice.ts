import { createSlice } from "@reduxjs/toolkit";
import { IhabitData } from "../global/types";

const initialState: IhabitData = {
  habits: {},
  labels: [],
};

export const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
      logout: (state: IhabitData) => {
          return initialState
      }
  },
  extraReducers: {},
});

export const habitActions = habitSlice.actions;