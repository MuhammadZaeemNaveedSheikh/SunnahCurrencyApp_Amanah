import React, { useState } from "react";
import { StyleSheet, Text, Image } from "react-native";
import { View } from "react-native";
import {
  Title,
  Title2,
  bg,
  de,
  es,
  f,
  ita,
  pak,
  uk,
  bg2,
} from "../../imageSource";
import { Picker } from "@react-native-picker/picker";
import { AppButton } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import { useTheme, DefaultTheme } from "react-native-paper";
import { usethemeContext } from "../../services/AppContext";

const languageData = [
  { label: "English", value: "English", iconName: uk },
  { label: "France", value: "France", iconName: f },
  { label: "اردو", value: "اردو", iconName: pak },
  { label: "Español", value: "Español", iconName: es },
  { label: "Deutsch", value: "Deutsch", iconName: de },
  { label: "Italiano", value: "Italiano", iconName: ita },
];
const CountryList = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languageData[0]);
  const navigation = useNavigation();

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const theme = useTheme();
  const { themeColor, setThemeColor } = usethemeContext();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);
  return (
    <ImageBackground
      source={themeColor ? bg2 : bg}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.countryDiv}>
        <View>
          {themeColor ? (
            <Title2 style={styles.img} />
          ) : (
            <Title style={styles.img} />
          )}
        </View>
        <View>
          <Text style={styles.choose}>Choose Language</Text>
          <View style={styles.pickerCont}>
            <Image source={selectedLanguage.iconName} style={styles.flagIcon} />
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={handleLanguageChange}
              style={[styles.picker, { color: "#AEAEAE" }]}
              dropdownIconColor="#AEAEAE"
            >
              {languageData.map((language) => (
                <Picker.Item
                  key={language.value}
                  style={styles.listText}
                  label={language.label}
                  value={language}
                >
                  <View style={styles.itemContainer}>
                    <Image
                      source={language.iconName}
                      style={styles.flagIconSmall}
                    />
                    <Text>{language.label}</Text>
                  </View>
                </Picker.Item>
              ))}
            </Picker>
          </View>
        </View>
        <AppButton onPress={() => navigation.navigate("onBoarding")} />
      </View>
    </ImageBackground>
  );
};
const createStyles = (prop) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: prop.themeColor ? "#1E1E1E" : "transparent",
      width: "100%",
    },
    countryDiv: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    choose: {
      marginTop: 84,
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black2,
      fontSize: 14,
      fontFamily: "Poppins-Regular",
      lineHeight: 16,
    },
    listText: {
      color: "#AEAEAE",
      fontSize: 14,
      fontWeight: "500",
      lineHeight: 21,
    },
    picker: {
      flex: 1,
    },
    pickerCont: {
      borderWidth: 1,
      borderColor: prop.themeColor ? prop.theme.colors.text : "#AEAEAE",
      width: 254,
      marginTop: 9,
      paddingLeft: 20,
      borderRadius: 6,
      backgroundColor: prop.themeColor
        ? prop.theme.colors.bgColor
        : prop.theme.colors.white,
      flexDirection: "row",
      flexDirection: "row",
      alignItems: "center",
    },
    itemContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    flagIcon: {
      width: 24,
      height: 24,
      marginRight: 10,
      borderRadius: 100,
    },
    flagIconSmall: {
      width: 16,
      height: 10,
      borderRadius: 100,
      marginRight: 5,
    },
  });
export default CountryList;
