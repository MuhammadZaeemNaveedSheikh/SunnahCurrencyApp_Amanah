import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import {
  AuthTitle,
  AuthTitle2,
  authTitle,
  bg,
  bg2,
} from "../../../imageSource";
import { AppButton, Drop, LastLine } from "../../../components";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import { usethemeContext } from "../../../services/AppContext";
import { useTheme, DefaultTheme } from "react-native-paper";

const Index = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const navigation = useNavigation();

  const handleOpenModal = () => {
    setModalVisible(true);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const theme = useTheme();
  const { themeColor, setThemeColor } = usethemeContext();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);
  return (
    <ImageBackground source={themeColor ? bg2 : bg} resizeMode="cover">
      <ScrollView contentContainerStyle={styles.container}>
        {themeColor ? (
          <AuthTitle2 style={styles.image} />
        ) : (
          <AuthTitle style={styles.image} />
        )}
        <View style={styles.rowDiv}>
          <Text style={styles.info}>User Documentation</Text>
          <Text style={styles.step}>Step 3 of 3</Text>
        </View>
        <View style={styles.inputContainer}>
          <Drop
            onPress={() => setModalVisible(true)}
            name="Passport PDF"
            lable={"Upload Passport PDF"}
            file={"File Format: PDF"}
          />
          <Drop
            onPress={() => setModalVisible(true)}
            name="Passport Sized Photo"
            lable={"Passport Sized Photo PDF"}
            file={"File Format: PDF, JPG, JPEG"}
          />
          <Drop
            onPress={() => setModalVisible(true)}
            name="Address PDF"
            lable={"Proof of Address PDF"}
            file={"File Format: PDF, JPG, JPEG"}
          />

          <Drop
            onPress={() => setModalVisible(true)}
            name="Billing Statement"
            lable={"Billing Statement in Last 3 months PDF"}
            file={"File Format: PDF, JPG, JPEG"}
          />
          <AppButton
            onPress={() => navigation.navigate("userDocFiles")}
            label={"Continue"}
            width={"100%"}
            color={"#7E7E7E"}
            backgroundColor={"#343434"}
            height={46}
            marginTop={26}
            fontWeight="600"
            fontSize={14}
          />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={handleCloseModal}
        >
          <TouchableOpacity
            style={styles.backdrop}
            onPress={handleCloseModal}
            activeOpacity={1}
          >
            <View style={styles.modalView}>
              <View style={{ marginBottom: 6 }}>
                <LastLine />
              </View>
              <Text style={[styles.upload]}>Upload File </Text>
              <View style={{ alignItems: "center" }}>
                <Text style={[styles.textStyle, { marginTop: 11 }]}>
                  Upload From Dropbox
                </Text>
                <View style={styles.line} />
                <Text style={styles.textStyle}>Upload from Library</Text>
                <View style={styles.line} />
                <AppButton
                  backgroundColor="transparent"
                  marginTop={5}
                  lable={"CANCEL"}
                  fontSize={12}
                  color={themeColor ? theme.colors.text : "#8897AE"}
                />
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </ScrollView>
    </ImageBackground>
  );
};

const createStyles = (prop) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
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
    backdrop: {
      flex: 1,
      backgroundColor: "#A7A7A780",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    modalView: {
      width: "100%",
      height: 221,
      backgroundColor: prop.themeColor ? "#1E1E1E" : "transparent",
      borderTopEndRadius: 32,
      borderTopStartRadius: 32,
      paddingHorizontal: 35,
    },

    textStyle: {
      color: prop.themeColor ? prop.theme.colors.textWhite : "#49484E",
      fontSize: 14,
      fontWeight: "500",
      lineHeight: 21,
    },
    line: {
      width: "100%",
      marginVertical: 11,
      borderTopWidth: 0.5,
      borderTopColor: prop.themeColor ? "#ECEEF5" : "#0000001F",
    },
    upload: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 16,
      fontFamily: "Poppins-Medium",
      lineHeight: 32,
    },
  });

export default Index;
