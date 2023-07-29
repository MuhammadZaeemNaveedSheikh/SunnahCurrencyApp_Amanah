import React from "react";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native";
import { Icon } from "react-native-elements";
import { useTheme, DefaultTheme } from "react-native-paper";
import { usethemeContext } from "../../services/AppContext";

const index = ({
  marginTop,
  height,
  secureTextEntry,
  icon,
  color,
  lable,
  onChangeText,
  keyboardType,
  fontSize,
  value,
  fontFamily,
  placeholder,
  lableColor,
  paddingHorizontal,
  Width,
  borderWidth,
  fontWeight,
  lineHeight,
}) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const theme = useTheme();
  const { themeColor, setThemeColor } = usethemeContext();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);
  return (
    <>
      <Text style={[styles.lable, { color: lableColor }]}>{lable}</Text>
      <View
        style={{
          width: "100%",
          display: "flex",
          borderColor: themeColor ? theme.colors.text : "#AFBACA",
          borderRadius: 6,
          flexDirection: "row",
          marginTop: marginTop ? marginTop : 6,
          alignItems: "center",
          height: height ? height : 46,
          backgroundColor: themeColor
            ? theme.colors.bgColor
            : theme.colors.white,
          paddingHorizontal: paddingHorizontal ? paddingHorizontal : 14,
          // paddingVertical: paddingVertical ? paddingVertical : 11,
          borderWidth: borderWidth ? borderWidth : 1,
        }}
      >
        <TextInput
          style={{
            borderLeftWidth: icon ? 0.5 : 0,
            borderLeftColor: "#D7DFE9",
            width: Width ? Width : "90%",
            fontSize: fontSize ? fontSize : 14,
            fontFamily: fontFamily ? fontFamily : "Poppins-Medium",
            fontWeight: fontWeight ? fontWeight : "400",
            lineHeight: lineHeight ? lineHeight : 24,
            color: color ? color : "#8897AE",
          }}
          editable
          multiline
          numberOfLines={6}
          maxLength={40}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder ? "  " + placeholder : "Search"}
          keyboardType={keyboardType}
          placeholderTextColor={themeColor ? theme.colors.text : "#AFBACA"}
          secureTextEntry={secureTextEntry}
        />
        <Icon name="search" size={24} color="#8897AE" />
      </View>
    </>
  );
};
const createStyles = (prop) =>
  StyleSheet.create({
    lable: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black2,
      fontSize: 14,
      lineHeight: 24,
      fontFamily: "Poppins-Medium",
    },
    icon: {
      marginLeft: 20,
    },
  });
export default index;
