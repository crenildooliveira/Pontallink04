import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

import Header from "../telas/componentes/Header";
import Footer from "../telas/componentes/Footer";
import Feed from "../telas/Feed/Feed";
import Login from "../telas/Login/Login";
import Section from "../telas/componentes/Section";
import TelaTeste from '../telas/componentes/TelaTeste';
import Perfil from "../telas/Perfil/Perfil";
import Usuarios from '../telas/Usuarios/Usuarios';
import PesquisaUsuarios from "../telas/Pesquisa/PesquisaUsuarios";
import Mensagens from "../telas/Mensagens/Mensagens";
import PesquisaGlobal from "../telas/Pesquisa/PesquisaGlobal"
import Notificacoes from "../telas/Notificacoes/Notificacoes"

const Stack = createNativeStackNavigator();

export default function Rotas() {

  return (
      <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
          />

          <Stack.Screen
          name="Header"
          component={Header}
          options={{ headerShown: false }}
          />

          <Stack.Screen
          name="Footer"
          component={Footer}
          options={{ headerShown: false }}
          />

          <Stack.Screen
          name="Section"
          component={Section}
          options={{ headerShown: false }}
          />

          <Stack.Screen
          name="Feed"
          component={Feed}
          options={{ headerShown: false }}
          />

          <Stack.Screen
          name="TelaTeste"
          component={TelaTeste}
          options={{ headerShown: false }}
          />

          <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ headerShown: false }}
          />

          <Stack.Screen
          name="Usuarios"
          component={Usuarios}
          options={{ headerShown: false }}
          />
          
          <Stack.Screen
          name="PesquisaUsuarios"
          component={PesquisaUsuarios}
          options={{ headerShown: false }}
          />
          
          <Stack.Screen
          name="Mensagens"
          component={Mensagens}
          options={{ headerShown: false }}
          />

          <Stack.Screen
          name="PesquisaGlobal"
          component={PesquisaGlobal}
          options={{ headerShown: false }}
          />
          
          <Stack.Screen
          name="Notificacoes"
          component={Notificacoes}
          options={{ headerShown: false }}
          />
      </Stack.Navigator>
    
  );
}
