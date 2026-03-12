# Banco API Tests – Automação de Testes de API REST

Projeto de **automação de testes para API REST** desenvolvido em **JavaScript** utilizando **Node.js**.

Os testes automatizados validam os endpoints da API do projeto:

https://github.com/juliodelimas/banco-api

Repositório deste projeto de testes:

https://github.com/AndyTex2003/banco-api-tests-t3

O objetivo é demonstrar a implementação de **testes automatizados para APIs REST**, utilizando boas práticas de organização, reutilização de código e geração de relatórios.

---

# Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de:

- Automatizar testes de endpoints de uma API REST
- Validar respostas HTTP
- Validar estrutura e conteúdo das respostas JSON
- Demonstrar organização de testes em Node.js
- Gerar relatórios de execução automatizados
- Servir como exemplo de automação de testes de API

---

# Stack Utilizada

Tecnologias e bibliotecas utilizadas:

- Node.js
- JavaScript

Bibliotecas de teste:

- **Mocha** → Framework de testes
- **Chai** → Biblioteca de asserções
- **Supertest** → Requisições HTTP para testes de API
- **Dotenv** → Gerenciamento de variáveis de ambiente
- **Mochawesome** → Geração de relatórios HTML



# Estrutura de Diretórios

## Estrutura de Diretórios

```
banco-api-tests-t3
├── helpers
│   └── autenticacao.js
├── test
│   ├── login.test.js
│   ├── contas.test.js
│   └── transferencias.test.js
├── mochawesome-report
├── package.json
├── README.md
└── .env
```
## Descrição

**helpers/**  
Funções auxiliares utilizadas pelos testes, como geração de token de autenticação.

**test/**  
Arquivos contendo os cenários de testes automatizados.

**mochawesome-report/**  
Diretório onde são gerados os relatórios HTML após execução dos testes.

---

# Configuração do Ambiente

Antes de executar os testes, é necessário criar um arquivo `.env` na raiz do projeto.

Este arquivo **não está versionado no repositório**.

## Exemplo de `.env`


BASE_URL=http://localhost:3000


### Descrição

**BASE_URL**

Define a URL base da API que será testada.

Isso permite executar os testes contra diferentes ambientes:

- Local
- Homologação
- Produção

---

# Executando a API antes dos testes

Este projeto testa a API disponível no repositório:

https://github.com/juliodelimas/banco-api

Antes de executar os testes, é necessário iniciar a API.

## 1. Clone a API


git clone https://github.com/juliodelimas/banco-api.git


## 2. Acesse o diretório


cd banco-api


## 3. Instale as dependências


npm install


## 4. Inicie o servidor


npm start


A API ficará disponível em:


http://localhost:3000


---

# Instalação do Projeto de Testes

Clone o repositório:


git clone https://github.com/AndyTex2003/banco-api-tests-t3.git


Entre no diretório:


cd banco-api-tests-t3


Instale as dependências:


npm install


---

# Execução dos Testes

Para executar os testes automatizados:


npm test


ou


npx mocha


---

# Geração de Relatórios

Este projeto utiliza **Mochawesome** para geração de relatórios em HTML.

Após a execução dos testes, o relatório será gerado no diretório:


mochawesome-report


Para visualizar:

1. Acesse a pasta
2. Abra o arquivo `.html` no navegador

O relatório apresenta:

- testes executados
- testes aprovados
- testes falhados
- tempo de execução
- detalhes das falhas

---

# Fluxo de Execução do Projeto

```
API Banco (banco-api)
│
│ Requisições HTTP
▼
Testes Automatizados
(Mocha + Supertest + Chai)
│
│ Execução dos cenários
▼
Validações
(Status HTTP + JSON)
│
│ Geração de evidências
▼
Relatório HTML
(Mochawesome)

```

# Boas Práticas Utilizadas

- Separação de **helpers reutilizáveis**
- Organização de testes por **endpoint**
- Utilização de **variáveis de ambiente**
- Uso de bibliotecas específicas para **testes de API**
- Geração automática de **relatórios de execução**

---

# Documentação das Dependências

Mocha  
https://mochajs.org/

Chai  
https://www.chaijs.com/

Supertest  
https://github.com/ladjs/supertest

Mochawesome  
https://github.com/adamgruber/mochawesome

Dotenv  
https://github.com/motdotla/dotenv

---

# Autor

**Anderson Batista dos Santos**

Projeto desenvolvido como prática de **Automação de Testes de API REST**.
