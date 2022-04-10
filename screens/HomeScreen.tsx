import React from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";
import Heading from "../components/Heading";
import HorizontalCalendar from "../components/HorizontalCalendar";
import {theme} from "../constants/theme";
import MainLayout from "../components/MainLayout";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<any>

const HomeScreen: React.FC<Props> = ({navigation}) => {

  const openAddNewTrainingScreen = () => {
    navigation.navigate("Добавить тренировку")
  }

  return (
    <MainLayout>
      <View style={styles.title}>
        <Heading
          size="lg"
          title="Мои тренировки"/>
        <Pressable
          onPress={openAddNewTrainingScreen}
          style={styles.addButton}>
          <Text style={styles.addButtonText}>
            Добавить
          </Text>
        </Pressable>
      </View>

      <View style={styles.calendar}>
        <HorizontalCalendar/>
      </View>
    </MainLayout>
  )
}

const styles = StyleSheet.create({
  title: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },
  addButton: {
    backgroundColor: "#4BB543",
    padding: 5,
    borderRadius: 10,
    paddingHorizontal: 10
  },
  addButtonText: {
    color: theme.textColor,
  },
  calendar: {
    marginTop: 10
  },
})

export default HomeScreen
