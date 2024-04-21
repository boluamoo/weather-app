import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RowText = (props) => {
  const {
    containerStyles,
    message1,
    messageTwoStyles,
    messageOneStyles,
    message2,
  } = props
  return (
    <View style={containerStyles}>
      <Text style={[styles.mediumText, messageOneStyles]}>{message1}</Text>
      <Text style={messageTwoStyles}>{message2}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mediumText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
})
export default RowText
