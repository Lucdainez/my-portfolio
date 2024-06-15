export interface Iproject {
  id: number;
  projectName: string;
  linkGitHub: string;
  linkDeploy?: string;
  description: string;
}

export const projects: Iproject[] = [
  {
    id: 1,
    projectName: 'car_shop',
    linkGitHub: 'https://github.com/Lucdainez/car_shop',
    linkDeploy: '',
    description: `Bem-vindo ao Car shop projeto de API de gerenciamento de concessionária de veículos com CRUD utilizando Programação Orientada a Objetos (POO) e banco de dados MongoDB com o framework do Mongoose.

    Este projeto foi desenvolvido com o objetivo de aplicar os princípios da POO na construção de uma API para gerenciamento de uma concessionária de veículos. A API permitirá a realização das operações de CRUD (Create, Read, Update, Delete) para manipulação dos dados de veículos cadastrados.

    A construção da API será realizada utilizando o banco de dados MongoDB com o framework do Mongoose, o que proporcionará uma fácil manipulação dos dados através de uma interface amigável e intuitiva.`
  },
  {
    id: 2,
    projectName: 'blog_api',
    linkGitHub: 'https://github.com/Lucdainez/blog_api',
    linkDeploy: '',
    description:
      'Projeto da trybe onde foi criado uma API REST que conversa com um banco de dados MYSQL, a partir da biblioteca Express e do ORM Sequelize. Foram criados vários Endpoints de requisição com validações de regras de negócio e de valores requisitados. Esse projeto foi realizado com arquitetura de Software no modelo de camadas, sendo elas controller,service e model. O foco desse projeto foi criar a model utilizando o Sequelize para facilitar a interação da Aplicação com o Banco de Dados.'
  },
  {
    id: 3,
    projectName: 'trybesmith',
    linkGitHub: 'https://github.com/Lucdainez/trybesmith',
    linkDeploy: '',
    description:
      'Projeto da Trybe onde foi criado uma API REST que conversa com um banco de dados MYSQL, a partir da biblioteca Express. Toda a aplicação é dockerizada, foram criados vários Endpoints de requisição com validações de regras de negócio e de valores requisitados e foi utilizada também a biblioteca jsonWebToken para validar e garantir mais segurança a API. Esse projeto foi realizado com arquitetura de Software no modelo de camadas, sendo elas controller,service e model. O foco desse projeto foi utilizar o TypeScript e sua forte tipagem para criar uma aplicação mais segura e robusta com organização e clean code.'
  }
];
