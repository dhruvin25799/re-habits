import styles from "./HabitEditForm.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../index";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import React, { useReducer, useState } from "react";
import { IhabitInput, IsingleHabit } from "../../global/types";
import { habitEditFormReducer } from "../../reducers/inputReducers";
import { editHabitThunk } from "../../store/habit-slice";

export const HabitEditForm = () => {
  const [formError, setFormError] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.auth.token);
  const { habitId } = useParams();
  const habits = useAppSelector((state) => state.habits.habits);
  const selectedHabit = habits.find((habit) => habit._id === habitId)!;
  const labels = useAppSelector((state) => state.habits.labels);
  const initialHabitEditForm: IhabitInput = {
    name: selectedHabit.name,
    startDate: selectedHabit.startDate,
    endDate: selectedHabit.endDate,
    labels: selectedHabit.labels,
  };
  const [habitEditFormState, habitEditFormDispatch] = useReducer(
    habitEditFormReducer,
    initialHabitEditForm
  );
  const labelChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      habitEditFormDispatch({ type: "LABEL_ADD", payload: e.target.value });
    } else {
      habitEditFormDispatch({ type: "LABEL_REMOVE", payload: e.target.value });
    }
  };
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (habitEditFormState.endDate <= habitEditFormState.startDate) {
      setFormError(true);
    } else {
      const editedHabit: IsingleHabit = {
        ...selectedHabit,
        ...habitEditFormState,
      };
      dispatch(editHabitThunk({ habit: editedHabit, token }));
      navigate("/home", { replace: true });
    }
  };
  return (
    <>
      <section className={styles["edit-main"]}>
        <div className={styles["edit-header"]}>
          <h2>Edit Form</h2>
          <Button onClick={() => navigate(-1)}>Cancel</Button>
        </div>
        <form className={styles["habit-form-form"]} onSubmit={submitHandler}>
          <div className={styles["input-control"]}>
            <label>Name</label>
            <input
              type="text"
              value={habitEditFormState.name}
              onChange={(e) =>
                habitEditFormDispatch({ type: "NAME", payload: e.target.value })
              }
              required
            />
          </div>
          <div className={styles["input-control"]}>
            <label>Start Date</label>
            <input
              type="date"
              value={habitEditFormState.startDate}
              onChange={(e) =>
                habitEditFormDispatch({
                  type: "START_DATE",
                  payload: e.target.value,
                })
              }
              disabled={true}
              required
            />
          </div>
          <div className={styles["input-control"]}>
            <label>End Date</label>
            <input
              type="date"
              value={habitEditFormState.endDate}
              onChange={(e) =>
                habitEditFormDispatch({
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
                    checked={habitEditFormState.labels.includes(label)}
                    value={label}
                    name="labels"
                    onChange={(e) => labelChangeHandler(e)}
                  />
                  <label>{label}</label>
                </li>
              ))}
            </ul>
          </div>
          <Button>Edit Habit</Button>
        </form>
      </section>
    </>
  );
};
