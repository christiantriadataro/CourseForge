import React from "react";
import Dashboard from "../screens/student/Dashboard";
import { createStackNavigator } from "@react-navigation/stack";
import Menu from "../screens/student/Menu";
import Profile from "../screens/student/Profile";
import Courses from "../screens/student/Courses";
import Course from "../screens/student/Course";
const Stack = createStackNavigator();
const DrawerNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
      headerShown: false,
        animationEnabled: true,
        animationTypeForReplace: "push",
        gestureEnabled: true,
        gestureDirection: 'horizontal',
    }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Menu" component={Menu}/>
      <Stack.Screen name="Profile" component={Profile}/>
      <Stack.Screen name="Courses" component={Courses}/>
      <Stack.Screen name="Course" component={Course}/>
    </Stack.Navigator>
  );
};

export default DrawerNavigation;
