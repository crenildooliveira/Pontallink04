import React ,{useState} from "react";
import { View,Text, StyleSheet, ScrollView, Touchable, TouchableOpacity, TextInput, Button, TouchableWithoutFeedback} from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

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

    const navigation = useNavigation();

    const [mostrarCampoPesquisa, setMostrarCampoPesquisa] = useState(false);
    const [termoPesquisa, setTermoPesquisa] = useState('');

    const alternarCampoPesquisa = () =>{
        setMostrarCampoPesquisa(!mostrarCampoPesquisa);
    }

    const realizarPesquisa = () =>{
        navigation.navigate("Pesquisa");
    }

    

    return (
      <View style={styles.header}>
    
        <TouchableOpacity onPress={alternarCampoPesquisa} >
            <Feather name="search" size={24} color="white" />
        </TouchableOpacity>

        {mostrarCampoPesquisa && (
            <View style={styles.barraPesquisa}>
                <TextInput
                placeholder="Pesquisar..."
                value={termoPesquisa}
                onChangeText={(texto) => setTermoPesquisa(texto)}
                style={styles.inputPesquisa}/>

                <TouchableWithoutFeedback onPress={realizarPesquisa} style={styles.botaoPesquisar}>
                    <Text style={styles.textoBotao}>Pesquisar</Text>
                </TouchableWithoutFeedback>
            </View>
            )}


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
        backgroundColor: '#7EA5D9', // Cor da barra preta do header
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
    inputPesquisa:{
        flex: 1,
        marginLeft: 10,
        marginRight: 3,
        color:"black",
        backgroundColor: "white",
        borderRadius: 8,
        height: 45
    },
    barraPesquisa: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "93%",
    },
    botaoPesquisar: {
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    },
    textoBotao: {
    color: 'white',
    fontSize: 18,
    backgroundColor: "#7ac7ff",
    height: 40,
    borderRadius: 5,
    padding: 6,
    fontWeight: "bold"
    },
})