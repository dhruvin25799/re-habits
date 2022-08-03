import styles from "./LandingPage.module.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { SignUp } from "../../components/SignUp/SignUp";
import { useState } from "react";
import { SignIn } from "../../components/SignIn/SignIn";

export const LandingPage = () => {
  const [onSignUp, setOnSignUp] = useState(true);
  const toggleSignIn = () => {
    setOnSignUp(!onSignUp);
  };
  return (
    <>
      <main className={styles["landing-main"]}>
        <section className={styles["landing-intro"]}>
          <div>
            <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_ilp95ggh.json"
              style={{ height: "200px", width: "200px" }}
            ></Player>
          </div>
          <div className={styles["intro-text"]}>
            <h1>Re-Habits</h1>
            <p>
              A Habit tracker app that allows you to set and track status of
              your habits.
            </p>
            <p>Manage your tasks and boost your efficiency with this app.</p>
          </div>
        </section>
        <section>
          {!onSignUp ? (
            <SignUp toggle={toggleSignIn} />
          ) : (
            <SignIn toggle={toggleSignIn} />
          )}
        </section>
      </main>
    </>
  );
};
