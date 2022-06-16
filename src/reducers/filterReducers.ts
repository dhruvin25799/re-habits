import { IfilterAction, IfilterState } from "../global/types";

export const initialFilterState: IfilterState = {
  sort: "asc",
  filter: "all",
};

export const filterReducer = (state: IfilterState, action: IfilterAction) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sort: action.payload };
    case "FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
