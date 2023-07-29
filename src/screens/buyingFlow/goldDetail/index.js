import React, { useState } from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import {
  BuyGoldDinar,
  GoldCard,
  GoldDescription,
  OrderConfirmation,
  PaymentCardDetail,
  PaymentCrypto,
  PaymentbyCardCrypto,
} from "../../../components";
import { bg, bg2 } from "../../../imageSource";
import { usethemeContext } from "../../../services/AppContext";
import { useTheme, DefaultTheme } from "react-native-paper";
const Index = () => {
  const [activeModalIndex, setActiveModalIndex] = useState(0);

  const handleContinue = () => {
    if (activeModalIndex < modalData.length - 1) {
      setActiveModalIndex(activeModalIndex + 1);
    } else {
      console.log("All modals completed");
    }
  };
  const theme = useTheme();
  const { themeColor, setThemeColor } = usethemeContext();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);

  const modalData = [
    {
      title: "Modal 1",
      content: (
        <GoldDescription onPress={handleContinue} name="2023 Memorial Gold" />
      ),
    },
    {
      title: "Modal 2",
      content: <BuyGoldDinar onPress={handleContinue} />,
    },
    {
      title: "Modal 3",
      content: <PaymentbyCardCrypto onPress={handleContinue} />,
    },
    {
      title: "Modal 4",
      content: <PaymentCardDetail onPress={handleContinue} />,
    },
    {
      title: "Modal 5",
      content: <PaymentCrypto onPress={handleContinue} />,
    },
    {
      title: "Modal 6",
      content: <OrderConfirmation onPress={handleContinue} />,
    },
  ];

  return (
    <ImageBackground
      source={themeColor ? bg2 : bg}
      resizeMode="cover"
      style={styles.bg}
    >
      <View style={styles.container}>
        <GoldCard />
        {modalData.map((modal, index) => {
          switch (index) {
            case activeModalIndex:
              return (
                <React.Fragment key={index}>{modal.content}</React.Fragment>
              );
            default:
              return null;
          }
        })}
        {activeModalIndex > 0 && <View style={styles.backdrop} />}
      </View>
    </ImageBackground>
  );
};

const createStyles = (prop) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      alignItems: "center",
      paddingTop: 40,
    },
    bg: {
      backgroundColor: prop.themeColor ? "#1E1E1E" : "transparent",
      flex: 1,
    },
    backdrop: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "#A7A7A780",
      zIndex: 1,
    },
  });

export default Index;
