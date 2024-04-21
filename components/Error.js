import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const Error = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="error" size={200} color="red" />
      <Text style={styles.errorText}>Something Went Wrong! 🙁</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
  },
})
export default Error
