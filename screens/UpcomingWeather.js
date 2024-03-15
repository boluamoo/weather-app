import { StatusBar } from 'expo-status-bar'
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import GlobalStyles from '../config/GlobalStyles'
import background from '../assets/background.jpg'

const UpcomingWeather = () => {
  return (
    <ImageBackground source={background} style={styles.imageBackground}>
      <SafeAreaView style={[styles.container, GlobalStyles.droidSafeArea]}>
        <Text styles={{ color: 'black' }}>Upcoming Weather</Text>
        <View style={styles.weatherRow}>
          <View style={styles.weatherDetails}>
            <Feather name="sun" size={50} color="white" />
            <View style={[styles.weatherDetailsText]}>
              <Text style={[styles.date, styles.white]}>2023-02-18</Text>
              <Text style={[styles.date, styles.white]}>12:00:00</Text>
              <Text style={[styles.bigText, styles.white]}>7.55</Text>
              <Text style={[styles.bigText, styles.white]}>8.55</Text>
            </View>
          </View>
          <View style={styles.weatherDetails}>
            <Feather name="sun" size={50} color="white" />
            <View style={[styles.weatherDetailsText]}>
              <Text style={[styles.date, styles.white]}>2023-02-18</Text>
              <Text style={[styles.date, styles.white]}>15:00:00</Text>
              <Text style={[styles.bigText, styles.white]}>7.55</Text>
              <Text style={[styles.bigText, styles.white]}>8.55</Text>
            </View>
          </View>
          <View style={styles.weatherDetails}>
            <Feather name="sun" size={50} color="white" />
            <View style={[styles.weatherDetailsText]}>
              <Text style={[styles.date, styles.white]}>2023-02-18</Text>
              <Text style={[styles.date, styles.white]}>18:00:00</Text>
              <Text style={[styles.bigText, styles.white]}>7.55</Text>
              <Text style={[styles.bigText, styles.white]}>8.55</Text>
            </View>
          </View>
        </View>
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  bigText: {
    fontSize: 18,
  },
})

export default UpcomingWeather
