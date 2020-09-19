import React from "react";

import styles from "./login.styles";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  View,
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import ROUTES from "../../routes/routeNames.enum";
import { LoginDispatchProps, LoginScreenProps, LoginStateProps } from "./type";
import {
  connect,
  MapDispatchToPropsParam,
  MapStateToPropsParam,
} from "react-redux";
import { LoginAction } from "../../store/UserStore/user.async.action";
import { Action, Dispatch } from "redux";
import RootState from "../../store/types";

const LoginScreen: React.FC<LoginScreenProps> = (props) => {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const { navigation, dispatchLogin } = props;

  const handleSignIn = () => {
    dispatchLogin(username, password);
  };

  const handleNavigateToSignUp = () => {
    navigation.navigate(ROUTES.REGISTER);
  };

  return (
    <Container>
      <Content contentContainerStyle={styles.container}>
        <Text style={styles.text}>Simple RN App</Text>
        <Form>
          <View style={styles.input}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
          </View>
          <View style={styles.input}>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input />
            </Item>
          </View>
          <Button rounded primary style={styles.button}>
            <Text> Sign in </Text>
          </Button>
          <TouchableOpacity onPress={handleNavigateToSignUp}>
            <Text style={[styles.text, { color: "blue", margin: 10 }]}>
              Create your account
            </Text>
          </TouchableOpacity>
        </Form>
      </Content>
    </Container>
  );
};

const mapDispatchToProps: MapDispatchToPropsParam<LoginDispatchProps, any> = (
  dispatch: Dispatch<Action<any>>
) => {
  return {
    dispatchLogin: (username: string, password: string) => {
      return dispatch<any>(LoginAction(username, password));
    },
  };
};

const mapStateToProps: MapStateToPropsParam<LoginStateProps, {}, RootState> = (
  state: RootState
) => {
  return {
    loading: state.User.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
