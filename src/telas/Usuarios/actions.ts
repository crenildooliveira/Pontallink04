import { fetchUsers } from "../../apis/getUsers";
import { UserModel } from "./props";

//fazer uma solicitação para API
export const loadUsersData = async() => {
    const response = await fetchUsers();
    return response;
}