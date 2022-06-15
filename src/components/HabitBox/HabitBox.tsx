import { IsingleHabit } from "../../global/types";
import styles from "./HabitBox.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

type Props = {
  habit: IsingleHabit;
};

export const HabitBox = ({ habit }: Props) => {
  return (
    <div className={styles["habit-box"]}>
      <h3>{habit.name}</h3>
      <div className={styles["habit-labels"]}>
        {habit.labels.map((label) => (
          <p key={label}>{label}</p>
        ))}
      </div>
      <p>Completed for today</p>
      <Link to={"habit/"+habit._id}>
        <FontAwesomeIcon icon={faEnvelopeOpen} size="lg" />
      </Link>
    </div>
  );
};
