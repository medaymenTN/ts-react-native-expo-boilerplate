import React from "react";

import styles from "./register.styles";
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
const Register = () => {
  const handleSignIn = () => {};
  return (
    <Container>
      <Content contentContainerStyle={styles.container}>
        <Text style={styles.text}>Create your account </Text>
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
            <Text> Sign un </Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Register;
