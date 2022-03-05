import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

function Style({ style }) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{style}</Text>
    </View>
  );
}

export default Style;
