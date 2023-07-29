import React from "react";
import { StyleSheet } from "react-native";
import { BackHeader } from "..";
import { View } from "react-native";
import { BigGold } from "../../imageSource";
const index = () => {
  return (
    <>
      <BackHeader screenName={"2023 Memorial Gold"} />
      <BigGold style={styles.image} />
      <View style={styles.navCont}>
        <View style={styles.nav} />
        <View style={styles.nav1} />
        <View style={styles.nav1} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  image: {
    marginTop: 25,
    marginBottom: 20,
  },
  navCont: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  nav: {
    marginHorizontal: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#B3924F",
    width: 18,
    height: 7,
  },
  nav1: {
    marginHorizontal: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#D1D1D6",
    width: 8,
    height: 8,
  },
});
export default index;
