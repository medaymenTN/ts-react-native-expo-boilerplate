import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Navigation from "./src/routes/navigation.component";

export default function App() {
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
