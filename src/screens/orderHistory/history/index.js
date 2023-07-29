import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackHeader from "../../../components/backHeader";
import BottomBotton from "../../../components/bottomBotton";
import OrderHistoryCard from "../../../components/orderHistoryCard";
import { usethemeContext } from "../../../services/AppContext";
import { useTheme, DefaultTheme } from "react-native-paper";

const Index = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const { themeColor, setThemeColor } = usethemeContext();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", paddingHorizontal: 20 }}>
        <BackHeader screenName={"Order History"} />
        <View style={styles.cardDiv}>
          <OrderHistoryCard
            onPress={() => navigation.navigate("order")}
            name="1 Dinar Gold"
            price="€224.40"
            wieght="@ € 40/g"
            date="23rd April, 2023"
            id={"Order ID: 324"}
            quantity={"Quantity: 03"}
          />
          <OrderHistoryCard
            onPress={() => navigation.navigate("order")}
            name="1 Dinar Gold"
            price="€224.40"
            wieght="@ € 40/g"
            date="23rd April, 2023"
            id={"Order ID: 324"}
            quantity={"Quantity: 03"}
          />
          <OrderHistoryCard
            onPress={() => navigation.navigate("order")}
            name="1 Dinar Gold"
            price="€224.40"
            wieght="@ € 40/g"
            date="23rd April, 2023"
            id={"Order ID: 324"}
            quantity={"Quantity: 03"}
          />
          <OrderHistoryCard
            onPress={() => navigation.navigate("order")}
            name="1 Dinar Gold"
            price="€224.40"
            wieght="@ € 40/g"
            date="23rd April, 2023"
            id={"Order ID: 324"}
            quantity={"Quantity: 03"}
          />
          <OrderHistoryCard
            onPress={() => navigation.navigate("order")}
            name="1 Dinar Gold"
            price="€224.40"
            wieght="@ € 40/g"
            date="23rd April, 2023"
            id={"Order ID: 324"}
            quantity={"Quantity: 03"}
          />
        </View>
      </View>
      <View style={{ width: "100%" }}>
        <View style={styles.line} />
        <BottomBotton />
      </View>
    </View>
  );
};

const createStyles = (prop) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      backgroundColor: prop.themeColor
        ? prop.theme.colors.bgColor
        : prop.theme.colors.white,
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: 40,
    },
    cardDiv: {
      width: "100%",
      marginBottom: 20,
      marginTop: 9,
    },
    line: {
      borderColor: "#0000001F",
      borderTopWidth: 1,
    },
  });

export default Index;
