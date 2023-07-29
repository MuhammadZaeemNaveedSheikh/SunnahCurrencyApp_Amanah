import { StyleSheet } from "react-native";
import { View } from "react-native";
const Index = () => {
  return (
    <>
      <View style={{ alignItems: "center" }}>
        <View style={styles.lastLine} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  lastLine: {
    backgroundColor: "#B3924F",
    marginTop: 15,
    width: 66,
    height: 6,
    borderRadius: 100,
  },
});
export default Index;
