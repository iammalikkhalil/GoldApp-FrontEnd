import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../assets/Colors'

export default function SilverCalculator() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>Comming Soon !</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.primaryFontColor,
  },
})