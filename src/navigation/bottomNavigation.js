import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { OrderHistory, Settings, dashboard } from "../screens";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Hide the header
        tabBarStyle: { display: "none" }, // Hide the bottom navigation buttons
      }}
    >
      <Tab.Screen name="dashboard" component={dashboard} />
      <Tab.Screen name="wallet" component={Settings} />
      <Tab.Screen name="orderHistory" component={OrderHistory} />
      <Tab.Screen name="settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default MyTabs;
