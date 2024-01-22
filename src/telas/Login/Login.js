import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native"
import * as animatable from "react-native-animatable";

export default function Login() {
    const navigation = useNavigation();
    console.log("Tela de Login está sendo carregada.");
    return (
        <View style={styles.container}>
            
            <View style={styles.containerLogo}>
                <animatable.Image
                    delay={600}
                    animation="fadeIn"
                    source={require('../../assets/logo31.png')}
                    style={{width: "100%"}}
                    resizeMode="contain"
                />
            </View>

            <animatable.View animation="fadeIn" delay={600} style={styles.containerForm}>

                <TouchableOpacity style={styles.buttonLogin} onPress={ () => navigation.navigate("Feed")}>
                    <Text style={styles.LoginText}>Logar</Text>
                </TouchableOpacity>

            </animatable.View>
            
        </View>
        
    );

}



const styles = StyleSheet.create({
    container:{
        backgroundColor: "#7DA8DE",
        height: "100%"

    },
    containerLogo:{
        marginTop: "40%",
    },
    buttonLogin:{
        backgroundColor: "#fff",
        width: "100%",
        borderRadius: 30,
        paddingVertical: 8,
        marginTop: 150,
        justifyContent: "center",
        alignItems: "center",
        width: 250,
        margin: 80,
    },
    LoginText:{
        color: "#7DA8DE",
        fontSize: 18,
        fontWeight: "bold"
    },
})

console.log("Tela de Login - Fim");