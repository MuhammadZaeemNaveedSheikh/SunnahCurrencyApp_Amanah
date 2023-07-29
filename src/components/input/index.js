import React from "react";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native";
import { Icon } from "react-native-elements";
import { Edit } from "../../imageSource";
import { DefaultTheme, useTheme } from "react-native-paper";
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
  fontWeight,
  lineHeight,
  placeholder,
  padding,
  paddingTop,
  paddingBottom,
  paddingHorizontal,
  paddingLeft,
  paddingVertical,
  Width,
  edit,
  borderWidth,
}) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { themeColor, setThemeColor } = usethemeContext();
  const theme = useTheme();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);
  return (
    <>
      <Text style={[styles.lable]}>{lable}</Text>
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
          backgroundColor: themeColor ? "#0D0D0D" : "white",
          paddingHorizontal: paddingHorizontal ? paddingHorizontal : 14,
          paddingVertical: paddingVertical ? paddingVertical : 11,
          borderWidth: borderWidth ? borderWidth : 0.5,
        }}
      >
        {icon === "PK" ? (
          <Text style={{ color: themeColor ? theme.colors.text : "#5E718D" }}>
            PK
          </Text>
        ) : (
          <Icon
            name={icon}
            color={themeColor ? theme.colors.text : "#5E718D"}
          />
        )}
        <TextInput
          style={{
            borderLeftWidth: icon ? 0.5 : 0,
            borderLeftColor: "#D7DFE9",
            width: Width ? Width : "85%",
            fontSize: fontSize ? fontSize : 14,
            fontFamily: fontFamily ? fontFamily : "Poppins-Medium",
            fontWeight: fontWeight ? fontWeight : "400",
            lineHeight: lineHeight ? lineHeight : 20,
            color: themeColor ? theme.colors.text : "#8897AE",
            padding: padding,
            marginLeft: 6,
            paddingTop: paddingTop,
            paddingBottom: paddingBottom,
            paddingLeft: paddingLeft,
          }}
          editable
          multiline
          numberOfLines={6}
          maxLength={40}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder ? "  " + placeholder : "placeholder"}
          placeholderTextColor={themeColor ? theme.colors.text : "#AFBACA"}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
        {lable === "Password" ||
        lable === "Current Password" ||
        lable === "Confirm Password" ? (
          <Icon
            name={showPassword ? "eye" : "eye-off"}
            size={20}
            color={themeColor ? theme.colors.text : "#5E718D"}
            type="ionicon"
            onPress={togglePasswordVisibility}
            style={styles.icon}
          />
        ) : null}
        {edit ? <Edit /> : null}
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
      marginTop: 20,
      fontSize: 14,
      lineHeight: 27,
      fontFamily: "Poppins-Medium",
    },
    icon: {
      marginLeft: 20,
    },
  });
export default index;
