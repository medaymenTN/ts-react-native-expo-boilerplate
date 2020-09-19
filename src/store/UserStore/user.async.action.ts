import { AxiosError } from "axios";
import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { loginService } from "../../services/UserService/user.serv";
import RootState from "../types";
import { loginFailed, loginIsPending, loginSuccess } from "./user.actions";

/**
 *
 * @param username
 * @param password
 */
export const LoginAction = (
  username: string,
  password: string
): ThunkAction<Promise<void>, RootState, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(loginIsPending());

    try {
      const response = await loginService(username, password);
    } catch (error) {
      /**
       * some error
       */
    }
  };
};
