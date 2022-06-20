import styles from "./SignUp.module.css";
import { Button, LoadingSpinner } from "../index";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import React, { useEffect, useReducer } from "react";
import { authActions, registerUserThunk } from "../../store/auth-slice";
import {
  signUpReducer,
  signUpInitialState,
} from "../../reducers/inputReducers";
import { useNavigate } from "react-router-dom";

type Props = {
  toggle: () => void;
};

export const SignUp = ({ toggle }: Props) => {
  const [signUpInputState, signUpInputDispatch] = useReducer(
    signUpReducer,
    signUpInitialState
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const registerStatus = useAppSelector((state) => state.auth.status);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerUserThunk(signUpInputState));
  };
  useEffect(() => {
    if (registerStatus === "success") {
      dispatch(authActions.resetStatus);
      navigate("/home/", { replace: true });
    }
  }, [registerStatus, dispatch, navigate]);

  return (
    <>
      {registerStatus === "pending" && <LoadingSpinner />}
      {registerStatus !== "pending" && (
        <div className={styles["sign-in"]}>
          <h3>Sign Up</h3>
          <form className={styles["input-form"]} onSubmit={submitHandler}>
            <div className={styles["input-control"]}>
              <input
                type="text"
                placeholder="First Name"
                required
                value={signUpInputState.fName}
                onChange={(e) =>
                  signUpInputDispatch({
                    type: "FNAME",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles["input-control"]}>
              <input
                type="text"
                placeholder="Last Name"
                required
                value={signUpInputState.lName}
                onChange={(e) =>
                  signUpInputDispatch({
                    type: "LNAME",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles["input-control"]}>
              <input
                type="email"
                placeholder="Email"
                required
                value={signUpInputState.email}
                onChange={(e) =>
                  signUpInputDispatch({
                    type: "EMAIL",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles["input-control"]}>
              <input
                type="password"
                placeholder="Password"
                required
                value={signUpInputState.password}
                onChange={(e) =>
                  signUpInputDispatch({
                    type: "PASSWORD",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <Button>Sign Up</Button>
          </form>
          <div>
            <Button type="link" onClick={toggle}>
              Already have an account?
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
