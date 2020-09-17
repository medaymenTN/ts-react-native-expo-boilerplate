import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Navigation from "./src/routes/navigation.component";
import * as Font from "expo-font";

export default function App() {
  /** loading fonts */
  React.useEffect(() => {
    (async () =>
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      }))();
  }, []);

  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
