import React from "react";
import { Text, StyleSheet, ScrollView, View, Image, TouchableOpacity} from "react-native";

import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import Section from "../componentes/Section"

import { Feather } from '@expo/vector-icons';

import publicacoesData from "../../DBTeste/publicacoesData ";

export default function Feed() {
    console.log("Tela de Feed está sendo carregada.");

    return (
        <>
            <Header/>
            <ScrollView 
                vertical
                showsVerticalScrollIndicator={false} // Oculta a barra de rolagem horizontal
            >
                <View style={styles.section}>
                   <View><Text style={styles.configPrivacidade}>Configurações e privacidade</Text></View>
                </View>
            </ScrollView>
            <Footer/>
        </>
    )
}

const styles = StyleSheet.create ({

    section:{
        backgroundColor: "#9ec8ff",
    },
    headPublicacao: {
        flexDirection: "row",
        alignItems: "center",
        height: 60,
        width: "100%",
    
    },
    nome:{
        fontWeight: "bold",
        textAlign: "left",
        alignItems: "center",
        //paddingLeft: 18
    },
    imagemPerfil:{
        width: 50,
        height: 50,
        borderRadius: 30,
        marginRight: 8,
        marginLeft: 5
    },
    imagemPuplicacao:{
        height: 600,
        width: 420,

    },
    notImagem:{
        height: 100
    },
    text:{
        fontWeight: "bold",
        marginLeft: 7,
        marginBottom: 10
    },
    menuContainer: {
        position: 'absolute',
        top: '50%',  // Centraliza verticalmente
        right: 10,
        //transform: [{ translateY: -50 }],
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: 190,
        width: 50,
        borderRadius: 25,
        alignItems: "center",

    },
    menuContainerText:{
        position: 'absolute',
        top: '70%',  // Centraliza verticalmente
        left: "30%",
        //transform: [{ translateY: -50 }],
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: 50,
        width: 195,
        borderRadius: 25,
        alignItems: "center",
        flexDirection: "row",
    },
    publicacaoContainer: {
        position: 'relative',
        marginBottom: 20,  // Ajuste conforme necessário
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 5
    },
    icons:{
        marginTop: 16,
    },
    iconsText:{
        marginLeft: 16,
    },
    configPrivacidade:{
        textAlign: "center",
        fontSize: 25
    }

})