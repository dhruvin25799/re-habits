import { AppDispatch } from "../store";
import { authActions } from "../store/auth-slice";
import { habitActions } from "../store/habit-slice";
import { userDataActions } from "../store/userData-slice";

export const logout = (dispatch: AppDispatch) => {
    dispatch(authActions.logout())
    dispatch(userDataActions.logout())
    dispatch(habitActions.logout());
}