import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Texto({ children, style }) {
  let estilo = estilos.texto;
  
  if(style?.fontWeight === 'bold') {
    estilo = estilos.textoDestaque;
  }

  return <Text style={[style, estilo]}>{ children }</Text>
}

const estilos = StyleSheet.create({
  texto: {
    fontFamily: 'MontserratRegular',
    fontWeight: 'normal',
  },
  textoDestaque: {
    fontFamily: 'MontserratBold',
    fontWeight: 'normal',
  }
});