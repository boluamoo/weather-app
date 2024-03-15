import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import Tabs from './components/Tabs'

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}
