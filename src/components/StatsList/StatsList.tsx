import { useAppSelector } from "../../hooks/redux-hooks";
import { StatBox } from "../index";
export const StatsList = () => {
  const habits = useAppSelector((state) => state.habits.habits);
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  const completedForToday = habits.reduce((initial: number, curr) => {
    if (curr.markedAsDone.includes(date.toISOString())) return initial + 1;
    return initial;
  }, 0);
  const pendingForToday = habits.length - completedForToday;
  return (
    <>
      <StatBox heading="Completed" value={completedForToday} />
      <StatBox heading="Pending" value={pendingForToday} />
    </>
  );
};
