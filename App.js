import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Rotas from "./src/rotas/Rotas";
import Login from "./src/telas/Login/Login";
import Feed from "./src/telas/Feed/Feed";
import Perfil from "./src/telas/Perfil/Perfil";

function App() {
  return (
    <NavigationContainer>
        <StatusBar backgroundColor="#7EA5D9" barStyle="light-content" />
        <Rotas />
    </NavigationContainer>
  );
}

export default App;
