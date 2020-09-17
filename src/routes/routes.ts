import Login from "../containers/login/login";
import Register from "../containers/register/register";
import ROUTES from "./routeNames.enum";

export type IRouteProps = {
  name: string;
  component: React.ComponentType<any>;
  options?: { headerShown: boolean };
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
