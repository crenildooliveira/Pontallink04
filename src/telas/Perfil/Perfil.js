// TelaTeste.js
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";

import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

import { Feather } from '@expo/vector-icons';

export default function Perfil() {
    
    return (
        <>
            <Header/>
            <View style={styles.section}>
            <ScrollView 
                vertical
                showsVerticalScrollIndicator={false} // Oculta a barra de rolagem horizontal
            >
                <View style={styles.container}>

                    <View style={styles.configIcon}>
                    <TouchableOpacity>
                        <Feather name="settings" size={24} color="white" />
                    </TouchableOpacity>
                    </View>
                    
                    <View>
                        <Text style={styles.condominio}>Condominio x - predio 45</Text>
                    </View>

                    <View>
                        <Text style={styles.condominio}>NOMESVALDO</Text>
                    </View>
                    
                    <View style={styles.viewColunm}>

                        <View style={styles.colunaEsquerda}>
                            <View>
                                <Text style={styles.viewTest2}>
                                    Futebol
                                </Text>
                            </View>

                            <View>
                                <Text style={styles.viewTest2}>
                                    Basquete
                                </Text>
                            </View>

                            <View>
                                <Text style={styles.viewTest2}>
                                    Games
                                </Text>
                            </View>
                        </View>

                        <View style={styles.viewTest}>
                            <View style={styles.circle}>
                                <Image source={require('../../assets/foto.png')} style={styles.circleImage}/>
                            </View>
                        </View>

                        <View style={styles.colunaDireita}>
                            <View>
                                <Text style={styles.viewTest2}>
                                    Corrida
                                </Text>
                            </View>

                            <View>
                                <Text style={styles.viewTest2}>
                                    Natação
                                </Text>
                            </View>

                            <View>
                                <Text style={styles.viewTest2}>
                                    Animes
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* ------------------------------------------------------- */}
                    {/* --------------------------BIO---------------------------*/}

                    <View>
                        <Text style={styles.bio}>
                            Sou um ex jogador de futebol do templo verde, joguei pôr 45 anos.
                            Hoje em dia passo meu tempo na natação, amo água e como frutas.
                        </Text>
                    </View>

                    <View style={styles.divAmigosSeguidores}>

                        <View style={styles.divAmigos}>
                            <Text style={styles.divAmigosText}>Amigos</Text>
                            <Text style={styles.divAmigosNumber}>1550</Text>
                        </View>
                        
                        <View style={styles.divSeguidores}>
                            <Text style={styles.divAmigosText}>Seguidores</Text>
                            <Text style={styles.divAmigosNumber}>1550</Text>
                        </View>
                    </View>
                    
                </View>
            </ScrollView>
            
            
            </View>
            <Footer/>
        </>
    );
  }
  
  const styles = StyleSheet.create({
    section: {
      height: "74%",
      backgroundColor: "white",
    },
    container: {
        flex: 1,
        backgroundColor: '#a3d9ff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: "2%"
    },
    condominio:{
        fontSize: 18,
        color: "black",
        //backgroundColor: "black",
        fontWeight: "bold",
        paddingBottom: "2%"
    },
    circle: {
        width: 120,
        height: 120,
        borderRadius: 100,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 70,
    },
      circleImage: {
        width: 120,  // Ajuste conforme necessário
        height: 120, // Ajuste conforme necessário
        borderRadius: 80,
        backgroundColor: "black"
    },
    viewColunm:{
        flexDirection: "row", // Define a direção como linha
        justifyContent: "space-around", // Distribui os itens uniformemente ao longo do eixo principal
        alignItems: "flex-start", // Alinha os itens ao centro ao longo do eixo transversal (vertical)
        height: 120
    },
    colunaEsquerda: {
        alignItems: "flex-end", // Alinha os itens à direita
        paddingTop: "4%"
    },
    colunaDireita: {
      alignItems: "flex-start", // Alinha os itens à esquerda
      paddingTop: "4%"
    },
    viewTest: {
        height: "100%"
    },
    viewTest2: {
        fontSize: 20,
        paddingLeft: 10,
        paddingRight: 10,
        fontWeight: "bold",
    },
    bio:{
        fontSize: 15,
        padding: 9,
        fontWeight: "bold",
        color: "black",
        textAlign: "center"
    },
    sa:{
        paddingTop: "3%",
        paddingLeft: "30%",
        paddingRight: "30%"
    },
    configIcon: {
        alignSelf: "flex-end",
        marginRight: 10
    },
    divAmigosSeguidores:{
        flexDirection: "row", // Define a direção como linha
        justifyContent: "space-around", // Distribui os itens uniformemente ao longo do eixo principal
        alignItems: "center", // Alinha os itens ao centro ao longo do eixo transversal (vertical)
        padding: 10,
        
    },
    divAmigos:{
        flexDirection: "column",
        alignItems: "center", // Centraliza horizontalmente
        paddingRight: 50,
    },

    divSeguidores:{
        flexDirection: "column",
        alignItems: "center", // Centraliza horizontalmente
    },
    divAmigosText:{
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
    },
    divAmigosNumber:{
        backgroundColor: "#d3edfd",
        fontWeight: "bold",
        borderWidth: 4,
        textAlign: "center",
        fontSize: 20,
        width: 80,
        paddingTop: 6
    }

  });
  