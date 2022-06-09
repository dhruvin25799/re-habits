import styles from "./SignUp.module.css";
import { Button } from "../Button/Button";

type Props = {
  toggle: () => void;
};

export const SignUp = ({toggle} : Props) => {
  return (
    <>
      <div className={styles["sign-in"]}>
        <h3>Sign Up</h3>
        <form className={styles["input-form"]}>
          <div className={styles["input-control"]}>
            <input type="text" placeholder="First Name" required />
          </div>
          <div className={styles["input-control"]}>
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className={styles["input-control"]}>
            <input type="email" placeholder="Email" required />
          </div>
          <div className={styles["input-control"]}>
            <input type="password" placeholder="Password" required />
          </div>
          <Button>Submit</Button>
        </form>
        <div>
          <Button type="link" onClick={toggle}>Already have an account?</Button>
        </div>
      </div>
    </>
  );
};
