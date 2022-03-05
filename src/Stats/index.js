import React from "react";
import { View, Text } from "react-native";
import bands from "../../assets/metal";
import styles from "./styles";

function Stats() {
  let fans = 0;
  bands.forEach((band) => {
    fans += band.fans;
  });

  const countries = [];
  bands.forEach((band) => {
    if (!countries.includes(band.origin)) {
      countries.push(band.origin);
    }
  });

  let active = 0;
  bands.forEach((band) => {
    if (band.split === "-") active += 1;
  });

  let bandStyle = [];
  bands.forEach((band) => {
    if (!bandStyle.includes(band.style)) {
      bandStyle.push(band.style);
    }
  });

  return (
    <View style={styles.view}>
      <Text style={styles.title}>METAL 🤘</Text>
      <Text style={styles.wrapper}>
        <Text style={[styles.info, styles.bold]}>Count: </Text>
        <Text style={styles.info}>{bands.length}</Text>
      </Text>
      <Text style={styles.wrapper}>
        <Text style={[styles.info, styles.bold]}>Fans: </Text>
        <Text style={styles.info}>
          {(fans * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Text>
      </Text>
      <Text style={styles.wrapper}>
        <Text style={[styles.info, styles.bold]}>Countries: </Text>
        <Text style={styles.info}>{countries.length}</Text>
      </Text>
      <Text style={styles.wrapper}>
        <Text style={[styles.info, styles.bold]}>Active: </Text>
        <Text style={styles.info}>{active}</Text>
      </Text>
      <Text style={styles.wrapper}>
        <Text style={[styles.info, styles.bold]}>Split: </Text>
        <Text style={styles.info}>{bands.length - active}</Text>
      </Text>
      <Text style={styles.wrapper}>
        <Text style={[styles.info, styles.bold]}>Style: </Text>
        <Text style={styles.info}>{bandStyle.length}</Text>
      </Text>
    </View>
  );
}

export default Stats;
