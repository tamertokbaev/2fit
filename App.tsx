// @ts-nocheck
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {theme} from "./constants/theme";
import StatisticsScreen from "./screens/StatisticsScreen";
import SettingsScreen from "./screens/SettingsScreen";


const Tab = createBottomTabNavigator();

const routeIcons = {
  "Главная": 'home',
  "Статистика": 'stats-chart',
  "Настройки": 'settings'
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name={routeIcons[route.name]} size={size} color={color}/>;
          },
          tabBarActiveTintColor: theme.primaryColor,
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Главная" component={HomeScreen}/>
        <Tab.Screen name="Статистика" component={StatisticsScreen}/>
        <Tab.Screen name="Настройки" component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App
