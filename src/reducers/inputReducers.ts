import {
  IsignUpState,
  IsignUpReducerAction,
  IsignInState,
  IsignInReducerAction,
} from "../global/types";

export const signUpReducer = (
  state: IsignUpState,
  action: IsignUpReducerAction
) => {
  switch (action.type) {
    case "FNAME":
      return { ...state, fName: action.payload };
    case "LNAME":
      return { ...state, lName: action.payload };
    case "EMAIL":
      return { ...state, email: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export const signUpInitialState = {
  fName: "",
  lName: "",
  email: "",
  password: "",
};

export const signInReducer = (
  state: IsignInState,
  action: IsignInReducerAction
) => {
  switch (action.type) {
    case "EMAIL":
      return { ...state, email: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export const signInInitialState = {
  email: "",
  password: "",
};
