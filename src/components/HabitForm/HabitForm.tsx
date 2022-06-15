import React, { useEffect, useReducer, useState } from "react";
import { Button } from "../Button/Button";
import styles from "./HabitForm.module.css";
import {
  habitInputReducer,
  habitInputInitialState,
} from "../../reducers/inputReducers";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { addHabitThunk } from "../../store/habit-slice";
import { LoadingSpinner } from "../LoadingSpinner/LoadinSpinner";

export const HabitForm = () => {
  const [formError, setFormError] = useState(false);
  const labels = useAppSelector((state) => state.habits.labels);
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);
  const submitHanlder = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      new Date(habitInputState.startDate) >= new Date(habitInputState.endDate)
    ) {
      setFormError(true);
    } else {
      dispatch(addHabitThunk({ habitInput: habitInputState, token }));
    }
  };
  const [habitInputState, habitInputDispatch] = useReducer(
    habitInputReducer,
    habitInputInitialState
  );
  const labelChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      habitInputDispatch({ type: "LABEL_ADD", payload: e.target.value });
    } else {
      habitInputDispatch({ type: "LABEL_REMOVE", payload: e.target.value });
    }
  };
  const status = useAppSelector((state) => state.habits.status);
  useEffect(() => {
    if (status === "success") {
      habitInputDispatch({ type: "RESET", payload: "" });
    }
  }, [status]);
  return (
    <>
      <section className={styles["habit-form-main"]}>
        <div className={styles["habit-form-heading"]}>
          <h2>Add Habit🥅</h2>
        </div>
        {status === "pending" && <LoadingSpinner />}
        {status !== "pending" && (
          <form className={styles["habit-form-form"]} onSubmit={submitHanlder}>
            <div className={styles["input-control"]}>
              <label>Name</label>
              <input
                type="text"
                value={habitInputState.name}
                onChange={(e) =>
                  habitInputDispatch({ type: "NAME", payload: e.target.value })
                }
                required
              />
            </div>
            <div className={styles["input-control"]}>
              <label>Start Date</label>
              <input
                type="date"
                value={habitInputState.startDate}
                onChange={(e) =>
                  habitInputDispatch({
                    type: "START_DATE",
                    payload: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className={styles["input-control"]}>
              <label>End Date</label>
              <input
                type="date"
                value={habitInputState.endDate}
                onChange={(e) =>
                  habitInputDispatch({
                    type: "END_DATE",
                    payload: e.target.value,
                  })
                }
                required
              />
              {formError && (
                <p className={styles["error-text"]}>
                  End Date cannot be earlier or equal to Start Date.
                </p>
              )}
            </div>
            <div className={styles["input-control"]}>
              <label>Labels</label>
              <ul className={styles["label-checkbox-control"]}>
                {labels.map((label) => (
                  <li key={label}>
                    <input
                      type="checkbox"
                      value={label}
                      name="labels"
                      onChange={(e) => labelChangeHandler(e)}
                    />
                    <label>{label}</label>
                  </li>
                ))}
              </ul>
            </div>
            <Button>Add Habit</Button>
          </form>
        )}
      </section>
    </>
  );
};
