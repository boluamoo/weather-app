import { StatusBar } from 'expo-status-bar'
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import GlobalStyles from '../config/GlobalStyles'
import background from '../assets/background.jpg'
import ListItem from '../components/ListItem'

const UpcomingWeather = () => {
  const DATA = [
    {
      dt_txt: '2022-08-30 17:00:00',
      main: {
        temp_min: 292.84,
        temp_max: 294.94,
      },
      weather: [
        {
          main: 'Clear',
        },
      ],
    },
    {
      dt_txt: '2022-05-30 17:00:00',
      main: {
        temp_min: 300.84,
        temp_max: 394.94,
      },
      weather: [
        {
          main: 'Cloudy',
        },
      ],
    },
    {
      dt_txt: '2022-11-30 16:00:00',
      main: {
        temp_min: 123.84,
        temp_max: 222.94,
      },
      weather: [
        {
          main: 'Rainy',
        },
      ],
    },

    {
      dt_txt: '2022-05-30 16:00:00',
      main: {
        temp_min: 211.84,
        temp_max: 202.94,
      },
      weather: [
        {
          main: 'Rainy',
        },
      ],
    },
  ]

  return (
    <ImageBackground source={background} style={styles.imageBackground}>
      <SafeAreaView style={[styles.container, GlobalStyles.droidSafeArea]}>
        <Text styles={{ color: 'black' }}>Upcoming Weather</Text>
        {/* <ListItem /> */}
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <ListItem
              condition={item.weather[0].main}
              dateText={item.dt_txt}
              min={item.main.temp_min}
              max={item.main.temp_max}
            />
          )}
          keyExtractor={(item) => item.dt_txt}
          showsVerticalScrollIndicator={false}
          // contentContainerStyle={styles.}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'aqua',
    // justifyContent: 'center',
  },
  imageBackground: {
    height: '100%',
  },
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

export default UpcomingWeather
