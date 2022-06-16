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
    return [...habits].sort((a, b) => a.name.localeCompare(b.name));
  } else {
    return [...habits].sort((a, b) => b.name.localeCompare(a.name));
  }
};
