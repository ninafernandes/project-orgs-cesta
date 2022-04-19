import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';

import Texto from '../../../componentes/Texto';
import topo from '../../../assets/topo.png';

const width = Dimensions.get('screen').width; // Pega a largura da tela com o import do Dimensions.



export default function Topo () {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>Detalhe da cesta</Texto>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%", // "" porque estamos dentro de um objeto.
        height: 578 / 768 * width, // Pegamos a altura da imagem, divide pela largura e multiplica pelo width.
    },
    titulo: {
        width: "100%",
        position: "absolute", // Posição absoluta. Fica por cima da imagem.
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
})