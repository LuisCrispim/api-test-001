# API Test 001

Este projeto é um exemplo de teste de API utilizando Node.js e diversas bibliotecas de suporte para garantir a qualidade das APIs.

## Tecnologias Utilizadas

- **Node.js**: Plataforma JavaScript para execução no servidor.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipos estáticos.
- **Prisma**: ORM (Object-Relational Mapping) para trabalhar com banco de dados.
- **Jest**: Framework de teste JavaScript com foco em simplicidade.
- **Supertest**: Biblioteca para testar APIs HTTP.
- **SQLite**: Banco de dados leve utilizado para armazenamento de dados em desenvolvimento.

## Como Executar

1. Clone este repositório:

    ```bash
    git clone https://github.com/LuisCrispim/api-test-001.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd api-test-001
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Execute as migrações do banco de dados:

    ```bash
    npx prisma migrate dev
    ```

5. Execute os testes:

    ```bash
    npm test
    ```

## Estrutura do Projeto

- **/src**: Contém o código-fonte da aplicação.
- **/tests**: Contém os arquivos de testes de API.
- **/prisma**: Contém o esquema do banco de dados e migrações.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.


