import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native'
import Tabs from './components/Tabs'
import Error from './components/Error'
import { useGetWeather } from './hooks/useGetWeather'

export default function App() {
  const [loading, errorMsg, weather] = useGetWeather()
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  } else if (errorMsg) {
    return <Error />
  } else if (weather) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
})
