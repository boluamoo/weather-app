import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import City from '../screens/City'
import CurrentWeather from '../screens/CurrentWeather'
import { Feather } from '@expo/vector-icons'
import UpcomingWeather from '../screens/UpcomingWeather'

const Tab = createBottomTabNavigator()

const Tabs = ({weather}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'white',
          // padding: 10,
          // height: 70,
        },
        headerStyle: {
          backgroundColor: 'lightblue',
        },
        tabBarLabelStyle: {
          display: 'none',
        },
      }}
    >
      <Tab.Screen
        name="City"
        component={City}
        initialParams={{weather}}
        options={{
          tabBarActiveTintColor: 'green',
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Current Weather"
        component={CurrentWeather}
        initialParams={{weather}}
        options={{
          tabBarStyle: {
            backgroundColor: 'pink',
            // height: 70,
          },
          headerStyle: {
            backgroundColor: 'pink',
          },
          tabBarIcon: ({ focused }) => (
            <Feather
              name="droplet"
              size={24}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Upcoming Weather"
        component={UpcomingWeather}
        initialParams={{weather}}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="clock"
              size={24}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs
