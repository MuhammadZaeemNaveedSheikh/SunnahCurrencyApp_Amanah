import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { edit } from "../../../imageSource";
import {
  AppButton,
  AppInput,
  BackHeader,
  DropDown,
  TextArea,
} from "../../../components";
import { useNavigation } from "@react-navigation/native";
import { cityData, countryData } from "../../../arrays/arrays";
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
      <View
        style={{
          paddingTop: 40,
          backgroundColor: themeColor
            ? theme.colors.bgColor
            : theme.colors.white,
          paddingHorizontal: 20,
        }}
      >
        <BackHeader screenName={"Edit Address"} />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.inputContainer}>
          <DropDown
            placeholder={"Select Country"}
            data={countryData}
            label={"Home Country"}
          />
          <TextArea
            edit={edit}
            label="Street Address"
            placeholder="ABC NY 123 DC"
            // value={text}
            // onChangeText={handleTextChange}
            minHeight={100}
            maxHeight={200}
          />
          <AppInput
            Width="93%"
            edit={edit}
            icon={""}
            lable={"Town"}
            placeholder={"XYZ"}
          />
          <DropDown
            placeholder={"Select City"}
            data={cityData}
            label={"City"}
          />
          <AppInput
            Width="92%"
            edit={edit}
            lable={"Postal/Zip Code"}
            placeholder={"1234"}
          />
        </View>
        <View style={styles.btnDiv}>
          <AppButton
            onPress={() => navigation.navigate("")}
            lable={"Save"}
            width={"100%"}
            height={46}
            marginTop={20}
            fontWeight="600"
            fontSize={14}
          />
        </View>
      </ScrollView>
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
      paddingHorizontal: 20,
      alignItems: "center",
      paddingBottom: 20,
    },
    btnDiv: {
      width: "100%",
      flex: 1,
      justifyContent: "flex-end",
    },
    image: {
      marginBottom: 20,
    },
    inputContainer: {
      width: "100%",
    },
  });

export default Index;
