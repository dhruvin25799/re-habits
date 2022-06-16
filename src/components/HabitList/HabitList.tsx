import { useAppSelector } from "../../hooks/redux-hooks";
import { HabitBox } from "../index";
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
