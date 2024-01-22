// TelaTeste.js
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

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
                    
                    <View>
                        <Text style={styles.condominio}>Condominio x - predio 45</Text>
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
                            Bio: Sou um ex jogador de futebol do templo verde, joguei pôr 45 anos.
                            Hoje em dia passo meu tempo na natação, amo água e como frutas.
                        </Text>
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
      backgroundColor: "red",
    },
    container: {
        flex: 1,
        backgroundColor: '#4939BA',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: "2%"
    },
    condominio:{
        fontSize: 18,
        color: "white",
        backgroundColor: "black"
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
        alignItems: "center", // Alinha os itens ao centro ao longo do eixo transversal (vertical)
        
    },
    colunaEsquerda: {
        alignItems: "flex-end", // Alinha os itens à direita
        backgroundColor: "red"
    },
    colunaDireita: {
      alignItems: "flex-start", // Alinha os itens à esquerda
      backgroundColor: "green"
    },
    viewTest: {
        backgroundColor: "white",
        height: "64%"
    },
    viewTest2: {
        fontSize: 20,
        paddingLeft: 10,
        paddingRight: 10,
        fontWeight: "bold",
    },
    bio:{
        fontSize: 15,
        paddingLeft: 20,
        paddingRight: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    }

  });
  