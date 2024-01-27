// TelaTeste.js
import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Button } from "react-native";
import { useRoute } from '@react-navigation/native';

import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

import usersData from '../../DBTeste/usersData';

export default function Usuarios() {

    const route = useRoute();
    const { termoPesquisa } = route.params;
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        // Lógica para encontrar o usuário com base no termo de pesquisa
        const usuarioEncontrado = usersData.find(user => user.nome.toLowerCase() === termoPesquisa.toLowerCase());

        // Atualiza o estado com as informações do usuário encontrado
        setUsuario(usuarioEncontrado);
    }, [termoPesquisa]);

    if (!usuario) {
        return (
        <View>
            <Text>Usuário não encontrado</Text>
        </View>
        );
  }
    
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
                        <Text style={styles.condominio}>{usuario.condominio}</Text>
                    </View>

                    <View>
                        <Text style={styles.condominio}>{usuario.nome}</Text>
                    </View>

                    
                    <View style={styles.viewColunm}>

                        <View style={styles.colunaEsquerda}>
                            <View>
                                <Text style={styles.viewTest2}>
                                    {usuario.interesses[0]}
                                </Text>
                            </View>

                            <View>
                                <Text style={styles.viewTest2}>
                                    {usuario.interesses[1]}
                                </Text>
                            </View>

                            <View>
                                <Text style={styles.viewTest2}>
                                    {usuario.interesses[2]}
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
                                    {usuario.interesses[3]}
                                </Text>
                            </View>

                            <View>
                                <Text style={styles.viewTest2}>
                                    {usuario.interesses[4]}
                                </Text>
                            </View>

                            <View>
                                <Text style={styles.viewTest2}>
                                    {usuario.interesses[5]}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* ------------------------------------------------------- */}
                    {/* --------------------------BIO---------------------------*/}

                    <View>
                        <Text style={styles.bio}>
                            {usuario.bio}
                        </Text>
                    </View>

                    <View style={styles.divAmizadeSeguir}>
                        <TouchableOpacity style={styles.sa}>
                            <Button title="Solicitar Amizade" ></Button>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.sa}>
                            <Button title="Seguir" ></Button>
                        </TouchableOpacity>
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
        backgroundColor: "#a3d9ff"/*'#4939BA'*/,
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
        backgroundColor: 'white',
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
        //backgroundColor: "yellow",
        height: 120
    },
    colunaEsquerda: {
        alignItems: "flex-end", // Alinha os itens à direita
        //backgroundColor: "red",
        paddingTop: "4%"
    },
    colunaDireita: {
      alignItems: "flex-start", // Alinha os itens à esquerda
      //backgroundColor: "green",
      paddingTop: "4%"
    },
    viewTest: {
        //backgroundColor: "white",
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
        padding: 10
    },
    divAmizadeSeguir:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    }

  });
  