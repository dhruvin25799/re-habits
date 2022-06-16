import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { restoreHabitThunk } from "../../store/habit-slice";
import { Button } from "../index";
import styles from "./DeletedHabits.module.css";

export const DeletedHabits = () => {
  const deleted = useAppSelector((state) => state.habits.deleted);
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);
  const habitRestoreHandler = (habitId: string) => {
    dispatch(restoreHabitThunk({ habitId, token }));
  };
  return (
    <>
      <section className={styles["deleted-main"]}>
        <div className={styles["deleted-header"]}>
          <h2>Deleted🗑️</h2>
        </div>
        <div className={styles["deleted-list"]}>
          {deleted.map((habit) => (
            <div className={styles["deleted-habit"]} key={habit._id}>
              <h3>{habit.name}</h3>
              <Button onClick={() => habitRestoreHandler(habit._id)}>
                Restore?
              </Button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
