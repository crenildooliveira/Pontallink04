import axios from "axios";
import { UserModel } from "../telas/Usuarios/props";
import { API_BASE_URL_USERS } from "../constants/url";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ApiListUsers {
    users: UserModel[]
}

{/*export const fetchGetUsersData = async() =>{
    try{
        const response = await axios.get<ApiListUsers>(API_BASE_URL_USERS);
        const UsersData = response.data.users;

        return UsersData;

    }catch(error){
        console.log("Erro ao buscar dados da API GetUsersData:", error);
        return null;
    }
}*/}

export const fetchUsers = async () => {
    try {
        // Recuperar o token do AsyncStorage
        const token = await AsyncStorage.getItem('userToken');

        if (token) {
            // Fazer a requisição com o token no header
            const response = await axios.get('http://localhost:3000/user/users', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log("Dados dos usuários:", response.data);
        } else {
            console.log("Token não encontrado.");
        }
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
    }
};
