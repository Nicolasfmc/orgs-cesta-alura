import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Texto from "./texto";

export default function Botao({ children, style }){
    return (
        <>
            <TouchableOpacity style={ style }>
                <Texto style={styles.textoBotao}>{ children }</Texto>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    textoBotao: {
        textAlign: "center",
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
})