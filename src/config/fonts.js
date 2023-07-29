import * as Font from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    // 200
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    // 400
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    // 500
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    // 600
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    // 700
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    // 800
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
  });
};
