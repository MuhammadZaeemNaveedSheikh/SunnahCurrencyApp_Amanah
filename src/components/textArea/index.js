import React from "react";
import { Image } from "react-native";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { A, A2, B, B2, I, I2, Resize, Resize2, U, U2 } from "../../imageSource";
import { useTheme, DefaultTheme } from "react-native-paper";
import { usethemeContext } from "../../services/AppContext";
const TextArea = ({
  label,
  placeholder,
  value,
  options,
  onChangeText,
  minHeight,
  maxHeight,
  edit,
  style,
}) => {
  const theme = useTheme();
  const { themeColor, setThemeColor } = usethemeContext();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);
  return (
    <View style={styles.container}>
      <Text style={styles.lable}>{label}</Text>
      <View
        style={[styles.areaDiv, { flexDirection: options ? "column" : "row" }]}
      >
        <TextInput
          style={[
            styles.textArea,
            style,
            { minHeight: minHeight, maxHeight: maxHeight },
          ]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={themeColor ? theme.colors.text : "#AFBACA"}
          multiline
        />
        <View>
          {themeColor ? (
            options ? (
              <View style={{ flexDirection: "row", width: "100%" }}>
                <B2 style={{ marginLeft: 5 }} />
                <I2 style={{ marginLeft: 5 }} />
                <U2 style={{ marginLeft: 5 }} />
                <A2 style={{ marginLeft: 5 }} />
                <Resize2 style={{ marginLeft: 5 }} />
              </View>
            ) : null
          ) : options ? (
            <View style={{ flexDirection: "row", width: "100%" }}>
              <B style={{ marginLeft: 5 }} />
              <I style={{ marginLeft: 5 }} />
              <U style={{ marginLeft: 5 }} />
              <A style={{ marginLeft: 5 }} />
              <Resize style={{ marginLeft: 5 }} />
            </View>
          ) : null}
          <View>
            {edit ? <Image source={edit} style={{ marginTop: 5 }} /> : null}
          </View>
        </View>
      </View>
    </View>
  );
};
const createStyles = (prop) =>
  StyleSheet.create({
    container: {
      marginTop: 20,
    },
    areaDiv: {
      borderWidth: 1,
      borderColor: prop.themeColor ? prop.theme.colors.text : "#AFBACA",
      borderRadius: 6,
      justifyContent: "space-between",
      backgroundColor: prop.themeColor ? "#0D0D0D" : "white",
      padding: 10,
    },
    lable: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black2,
      fontSize: 14,
      lineHeight: 27,
      fontFamily: "Poppins-Medium",
    },

    textArea: {
      width: "100%",
      marginTop: 6,
      textAlignVertical: "top",
      backgroundColor: prop.themeColor ? "#0D0D0D" : "white",
    },
  });
export default TextArea;
