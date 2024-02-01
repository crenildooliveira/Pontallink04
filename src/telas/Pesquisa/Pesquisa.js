import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import dadosGlobais from '../../DBTeste/dadosGlobais'; // Substitua pelo caminho real
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

export default function BuscaGlobal() {

  const navigation = useNavigation();

  const [filtrosSelecionados, setFiltrosSelecionados] = useState({
    publicacoes: true,
    usuarios: true,
    fotos: true,
    videos: true,
    comunidades: true,
    grupos: true,
  });

  const toggleFiltro = (filtro) => {
    setFiltrosSelecionados((prevFiltros) => ({
      ...prevFiltros,
      [filtro]: !prevFiltros[filtro],
    }));
  };
  

  const [searchTerm, setSearchTerm] = useState('');

  const filteredResults = Object.keys(dadosGlobais).reduce((acc, key) => {
    const data = dadosGlobais[key];

    if (searchTerm.trim() === '') {
      return acc; // Retorna um array vazio se a barra de pesquisa estiver vazia
    }

    const filteredData = data.filter((item) => {
      const nomeIncludes = item.nome.toLowerCase().includes(searchTerm.toLowerCase());
      const isUsuario = key === 'usuarios';
      const filterCondition =
        (searchTerm ? nomeIncludes : true) &&
        ((filtrosSelecionados.publicacoes && key === 'publicacoes') ||
          (filtrosSelecionados.usuarios && key === 'usuarios') ||
          (filtrosSelecionados.fotos && key === 'fotos') ||
          (filtrosSelecionados.videos && key === 'videos') ||
          (filtrosSelecionados.comunidades && key === 'comunidades') ||
          (filtrosSelecionados.grupos && key === 'grupos'));
  
      return filterCondition;
    });
    return [...acc, ...filteredData];
  }, []);
  

  return (
    <View>
      <Header/>
      <View style={styles.section}>
        <TextInput
          placeholder="Buscar globalmente"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />

        <View style={styles.botoesFiltro}>
          <TouchableOpacity
            style={[styles.botaoFiltro, { backgroundColor: filtrosSelecionados.publicacoes ? 'blue' : 'gray' }]}
            onPress={() => toggleFiltro('publicacoes')}
          >
            <Text style={styles.textoBotaoFiltro}>Publicações</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botaoFiltro, { backgroundColor: filtrosSelecionados.usuarios ? 'blue' : 'gray' }]}
            onPress={() => toggleFiltro('usuarios')}
          >
            <Text style={styles.textoBotaoFiltro}>Usuarios</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botaoFiltro, { backgroundColor: filtrosSelecionados.fotos ? 'blue' : 'gray' }]}
            onPress={() => toggleFiltro('fotos')}
          >
            <Text style={styles.textoBotaoFiltro}>Fotos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botaoFiltro, { backgroundColor: filtrosSelecionados.videos ? 'blue' : 'gray' }]}
            onPress={() => toggleFiltro('videos')}
          >
            <Text style={styles.textoBotaoFiltro}>Videos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botaoFiltro, { backgroundColor: filtrosSelecionados.comunidades ? 'blue' : 'gray' }]}
            onPress={() => toggleFiltro('comunidades')}
          >
            <Text style={styles.textoBotaoFiltro}>Comunidades</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botaoFiltro, { backgroundColor: filtrosSelecionados.grupos ? 'blue' : 'gray' }]}
            onPress={() => toggleFiltro('grupos')}
          >
            <Text style={styles.textoBotaoFiltro}>Grupos</Text>
          </TouchableOpacity>

          {/* Adicione botões para outros filtros da mesma maneira */}
        </View>
        <FlatList
          data={filteredResults}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => (
            <View>
              <ScrollView
              vertical showsVerticalScrollIndicator={false}
              // Oculta a barra de rolagem horizontal>
              >
                <TouchableOpacity style={[styles.estiloMensagem, {backgroundColor: "red"}]} onPress={() => navigation.navigate('Usuarios', { termoPesquisa: item.nome })}>

                  <View style={styles.imageText}>
                    <Image source={item.imagem} style={styles.imagemPerfil}/>
                    <Text style={styles.remetente}>{item.nome}</Text>
                  </View>


                </TouchableOpacity>
              </ScrollView>
              {/* Adicione mais informações conforme necessário */}
            </View>
          )}
        />

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
  },
  botoesFiltro:{
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  botoesFiltro: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  botaoFiltro: {
    backgroundColor: 'gray',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  textoBotaoFiltro: {
    color: 'white',
    fontSize: 16,
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
  imageText:{
    flexDirection: "row",
    alignItems: "center",
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

  },
  espaco:{
      margin: 30,
      backgroundColor: "red"
  }

});