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

const City = () => {
  // const [fontsLoaded] = useFonts({
  //   'RobotoBlack' : require("./assets/fonts/Roboto-Black.ttf")
  // })
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
          <Text style={[styles.london, styles.headingFont]}>London</Text>
          <Text style={[styles.headingFont, styles.uk]}>UK</Text>
          <View style={styles.population}>
            <AntDesign style={styles.user} name="user" size={25} color="red" />
            <Text style={styles.populationText}>8000</Text>
          </View>
        </View>
        <View style={styles.bottomBox}>
          <View style={styles.weatherTimeWrapper}>
            <View style={styles.timer}>
              <Feather name="sunrise" size={24} color="white" />
              <Text style={styles.timeText}>10:46:58am</Text>
            </View>
            <View style={styles.timer}>
              <Feather name="sunset" size={24} color="white" />
              <Text style={styles.timeText}>17:28:15pm</Text>
            </View>
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
    fontWeight: 'bold',
    fontSize: 20,
  },
  user: {},
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
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    fontSize: 50,
  },
})
export default City
