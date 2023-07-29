import React from "react";
import { StyleSheet, View } from "react-native";
import { AuthTitle, AuthTitle2, bg, bg2 } from "../../../imageSource";
import { cityData, countryData } from "../../../arrays/arrays";
import { AppButton, AppInput, DropDown, TextArea } from "../../../components";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import { ScrollView } from "react-native";
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
  // const getCountries = async () => {
  //   await axios
  //     .get("https://api.first.org/data/v1/countries")
  //     .then((res) => {
  //       const data = res.data.data;
  //       setCountry(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // useEffect(() => {
  //   // getCountries();
  // }, [country]);
  return (
    <ImageBackground
      source={themeColor ? bg2 : bg}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <ScrollView>
        <View style={styles.container}>
          {themeColor ? (
            <AuthTitle2 style={styles.image} />
          ) : (
            <AuthTitle style={styles.image} />
          )}
          <View style={styles.rowDiv}>
            <Text style={styles.info}>Personal Information</Text>
            <Text style={styles.step}>Step 2 of 3</Text>
          </View>
          <View style={styles.inputContainer}>
            <DropDown
              data={countryData}
              label={"Home Country"}
              placeholder="Select Home Country"
            />
            <TextArea
              label="Street Address"
              placeholder="Enter Street Address"
              // value={text}
              // onChangeText={handleTextChange}
              minHeight={100}
              maxHeight={200}
            />
            <AppInput
              icon={""}
              lable={"Town"}
              placeholder={"Enter town name"}
            />
            <DropDown
              data={cityData}
              label={"City"}
              placeholder="Select City"
            />
            <AppInput
              icon={""}
              lable={"Postal/Zip Code"}
              placeholder={"Enter Zip/Postal code"}
            />
            <AppButton
              onPress={() => navigation.navigate("userDocs")}
              lable={"Continue"}
              width={"100%"}
              color={"#7E7E7E"}
              backgroundColor={"#343434"}
              height={46}
              marginTop={20}
              fontWeight="600"
              fontSize={14}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default Index;

const createStyles = (prop) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      backgroundColor: prop.themeColor ? "#1E1E1E" : "transparent",

      alignItems: "center",
      paddingTop: 60,
      paddingBottom: 20,
    },
    image: {
      marginBottom: 20,
    },
    step: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 14,
      lineHeight: 21,
      fontFamily: "Poppins-Medium",
    },
    info: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 20,
      lineHeight: 30,
      fontFamily: "Poppins-SemiBold",
    },
    rowDiv: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      marginTop: 40,
      justifyContent: "space-between",
    },
    inputContainer: {
      width: "100%",
    },
  });
