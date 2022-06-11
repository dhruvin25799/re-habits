import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth-slice";
import { userDataSlice } from "./userData-slice";

export const store = configureStore({
  reducer: {
      auth: authSlice.reducer,
      userData: userDataSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
