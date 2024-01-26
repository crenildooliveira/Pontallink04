// Seção de busca em algum componente

import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';
import usersData from '../../DBTeste/usersData'; // Substitua pelo caminho real

import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

export default function BuscaUsuarios() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredUsers = usersData.filter(user =>
    user.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View>
      <Header/>
      <View style={styles.section}>
        <TextInput
          placeholder="Buscar usuários"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        
        <FlatList
          data={filteredUsers}
          keyExtractor={user => user.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{item.nome}</Text>
              <Text>{item.username}</Text>
              <Text>{item.email}</Text>
            </View>
          )}
        />
      </View>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    height: "74%", // 70% da tela
    // Estilos adicionais para a seção
  }
});
