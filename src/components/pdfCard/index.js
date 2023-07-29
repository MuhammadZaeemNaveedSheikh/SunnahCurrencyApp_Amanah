import React from "react";
import { StyleSheet, FlatList, Image, Text } from "react-native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProgressBar from "react-native-progress/Bar";
import { Icon } from "react-native-elements";
import { Pdf, Pdf2, Pdfred } from "../../imageSource";
import { usethemeContext } from "../../services/AppContext";
import { useTheme, DefaultTheme } from "react-native-paper";

const Index = ({ onPress }) => {
  const progress = 0.6;
  const theme = useTheme();
  const { themeColor, setThemeColor } = usethemeContext();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);
  const data = [
    {
      img: themeColor ? <Pdf2 /> : <Pdf />,
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Passport PDF",
      range: "60%",
    },
    {
      img: themeColor ? <Pdf2 /> : <Pdf />,
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Passport Sized Photo",
    },
    {
      img: <Pdfred />,
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Address PDF",
    },
    {
      img: themeColor ? <Pdf2 /> : <Pdf />,
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Billing Statement",
      range: "60%",
    },
  ];
  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={onPress} style={styles.history}>
            <Text style={styles.name}>{item.title}</Text>
            <View style={styles.pdfCard}>
              {item.img}
              <View style={styles.pdfItem}>
                <View
                  style={{
                    alignContent: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Text
                    style={[
                      styles.email,
                      {
                        color: themeColor
                          ? index === 2
                            ? "#E92215"
                            : theme.colors.textWhite
                          : index === 2
                          ? "#E92215"
                          : "#343434",
                      },
                    ]}
                  >
                    Mail.pdf
                  </Text>
                  <View
                    style={{
                      width: "90%",
                      marginTop: -13,
                      alignItems: "flex-end",
                    }}
                  >
                    {index === 1 ? (
                      <Icon
                        name="check"
                        type="FontAwesome"
                        size={16}
                        color="#00FF00"
                      />
                    ) : index === 2 ? (
                      <Icon
                        name="exclamation-circle"
                        type="font-awesome"
                        size={16}
                        color="#FF0000"
                      />
                    ) : (
                      <Text style={styles.title}>{item.range}</Text>
                    )}
                  </View>
                  <ProgressBar
                    progress={progress}
                    width={300}
                    height={5}
                    marginTop={5}
                    color={index === 2 ? "#E92215" : "#B3924F"}
                    unfilledColor="#EAEAEA"
                    borderWidth={0}
                  />
                  <Text style={[styles.email, { marginTop: 3 }]}>
                    {index === 2 ? "Retry" : ""}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  );
};
const createStyles = (prop) =>
  StyleSheet.create({
    pdfCard: {
      flexDirection: "row",
      marginTop: 20,
      width: "100%",
    },
    pdfItem: {
      width: "100%",
      paddingLeft: 14,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    history: {
      marginTop: 19,
      width: "100%",
    },
    name: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 14,
      fontWeight: "500",
      lineHeight: 24,
    },
    email: {
      color: prop.themeColor ? prop.theme.colors.text : prop.theme.colors.black,
      fontSize: 10,
      fontWeight: "600",
      lineHeight: 14,
    },
    title: {
      color: prop.themeColor ? prop.theme.colors.text : prop.theme.colors.black,
      fontSize: 10,
      fontWeight: "600",
      lineHeight: 15,
    },
  });
export default Index;
