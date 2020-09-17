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
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import ROUTES from "../../routes/routeNames.enum";

type LoginScreenProps = StackScreenProps<any>;

const LoginScreen: React.FC<LoginScreenProps> = (props) => {
  const { navigation } = props;

  const handleSignIn = () => {};

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
          <Button full primary style={styles.button}>
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

export default LoginScreen;
