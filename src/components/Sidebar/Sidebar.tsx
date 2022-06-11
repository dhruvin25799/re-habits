import styles from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faBoxArchive,
  faRecycle,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { authActions } from "../../store/auth-slice";
import { logout } from "../../helpers/logout";

export const Sidebar = () => {
  const dispatch = useAppDispatch();
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
          <NavLink to="/home/archive">
            <FontAwesomeIcon icon={faBoxArchive} size="lg" />
            Archive
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
        <div>Dhruvin Mehta</div>
        <FontAwesomeIcon icon={faPowerOff} onClick={() => logout(dispatch)} />
      </div>
    </aside>
  );
};
