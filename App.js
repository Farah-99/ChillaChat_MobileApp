import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import OnboardingScreen from "./screens/OnboardingScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "./screens/fragment_home/Chat";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import useFonts from './useFonts';
import React, { useState } from 'react'




const Stack = createNativeStackNavigator();
export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return(
  <NavigationContainer>

    <Stack.Navigator>
      <Stack.Screen name="onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="signin" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="signup" component={SignUp} options={{ headerShown: false }}/>
      <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="chat" component={Chat} options={{ headerShown: false }} />
      
    </Stack.Navigator>
  </NavigationContainer>);
}

