import ACTION_TYPES from "./action.enum";

export type User = {
  userName: string;
  email: string;
  jwt: string;
};
type UserStoreState = {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
};

export { UserStoreState, User };
