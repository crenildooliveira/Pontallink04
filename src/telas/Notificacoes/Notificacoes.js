import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';

import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

import solicitacoesData from '../../DBTeste/solicitacoesData';

export default function Mensagens() {
    
  return (
    <View>
        <Header/>
        <View style={styles.section}>
            <ScrollView 
            vertical
            showsVerticalScrollIndicator={false} // Oculta a barra de rolagem horizontal
            >
                
              <View>
                {solicitacoesData.map((solicitacao) => (
                  <View key={solicitacao.id}>
                    <View
                      key={solicitacao.id}
                      style={[styles.estiloMensagem, {backgroundColor: solicitacao.color}]}
                    >
                      <View style={styles.imageText}>
                        <Image source={solicitacao.imagem} style={styles.imagemPerfil}/>
                        <Text style={styles.remetente}>{solicitacao.remetente}</Text>
                      </View>
                                

                      <View style={styles.botoesContainer}>
                                    
                        <TouchableOpacity style={styles.botaoAceitar}>
                          <Text style={styles.textoBotao}>Aceitar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botaoRecusar}>
                          <Text style={styles.textoBotao}>Recusar</Text>
                        </TouchableOpacity>

                      </View>

                                
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
            <View style={styles.espaco}/>
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
    justifyContent: "space-between",
    height: 60,
    width: "98%",
    borderRadius: 20,
    margin: 5

  },
  remetente:{
    fontWeight: "bold",
    textAlign: "center",
    
  },
  imagemPerfil:{
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 8,
    marginLeft: 5

  },botoesContainer: {
    flexDirection: "row",
    alignItems: "center",

  },botaoAceitar: {
    backgroundColor: "white",
    height: 30,
    width: 100,
    alignItems: "center",
    marginRight: 5,
    borderRadius: 5

  },botaoRecusar: {
    backgroundColor: "white",
    height: 30,
    width: 100,
    alignItems: "center",
    borderRadius: 5,
    marginRight: 10

  },textoBotao: {
    lineHeight: 30,
    fontWeight: "bold",

  },imageText:{
    flexDirection: "row",
    alignItems: "center",
  },
  espaco:{
      margin: 30,
      backgroundColor: "red"
  }

});
