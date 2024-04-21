import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const IconText = (props) => {
  const { iconContainer, iconColor, iconName, bodyTextStyles, bodyText } = props
  return (
    <View style={iconContainer}>
      <Feather name={iconName} size={25} color={iconColor} />
      <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: 'bold',
    fontSize: 20,
  },
})

export default IconText
