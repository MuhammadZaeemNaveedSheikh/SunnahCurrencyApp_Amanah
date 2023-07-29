import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useTheme, DefaultTheme } from "react-native-paper";
import { usethemeContext } from "../../services/AppContext";

const Index = () => {
  const screenWidth = Dimensions.get("window").width;
  const theme = useTheme();
  const { themeColor, setThemeColor } = usethemeContext();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);

  const data = {
    labels: ["1D", "3D", "5D", "2D", "1D", "2D", "1D", "1Y"],
    datasets: [
      {
        data: [20, 20, 40, 60, 80, 70, 80, 80],
        color: (opacity = 1) => `rgba(128, 128, 128, ${opacity})`, // Line color: gray
        strokeWidth: 2,
      },
      {
        data: [50, 40, 60, 80, 100, 90, 100, 90],
        color: (opacity = 1) => `rgba(245, 219, 133, ${opacity})`, // Line color: #F4D674
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: themeColor
      ? theme.colors.bgColor
      : theme.colors.white,
    backgroundGradientTo: themeColor
      ? theme.colors.bgColor
      : theme.colors.white,
    color: (opacity = 1) =>
      prop.themeColor ? prop.theme.colors.text : "black",
    strokeWidth: 2,
    propsForDots: {
      r: "3",
      strokeWidth: "2",
      propsForDots: {
        r: "3",
        strokeWidth: "2",
        stroke: prop.themeColor ? prop.theme.colors.text : "#000",
      },
    },
    fillShadowGradient: "rgba(244, 214, 116, 0.4)",
  };
  // const chartConfig = {
  //   backgroundGradientFrom: prop.themeColor
  //     ? prop.theme.colors.bgColor
  //     : prop.theme.colors.white,
  //   backgroundGradientTo: prop.themeColor
  //     ? prop.theme.colors.bgColor
  //     : prop.theme.colors.white,
  //   color: (opacity = 1) =>
  //     prop.themeColor ? prop.theme.colors.text : "black",
  //   strokeWidth: 2,
  //   propsForDots: {
  //     r: "3",
  //     strokeWidth: "2",
  //     stroke: prop.themeColor ? prop.theme.colors.text : "#000",
  //   },
  //   fillShadowGradient: prop.themeColor
  //     ? prop.theme.colors.primary
  //     : "rgba(244, 214, 116, 0.4)", // Line background shade color: #F4D674 with opacity 0.4
  // };

  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={screenWidth}
        height={200}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
    </View>
  );
};

const createStyles = (prop) =>
  StyleSheet.create({
    container: {
      marginTop: 30,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    chart: {
      borderRadius: 16,
    },
  });

export default Index;
