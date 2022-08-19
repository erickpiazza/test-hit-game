import React from "react";
import { Platform, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Classification from "../screens/Classification";
import Clubs from "../screens/Clubs";
import theme from "../global/styles/theme";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerBackground: () => (
          <View
            style={{ backgroundColor: theme.colors.green, height: "100%" }}
          />
        ),
        headerTitleStyle: { color: theme.colors.white },
        tabBarActiveTintColor: theme.colors.green,
        tabBarInactiveTintColor: theme.colors.gray_dark,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 88,
        },
        tabBarLabelStyle: { fontFamily: theme.fonts.bold },
      }}
    >
      <Screen
        name="Classificação"
        component={Classification}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Screen
        name="Clubes"
        component={Clubs}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="sports-soccer" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
