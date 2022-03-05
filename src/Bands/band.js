import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

function Band({ band_name, formed, origin, fans, split }) {
  return (
    <View style={styles.band}>
      <View style={styles.infoTop}>
        <Text style={split == "-" ? styles.nameTogether : styles.nameSplit}>
          {band_name}
        </Text>
        <Text style={styles.origin}>{origin}</Text>
      </View>
      <View style={styles.infoBottom}>
        <Text style={styles.formed}>{formed}</Text>
        <Text style={styles.fans}>
          {(fans * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Text>
      </View>
    </View>
  );
}

export default Band;
