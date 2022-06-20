import styles from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faRecycle,
  faPowerOff,
  faTags,
  faCalendarPlus,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { logout } from "../../helpers/logout";

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { firstName, lastName } = useAppSelector((state) => state.userData);
  return (
    <aside className={styles["sidebar"]}>
      <menu className={styles["sidebar-links"]}>
        <li>
          <NavLink to="/home/">
            <FontAwesomeIcon icon={faHouseUser} size="lg" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/home/habits">
            <FontAwesomeIcon icon={faCalendarCheck} size="lg" />
            Habits
          </NavLink>
        </li>
        <li>
          <NavLink to="/home/add">
            <FontAwesomeIcon icon={faCalendarPlus} size="lg" />
            Add Habit
          </NavLink>
        </li>
        <li>
          <NavLink to="/home/labels">
            <FontAwesomeIcon icon={faTags} size="lg" />
            Labels
          </NavLink>
        </li>
        <li>
          <NavLink to="/home/trash">
            <FontAwesomeIcon icon={faRecycle} size="lg" />
            Trash
          </NavLink>
        </li>
      </menu>
      <div className={styles["sidebar-profile"]}>
        <div>
          {firstName} {lastName}
        </div>
        <FontAwesomeIcon icon={faPowerOff} onClick={() => logout(dispatch)} />
      </div>
    </aside>
  );
};
