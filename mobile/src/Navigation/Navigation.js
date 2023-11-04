import SplashScreen from "../screens/auth/SplashScreen";
import Login from "../screens/auth/Login";
import Dashboard from "../screens/student/Dashboard";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigation from "./DrawerNavigation";

const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false }}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
        />
        {/* Auth Navigator: Include Login */}
        <Stack.Screen
          name="Login"
          component={Login}
        />
        {/* Ipapalit yung Drawer para sa Dashboard */}
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation