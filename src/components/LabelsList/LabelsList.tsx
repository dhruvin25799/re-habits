import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { addLabelThunk, deleteLabelThunk } from "../../store/habit-slice";
import { Button, LabelBox } from "../index";
import styles from "./LabelsList.module.css";

export const LabelsList = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [label, setLabel] = useState("");
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);
  const labels = useAppSelector((state) => state.habits.labels);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (labels.find((item) => item === label)) {
    } else {
      dispatch(addLabelThunk({ label, token }));
    }
    setLabel("");
  };
  return (
    <>
      <section className={styles["labels-main"]}>
        <div className={styles["labels-header"]}>
          <h2>Labels 🏷️</h2>
          <Button
            type="secondary"
            onClick={() => setIsFormOpen((prev) => !prev)}
          >
            {isFormOpen ? "Close" : "Add Label"}
          </Button>
        </div>
        {isFormOpen && (
          <form className={styles["label-form"]} onSubmit={submitHandler}>
            <input
              type="text"
              required
              placeholder="Enter label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
            <Button>Add Label</Button>
          </form>
        )}
        <div className={styles["labels-list"]}>
          {labels.map((label) => (
            <LabelBox
              key={label}
              onClick={() => dispatch(deleteLabelThunk({ label, token }))}
            >
              {label}
            </LabelBox>
          ))}
        </div>
      </section>
    </>
  );
};
