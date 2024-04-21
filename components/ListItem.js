import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { weatherType } from '../utilities/WeatherType'
import { Feather } from '@expo/vector-icons'
import moment from 'moment'

const ListItem = (props) => {
  const { dateText, min, max, condition } = props
  return (
    <View style={styles.weatherDetails}>
      <Feather name={weatherType[condition].icon} size={50} color="white" />
      <View style={[styles.weatherDetailsText]}>
        <View style={styles.weatherColumn}>
          <Text style={[styles.date, styles.white]}>
            {moment(dateText).format('dddd')}
          </Text>
          <Text style={[styles.date, styles.white]}>
            {moment(dateText).format('h:mm:ss a')}
          </Text>
        </View>
        <Text style={[styles.bigText, styles.white]}>{`${Math.round(
          min,
        )}°/${Math.round(max)}°`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  white: {
    color: 'white',
  },
  weatherDetails: {
    margin: 10,
    flexDirection: 'row',
    borderWidth: 5,
    padding: 20,
    backgroundColor: 'pink',
    alignItems: 'center',
  },
  date: {
    fontSize: 15,
  },
  weatherDetailsText: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  bigText: {
    fontSize: 18,
  },
  weatherColumn: {
    flexDirection: 'column',
  },
})
export default ListItem
