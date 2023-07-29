import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  ChangePassword,
  Dashboard,
  EditAddress,
  Editinfo,
  ForgotPassword,
  Gold,
  GoldDetail,
  GoldDetailForm,
  GoldDetaild2,
  History,
  Home,
  LanguageSelector,
  Login,
  // Lorem1,
  // Lorem2,
  ManageFiles,
  OnBoarding,
  Order,
  OrderConfirm,
  PersonalInfo,
  RegistrationInfo,
  Settings,
  Silver,
  Splash,
  SupportTicket,
  SupportTicketDetail,
  UserDocFiles,
  UserDocs,
  contactUs,
} from "../screens";
import MyTabs from "./bottomNavigation";
const Stack = createStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="splash"
      >
        <Stack.Screen name="myTabs" component={MyTabs} />
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="languageSelector" component={LanguageSelector} />
        <Stack.Screen name="onBoarding" component={OnBoarding} />
        {/* <Stack.Screen name="lorem1" component={Lorem1} /> */}
        {/* <Stack.Screen name="lorem2" component={Lorem2} /> */}
        <Stack.Screen name="registrationInfo" component={RegistrationInfo} />
        <Stack.Screen name="personalInfo" component={PersonalInfo} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="forgotPassword" component={ForgotPassword} />
        <Stack.Screen name="userDocs" component={UserDocs} />
        <Stack.Screen name="userDocFiles" component={UserDocFiles} />
        <Stack.Screen name="goldDetail" component={GoldDetail} />
        <Stack.Screen name="goldDetail2" component={GoldDetaild2} />
        <Stack.Screen name="orderHistory" component={History} />
        <Stack.Screen name="order" component={Order} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="gold" component={Gold} />
        <Stack.Screen name="silver" component={Silver} />
        <Stack.Screen name="dashboard" component={Dashboard} />
        <Stack.Screen name="orderConfirm" component={OrderConfirm} />
        <Stack.Screen name="goldDetailForm" component={GoldDetailForm} />
        <Stack.Screen name="contactUs" component={contactUs} />
        <Stack.Screen name="changePassword" component={ChangePassword} />
        <Stack.Screen name="editinfo" component={Editinfo} />
        <Stack.Screen name="editAddress" component={EditAddress} />
        <Stack.Screen name="manageFiles" component={ManageFiles} />
        <Stack.Screen name="settings" component={Settings} />
        <Stack.Screen name="supportTicket" component={SupportTicket} />
        <Stack.Screen
          name="supportTicketDetail"
          component={SupportTicketDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
