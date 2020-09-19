import { UserStoreState } from "./types";
import * as Actions from "./user.actions";
import { action, ActionType, getType } from "typesafe-actions";
import ACTION_TYPES from "./action.enum";

type UserActionType = ActionType<typeof Actions>;

const INITIAL_STATE: UserStoreState = {
  isAuthenticated: false,
  loading: false,
  user: null,
};

const userReducer = (
  state: UserStoreState = INITIAL_STATE,
  action: UserActionType
): UserStoreState => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_PENDING:
      return { ...state, loading: true };
    case ACTION_TYPES.LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case ACTION_TYPES.LOGIN_PENDING:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default userReducer;
