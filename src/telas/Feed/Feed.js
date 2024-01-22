import React from "react";
import { Text, StyleSheet } from "react-native";

import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import Section from "../componentes/Section"

export default function Feed() {
    console.log("Tela de Feed está sendo carregada.");

    return (
        <>
            <Header/>
            <Section/>
            <Footer/>
        </>
    )
}

const estilos = StyleSheet.create({
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    }
})