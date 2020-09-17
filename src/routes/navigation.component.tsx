import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { routes, initialRouteName, IRouteProps } from "./routes";
import { Text } from "react-native";
const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
        {routes.map((route: IRouteProps, index: number) => (
          <Stack.Screen
            key={index}
            component={route.component}
            name={route.name}
            options={route.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
