export interface IauthState {
  isLoggedIn: boolean;
  token: string;
  status: string;
  userData: {};
}

export interface IsignUpState {
  fName: string;
  lName: string;
  email: string;
  password: string;
}

export interface IsignUpReducerAction {
  type: string;
  payload: string;
}

export interface IsignInState {
  email: string;
  password: string;
}

export interface IsignInReducerAction {
  type: string;
  payload: string;
}
