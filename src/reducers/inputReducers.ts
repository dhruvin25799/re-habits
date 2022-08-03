import {
  IsignUpState,
  IsignUpReducerAction,
  IsignInState,
  IsignInReducerAction,
  IhabitInput,
  IhabitFormReducerAction,
  IhabitEditFormAction,
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
    case "DUMMY": {
      return { ...state, email: "test.user@gmail.com", password: "1234567890" };
    }
    default:
      return state;
  }
};

export const signInInitialState = {
  email: "",
  password: "",
};

export const habitInputReducer = (
  state: IhabitInput,
  action: IhabitFormReducerAction
) => {
  switch (action.type) {
    case "NAME": {
      return { ...state, name: action.payload };
    }
    case "START_DATE": {
      return { ...state, startDate: action.payload };
    }
    case "END_DATE": {
      return { ...state, endDate: action.payload };
    }
    case "LABEL_ADD": {
      return { ...state, labels: [...state.labels, action.payload] };
    }
    case "LABEL_REMOVE": {
      return {
        ...state,
        labels: state.labels.filter((label) => label !== action.payload),
      };
    }
    case "RESET": {
      return habitInputInitialState;
    }
    default:
      return state;
  }
};

export const habitInputInitialState: IhabitInput = {
  name: "",
  startDate: "",
  endDate: "",
  labels: [],
};

export const habitEditFormReducer = (
  state: IhabitInput,
  action: IhabitEditFormAction
) => {
  switch (action.type) {
    case "NAME": {
      return { ...state, name: action.payload };
    }
    case "START_DATE": {
      return { ...state, startDate: action.payload };
    }
    case "END_DATE": {
      return { ...state, endDate: action.payload };
    }
    case "LABEL_ADD": {
      return { ...state, labels: [...state.labels, action.payload] };
    }
    case "LABEL_REMOVE": {
      return {
        ...state,
        labels: state.labels.filter((label) => label !== action.payload),
      };
    }
  }
};
