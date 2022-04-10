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

const dayTranslations = [
  "Пн",
  "Вт",
  "Ср",
  "Чт",
  "Пт",
  "Сб",
  "Вс"
]

const getDayLabel = (item: Date) => {
  return dayTranslations[item.getDay()]
}

const isToday = (item: Date) => {
  return item.getDate() === new Date().getDate()
}

const HorizontalCalendarItem: React.FC<Props> = ({item, index}) => {
  const day = item.getDate()
  const dayLabel = getDayLabel(item)

  const onSelectDate = () => {

  }

  return (
    <Pressable
      onPress={onSelectDate}
      style={[styles.root, isToday(item) && styles.currentDay]}>
      <Text style={styles.day}>{day}</Text>
      <Text style={styles.dayLabel}>{dayLabel}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  root: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    backgroundColor: theme.primaryColor80,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginRight: 5
  },
  day: {
    fontSize: 22,
    color: theme.textColor,
    fontWeight: "900",
  },
  dayLabel: {
    fontSize: 16,
    color: theme.textColor,
    fontWeight: "600"
  },
  currentDay: {
    backgroundColor: theme.primaryColor,
  }
})

export default HorizontalCalendarItem
