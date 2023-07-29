import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { useTheme, DefaultTheme } from "react-native-paper";
import { usethemeContext } from "../../services/AppContext";

const Index = ({
  marginTop,
  backgroundColor,
  borderRadius,
  width,
  height,
  lable,
  justifyContent,
  alignItems,
  onPress,
  color,
  fontSize,
  fontWeight,
  lineHeight,
}) => {
  const theme = useTheme();
  const { themeColor, setThemeColor } = usethemeContext();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: marginTop ? marginTop : 41,
        backgroundColor: themeColor ? backgroundColor || "#BB9D61" : "#343434",
        borderRadius: borderRadius ? borderRadius : 6,
        width: width ? width : 115,
        height: height ? height : 34,
        justifyContent: justifyContent ? justifyContent : "center",
        alignItems: alignItems ? alignItems : "center",
      }}
    >
      <Text
        style={{
          color: themeColor ? color || "#0D0D0D" : "#fff",
          fontSize: fontSize ? fontSize : 10,
          fontWeight: fontWeight ? fontWeight : 600,
          lineHeight: lineHeight ? lineHeight : 15,
        }}
      >
        {lable ? lable : "Continue"}
      </Text>
    </TouchableOpacity>
  );
};
export default Index;
