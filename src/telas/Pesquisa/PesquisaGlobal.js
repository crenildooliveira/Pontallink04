import React, { useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import dadosGlobais from '../../DBTeste/dadosGlobais'; // Substitua pelo caminho real

export default function BuscaGlobal() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredResults = Object.keys(dadosGlobais).reduce((acc, key) => {
    const data = dadosGlobais[key];
    const filteredData = data.filter(item =>
      item.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return [...acc, ...filteredData];
  }, []);

  return (
    <View>
      <TextInput
        placeholder="Buscar globalmente"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <FlatList
        data={filteredResults}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nome}</Text>
            {/* Adicione mais informações conforme necessário */}
          </View>
        )}
      />
    </View>
  );
}
