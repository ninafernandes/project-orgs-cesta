import { StatusBar, SafeAreaView } from 'react-native';
import React from 'react';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
}
  from '@expo-google-fonts/montserrat'
import AppLoading from 'expo-app-loading';

import Cesta from './src/telas/Cesta'
import mock from './src/mocks/cesta'

export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <AppLoading />
  }
  // Retorna uma função chamada APP.
  return (
    // SafeAreaView faz com que a barra de status e a barrinha de navegação seja evitada no iOS.
   
    /*Quando colocado ...mock, removemos a camada externa e passamos
    cada parâmetro como um parâmetro da cesta
    é igual a:
    topo={mock.topo} detalhes={mock.detalhes}
    */
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock} /> 
    </SafeAreaView>
  );
} 