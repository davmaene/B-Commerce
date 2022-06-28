import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AnimatedSplash from "react-native-animated-splash-screen"
import { Colors } from './assets/astheme/Colors';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { NanumGothic_400Regular, NanumGothic_700Bold, NanumGothic_800ExtraBold } from '@expo-google-fonts/nanum-gothic';
import { Roboto_100Thin, Roboto_100Thin_Italic, Roboto_300Light, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Dims } from './assets/astheme/Dimensions';

export default function App() {
  const [isLoaded, setisLoaded] = React.useState(false);
  const [ fontsLoaded ] = useFonts({
    "int-b": Inter_900Black,
    "rob-r": Roboto_400Regular,
    "rob-i": Roboto_100Thin_Italic,
    "nan-r": NanumGothic_400Regular,
    "mons": require("./assets/fonts/Montserrat.ttf"),
    "mons-b": require("./assets/fonts/Montserrat-SemiBold.ttf")
  });

  React.useEffect(()=> {
    setisLoaded(false);
    if(fontsLoaded){
      setisLoaded(true)
    }
  }, []);

  return (
    <>
      <StatusBar backgroundColor={Colors.whiteColor} barStyle={"dark-content"} />
      <AnimatedSplash
        preload
        translucent={true}
        isLoaded={isLoaded}
        logoImage={require("./assets/icon/icon.png")}
        backgroundColor={Colors.whiteColor}
        logoHeight={250}
        logoWidth={250}
      > 
        <View style={{flex: 1, backgroundColor: Colors.whiteColor, width: Dims.with, height: Dims.heigth}}>
          <View style={{width: 100, height: 100, backgroundColor: Colors.primaryColor}}>
            <Text style={{fontFamily: "nan-r", color: Colors.secondaryColor}}>La vie est belle mais il y a toujours toi qui me manques</Text>
          </View>
        </View>
      </AnimatedSplash>
    </>
  );
}
