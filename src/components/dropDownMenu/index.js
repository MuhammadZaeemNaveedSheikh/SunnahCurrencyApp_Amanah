import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SelectList, SearchList } from "react-native-dropdown-select-list";
import { usethemeContext } from "../../services/AppContext";
import { useTheme, DefaultTheme } from "react-native-paper";

const Index = ({
  data,
  label,
  notFoundText,
  searchPlaceholder,
  placeholder,
  marginTop,
  marginBottom,
  style,
}) => {
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState("");
  const theme = useTheme();
  const { themeColor, setThemeColor } = usethemeContext();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const handleSelect = (value) => {
    setSelected(value);
    setSearchText(value);
  };

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <SelectList
          onSelect={handleSelect}
          setSelected={(text) => setSelected(text)}
          data={data ? data : options}
          defaultOption={"selected"}
          save="value"
          boxStyles={styles.boxStyles}
          inputStyles={styles.inputStyles}
          dropdownStyles={styles.dropdownStyles}
          dropdownItemStyles={styles.dropdownItemStyles}
          dropdownTextStyles={styles.dropdownTextStyles}
          searchPlaceholder={searchPlaceholder}
          notFoundText={notFoundText}
          placeholder={placeholder}
          searchIcon={<></>}
          placeholderTextColor={prop.themeColor ? prop.theme.colors.text : prop.theme.colors.gray}
        >
          <SearchList
            data={options}
            onChangeText={(text) => setSearchText(text)}
            value={selected}
            inputStyle={{ color: prop.themeColor ? prop.theme.colors.textWhite : prop.theme.colors.gray }}
          />
        </SelectList>
      </View>
    </>
  );
};

const createStyles = (prop) =>
  StyleSheet.create({
    container: {
      marginTop: 6,
      width: "100%",
      backgroundColor: prop.themeColor ? "#0D0D0D" : "white",
    },
    label: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      marginTop: 20,
      fontSize: 14,
      lineHeight: 27,
      fontFamily: "Poppins-Medium",
    },
    boxStyles: {
      borderWidth: 1,
      borderColor: prop.themeColor ? prop.theme.colors.text : "#AFBACA",
      borderRadius: 4,
      height: 46,
      borderRadius: 6,
      paddingBottom: 10,
    },
    inputStyles: {
      height: 25,
      color: prop.themeColor ? prop.theme.colors.textWhite : prop.theme.colors.gray,
      placeholderTextColor: prop.themeColor ? prop.theme.colors.text : prop.theme.colors.gray,
    },
    dropdownStyles: {
      maxHeight: 200,
    },
    dropdownItemStyles: {
      color: "red",
    },
    dropdownTextStyles: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.gray,
    },
  });

export default Index;
