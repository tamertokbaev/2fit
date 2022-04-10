import React from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";
import Heading from "../components/Heading";
import HorizontalCalendar from "../components/HorizontalCalendar";
import {theme} from "../constants/theme";
import MainLayout from "../components/MainLayout";


const HomeScreen: React.FC = () => {

  return (
    <MainLayout>
      <View style={styles.title}>
        <Heading
          size="lg"
          title="Мои тренировки"/>
        <Pressable style={styles.addButton}>
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
