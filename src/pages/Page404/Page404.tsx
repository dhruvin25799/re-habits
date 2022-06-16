import styles from "./Page404.module.css";
import { Button } from "../../components/Button/Button";
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";

export const Page404 = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className={styles["main-404"]}>
        <div>
          <Player
            autoplay
            loop
            src="https://assets2.lottiefiles.com/packages/lf20_GIyuXJ.json"
            style={{ height: "300px", width: "300px" }}
          ></Player>
          <h1>404 Page Not Found</h1>
          <p>The page you're looking for does not exist</p>
          <Button onClick={() => navigate("/home", { replace: true })}>
            Home
          </Button>
        </div>
      </main>
    </>
  );
};
