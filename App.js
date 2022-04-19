import { StatusBar, SafeAreaView, View } from 'react-native';
import React from 'react';
import Cesta from './src/telas/Cesta'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
}
  from '@expo-google-fonts/montserrat'

export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <View />
  }
  // Retorna uma função chamada APP.
  return (
    // SafeAreaView faz com que a barra de status e a barrinha de navegação seja evitada no iOS.
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
} 