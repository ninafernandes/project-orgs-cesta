import React from 'react'; // Exporta como default
import { StyleSheet, View } from 'react-native' // Utilizamos chave para pegar um componente e exportar ele.
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import Topo from './componentes/topo'
import Detalhes from './componentes/detalhes'

export default function Cesta() {
    // Adicionando um fragmento que vai agrupar os componentes (return)
    return <>
        <Topo />
        <View style={estilos.cesta}>
            <Detalhes />
        </View>
    </>
}

// Criando estilos. StyleSheet cria os estilos no React Native de forma otimizada.
const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
});