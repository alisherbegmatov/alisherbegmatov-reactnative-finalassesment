import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Bands from "./src/Bands/index";
import Stats from "./src/Stats/index";
import BandStyles from "./src/BandStyles";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case "Bands":
                iconName = "hand-rock-o";
                break;
              case "Stats":
                iconName = "bar-chart";
                break;
              case "Styles":
                iconName = "superpowers";
                break;
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "darkred",
          tabBarStyle: { backgroundColor: "black" },
        })}
      >
        <Tab.Screen name="Bands" component={Bands} />
        <Tab.Screen name="Stats" component={Stats} />
        <Tab.Screen name="Styles" component={BandStyles} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
