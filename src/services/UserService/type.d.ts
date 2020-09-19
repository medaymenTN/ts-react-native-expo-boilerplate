import { User } from "../../store/UserStore/types";

type LoginResponse = {
  status: number;
  user: User;
};

type registerResponse = {
  status: number;
  user: User;
};

export { LoginResponse, registerResponse };
