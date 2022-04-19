import React from 'react'; // Exporta como default
import { ScrollView, StyleSheet, View } from 'react-native' // Utilizamos chave para pegar um componente e exportar ele.

import Topo from './componentes/topo'
import Detalhes from './componentes/detalhes'
import Itens from './componentes/itens'

export default function Cesta({ topo, detalhes, itens }) {
    // Adicionando um fragmento que vai agrupar os componentes (return)
    return <>
        <ScrollView>
            <Topo {...topo} />
            <View style={estilos.cesta}>
                <Detalhes {...detalhes} />
            </View>
            <Itens {...itens} />
        </ScrollView>
    </>
}

// Criando estilos. StyleSheet cria os estilos no React Native de forma otimizada.
const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
});