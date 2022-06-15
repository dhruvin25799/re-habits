import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth-slice";
import { habitSlice } from "./habit-slice";
import { userDataSlice } from "./userData-slice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    userData: userDataSlice.reducer,
    habits: habitSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
