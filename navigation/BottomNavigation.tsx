// @ts-nocheck
import React from "react";
import {Ionicons} from "@expo/vector-icons";
import {theme} from "../constants/theme";
import HomeScreen from "../screens/HomeScreen";
import StatisticsScreen from "../screens/StatisticsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeStackNavigation from "./HomeStackNavigation";

type Props = {

}

const Tab = createBottomTabNavigator();

const routeIcons = {
  "Главная": 'home',
  "Статистика": 'stats-chart',
  "Настройки": 'cog'
}

const BottomNavigation: React.FC<Props> = () => {

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return <Ionicons name={routeIcons[route.name]} size={size} color={color}/>;
        },
        tabBarActiveTintColor: theme.primaryColor,
        tabBarInactiveTintColor: 'gray',
        headerShown: false
      })}
    >
      <Tab.Screen name="Главная" component={HomeStackNavigation}/>
      <Tab.Screen name="Статистика" component={StatisticsScreen}/>
      <Tab.Screen name="Настройки" component={SettingsScreen}/>
    </Tab.Navigator>
  )
}

export default BottomNavigation
