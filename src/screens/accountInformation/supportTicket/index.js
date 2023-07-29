import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppButton, BackHeader, TicketModal } from "../../../components";
import { FlatList } from "react-native";
import { useTheme, DefaultTheme } from "react-native-paper";
import { usethemeContext } from "../../../services/AppContext";

const Index = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const theme = useTheme();
  const { themeColor, setThemeColor } = usethemeContext();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);
  const data = [
    {
      name: "Title of Support ticket",
      date: "23rd April, 2023",
      resolve: "Resolved",
    },
    {
      name: "Title of Support ticket",
      date: "23rd April, 2023",
      resolve: "Resolved",
    },
    {
      name: "Title of Support ticket",
      date: "23rd April, 2023",
      resolve: "Resolved",
    },
    {
      name: "Title of Support ticket",
      date: "23rd April, 2023",
      resolve: "Unresolved",
    },
    {
      name: "Title of Support ticket",
      date: "23rd April, 2023",
      resolve: "Resolved",
    },
  ];
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20 }}>
        <BackHeader screenName={"Support Ticket"} />

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("supportTicketDetail")}
                style={styles.setting}
              >
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.date}>{item.date}</Text>
                </View>

                <View
                  style={{
                    width: 80,
                    height: 24,
                    alignItems: "center",
                    backgroundColor: themeColor
                      ? index === 3
                        ? "#FFB7271F"
                        : "#171717"
                      : index === 3
                      ? "#FFAD0E1F"
                      : "#ECFDF3",

                    borderRadius: 16,
                  }}
                >
                  <Text
                    style={[
                      styles.date,
                      { color: index === 3 ? "#FFAD0E" : "#027A48" },
                    ]}
                  >
                    {item.resolve}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      {modalVisible && (
        <View style={styles.backdrop} onPress={handleCloseModal} />
      )}
      <TicketModal modalVisible={modalVisible} />
      <View style={styles.btnDiv}>
        <AppButton
          onPress={() => {
            setModalVisible(true);
          }}
          lable={"Create Support Ticket"}
          width={"100%"}
          height={46}
          marginTop={20}
          fontWeight="600"
          fontSize={14}
        />
      </View>
    </View>
  );
};

const createStyles = (prop) =>
  StyleSheet.create({
    container: {
      backgroundColor: prop.themeColor
        ? prop.theme.colors.bgColor
        : prop.theme.colors.white,
      flexGrow: 1,
      paddingTop: 40,
      width: "100%",
    },
    btnDiv: {
      width: "100%",
      flex: 1,
      padding: 20,
      justifyContent: "flex-end",
    },
    setting: {
      alignItems: "center",
      marginTop: 20,
      flexDirection: "row",
      borderColor: prop.themeColor ? "#7E7E7E" : "#0000001F",
      borderWidth: 0.5,
      paddingHorizontal: 18,
      justifyContent: "space-between",
      paddingVertical: 10,
      borderRadius: 6,
    },
    name: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 14,
      lineHeight: 21,
      fontFamily: "Poppins-Medium",
    },
    date: {
      color: prop.themeColor ? prop.theme.colors.text : prop.theme.colors.black,
      marginTop: 6,
      fontSize: 10,
      lineHeight: 12,
    },
    backdrop: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "#A7A7A780",
      zIndex: 1,
    },
  });

export default Index;
