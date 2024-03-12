// App.js

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./src/screens/Home";
import Inbox from "./src/screens/Inbox";
import Profile from "./src/screens/Profile";
import Login from "./src/screens/Login";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, Button } from 'react-native';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 90,
    background: "#fff",
  },
};

const HomeStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const InboxStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Inbox" component={Inbox} />
  </Stack.Navigator>
);

const ProfileStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <AntDesign
                  name="home"
                  size={26}
                  color={focused ? "#000" : "#aaa"}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={InboxStackScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <AntDesign
                  name="inbox"
                  size={26}
                  color={focused ? "#000" : "#aaa"}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Ionicons
                  name="person-circle-outline"
                  size={26}
                  color={focused ? "#000" : "#aaa"}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
