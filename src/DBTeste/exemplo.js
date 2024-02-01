import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import db, { inserirUsuario, atualizarUsuario, excluirUsuario, obterUsuarios } from './caminho/para/database'; // Ajuste o caminho conforme a estrutura do seu projeto

export default function MeuComponente() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Exemplo de consulta de usuários
    obterUsuarios(usuarios => {
      setUsuarios(usuarios);
    });
  }, []);

  const handleInserirUsuario = () => {
    inserirUsuario('Condominio Teste', 'Nome Teste', 'Interesses Teste');
  };

  const handleAtualizarUsuario = () => {
    if (usuarios.length > 0) {
      const primeiroUsuario = usuarios[0];
      atualizarUsuario(primeiroUsuario.id, 'Novo Condominio', 'Novo Nome', 'Novos Interesses');
    }
  };

  const handleExcluirUsuario = () => {
    if (usuarios.length > 0) {
      const primeiroUsuario = usuarios[0];
      excluirUsuario(primeiroUsuario.id);
    }
  };

  return (
    <View>
      <Text>Meu Componente</Text>
      <Button title="Inserir Usuário" onPress={handleInserirUsuario} />
      <Button title="Atualizar Usuário" onPress={handleAtualizarUsuario} />
      <Button title="Excluir Usuário" onPress={handleExcluirUsuario} />
    </View>
  );
}
