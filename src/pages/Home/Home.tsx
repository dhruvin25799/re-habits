import styles from "./Home.module.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import {Outlet} from "react-router-dom";

export const Home = () => {
  return (
    <>
      <main className={styles["home-main"]}>
        <Sidebar />
        <Outlet/>
      </main>
    </>
  );
};
