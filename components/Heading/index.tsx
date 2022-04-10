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
    fontSize: 32,
    fontWeight: "700",
  },
  lg: {
    fontSize: 28,
    fontWeight: "700",
  },
  md: {
    fontSize: 24,
    fontWeight: "700",
  },
  sm: {
    fontSize: 20,
    fontWeight: "700",
  }
})

export default Heading
