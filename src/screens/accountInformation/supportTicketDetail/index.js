import React from "react";
import { StyleSheet, View } from "react-native";
import { AppButton, BackHeader, TextArea } from "../../../components";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { usethemeContext } from "../../../services/AppContext";
import { useTheme, DefaultTheme } from "react-native-paper";

const Index = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const { themeColor, setThemeColor } = usethemeContext();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);
  return (
    <>
      <View style={styles.container}>
        <View style={{ paddingTop: 40, paddingHorizontal: 20 }}>
          <BackHeader screenName={"Support Ticket"} />
        </View>
        <View style={styles.rowDiv}>
          <View style={styles.alignDiv}>
            <View>
              <Text style={styles.info}>Title of Support ticket</Text>
              <Text style={styles.step}>23rd April, 2023</Text>
            </View>
            <View
              style={{
                width: 80,
                height: 24,
                alignItems: "center",
                backgroundColor: themeColor ? "#171717" : "#ECFDF3",
                borderRadius: 16,
              }}
            >
              <Text
                style={[
                  styles.rec,
                  { color: themeColor ? "#039357" : "#027A48" },
                ]}
              >
                Resolved
              </Text>
            </View>
          </View>
          <Text style={[styles.step, { marginTop: 7 }]}>
            Lorem ipsum dolor sit amet consectetur. Orci adipiscing porttitor
            congue feugiat et turpis integer duis. Viverra et integer ridiculus
            aliquam. Ut enim etiam tristique urna. Dui scelerisque congue enim
            semper et auctor augue massa. Pharetra augue sit nisl auctor
            blandit. Ullamcorper non ultricies commodo malesuada et maecenas
            iaculis suspendisse amet. Et ipsum et praesent quisque sapien lacus
            arcu. Lacus mollis gravida purus sed adipiscing cursus in sed.
            Curabitur morbi quam eget adipiscing leo molestie. Sem senectus urna
            nunc turpis neque a amet proin. Massa euismod non in mattis enim
            accumsan vitae. Luctus leo feugiat quis felis ipsum purus viverra.
            Nisl non.
          </Text>
        <View style={styles.line} />
        </View>
        <View style={styles.rowDiv}>
          <View style={styles.alignDiv}>
            <Text style={styles.info2}>Admin’s Response</Text>
            <Text style={styles.date}>23rd April, 2023</Text>
          </View>
          <Text style={styles.step}>
            Lorem ipsum dolor sit amet consectetur. Nullam a porttitor in enim
            nisl sit. Sagittis dictumst et nec metus.
          </Text>
        </View>
        <View style={styles.rowDiv}>
          <View style={styles.alignDiv}>
            <Text style={styles.info2}>Your Response</Text>
            <Text style={styles.date}>23rd April, 2023</Text>
          </View>

          <Text style={styles.step}>
            Lorem ipsum dolor sit amet consectetur. Nisl egestas quam egestas
            orci amet odio pretium. Leo leo nulla orci.
          </Text>
          <View style={styles.line} />

          <View>
            <TextArea
              options
              placeholder={"Enter your reply"}
              // value={text}
              // onChangeText={handleTextChange}
              minHeight={100}
              maxHeight={200}
            />
          </View>
        </View>
        <View style={styles.btnDiv}>
          <AppButton
            onPress={() => navigation.navigate("createTicket")}
            lable={"Submit"}
            width={"100%"}
            height={46}
            marginTop={20}
            fontWeight="600"
            fontSize={14}
          />
        </View>
      </View>
    </>
  );
};
const createStyles = (prop) =>
  StyleSheet.create({
    container: {
      backgroundColor: prop.themeColor
        ? prop.theme.colors.bgColor
        : prop.theme.colors.white,
      flex: 1,
    },
    btnDiv: {
      width: "100%",
      flex: 1,
      padding: 20,
      justifyContent: "flex-end",
    },
    line: {
      borderTopColor: prop.themeColor ? "#FFFFFF1F" : "#0000001F",
      borderWidth: 0.5,
      marginTop: 19,
    },
    alignDiv: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    step: {
      color: prop.themeColor ? prop.theme.colors.text : prop.theme.colors.gray,
      fontSize: 12,
      lineHeight: 18,
      fontFamily: "Poppins-Regular",
    },
    info: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black2,
      fontSize: 14,
      lineHeight: 24,
      fontWeight: 500,
    },
    info2: {
      color: prop.themeColor ? prop.theme.colors.textWhite : "#49484E",
      fontSize: 12,
      lineHeight: 18,
      fontFamily: "Poppins-Regular",
    },
    rec: {
      color: prop.themeColor ? prop.theme.colors.text : prop.theme.colors.black,
      marginTop: 6,
      fontSize: 10,
      lineHeight: 12,
    },
    date: {
      color: "#85858580",
      fontSize: 8,
      lineHeight: 10,
      fontFamily: "Poppins-Regular",
    },
    rowDiv: {
      paddingHorizontal: 20,
      width: "100%",
      marginTop: 20,
      justifyContent: "space-between",
    },
  });
export default Index;
