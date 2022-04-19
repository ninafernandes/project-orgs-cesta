import React from 'react'; // Exporta como default
import { FlatList, StyleSheet, View } from 'react-native' // Utilizamos chave para pegar um componente e exportar ele.

import Texto from '../../componentes/Texto'

import Topo from './componentes/topo'
import Detalhes from './componentes/detalhes'
import Item from './componentes/item'

export default function Cesta({ topo, detalhes, itens }) {
    // Adicionando um fragmento que vai agrupar os componentes (return)
    return <>

        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes} />
                        <Texto style={estilos.titulo}>{ itens.titulo }</Texto>
                    </View>
                </>
            }}
        />
    </>
}

// Criando estilos. StyleSheet cria os estilos no React Native de forma otimizada.
const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
});