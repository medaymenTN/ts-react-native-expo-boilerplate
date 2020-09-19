import { action } from "typesafe-actions";
import ACTION_TYPES from "./action.enum";
import { User } from "./types";

const loginIsPending = () => action(ACTION_TYPES.LOGIN_PENDING);
const loginSuccess = (userParams: User) =>
  action(ACTION_TYPES.LOGIN_SUCCESS, userParams);
const loginFailed = () => action(ACTION_TYPES.LOGIN_FAILED);

export { loginSuccess, loginIsPending, loginFailed };
