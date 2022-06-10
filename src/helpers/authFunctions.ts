import axios from "axios";
import { IsignUpState, IsignInState } from "../global/types";

export const registerUser = async (inputState: IsignUpState, thunkAPI: any) => {
  try {
    const response = await axios.post("/api/register", {
      firstName: inputState.fName,
      lastName: inputState.lName,
      email: inputState.email,
      password: inputState.password,
    });
    return response.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data.error);
  }
};

export const loginUser = async (inputState: IsignInState, thunkAPI: any) => {
  try {
    const response = await axios.post("/api/login", {
      email: inputState.email,
      password: inputState.password,
    });
    return response.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data.error);
  }
};
