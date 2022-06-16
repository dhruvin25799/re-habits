import { IsingleHabit } from "../../global/types";
import styles from "./HabitBox.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

type Props = {
  habit: IsingleHabit;
};

export const HabitBox = ({ habit }: Props) => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  const isCompletedForToday = habit.markedAsDone.includes(date.toISOString());
  return (
    <div className={styles["habit-box"]}>
      <h3>{habit.name}</h3>
      <div className={styles["habit-labels"]}>
        {habit.labels.map((label) => (
          <p key={label}>{label}</p>
        ))}
      </div>
      {isCompletedForToday ? (
        <p className={styles["completed"]}>Completed for Today</p>
      ) : (
        <p className={styles["pending"]}>Pending</p>
      )}
      <Link to={"/home/habit/" + habit._id}>
        <FontAwesomeIcon icon={faEnvelopeOpen} size="lg" />
      </Link>
    </div>
  );
};
