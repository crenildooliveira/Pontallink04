// actions.ts
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/native';

interface LoginCredentials {
    email: string;
    senha: string;
}

export const handleLogin = async (
    credentials: LoginCredentials,
    navigation: NavigationProp<any>,
    setError: (error: string) => void,
    setLoading: (loading: boolean) => void
) => {
    const { email, senha } = credentials;

    if (!email || !senha) {
        setError("Por favor, preencha todos os campos.");
        return;
    }

    setLoading(true);
    setError('');

    try {
        const response = await axios.post('http://10.0.2.2:3000/login', {
            login: email,
            password: senha,
        });

        if (response.data.token) {
            await AsyncStorage.setItem('userToken', response.data.token);
            console.log("Token salvo com sucesso:", response.data.token);
            navigation.navigate("Feed");
        } else {
            setError("Token de autenticação não recebido.");
        }
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        setError("Falha ao fazer login. Verifique suas credenciais.");
    } finally {
        setLoading(false);
    }
};
