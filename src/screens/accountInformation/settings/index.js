import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BackHeader, BottomBotton } from "../../../components";
import { Go } from "../../../imageSource";
import { useTheme, DefaultTheme } from "react-native-paper";
import { usethemeContext } from "../../../services/AppContext";

const Index = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const { themeColor, setThemeColor } = usethemeContext();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);

  const data = [
    {
      name: "Edit Account Information",
      link: "editinfo",
    },
    {
      name: "Edit Address",
      link: "editAddress",
    },
    {
      name: "Change Password",
      link: "changePassword",
    },

    {
      name: "Manage Documents",
      link: "manageFiles",
    },
    {
      name: "Support Tickets",
      link: "supportTicket",
    },
    {
      name: "Contact Us",
      link: "contactUs",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20 }}>
        <BackHeader screenName={"Settings"} />
        <View style={styles.rowDiv}>
          <View>
            <Text style={styles.title}>Customer ID</Text>
            <Text style={styles.id}> 16286182272</Text>
          </View>
          <View>
            <Text style={styles.title}>Amanah Vault ID</Text>
            <Text style={styles.id}>A-000-1234</Text>
          </View>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate(item.link)}
                style={styles.setting}
              >
                <Text style={styles.title}>{item.name}</Text>
                <Go />
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View>
        <BottomBotton />
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
      justifyContent: "space-between",
    },
    rowDiv: {
      flexDirection: "row",
      marginTop: 22,
      width: "90%",
      justifyContent: "space-between",
    },

    setting: {
      marginTop: 20,
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      borderColor: prop.themeColor ? "#7E7E7E" : "#0000001F",
      borderWidth: 0.5,
      borderRadius: 6,
      paddingHorizontal: 18,
      paddingVertical: 10,
    },
    title: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black2,
      fontSize: 14,
      lineHeight: 26,
      fontFamily: "Poppins-Medium",
    },
    id: {
      marginTop: 6,
      color: prop.themeColor
        ? prop.theme.colors.text
        : prop.theme.colors.black,
      fontSize: 14,
      lineHeight: 24,
      fontFamily: "Poppins-Medium",
    },
  });
export default Index;
