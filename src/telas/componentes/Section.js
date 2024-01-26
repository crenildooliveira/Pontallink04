import React from 'react';
import { Text, View, StyleSheet, ScrollView} from 'react-native';

export default function Section() {

  return (
      <View style={styles.section}>
        <ScrollView 
          vertical
          showsVerticalScrollIndicator={false} // Oculta a barra de rolagem horizontal
        >
          <Text>Section</Text>
        </ScrollView>
        
      </View>
  );
}

const styles = StyleSheet.create({
  section: {
    height: "74%", // 70% da tela
    // Estilos adicionais para a seção
  }
});
