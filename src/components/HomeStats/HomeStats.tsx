import { useAppSelector } from "../../hooks/redux-hooks";
import { Button } from "../Button/Button";
import { HabitBox } from "../HabitBox/HabitBox";
import { StatBox } from "../StatBox/StatBox";
import { Link } from "react-router-dom";
import styles from "./HomeStats.module.css";

export const HomeStats = () => {
  const { firstName, lastName } = useAppSelector((state) => state.userData);
  const habits = useAppSelector(state => state.habits.habits);
  return (
    <section className={styles["stats-main"]}>
      <div className={styles["stats-greeting"]}>
        <h2>
          Hello, {firstName} {lastName}👋
        </h2>
      </div>
      <div className={styles["stats-overview"]}>
        <StatBox />
        <StatBox />
        <StatBox />
        <StatBox />
      </div>
      <div className={styles["habits"]}>
        <div className={styles["habits-header"]}>
          <h2>My Habits🥅</h2>
          <Button type="link">
            <Link to="add">Add Habit</Link>
          </Button>
        </div>
        <div className={styles["habits-list"]}>
          {habits.map(habit => <HabitBox key={habit._id} habit={habit}/>)}
        </div>
      </div>
    </section>
  );
};
