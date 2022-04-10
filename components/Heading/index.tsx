import React from "react";
import {StyleSheet, Text} from "react-native";

type Props = {
  size: "xl" | "lg" | "md" | "sm",
  title: string
}

const Heading: React.FC<Props> = ({title, size}) => {

  return (
    <Text style={styles[size]}>
      {title}
    </Text>
  )
}

const styles = StyleSheet.create({
  xl: {
    fontSize: 32
  },
  lg: {
    fontSize: 28
  },
  md: {
    fontSize: 24
  },
  sm: {
    fontSize: 20
  }
})

export default Heading
