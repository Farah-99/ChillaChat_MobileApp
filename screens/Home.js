import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { TextInput, Button, TouchableOpacity } from "react-native";
import Profile from "./fragment_home/Profile";
import Liste from "./fragment_home/Liste";
import Groupe from "./fragment_home/Groupe";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Chat from "./fragment_home/Chat";


const Tab = createMaterialBottomTabNavigator();

export default function Home() {
  return (

    <Tab.Navigator 
      activeColor="#000"
    inactiveColor="gray"
    barStyle={{ backgroundColor: '#DEE2E5' }}
    shifting={false}
    >
      <Tab.Screen name="Liste" component={Liste} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Chat" component={Chat} />

    </Tab.Navigator>

  );
}

