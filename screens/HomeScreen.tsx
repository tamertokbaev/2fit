import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Heading from "../components/Heading";


const HomeScreen: React.FC = () => {

  return (
    <View style={styles.root}>
      <Heading
        size="xl"
        title="Home view!"/>

    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    padding: 15
  },

})

export default HomeScreen
