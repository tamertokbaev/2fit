import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Heading from "../components/Heading";
import HorizontalCalendar from "../components/HorizontalCalendar";


const HomeScreen: React.FC = () => {

  return (
    <View style={styles.root}>
      <Heading
        size="md"
        title="Мои тренировки"/>
      <View style={styles.calendar}>
        <HorizontalCalendar/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    padding: 15
  },
  calendar: {
    marginTop: 10
  }
})

export default HomeScreen
