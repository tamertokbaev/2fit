import React, {useMemo} from "react";
import {View, Text, FlatList} from 'react-native'
import HorizontalCalendarItem from "./HorizontalCalendarItem";

type Props = {

}

const dateSubtractDays = (date: Date, numberOfDays: number) => {
  const result = new Date(date)
  result.setDate(result.getDate() - numberOfDays)
  return result
}

const generateHorizontalCalendarDates = (daysToDisplay: number) => {
  const today = new Date()
  let result = []
  for(let i = 0; i < daysToDisplay; i ++){
    result[i] = dateSubtractDays(today, i)
  }
  return result.reverse()
}

const HorizontalCalendar: React.FC<Props> = () => {
  const dates: Date[] = useMemo(() => {
    return generateHorizontalCalendarDates(14)
  }, [])

  return (
    <FlatList
      data={dates}
      renderItem={HorizontalCalendarItem}
      keyExtractor={(item) => item.toDateString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default HorizontalCalendar
