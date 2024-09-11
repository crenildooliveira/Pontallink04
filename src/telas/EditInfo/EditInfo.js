import React, { useState } from "react";
import { Text, StyleSheet, ScrollView, View, TextInput, TouchableOpacity } from "react-native";
import Footer from "../componentes/Footer";
import usersData from "../../DBTeste/usersData";

const usuarios = usersData;

const busca = (id, tipo) => {
    const user = usuarios.find(user => user.id === id);
    return user[tipo];
}

const atualizarUsuario = (id, novosDados) => {
    const index = usuarios.findIndex(user => user.id === id);
    if (index !== -1) {
        // Atualiza diretamente o array original
        usersData[index] = { ...usersData[index], ...novosDados };
        console.log("Usuário atualizado:", usersData[index]);
    } else {
        console.log("Usuário não encontrado");
    }
}




export default function EditInfo() {
  // Estado para armazenar os valores dos campos de entrada
  const [condominio, setCondominio] = useState(busca(1, "condominio"));
  const [nome, setNome] = useState(busca(1, "nome"));
  const [interesses, setInteresses] = useState(busca(1, "interesses"));
  const [bio, setBio] = useState(busca(1, "bio"));

  // Função para manipular o estado quando o usuário digita para cada interesse
  const handleInteresseChange = (value, posicao) => {
    const newInteresses = [...interesses];
    newInteresses[posicao] = value;
    setInteresses(newInteresses);
  };

  // Função chamada ao pressionar o botão "Enviar"
  const handleEnviar = () => {
    // Aqui você pode enviar os dados atualizados para o servidor ou executar outras lógicas
    console.log("Dados enviados:", { condominio, nome, interesses, bio });
    atualizarUsuario(1, { condominio, nome, interesses, bio });

  };

  return (
    <>
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <View><Text style={styles.textTitulo}>Editar perfil</Text></View>
          <View style={styles.containerTextInput}>
            <Text style={styles.text}>Condominio:</Text>
            <TextInput
              style={styles.input}
              value={condominio}
              onChangeText={(text) => setCondominio(text)}
            />
            <Text style={styles.text}>Nome:</Text>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={(text) => setNome(text)}
            />
            <Text style={styles.text}>Interesses:</Text>
            {/* Mapeie os interesses para renderizar os campos de entrada */}
            {interesses.map((interesse, posicao) => (
              <View key={posicao} style={styles.inputContainer2}>
                <Text></Text>
                <TextInput
                    style={styles.input2}
                    value={interesse}
                    onChangeText={(text) => handleInteresseChange(text, posicao)}
                    />
              </View>
            ))}
            <Text style={styles.text}>Bio:</Text>
            <TextInput
              style={styles.input}
              value={bio}
              onChangeText={(text) => setBio(text)}
            />
          </View>
          <View style={styles.containerTextInput}>
            <TouchableOpacity style={styles.button} onPress={handleEnviar}>
              <Text style={styles.text}>Enviar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.espaco}/>
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: "#9ec8ff",
  },
  text: {
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    padding: 5,
  },
  textTitulo: {
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    paddingTop: 50,
    paddingBottom: 20,
  },
  containerTextInput: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 2,
    borderRadius: 15,
    width: "70%",
    textAlign: "center",
    marginBottom: 10,
  },
  espaco: {
    margin: 30,
    backgroundColor: "red",
  },
  button: {
    backgroundColor: "red",
    width: "30%",
    margin: 20,
    borderRadius: 20,
    padding: 10,
  },
  inputContainer2: {
    width: "70%",
    alignSelf: "center", // Alinha o container ao centro
  },
  input2: {
    borderWidth: 2,
    borderRadius: 15,
    width: "100%", // O TextInput terá a largura total do container
    textAlign: "center",
  },
});
