let usersData = [
  { id: 1,
    condominio: "Condominio Raio Verde - Predio 15",
    nome: 'Cristiano Ronaldo',
    imagem: require('../assets/foto.png'),
    interesses: ["Futebol", "Basquete", "Games", "Corrida", "Natação", "Animes"],
    bio: "Sou um ex jogador de futebol do templo verde, joguei pôr 45 anos. Hoje em dia passo meu tempo na natação, amo água e como frutas.",
    nAmigos: 651,
    nSeguidores: 1550
  },
  { id: 2,
    condominio: "Condominio Praia Mansa - Predio 07",
    nome: 'Katarina',
    imagem: require('../assets/foto.png'),
    interesses: ["Volei", "Correr", "Games", "Natação", "Livros", "Series"],
    bio: "Amo um ambiente calmo e sem barulhos, gosto de romances, praia e animais.",
    nAmigos: 43,
    nSeguidores: 18
  },
  { id: 3,
    condominio: "Condominio Pico Alto - Predio 18",
    nome: 'Globovaldo',
    imagem: require('../assets/foto.png'),
    interesses: ["Capoeira", "Judô", "Caratê", "Jiu-Jitsu", "Taekwondo", "Flores"],
    bio: "Especialista em estilos de lutas, sempre em busca de aprender uma tecnica nova. Meu hobby é cuidar de flores, minhas preferidas são rosas com suas pétalas macias e delicadas",
    nAmigos: 61,
    nSeguidores: 40
  },
  { id: 4,
    condominio: "Condominio Chifre Álem - Predio 23",
    nome: 'Cornovaldo',
    imagem: require('../assets/foto.png'),
    interesses: ["Baladas", "ZéRamalho", "DuducaeDalvan", "Moda", "Samba", "Carnaval"],
    bio: "Homem fiel, gosto de festas, baladas etc. Privado Pai tá ON",
    nAmigos: 15,
    nSeguidores: 2184
  },
  { id: 5,
    condominio: "Condominio Raio de Sol - Predio 01",
    nome: 'Katarina69',
    imagem: require('../assets/foto.png'),
    interesses: ["pato", "Correr", "lol", "Natação", "xadrex", "frutas"],
    bio: "Sol, mar, cachoeiras.",
    nAmigos: 5,
    nSeguidores: 3
  },
  { id: 6,
    condominio: "Condominio Veludo - Predio 13",
    nome: 'Katarina677',
    imagem: require('../assets/foto.png'),
    interesses: ["festa", "CS", "Games", "Basquete", "Filmes", "Novelas"],
    bio: "Gosto de doramas e sou alergica a animais S2",
    nAmigos: 433,
    nSeguidores: 178
  },
];
  
  export default usersData;

  export const getUsersData = () => usersData;

  export const atualizarUsuario = (id, novosDados) => {
    const index = usersData.findIndex(user => user.id === id);
    if (index !== -1) {
      usersData[index] = { ...usersData[index], ...novosDados };
      console.log("Usuário atualizado:", usersData[index]);
    } else {
      console.log("Usuário não encontrado");
    }
  };
