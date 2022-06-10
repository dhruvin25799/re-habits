import styles from "../SignUp/SignUp.module.css";
import { Button } from "../Button/Button";
import React, { useReducer } from "react";
import {
  signInReducer,
  signInInitialState,
} from "../../reducers/inputReducers";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { authActions, loginUserThunk } from "../../store/auth-slice";
import { useNavigate } from "react-router-dom";

type Props = {
  toggle: () => void;
};

export const SignIn = ({ toggle }: Props) => {
  const [signInInputState, signInInputDispatch] = useReducer(
    signInReducer,
    signInInitialState
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loginStatus = useAppSelector((state) => state.auth.status);
  if (loginStatus === "success") {
    dispatch(authActions.resetStatus());
    navigate("/home/", { replace: true });
  }
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUserThunk(signInInputState));
  };
  return (
    <>
      <div className={styles["sign-in"]}>
        <h3>Sign In</h3>
        <form className={styles["input-form"]} onSubmit={submitHandler}>
          <div className={styles["input-control"]}>
            <input
              type="email"
              placeholder="Email"
              required
              value={signInInputState.email}
              onChange={(e) =>
                signInInputDispatch({ type: "EMAIL", payload: e.target.value })
              }
            />
          </div>
          <div className={styles["input-control"]}>
            <input
              type="password"
              placeholder="Password"
              required
              value={signInInputState.password}
              onChange={(e) =>
                signInInputDispatch({
                  type: "PASSWORD",
                  payload: e.target.value,
                })
              }
            />
          </div>
          <Button>Submit</Button>
        </form>
        <div>
          <Button type="link" onClick={toggle}>
            Don't have an account?
          </Button>
        </div>
      </div>
    </>
  );
};
