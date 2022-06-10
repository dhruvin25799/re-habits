import { useAppSelector } from "../../hooks/redux-hooks";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export const RequiresAuth = ({ children }: Props) => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  return isLoggedIn ? <>{children}</> : <Navigate to="/" replace />;
};
