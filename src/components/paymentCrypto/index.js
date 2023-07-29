import React from "react";
import { AppButton, LastLine } from "..";
import { Text } from "react-native";
import { View } from "react-native";
import { Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";
import { useTheme, DefaultTheme } from "react-native-paper";
import { usethemeContext } from "../../services/AppContext";

const index = ({ onPress, modalVisible, setModalVisible }) => {
  const navigation = useNavigation();
  const [selectedIndex, setIndex] = React.useState(0);
  const [selectedIndex2, setIndex2] = React.useState(0);
  const theme = useTheme();
  const { themeColor, setThemeColor } = usethemeContext();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);
  return (
    <>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{ marginBottom: 24 }}>
                <LastLine />
              </View>
              <Text style={[styles.upload]}>Payment Method</Text>
              <Text style={[styles.upload, { marginTop: 10 }]}>
                Pay By Crypto
              </Text>
              <View style={styles.rowDiv}>
                <View style={styles.alignDiv}>
                  <CheckBox
                    checked={selectedIndex === 1}
                    onPress={() => setIndex(1)}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checkedColor={
                      themeColor ? theme.colors.gold : theme.colors.black
                    }
                    uncheckedColor={
                      themeColor ? theme.colors.gold : theme.colors.black
                    }
                  />
                  <Text style={[styles.payment]}>Pay By BTC</Text>
                </View>
                <View style={styles.alignDiv}>
                  <CheckBox
                    checked={selectedIndex2 === 1}
                    onPress={() => setIndex2(1)}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checkedColor={
                      themeColor ? theme.colors.gold : theme.colors.black
                    }
                    uncheckedColor={
                      themeColor ? theme.colors.gold : theme.colors.black
                    }
                  />
                  <Text style={[styles.payment]}>Pay By ETH</Text>
                </View>
              </View>
              <AppButton
                onPress={onPress}
                lable={"Confirm"}
                width={"100%"}
                height={46}
                marginTop={42}
                fontWeight="600"
                fontSize={14}
              />
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const createStyles = (prop) =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    alignDiv: {
      alignItems: "center",
      marginLeft: -10,
      flexDirection: "row",
    },
    rowDiv: {
      marginTop: 13,
      borderRadius: 6,
      borderWidth: 0.5,
      borderColor: prop.themeColor ? "#AFBACA" : "#D9C8A7",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      padding: 11,
      justifyContent: "space-between",
    },
    modalView: {
      width: "100%",
      height: 307,
      backgroundColor: prop.themeColor
        ? prop.theme.colors.bgColor
        : prop.theme.colors.white,
      borderTopEndRadius: 32,
      borderTopStartRadius: 32,
      paddingHorizontal: 20,
    },
    upload: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "Poppins-Medium",
    },
    payment: {
      marginLeft: -10,
      color: prop.themeColor ? prop.theme.colors.textWhite : "#2D3643",
      fontSize: 14,
      lineHeight: 24,
      fontFamily: "Poppins-Medium",
    },
  });
export default index;
