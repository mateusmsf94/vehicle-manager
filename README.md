# 🚗 Projeto de Gerenciamento de Veículos 🏍️

Esse projeto tem como objetivo fornecer uma API para gerenciar carros e motos, possibilitando o cadastro, listagem, atualização e remoção dos veículos. Além disso, o projeto inclui testes unitários para garantir a qualidade do código.

## 🛠️ Tecnologias utilizadas

- Node.js
- Express
- Mongoose
- MongoDB
- Mocha
- Chai

## 📋 Requisitos

### Requisitos Obrigatórios

1. 🚗 Cadastrar um carro: rota `/cars`
2. 📖 Listar carros: rotas `/cars` e `/cars/:id`
3. ✅ Testes para cobrir 30% da camada de Service
4. 🛠️ Atualizar um carro por ID: rota `/cars/:id`
5. 🏍️ Cadastrar uma moto: rota `/motorcycles`
6. ✅ Testes para cobrir 60% da camada de Service
7. 📖 Listar motos: rotas `/motorcycles` e `/motorcycles/:id`

### Requisitos Bônus

8. 🛠️ Atualizar uma moto por ID: rota `/motorcycles/:id`
9. ✅ Testes para cobrir 80% da camada de Service

## 🛠️ Instalação

1. Clone o repositório
```sh
git clone https://github.com/mateusmsf94/vehicle-manager.git
```

2. Instale as dependências
```sh
npm install
```

3. Inicie o servidor
```sh
npm start
```

4. Execute os testes
```sh
npm run test:mocha
```

## 📚 Uso

Você pode utilizar um aplicativo, como o [Postman](https://www.postman.com/), para testar as rotas da API.

## 📚 Endpoints

1. `/cars` - Cadastrar um carro (POST)
2. `/cars` - Listar todos os carros (GET)
3. `/cars/:id` - Listar carro por ID (GET)
4. `/cars/:id` - Atualizar carro por ID (PUT)
5. `/motorcycles` - Cadastrar uma moto (POST)
6. `/motorcycles` - Listar todas as motos (GET)
7. `/motorcycles/:id` - Listar moto por ID (GET)
8. `/motorcycles/:id` - Atualizar moto por ID (PUT)

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.