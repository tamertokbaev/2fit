import React from "react";
import {Text, StyleSheet, Pressable, Dimensions} from "react-native";
import {theme} from "../../constants/theme";

type Props = {
  item: Date,
  index: number
}

const { width } = Dimensions.get('window')
const ITEM_WIDTH = width / 7
const ITEM_HEIGHT = 60

const HorizontalCalendarItem: React.FC<Props> = ({item, index}) => {
  const day = item.getDate()

  const onSelectDate = () => {
    console.log(item)
  }

  return (
    <Pressable
      onPress={onSelectDate}
      style={styles.root}>
      <Text style={styles.day}>
        {day}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  root: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    backgroundColor: theme.primaryColor,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginRight: 5
  },
  day: {
    fontSize: 22,
    color: theme.textColor,
    fontWeight: "600",
  },
})

export default HorizontalCalendarItem
