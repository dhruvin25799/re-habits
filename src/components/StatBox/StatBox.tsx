import styles from "./StatBox.module.css";

type Props = {
  heading: string,
  value: number,
}

export const StatBox = ({heading, value}: Props) => {
    return (
      <div className={styles["stat-box"]}>
        <h3>{heading}</h3>
        <h1>{value}</h1>
      </div>
    );
}