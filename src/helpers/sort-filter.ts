import { IfilterState, IsingleHabit } from "../global/types";

export const filterHabits = (
  habits: IsingleHabit[],
  filterState: IfilterState
) => {
  if (filterState.filter === "all") return habits;
  else {
    return habits.filter((habit) => habit.labels.includes(filterState.filter));
  }
};

export const sortHabits = (
  habits: IsingleHabit[],
  filterState: IfilterState
) => {
  if (filterState.sort === "asc") {
    return [...habits].sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  } else {
    return [...habits].sort((a, b) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
  }
};
