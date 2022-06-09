import React from "react";
import styles from "./Navbar.module.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { useTheme } from "../../context/theme-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
export const Navbar = () => {
  const { isDark, toggle } = useTheme();
  return (
    <>
      <nav className={styles["nav"]}>
        <div className={styles["nav-brand"]}>
          <Player
            autoplay
            loop
            src={
              isDark
                ? "https://assets6.lottiefiles.com/packages/lf20_b6sehsbb.json"
                : "https://assets9.lottiefiles.com/packages/lf20_mcv2bcax.json"
            }
            style={{ height: "50px", width: "50px" }}
          ></Player>
          <h1>Re-Habits</h1>
        </div>
        <div>Nav_Search</div>
        <menu className={styles["nav-cta"]}>
          <li>Home</li>
          <li>Contact Us</li>
          <li onClick={toggle}>
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} size="lg" />
          </li>
        </menu>
      </nav>
    </>
  );
};
