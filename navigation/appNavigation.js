import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import useAuth from "../hooks/useAuth";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

const appNavigation = () => {
  const { user } = useAuth();

  if (user) {
    return (
      <NavigationContainer>
        <TabNavigator  />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            options={{ headerShown: false }}
            component={WelcomeScreen}
          />
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={LoginScreen}
          />
          <Stack.Screen
            name="ForgotPasswordScreen"
            options={{ headerShown: false }}
            component={ForgotPasswordScreen}
          />
          <Stack.Screen
            name="SignUp"
            options={{ headerShown: false }}
            component={SignUpScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default appNavigation;
