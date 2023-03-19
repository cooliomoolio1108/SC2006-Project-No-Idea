import React, { useContext } from "react";
import { initializeApp, getApps } from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useTheme, themeColor } from "react-native-rapi-ui";
import TabBarIcon from "../components/utils/TabBarIcon";
import TabBarText from "../components/utils/TabBarText";
//Screens
import Home from "../screens/Home";
import TripInfo from "../screens/TripInfo";
import AddTrip from "../screens/AddTrip";
import PriceEstimatorPopup from "../screens/PriceEstimatorPopup";
import Settings from "../screens/Settings";
import Analytics from "../screens/Analytics";
import Loading from "../screens/utils/Loading";
// Auth screens
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import ForgetPassword from "../screens/auth/ForgetPassword";
import { AuthContext } from "../provider/AuthProvider";

// Better put your these secret keys in .env file
const firebaseConfig = {
  apiKey: "AIzaSyAWhbPREvmN51UzukuNu4rV5LE8cAp4O7s",
  authDomain: "swe-project-2023.firebaseapp.com",
  projectId: "swe-project-2023",
  storageBucket: "swe-project-2023.appspot.com",
  messagingSenderId: "522596541462",
  appId: "1:522596541462:web:dde04cd3a8df9db9ba4137",
  measurementId: "G-ZG1FX7W0L4"
};

if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

const AuthStack = createNativeStackNavigator();
const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
    </AuthStack.Navigator>
  );
};

const MainStack = createNativeStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="TripInfo" component={TripInfo} />
    </MainStack.Navigator>
  );
};

const AddTripStack = createNativeStackNavigator();
const AddTripMain = () => {
  return (
    <AddTripStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AddTripStack.Screen name="AddTrip" component={AddTrip} />
      <AddTripStack.Screen name="PriceEstimator" component={PriceEstimatorPopup} />
    </AddTripStack.Navigator>
  )
}

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  const { isDarkmode } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: isDarkmode ? themeColor.dark100 : "#c0c0c0",
          backgroundColor: isDarkmode ? themeColor.dark200 : "#ffffff",
        },
      }}
    >
      {/* these icons using Ionicons */}
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Home" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"md-home"} />
          ),
        }}
      />
      <Tabs.Screen
        name="AddTripMain"
        component={AddTripMain}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Add Trip" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"add"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Analytics"
        component={Analytics}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Analytics" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"ios-bar-chart"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Settings" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"settings"} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default () => {
  const auth = useContext(AuthContext);
  const user = auth.user;
  return (
    <NavigationContainer>
      {user == null && <Loading />}
      {user == false && <Auth />}
      {user == true && <Main />}
    </NavigationContainer>
  );
};
