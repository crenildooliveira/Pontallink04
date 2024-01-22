import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Feather } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native"

export default function Footer() {
    const navigation = useNavigation();
    return (
        <View style={styles.bottomBar}>
            {/* Ícones da barra inferior */}
            <TouchableOpacity onPress={ () => navigation.navigate("Feed")}>
                <Feather name="home" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
                <Feather name="users" size={24} color="white" onPress={ () => navigation.navigate("Usuarios")} />
            </TouchableOpacity>

            {/* Botão circular maior com ícones adicionais */}
            <TouchableOpacity style={styles.circle} onPress={ () => navigation.navigate("Perfil")}>
                <Image source={require('../../assets/foto.png')} style={styles.circleImage}/>
            </TouchableOpacity>
            
            {/* Ícones restantes da barra inferior */}
            <TouchableOpacity>
                <Feather name="message-square" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
                <Feather name="shopping-cart" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'black', // Cor da barra preta inferior
        height: '13%', // 15% da tela
        elevation: 5, // Relevo para o botão principal
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
    },
})