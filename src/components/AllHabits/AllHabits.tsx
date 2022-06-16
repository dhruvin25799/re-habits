import { useReducer } from "react";
import { useAppSelector } from "../../hooks/redux-hooks";
import { HabitBox } from "../HabitBox/HabitBox";
import styles from "./AllHabits.module.css";
import {
  filterReducer,
  initialFilterState,
} from "../../reducers/filterReducers";
import { IfilterState, IsingleHabit } from "../../global/types";

const filterHabits = (habits: IsingleHabit[], filterState: IfilterState) => {
  if (filterState.filter === "all") return habits;
  else {
    return habits.filter((habit) => habit.labels.includes(filterState.filter));
  }
};

const sortHabits = (habits: IsingleHabit[], filterState: IfilterState) => {
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

export const AllHabits = () => {
  const habits = useAppSelector((state) => state.habits.habits);
  const labels = useAppSelector((state) => state.habits.labels);
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilterState
  );
  const sortedHabits = sortHabits(habits, filterState);
  const filteredHabits = filterHabits(sortedHabits, filterState);
  return (
    <>
      <section className={styles["habits-main"]}>
        <div className={styles["habits-header"]}>
          <h2>All Habits</h2>
        </div>
        <div className={styles["habits-filters"]}>
          <div>
            Sort
            <select
              value={filterState.sort}
              onChange={(e) =>
                filterDispatch({ type: "SORT", payload: e.target.value })
              }
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <div>
            Filter
            <select
              value={filterState.filter}
              onChange={(e) =>
                filterDispatch({ type: "FILTER", payload: e.target.value })
              }
            >
              <option value="all">All</option>
              {labels.map((label) => (
                <option key={label} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles["habits-list"]}>
          {filteredHabits.map((habit) => (
            <HabitBox habit={habit} key={habit._id} />
          ))}
        </div>
      </section>
    </>
  );
};
