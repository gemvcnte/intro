import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import Inbox from "./src/screens/Inbox";
import Profile from "./src/screens/Profile";
import { Ionicons } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: true,
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

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <AntDesign
                    name="home"
                    size={26}
                    color={focused ? "#000" : "#aaa"}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={Inbox}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <AntDesign
                    name="inbox"
                    size={26}
                    color={focused ? "#000" : "#aaa"}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Ionicons
                    name="person-circle-outline"
                    size={26}
                    color={focused ? "#000" : "#aaa"}
                  />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
