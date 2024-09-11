export interface UserModel{
    id: number;
    condominio: string;
    nome: string;
    image: string;
    interesses: [string?, string?, string?, string?, string?, string?];
    bio: string;
    nAmigos: number;
    nSeguidores: number;
}