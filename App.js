import React from 'react';
import { Text, View, StatusBar, AppRegistry } from 'react-native';
import AnimatedSplash from "react-native-animated-splash-screen"
import { Colors } from './assets/astheme/Colors';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { NanumGothic_400Regular, NanumGothic_700Bold, NanumGothic_800ExtraBold } from '@expo-google-fonts/nanum-gothic';
import { Roboto_100Thin, Roboto_100Thin_Italic, Roboto_300Light, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Dims } from './assets/astheme/Dimensions';
import { Styles } from './assets/astheme/Styles';
import { FooterComponent } from './components/Footer/Footer.Component';
import { Divider } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import { appName } from './assets/main/Main';
import { StackNavigator } from './components/StackNavigator/StackNavigator';

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
    if(fontsLoaded) setisLoaded(true)
  }, []);

  return (
    <>
      <StatusBar backgroundColor={Colors.whiteColor} barStyle={"dark-content"} />
      <PaperProvider>
        <StackNavigator key={8495} />
      </PaperProvider>
    </>
  );
}

AppRegistry.registerComponent(appName, () => App)
