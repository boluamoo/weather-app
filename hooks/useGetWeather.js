import React, { useEffect, useState } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import * as Location from 'expo-location'
import { API_KEY } from '@env'

export const useGetWeather = () => {
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(true)
  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)
  const [weather, setWeather] = useState(null)

  const fetchWeatherData = async () => {
    try {
      setLoading(true)
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
      )
        .then((resp) => resp.json())
        .then((resp) => {
          // console.log(resp);
          if (resp['cod'] != 200) {
            setErrorMsg(`API error: ${resp}`)
            setLoading(false)
            return
          }
          setWeather(resp)
          setLoading(false)
        })
    } catch (err) {
      setErrorMsg(`API error: ${err}`)
      console.log(errorMsg)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      // console.log(status)
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLon(location.coords.longitude)
      setLat(location.coords.latitude)
      // console.log('lon', lon)
      // console.log('lat', lat)
      if (lon && lat) {
        await fetchWeatherData()
      }
    })()
  }, [lat, lon])
  return [loading, errorMsg, weather]
}
