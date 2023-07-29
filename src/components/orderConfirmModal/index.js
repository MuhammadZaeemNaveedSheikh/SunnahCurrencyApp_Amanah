import React from "react";
import { AppButton } from "..";
import { Text } from "react-native";
import { View } from "react-native";
import { Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
const index = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View contentContainerStyle={styles.container}>
          <View style={styles.rowDiv}>
            <Text style={styles.step}>Order Confirmation</Text>
            <Text style={styles.info}>
              your order is placed and your order is XXXXX.
            </Text>
          </View>
          <AppButton
            onPress={() => navigation.navigate("orderHistory")}
            lable={"Buy More"}
            width={"100%"}
            height={46}
            marginTop={20}
            fontWeight="600"
            fontSize={14}
          />
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
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
    backgroundColor: "white",
    borderTopEndRadius: 32,
    borderTopStartRadius: 32,
    paddingHorizontal: 20,
    paddingTop: 26,
  },
  line: {
    borderTopColor: "#0000001F",
    borderWidth: 0.5,
    marginTop: 19,
  },
  item: {
    color: "#8897AE",
    fontSize: 16,
    lineHeight: 24,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    backgroundColor: "#EAEAEA",
    alignItems: "center",
    paddingTop: 62,
    paddingBottom: 20,
  },
  step: {
    color: "#343434",
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Poppins-Medium",
  },
  info: {
    color: "#8897AE",
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Poppins-Regular",
  },
  rowDiv: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
});
export default index;
