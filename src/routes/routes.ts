import { StackNavigationOptions } from "@react-navigation/stack";
import Login from "../containers/login/login.container";
import Register from "../containers/register/register.container";
import ROUTES from "./routeNames.enum";

export type IRouteProps = {
  name: string;
  component: React.ComponentType<any>;
  options?: StackNavigationOptions;
};

const routes: IRouteProps[] = [
  {
    component: Login,
    name: ROUTES.LOGIN,
    options: { headerShown: false },
  },
  {
    component: Register,
    name: ROUTES.REGISTER,
  },
];
const initialRouteName = ROUTES.LOGIN;
export { routes, initialRouteName };
