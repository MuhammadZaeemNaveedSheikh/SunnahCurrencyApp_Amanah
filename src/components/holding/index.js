import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { FlatList } from "react-native";
import { Hgold, Shold } from "../../imageSource";
import { Image } from "react-native";
import { useTheme, DefaultTheme } from "react-native-paper";
import { usethemeContext } from "../../services/AppContext";
const Index = () => {
  const data = [
    {
      name: "Your GOLD",
      date: "23rd April, 2023",
      img: <Hgold />,
      resolve: "€346.453",
    },
    {
      name: "Your SILVER",
      img: <Shold />,
      date: "23rd April, 2023",
      resolve: "€346.453",
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
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={styles.setting}>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ marginRight: 10 }}>{item.img}</View>
                  <View>
                    <Text style={styles.name}>{item.name}</Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 6 }}>
                  <Text style={styles.date}>400 </Text>
                  <Text style={styles.gr}> Gr</Text>
                </View>
              </View>
              <View>
                <Text style={styles.name}>Value</Text>
                <Text style={[styles.date]}>{item.resolve}</Text>
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
      marginTop: 20,
      flexDirection: "row",
      borderColor: "#B3924F",
      borderWidth: 0.5,
      paddingHorizontal: 14,
      justifyContent: "space-between",
      paddingVertical: 16,
      borderRadius: 6,
    },
    name: {
      color: prop.themeColor ? prop.theme.colors.text : prop.theme.colors.gray,
      fontSize: 13,
      lineHeight: 19,
      fontFamily: "Poppins-Bold",
    },
    date: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "Poppins-SemiBold",
    },
    gr: {
      color: prop.themeColor ? prop.theme.colors.text : prop.theme.colors.gray,
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "Poppins-Medium",
    },
  });

export default Index;
