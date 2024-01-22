import React from "react";
import { View,Text, StyleSheet, ScrollView,  } from "react-native";
import { Feather } from '@expo/vector-icons';

const friendStatusData = [
    { id: 1, color: 'green' },
    { id: 2, color: 'blue' },
    { id: 3, color: 'red' },
    { id: 4, color: 'green' },
    { id: 5, color: 'yellow' },
    { id: 6, color: '#fff' },
    { id: 7, color: 'green' },
    { id: 8, color: 'blue' },
];
  
export default function Header() {

    return (
      <View style={styles.header}>


        {/* Ícone de pesquisa */}
        <Feather name="search" size={24} color="white" />


        {/* Status dos amigos em forma de bolas */}
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false} // Oculta a barra de rolagem horizontal
            contentContainerStyle={styles.friendStatusContainer}
        >
            {friendStatusData.map((friend) => (
                <View
                    key={friend.id}
                    style={[styles.friendStatusDot, { backgroundColor: friend.color }]}
                />
            ))}
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header2: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black', // Cor da barra preta do header
        padding: 10,
        height: '13%', // 15% da tela
    },
    friendStatusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    friendStatusDot: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'green', // Cor das bolas de status dos amigos
        marginHorizontal: 5,
    },
})