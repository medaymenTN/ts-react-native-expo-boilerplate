import { combineReducers } from "redux";
import RootState from "./types";
import userReducer from "./UserStore/user.reducer";

const rootReducer = combineReducers<RootState>({
  User: userReducer,
});

export default rootReducer;
