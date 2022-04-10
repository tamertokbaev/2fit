import React from "react";
import {View, Text} from "react-native";
import MainLayout from "../components/MainLayout";

type Props = {

}

const AddNewTrainingScreen: React.FC<Props> = () => {

  return (
    <MainLayout>
      <Text>Новая тренировка</Text>
    </MainLayout>
  )
}

export default AddNewTrainingScreen
