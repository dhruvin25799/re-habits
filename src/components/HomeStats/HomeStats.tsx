import { Button } from "../Button/Button";
import { HabitBox } from "../HabitBox/HabitBox";
import { StatBox } from "../StatBox/StatBox";
import styles from "./HomeStats.module.css";

export const HomeStats = () => {
  return (
    <section className={styles["stats-main"]}>
      <div className={styles["stats-greeting"]}>
        <h2>Hello, Dhruvin Mehta👋</h2>
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
          <Button type="link">Add Habit</Button>
        </div>
        <div className={styles["habits-list"]}>
          <HabitBox />
          <HabitBox />
          <HabitBox />
        </div>
      </div>
    </section>
  );
};
