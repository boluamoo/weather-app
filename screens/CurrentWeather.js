import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import GlobalStyles from '../config/GlobalStyles'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/WeatherType'

const CurrentWeather = ({ route }) => {
  const { weather } = route.params

  return (
    <SafeAreaView style={[styles.container, GlobalStyles.droidSafeArea]}>
      <View style={styles.center}>
        <Feather
          name={weatherType[weather.list[0].weather[0].main].icon}
          size={130}
        />
        <Text style={[styles.bigText, styles.bold]}>
          {weather.list[0].main.temp}
        </Text>
        {/* <Text style={[styles.mediumText, styles.bold]}>Feels like 51mm1</Text>
        <Text style={[styles.smallText, styles.bold]}>High: 8 Low: 6</Text> */}
        <RowText
          containerStyles={styles.rowContainer}
          message2={`High: ${weather.list[0].main.temp_min} Low: ${weather.list[0].main.temp_max}`}
          messageTwoStyles={styles.smallText}
        />
      </View>
      <RowText
        containerStyles={styles.bottom}
        messageTwoStyles={styles.mediumText}
        messageOneStyles={styles.sunny}
        message1={weatherType[weather.list[0].weather[0].main].message}
      />
      {/* <Text style={[styles.sunny, styles.bold]}>Its Sunny</Text>
        <Text style={[styles.mediumText, styles.bold]}>
          Its perfect t-shirt weather
        </Text> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'space-between',
    padding: 20,
  },
  center: {
    alignSelf: 'center',
    alignItems: 'center',
    flex: 2,
    justifyContent: 'center',
  },
  bigText: {
    fontSize: 50,
  },
  sunny: {
    fontSize: 40,
  },
  mediumText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  smallText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  rowContainer: {
    alignItems: 'center',
  },
})
export default CurrentWeather
