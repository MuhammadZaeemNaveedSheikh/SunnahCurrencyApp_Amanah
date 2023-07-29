import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { FlatList } from "react-native";
import { down, up } from "../../imageSource";
import { Image } from "react-native";
import { useTheme, DefaultTheme } from "react-native-paper";
import { usethemeContext } from "../../services/AppContext";

const Index = () => {
  const data = [
    {
      name: "GOLD",
      date: "12.21%",
      img: down,
      resolve: "€45.65",
      vol: "Vol: € 23.54K",
    },
    {
      name: "SILVER",
      date: "12.33%",
      img: up,
      resolve: "€23.65",
      vol: "Vol: € 23.54K",
    },
  ];
  const theme = useTheme();
  const { themeColor, setThemeColor } = usethemeContext();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);

  return (
    <>
      <TouchableOpacity style={styles.border}>
        <Text style={styles.date}>Name/Vol</Text>
        <Text style={styles.date}>Last Price</Text>
        <Text style={styles.date}>Change %</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={styles.setting}>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={[styles.date]}>{item.vol}</Text>
                  </View>
                </View>
              </View>
              <View>
                <Text
                  style={[
                    styles.name,
                    { color: index === 0 ? "#10DC78" : "#F15950" },
                  ]}
                >
                  {item.resolve}
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {
                  (index = 0 ? (
                    <Image source={item.img} style={{ marginRight: 10 }} />
                  ) : (
                    <Image source={item.img} style={{ marginRight: 10 }} />
                  ))
                }
                <Text
                  style={[
                    styles.name,
                    { color: index === 0 ? "F15950" : "#10DC78" },
                  ]}
                >
                  {item.date}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const createStyles = (prop) =>
  StyleSheet.create({
    setting: {
      marginTop: 15,
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: 5,
      justifyContent: "space-between",
    },
    border: {
      paddingBottom: 20,
      borderBottomColor: prop.themeColor ? "#FFFFFF1F" : "#0000001F",
      borderBottomWidth: 0.5,
      marginTop: 15,
      paddingBottom: 5,
      flexDirection: "row",
      paddingHorizontal: 5,
      justifyContent: "space-between",
    },
    name: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 13,
      lineHeight: 19,
      fontFamily: "Poppins-Bold",
    },
    date: {
      color: prop.themeColor ? prop.theme.colors.text : prop.theme.colors.black,
      fontSize: 11,
      lineHeight: 16,
      fontFamily: "Poppins-Medium",
    },
    gr: {
      color: "#8897AE",
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "Poppins-Medium",
    },
  });

export default Index;
