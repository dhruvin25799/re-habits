import styles from "./SingleHabit.module.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faTrashCan,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../index";
import { deleteHabitThunk, markedAsDoneThunk } from "../../store/habit-slice";
import { toast } from "react-toastify";

export const SingleHabit = () => {
  const { habitId } = useParams();
  const navigate = useNavigate();
  const habits = useAppSelector((state) => state.habits.habits);
  const selectedHabit = habits.find((habit) => habit._id === habitId)!;
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);
  const startDate = new Date(selectedHabit.startDate);
  const endDate = new Date(selectedHabit.endDate);
  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(0, 0, 0, 0);
  const markedAsDoneHandler = () => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    if (selectedHabit.markedAsDone.includes(date.toISOString())) {
      toast.error("Already marked as done for today!");
    } else {
      dispatch(markedAsDoneThunk({ habit: selectedHabit, token }));
    }
  };
  const deleteHabitHandler = () => {
    dispatch(deleteHabitThunk({ habitId: selectedHabit._id, token }));
    navigate("/home/", { replace: true });
  };
  return (
    <>
      <section className={styles["habit-main"]}>
        <div className={styles["habit-header"]}>
          <div className={styles["habit-labels"]}>
            {selectedHabit.labels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>
          <h2>{selectedHabit?.name}</h2>

          <div className={styles["habit-cta"]}>
            <Link to={"/home/habit/edit/" + selectedHabit._id}>
              <FontAwesomeIcon icon={faPen} size="lg" />
            </Link>
            <FontAwesomeIcon
              icon={faTrashCan}
              size="lg"
              onClick={deleteHabitHandler}
            />
          </div>
        </div>
        <Calendar
          className={styles["habit-calendar"]}
          defaultActiveStartDate={startDate}
          minDate={startDate}
          maxDate={endDate}
          tileClassName={styles["calendar-tile"]}
          tileContent={({ activeStartDate, date, view }) => {
            if (selectedHabit.markedAsDone.includes(date.toISOString())) {
              return (
                <>
                  <FontAwesomeIcon icon={faCalendarCheck} />
                </>
              );
            } else return null;
          }}
        />
        {!(new Date() < startDate || new Date() > endDate) ? (
          <Button onClick={markedAsDoneHandler}>Mark as done for today</Button>
        ) : (
          <>
            {new Date() < startDate ? (
              <>
                <Button disabled={true}>Goal has not yet started</Button>
              </>
            ) : (
              new Date() > startDate && (
                <>
                  <Button disabled={true}>Goal has ended</Button>
                </>
              )
            )}
          </>
        )}
      </section>
    </>
  );
};
