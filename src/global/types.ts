export type IuserData = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type IhabitData = {
  habits: IsingleHabit[];
  labels: string[];
  deleted: IsingleHabit[];
  status?: string;
};

export type IsingleHabit = {
  _id: string;
  name: string;
  startDate: string;
  endDate: string;
  labels: string[];
  markedAsDone: string[];
};

export type IauthState = {
  isLoggedIn: boolean;
  token: string;
  status: string;
};

export type IsignUpState = {
  fName: string;
  lName: string;
  email: string;
  password: string;
};

export type IsignUpReducerAction = {
  type: string;
  payload: string;
};

export type IhabitFormReducerAction = {
  type: string;
  payload: string;
};

export type IsignInState = {
  email: string;
  password: string;
};

export type IsignInReducerAction = {
  type: string;
  payload: string;
};

export type IhabitInput = {
  name: string;
  startDate: string;
  endDate: string;
  labels: string[];
};

export type IhabitEditFormAction = {
  type: "NAME" | "START_DATE" | "END_DATE" | "LABEL_ADD" | "LABEL_REMOVE";
  payload: string;
};

export type IfilterState = {
  sort: string;
  filter: string;
};

export type IfilterAction = {
  type: "SORT" | "FILTER";
  payload: string;
};
