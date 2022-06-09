import styles from "./HabitBox.module.css";

export const HabitBox = () => {
  return (
    <div className={styles["habit-box"]}>
      <h3>Task #1</h3>
      <div className={styles["habit-labels"]}>
        <p>Label1</p>
        <p>Label2</p>
      </div>
      <p>Completed for today</p>
    </div>
  );
};
