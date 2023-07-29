import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import {
  Order1,
  Order1m,
  Order2,
  Order2m,
  Order3,
  Order3m,
  Order4,
  Order4m,
} from "../../imageSource";
import { usethemeContext } from "../../services/AppContext";
import { useTheme } from "react-native-paper";
const Index = ({ order1, order2, order3, qt, number }) => {
  const theme = useTheme();
  const { themeColor } = usethemeContext();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);
  return (
    <View style={styles.alignDiv}>
      {themeColor ? (
        order1 ? (
          <Order1m style={styles.image} />
        ) : order2 ? (
          <Order2m style={styles.image} />
        ) : order3 ? (
          <Order3m style={styles.image} />
        ) : (
          <Order4m style={styles.image} />
        )
      ) : order1 ? (
        <Order1 style={styles.image} />
      ) : order2 ? (
        <Order2 style={styles.image} />
      ) : order3 ? (
        <Order3 style={styles.image} />
      ) : (
        <Order4 style={styles.image} />
      )}

      <Text style={[styles.item]}>{qt} </Text>
      <Text style={[styles.item2]}>{number} </Text>
    </View>
  );
};
const createStyles = (prop) =>
  StyleSheet.create({
    item: {
      color: prop.themeColor ? prop.theme.colors.text : "#8897AE",
      fontSize: 16,
      fontFamily: "Poppins-Medium",
      lineHeight: 24,
    },
    image: { marginRight: 13 },
    item2: {
      color: prop.themeColor ? prop.theme.colors.text : "#8897AE",
      fontSize: 16,
      fontFamily: "Poppins-SemiBold",
      lineHeight: 24,
    },
    alignDiv: {
      marginTop: 10,
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
    },
  });
export default Index;
