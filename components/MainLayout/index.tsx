import React from "react";
import {View, StyleSheet} from "react-native";
import BottomNavigationBar from "../BottomNavigationBar";

type Props = {

}

const MainLayout: React.FC<Props> = ({children}) => {

  return (
    <View style={styles.root}>
      {children}
      <BottomNavigationBar/>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 15,
    paddingTop: 20
  }
})

export default MainLayout
