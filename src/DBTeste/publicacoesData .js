import usersData from "../DBTeste/usersData";

const usuarios = usersData;

/*
const user = usuarios.find(user => user.id === id);
Acima estamos criando um objeto chamado user, ele está usando o método find para 
procurar no array "usuarios" um objeto cuja propriedade id corresponda ao valor de id.
O resultado é armazenado na variável user, que é um objeto representando o usuário encontrado.

return user[tipo]
Estamos pegando esse usuario encontrado e passando a propriedade desejada
*/
const busca = (id, tipo) => {
    const user = usuarios.find(user => user.id === id);
    return user[tipo];
}

const publicacoesData = [
    {   
        id: 1,
        usuarioId: busca(1, "id"),
        nome: busca(1, "nome"),
        foto: busca(1, "imagem"),
        imagem: require('../../src/assets/carro1.jpg'), // Substitua pelo caminho real da imagem
        texto: 'Uma tarde tranquila com meu XR997SS2',
    },
    {   
        id: 2,
        usuarioId: busca(2, "id"),
        nome: busca(2, "nome"),
        foto: busca(2, "imagem"),
        imagem: require('../../src/assets/pizza.jpg'), // Substitua pelo caminho real da imagem
        texto: 'Pizza e Vinho de ferias no meu interior',
    },
    {   
        id: 3,
        usuarioId: busca(3, "id"),
        nome: busca(3, "nome"),
        foto: busca(3, "imagem"),
        imagem: require('../../src/assets/pesca.jpg'), // Substitua pelo caminho real da imagem
        texto: 'Meu hobby preferido, um dia calmo, tranquilo, a beleza da natureza. A janta hoje vai ser pescados XD',
    },
    {   
        id: 4,
        usuarioId: busca(4, "id"),
        nome: busca(4, "nome"),
        foto: busca(4, "imagem"),
        texto: 'Partiu cinema com as Mulheres',
    },
    {   
        id: 5,
        usuarioId: busca(5, "id"),
        nome: busca(5, "nome"),
        foto: busca(5, "imagem"),
        imagem: require('../../src/assets/pesca.jpg'), // Substitua pelo caminho real da imagem
        texto: 'Meu hobby preferido, um dia calmo, tranquilo, a beleza da natureza. A janta hoje vai ser pescados XD',
    },
    {   
        id: 6,
        usuarioId: busca(6, "id"),
        nome: busca(6, "nome"),
        foto: busca(6, "imagem"),
        texto: 'Partiu cinema com as Mulhieres',
    },
];

export default publicacoesData;
