import React from "react";
import { AppButton } from "..";
import { Text } from "react-native";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import { Modal } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { useTheme, DefaultTheme } from "react-native-paper";
import { usethemeContext } from "../../services/AppContext";

const index = ({ onPress, name }) => {
  const [modalVisible, setModalVisible] = useState(true);
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
              <View style={styles.rowDiv}>
                <Text style={[styles.upload]}>
                  {name ? name : "Gold Dinar"}
                </Text>
                <Icon
                  name="favorite"
                  color="red"
                  size={20}
                  style={{ marginLeft: 3 }}
                />
              </View>
              <View style={styles.rowDiv}>
                <Text style={[styles.item]}>220 Items Sold </Text>
                <View>
                  <Text style={[styles.price]}> €224.40</Text>
                </View>
              </View>
              <View style={styles.rowDiv}>
                <View style={styles.alignDiv}>
                  <Text style={[styles.item]}> 4.7</Text>
                  <Icon name="star" type="material" color="#FFD700" size={13} />
                </View>
                <View style={styles.alignDiv}>
                  <Text style={[styles.ratio]}>+ 0.56%</Text>
                  <Text style={[styles.ratioh]}> | 24h </Text>
                </View>
              </View>
              <View style={styles.line} />
              <Text style={[styles.textStyle]}>Product Description </Text>
              <View style={{ alignItems: "center" }}>
                <Text
                  onPress={() => setModalVisible(!modalVisible)}
                  style={[styles.des]}
                >
                  Lorem ipsum dolor sit amet consectetur. Proin donec neque
                  adipiscing ipsum in velit ac tempus. Quis euismod et sed a.
                  Euismod senectus augue magnis tellus id felis consequat.
                  Facilisis elit sed mattis libero pulvinar aliquam morbi. In
                  erat est arcu neque purus auctor sed elit nam. Cras interdum
                  orci euismod sodales in. Metus diam neque ut euismod eu amet
                  sed sodales. In aenean tortor varius amet etiam elementum id
                  diam dolor. Potenti habitasse bibendum parturient condimentum
                  hac diam diam. Quis fermentum at vulputate nisl{" "}
                </Text>
              </View>
              <AppButton
                onPress={onPress}
                lable={"BUY"}
                width={"100%"}
                height={46}
                marginTop={50}
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
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
    },

    rowDiv: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between",
    },
    modalView: {
      width: "100%",
      height: 480,
      backgroundColor: prop.themeColor
        ? prop.theme.colors.bgColor
        : prop.theme.colors.white,
      borderTopEndRadius: 32,
      borderTopStartRadius: 32,
      paddingHorizontal: 20,
      paddingTop: 26,
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      marginTop: 21,
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 14,
    },
    upload: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 18,
      fontFamily: "Poppins-Medium",
    },
    des: {
      color: prop.themeColor ? prop.theme.colors.text : prop.theme.colors.gray,
      marginTop: 17,
      fontSize: 12,
      fontFamily: "Poppins-Regular",
      lineHeight: 18,
    },
    line: {
      borderTopColor: "#0000001F",
      borderWidth: 0.5,
      marginTop: 19,
    },
    lastLine: {
      marginTop: 27,
      width: 134,
      height: 5,
      borderRadius: 100,
    },

    item: {
      color: prop.themeColor ? prop.theme.colors.text : prop.theme.colors.gray,
      fontSize: 16,
      lineHeight: 24,
    },
    price: {
      fontSize: 20,
      lineHeight: 30,
      fontFamily: "Poppins-Medium",
    },
    ratio: {
      color: "#3BACA6",
      fontSize: 10,
      // lineHeight: 10,
      fontFamily: "Poppins-Medium",
    },
    ratioh: {
      color: "#8897AE",
      fontSize: 10,
      // lineHeight: 10,
      fontFamily: "Poppins-Medium",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
  });
export default index;
