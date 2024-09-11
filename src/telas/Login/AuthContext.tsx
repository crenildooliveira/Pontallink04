import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextData {
    token: string | null;
    signIn: (token: string) => void;
    signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>({
    token: null,
    signIn: () => {},
    signOut: () => {},
});

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const loadToken = async () => {
            try {
                const storedToken = await AsyncStorage.getItem("userToken"); // Tenta recuperar o token armazenado com a chave "userToken"
                if (storedToken) { // Se o token foi encontrado
                    setToken(storedToken); // Atualiza o estado com o token recuperado
                }
            } catch (error) {
                console.error("Erro ao carregar o token: ", error); // Em caso de erro, exibe uma mensagem de erro no console
            }
        };
        loadToken(); // Chama a função assíncrona para carregar o token
    }, []); // O array vazio indica que o efeito deve ser executado apenas uma vez, quando o componente é montado
    

    const signIn = async (newToken: string) => {
        setToken(newToken); // Atualiza o estado do token com o novo token recebido
        try {
            // Tenta armazenar o token no AsyncStorage
            await AsyncStorage.setItem("userToken", newToken);
        } catch (error) {
            // Se ocorrer um erro ao salvar, exibe uma mensagem de erro no console
            console.error("Erro ao salvar o token", error);
        }
    };
    

    // signOut é uma constante que recebe um metodo do tipo async e este metodo é anônimo;
    const signOut = async () => {
        setToken(null);
        try{
            // Tenta REMOVER o token no AsyncStorage
            await AsyncStorage.removeItem("userToken");
        } catch (error) {
            console.error("Erro ao remover o token", error);
        }
    };

    return (
        <AuthContext.Provider value={{ token, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )


}