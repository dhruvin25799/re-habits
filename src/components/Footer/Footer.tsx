import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-brand"]}>
        <h3>Re-Habits</h3>
        <p>
          Re-Habits is a Habit Tracker app developed to help you track your
          habits in an easy and efficient manner.
        </p>
      </div>
      <div className={styles["footer-socials"]}>
        <h3>Social Media</h3>
        <ul>
          <li>
            <a href="https://github.com/dhruvin25799/re-habits">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/dhruvin-mehta-21a8a7190/">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles["footer-team"]}>
        <h3>Our Team</h3>
        <p>Made with ❤️ by Dhruvin Mehta.</p>
      </div>
    </footer>
  );
};
