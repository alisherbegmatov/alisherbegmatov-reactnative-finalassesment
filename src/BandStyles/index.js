import React from "react";
import { SafeAreaView, FlatList, View } from "react-native";
import bands from "../../assets/metal";
import styles from "./styles";
import Style from "./style";

function BandStyles() {
  let styleList = [];
  bands.forEach((band) => {
    const styles = band.style.split(",");
    styles.forEach((style) => {
      if (!styleList.includes(style)) {
        styleList.push(style);
      }
    });
  });
  const renderItem = ({ item }) => {
    return <Style style={item} />;
  };
  return (
    <View style={styles.view}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={styleList}
          renderItem={renderItem}
          keyExtractor={(style) => style}
        />
      </SafeAreaView>
    </View>
  );
}

export default BandStyles;
