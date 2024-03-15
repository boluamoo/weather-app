import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import GlobalStyles from '../config/GlobalStyles'
import { Feather } from '@expo/vector-icons'

const CurrentWeather = () => {
  return (
    <SafeAreaView style={[styles.container, GlobalStyles.droidSafeArea]}>
      <View style={styles.center}>
        <Feather name="sun" size={100} color="black" />
        <Text style={[styles.bigText, styles.bold]}>6</Text>
        <Text style={[styles.mediumText, styles.bold]}>Feels like 5</Text>
        <Text style={[styles.smallText, styles.bold]}>High: 8 Low: 6</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={[styles.sunny, styles.bold]}>Its Sunny</Text>
        <Text style={[styles.mediumText, styles.bold]}>
          Its perfect t-shirt weather
        </Text>
      </View>
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
  bold: {
    fontWeight: 'bold',
  },
  bigText: {
    fontSize: 50,
  },
  sunny: {
    fontSize: 40,
  },
  mediumText: {
    fontSize: 25,
  },
  smallText: {
    fontSize: 18,
  },
})
export default CurrentWeather
