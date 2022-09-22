import React from "react";
import { FlatList ,StyleSheet, View } from "react-native";

import Topo from "./components/topo";
import Detalhes from "./components/detalhes"
import Item from "./components/item";
import Texto from "../../components/texto";

export default function Cesta({ topo, detalhes, itens }) {
    return(
        <>
            <FlatList
                data={itens.lista}
                renderItem={Item}
                keyExtractor={({ nome }) => nome}
                ListHeaderComponent={() => {
                    return (
                        <>
                            <Topo {...topo}/>
                            <View style={styles.cesta}>
                                <Detalhes {...detalhes}/>
                                <Texto style={styles.titulo}>{ itens.titulo }</Texto>
                            </View>
                        </>
                    )
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
});