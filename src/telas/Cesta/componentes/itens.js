import React from 'react';
import { Image, View, StyleSheet } from 'react-native'

import Texto from '../../../componentes/Texto';

export default function Itens({ titulo, lista }){
    return<> 
    <Texto style={estilos.titulo}>{titulo}</Texto>
    { lista.map(({nome, imagem }) => { // O método map percorre cada elemento da lista, pode alterar e retornar uma nova lista.
        return <View key={nome} style={estilos.item}>
        <Image source={imagem} style={estilos.imagem}/>
        <Texto style={estilos.nome}>{nome}</Texto>
        </View>
    }) }
    </>
}

const estilos = StyleSheet.create ({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
        marginLeft: 12,
    },
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1, 
        borderBottomColor: "#ECECEC",
        paddingVertical: 16, 
        alignItems: 'center',
        marginLeft: 12,
    },
    imagem: {
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})