// @ts-nocheck
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AddNewTrainingScreen from "../screens/addNewTraining/AddNewTrainingScreen";

type Props = {

}

const HomeStack = createNativeStackNavigator()

const HomeStackNavigation: React.FC<Props> = () => {

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Главная" component={HomeScreen}/>
      <HomeStack.Screen name="Добавить тренировку" component={AddNewTrainingScreen}/>
    </HomeStack.Navigator>
  )
}

export default HomeStackNavigation
