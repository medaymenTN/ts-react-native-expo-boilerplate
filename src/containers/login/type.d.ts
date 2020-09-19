import { StackScreenProps } from "@react-navigation/stack";

type LoginStateProps = {
  loading: boolean;
};

type LoginDispatchProps = {
  dispatchLogin: (username: string, password: string) => void;
};

type LoginScreenProps = StackScreenProps<any> &
  LoginDispatchProps &
  LoginStateProps;

export { LoginScreenProps, LoginStateProps, LoginDispatchProps };
