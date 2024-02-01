// database.js

import SQLite from 'react-native-sqlite-storage';

const databaseName = 'MyDatabase.db';
const databaseVersion = '1.0';
const databaseDisplayName = 'My Database';
const databaseSize = 200000;

const db = SQLite.openDatabase(
  databaseName,
  databaseVersion,
  databaseDisplayName,
  databaseSize,
  () => {},
  error => {
    console.error('Erro ao abrir o banco de dados', error);
  }
);

// Criação da tabela de usuários
db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, condominio TEXT, nome TEXT, interesses TEXT)',
    [],
    () => {},
    error => {
      console.error('Erro ao criar a tabela de usuários', error);
    }
  );
});

// Função para inserir um novo usuário
export const inserirUsuario = (condominio, nome, interesses) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO users (condominio, nome, interesses) VALUES (?, ?, ?)',
      [condominio, nome, interesses],
      () => {},
      error => {
        console.error('Erro ao inserir usuário', error);
      }
    );
  });
};

// Função para atualizar um usuário existente
export const atualizarUsuario = (id, condominio, nome, interesses) => {
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE users SET condominio = ?, nome = ?, interesses = ? WHERE id = ?',
      [condominio, nome, interesses, id],
      () => {},
      error => {
        console.error('Erro ao atualizar usuário', error);
      }
    );
  });
};

// Função para excluir um usuário
export const excluirUsuario = id => {
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM users WHERE id = ?',
      [id],
      () => {},
      error => {
        console.error('Erro ao excluir usuário', error);
      }
    );
  });
};

// Função para obter todos os usuários
export const obterUsuarios = callback => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM users',
      [],
      (tx, results) => {
        const len = results.rows.length;
        const usuarios = [];
        for (let i = 0; i < len; i++) {
          const user = results.rows.item(i);
          usuarios.push(user);
        }
        callback(usuarios);
      },
      error => {
        console.error('Erro ao consultar usuários', error);
      }
    );
  });
};

export default db;
