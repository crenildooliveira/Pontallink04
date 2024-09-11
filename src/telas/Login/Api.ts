import axios from "axios";

const API_URL = "http://localhost:3000";

export const api = async (email: string, senha: string) => {
    try{
        const response = await axios.post(`${API_URL}/login`, {
            email,
            senha,
        });
        //supondo que token está em response.data.token
        console.log("estmos em api.ts");
        console.log(response.data.token);
        return response.data;
        
    } catch (error) {
        console.error("Erro no login", error);
        throw error;
    }
}