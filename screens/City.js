import { StatusBar } from 'expo-status-bar'
import { ImageBackground, Platform, SafeAreaView } from 'react-native'
import { useFonts } from 'expo-font'
import city from '../assets/city-background.jpg'
import { Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto'
import { Inter_700Bold } from '@expo-google-fonts/inter'
import { StyleSheet, Text, View } from 'react-native'
import GlobalStyles from '../config/GlobalStyles'
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import IconText from '../components/IconText'
import moment from 'moment'


const City = ({ route }) => {
  const { weather } = route.params
  let [fontsLoaded, fontError] = useFonts({
    Inter_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
  })

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <ImageBackground source={city} style={styles.image}>
      <SafeAreaView style={[GlobalStyles.droidSafeArea, styles.container]}>
        <View style={styles.headerBox}>
          <Text style={[styles.london, styles.headingFont]}>
            {weather.city.name}
          </Text>
          <Text style={[styles.headingFont, styles.uk]}>{weather.city.country}</Text>
          <IconText
            iconContainer={styles.population}
            iconColor={'red'}
            bodyText={weather.city.population}
            bodyTextStyles={styles.populationText}
            iconName={'user'}
          />
        </View>
        <View style={styles.bottomBox}>
          <View style={styles.weatherTimeWrapper}>
            <IconText
              iconContainer={styles.population}
              iconColor={'white'}
              bodyText={moment(weather.city.sunrise).format('HH:mm:ss')}
              bodyTextStyles={styles.timeText}
              iconName={'sunrise'}
            />
            <IconText
              iconContainer={styles.population}
              iconColor={'white'}
              bodyText={moment(weather.city.sunset).format('HH:mm:ss')}
              bodyTextStyles={styles.timeText}
              iconName={'sunset'}
            />
          </View>
        </View>
        <StatusBar style="auto" hidden={false} />
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: '100%',
  },
  headerBox: {
    flex: 1,
    alignItems: 'center',
    height: '50%',
    // borderColor: "white",
    // borderStyle: "dashed",
    // borderWidth: 2,
    // justifyContent: "center",
  },
  london: {
    fontSize: 40,
  },
  uk: {
    fontSize: 30,
  },
  headingFont: {
    marginTop: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  population: {
    marginTop: 35,
    flexDirection: 'row',
    gap: 15,
  },
  populationText: {
    color: 'red',
  },
  bottomBox: {
    flex: 3,
    // borderColor: "white",
    // borderStyle: "dashed",
    // borderWidth: 2,
  },
  weatherTimeWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    padding: 10,
    // borderColor: "blue",
    // borderStyle: "dashed",
    // borderWidth: 2,
    alignItems: 'center',
  },
  timer: {
    flexDirection: 'row',
    gap: 10,
  },
  timeText: {
    color: 'white',
  },
  text: {
    fontSize: 50,
  },
})
export default City
