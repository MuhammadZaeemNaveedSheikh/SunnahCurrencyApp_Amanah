import React from "react";
import { StyleSheet } from "react-native";
import { Header, OnBoadingCard } from "../../components";
import {  bg } from "../../imageSource";
import { ImageBackground } from "react-native";

const Index = () => {
  return (
    <>
      <ImageBackground source={bg} resizeMode="cover" style={styles.container}>
        <Header />
        <OnBoadingCard
          screen={"registrationInfo"}
          m3
          text={"Lorem ipsum dolor sit amet"}
          des={
            "Lorem ipsum dolor sit amet consectetur. Massa lobortis dignissim."
          }
        />
      </ImageBackground>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
export default Index;
