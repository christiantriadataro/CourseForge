import React from 'react';
import { useFonts } from 'expo-font';
import Navigation from './src/Navigation/Navigation'




const App = () => {
  let [fontsLoaded] = useFonts({
    Nunito_ExtraBold: require('./assets/fonts/Nunito/Nunito-ExtraBold.ttf'),
    Nunito_Light: require('./assets/fonts/Nunito/Nunito-Light.ttf'),
    Nunito_Bold: require('./assets/fonts/Nunito/Nunito-Bold.ttf'),
    Nunito_Regular: require('./assets/fonts/Nunito/Nunito-Regular.ttf'),
    Advent_Pro_Bold: require('./assets/fonts/Advent-Pro/AdventPro-Bold.ttf'),
    Allerta_Stencil_Regular: require('./assets/fonts/Allerta-Stencil/AllertaStencil-Regular.ttf'),
    Andika_Regular: require('./assets/fonts/Andika/Andika-Regular.ttf'),
    Andika_Bold: require('./assets/fonts/Andika/Andika-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Navigation />
  );
};

export default App;
