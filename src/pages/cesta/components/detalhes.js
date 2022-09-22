import React from "react";
import Texto from "../../../components/texto";
import { Image, View, StyleSheet } from "react-native";
import Botao from "../../../components/botao";

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco }) {
    return(
        <>
            <Texto style={styles.nome}>{ nome }</Texto>
            <View style={styles.fazenda}>
                <Image source={logoFazenda} style={styles.imagemFazenda}/>
                <Texto style={styles.nomeFazenda}>{ nomeFazenda }</Texto>
            </View>
            <Texto style={styles.descricao}>{ descricao }</Texto>
            <Texto style={styles.preco}>{ preco }</Texto>
            <Botao style={styles.botao}>Comprar</Botao>
        </>
    )
}

const styles = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        marginTop: 2,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
})