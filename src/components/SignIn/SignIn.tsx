import styles from "../SignUp/SignUp.module.css";
import { Button } from "../Button/Button";

type Props = {
  toggle: () => void
}

export const SignIn = ({ toggle }: Props) => {
  return (
    <>
      <div className={styles["sign-in"]}>
        <h3>Sign In</h3>
        <form className={styles["input-form"]}>
          <div className={styles["input-control"]}>
            <input type="email" placeholder="Email" required />
          </div>
          <div className={styles["input-control"]}>
            <input type="password" placeholder="Password" required />
          </div>
          <Button>Submit</Button>
        </form>
        <div>
          <Button type="link" onClick={toggle}>Don't have an account?</Button>
        </div>
      </div>
    </>
  );
};
