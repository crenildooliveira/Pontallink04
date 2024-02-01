import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';

import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

import { Feather } from '@expo/vector-icons';

export default function Mensagens() {

    const mensagensAmigos = [
        { id: 1, color: 'red', nome: "Cartomante", imagem: require('../../assets/foto.png')},
        { id: 2, color: 'blue', nome: "Necromancer", imagem: require('../../assets/foto.png')},
        { id: 3, color: 'green', nome: "Healer", imagem: require('../../assets/foto.png')},
        { id: 4, color: 'yellow', nome: "Mage", imagem: require('../../assets/foto.png')},
        { id: 5, color: 'red', nome: "Tank", imagem: require('../../assets/foto.png')},
        { id: 6, color: 'blue', nome: "Mage2", imagem: require('../../assets/foto.png')},
        { id: 7, color: 'green', nome: "Mage3", imagem: require('../../assets/foto.png')},
        { id: 8, color: 'yellow', nome: "Mage4", imagem: require('../../assets/foto.png')},

        
    ];
  return (
    <View>
        <Header/>
        <View style={styles.section}>
            <ScrollView 
            vertical
            showsVerticalScrollIndicator={false} // Oculta a barra de rolagem horizontal
            >
                
                <View>
                        <View style={[styles.iniciarConteiner, {backgroundColor: "white"}]}>
                          <TouchableOpacity style={styles.iniciarIcon}>
                            <Feather name="plus-square" size={24} color="black" />
                          </TouchableOpacity>
                        </View>
                        {mensagensAmigos.map((mensagens) => (
                          <View key={mensagens.id}>
                            <TouchableOpacity
                              key={mensagens.id}
                              style={[styles.estiloMensagem, { backgroundColor: mensagens.color }]}
                            >
                              <Image source={mensagens.imagem} style={styles.imagemPerfil} />
                              <Text style={styles.nome}>{mensagens.nome}</Text>
                            </TouchableOpacity>
                          </View>
                        ))}
                </View>
                <View style={styles.espaco}/>
            </ScrollView>
        </View>
        <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    height: "74%", // 70% da tela
    // Estilos adicionais para a seção
    backgroundColor: "#7EA5D9"
  },
  estiloMensagem: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    width: "98%",
    borderRadius: 10,
    //display: "flex",
    //justifyContent: "center",
    //marginBottom: 2,
    margin: 5

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
  iniciarIcon:{
    alignItems: "center"

  },
  iniciarConteiner:{
    justifyContent: "center",
    height: 60,
    width: "98%",
    borderRadius: 10,
    margin: 5,
    borderWidth: 2,
    borderBottomColor: "black"

  },
  espaco:{
      margin: 30,
      backgroundColor: "red"
  }
});
