import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; //not needed because it already have in the root import { NavigationContainer } from "@react-navigation/native"; import {IoniIcons}  from "@expo/vector-icons"
import Home from "../screens/Home";
import Inbox from "../screens/Inbox";
import Profile from "../screens/Profile";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
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
        component={Inbox}
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
        component={Profile}
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
  );
}
