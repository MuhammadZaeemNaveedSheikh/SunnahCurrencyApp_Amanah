import React, { useState } from "react";
import { StyleSheet, View, ImageBackground, Dimensions } from "react-native";
import { Header, OnBoadingCard } from "../../components";
import { bg, bg2 } from "../../imageSource";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useTheme, DefaultTheme } from "react-native-paper";
import { usethemeContext } from "../../services/AppContext";

const Index = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const theme = useTheme();

  const { themeColor, setThemeColor } = usethemeContext();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);

  const Card = () => {
    return (
      <>
        <Header />
        <OnBoadingCard
          screen={"lorem1"}
          m1
          text={"Welcome to Amanah Vault"}
          des={
            "Lorem ipsum dolor sit amet consectetur. Massa lobortis dignissim."
          }
        />
      </>
    );
  };
  const Card2 = () => {
    return (
      <>
        <Header />
        <OnBoadingCard
          screen={"lorem2"}
          m2
          text={"Lorem ipsum dolor sit amet"}
          des={
            "Lorem ipsum dolor sit amet consectetur. Massa lobortis dignissim."
          }
        />
      </>
    );
  };
  const Card3 = () => {
    return (
      <>
        <Header />
        <OnBoadingCard
          screen={"registrationInfo"}
          m3
          text={"Lorem ipsum dolor sit amet"}
          des={
            "Lorem ipsum dolor sit amet consectetur. Massa lobortis dignissim."
          }
        />
      </>
    );
  };

  const data = [
    { id: 1, card: <Card screen={"registrationInfo"} /> },
    { id: 2, card: <Card2 /> },
    { id: 3, card: <Card3 /> },
  ];

  const renderItem = ({ item }) => (
    <View style={{ flex: 1, width: "100%" }}>{item.card}</View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={themeColor ? bg2 : bg}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Carousel
          data={data}
          renderItem={renderItem}
          sliderWidth={Dimensions.get("window").width}
          itemWidth={Dimensions.get("window").width}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          containerStyle={styles.paginationContainer}
          dotStyle={styles.paginationDot}
          inactiveDotStyle={styles.paginationInactiveDot}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.9}
        />
      </ImageBackground>
    </View>
  );
};

const createStyles = (prop) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: prop.themeColor ? "#1E1E1E" : "transparent",
    },
    backgroundImage: {
      flex: 1,
      width: "100%",
    },
    paginationContainer: {
      position: "absolute",
      bottom: 162,
      alignSelf: "center",
    },
    paginationDot: {
      width: 29,
      height: 12,
      borderRadius: 5,
      backgroundColor: "#B3924F",
    },
    paginationInactiveDot: {
      width: 12,
      height: 12,
      borderRadius: 100,
      backgroundColor: "#D1D1D6",
    },
  });

export default Index;
