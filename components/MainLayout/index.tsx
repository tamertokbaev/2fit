import React from "react";
import {View, StyleSheet} from "react-native";

type Props = {}

const MainLayout: React.FC<Props> = ({children}) => {

  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <>{children}</>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-between",

  },
  content: {
    paddingHorizontal: 15,
    paddingTop: 20
  }
})

export default MainLayout
