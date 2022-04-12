import React from "react";
import {View, Text} from "react-native";
import MainLayout from "../../components/MainLayout";
import Heading from "../../components/Heading";
import AddNewTrainingForm from "./AddNewTrainingForm";
import {useForm} from "react-hook-form";

type Props = {

}

const AddNewTrainingScreen: React.FC<Props> = () => {
  const addNewTrainingForm = useForm()

  return (
    <MainLayout>
      <Heading size="lg" title="Новая тренировка"/>
      <AddNewTrainingForm
        form={addNewTrainingForm}
      />
    </MainLayout>
  )
}

export default AddNewTrainingScreen
