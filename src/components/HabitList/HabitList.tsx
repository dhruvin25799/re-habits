import { useAppSelector } from "../../hooks/redux-hooks";
import { HabitBox } from "../HabitBox/HabitBox";
export const HabitList = () => {
  const habits = useAppSelector((state) => state.habits.habits);
  return (
    <>
      {habits.map((habit) => (
        <HabitBox key={habit._id} habit={habit} />
      ))}
    </>
  );
};
