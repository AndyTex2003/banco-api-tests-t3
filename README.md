# Banco API Tests – Automação de Testes de API REST

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=flat-square&logo=mocha&logoColor=white)
![Chai](https://img.shields.io/badge/Chai-A30701?style=flat-square&logo=chai&logoColor=white)
![Supertest](https://img.shields.io/badge/Supertest-4B5563?style=flat-square)
![API REST](https://img.shields.io/badge/API-REST-0A7EA4?style=flat-square)

Projeto de **automação de testes para API REST** desenvolvido em **JavaScript**, utilizando **Mocha**, **Chai** e **Supertest**.

Os testes automatizados validam os endpoints da **Banco API**, utilizada como sistema sob teste.

- API testada: [github.com/juliodelimas/banco-api](https://github.com/juliodelimas/banco-api)
- Repositório dos testes: [github.com/AndyTex2003/banco-api-tests-t3](https://github.com/AndyTex2003/banco-api-tests-t3)

O objetivo é demonstrar a implementação de **testes automatizados para APIs REST**, aplicando boas práticas de organização, reutilização de código e geração de relatórios.

---

## Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de:

- Automatizar testes de endpoints de uma **API REST**
- Validar **respostas HTTP**
- Validar a **estrutura e o conteúdo das respostas JSON**
- Aplicar uma estrutura organizada para testes automatizados em **Node.js**
- Gerar **relatórios de execução automatizados**
- Demonstrar, na prática, uma abordagem estruturada de **automação de testes de API**

---

## Stack Utilizada

### Tecnologias

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

### Bibliotecas de Teste

![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=flat-square&logo=mocha&logoColor=white)
![Chai](https://img.shields.io/badge/Chai-A30701?style=flat-square&logo=chai&logoColor=white)
![Supertest](https://img.shields.io/badge/Supertest-4B5563?style=flat-square)
![Dotenv](https://img.shields.io/badge/Dotenv-ECD53F?style=flat-square&logo=dotenv&logoColor=black)
![Mochawesome](https://img.shields.io/badge/Mochawesome-2DA44E?style=flat-square)



## Estrutura de Diretórios

```text
banco-api-tests-t3/
├── fixtures/
│   ├── postLogin.json
│   └── postTransferencias.json
├── helpers/
│   └── autenticacao.js
├── test/
│   ├── login.test.js
│   ├── contas.test.js
│   └── transferencias.test.js
├── .gitignore
├── README.md
├── package-lock.json
└── package.json

```
## Descrição dos Diretórios

### `fixtures/`

Arquivos contendo massas de dados utilizadas nos testes automatizados.

### `helpers/`

Funções auxiliares utilizadas pelos testes, como geração de token de autenticação.

### `test/`

Arquivos contendo os cenários de teste automatizados.

---

## Configuração do Ambiente

Antes de executar os testes, é necessário criar um arquivo `.env` na raiz do projeto.

Este arquivo **não está versionado no repositório**.

### Exemplo de `.env`

```env
BASE_URL=http://localhost:3000
```

### BASE_URL

Define a URL base da API que será testada.

Isso permite executar os testes contra diferentes ambientes, como:

- Local
- Homologação
- Produção
---

## Executando a API antes dos testes

Este projeto testa a API disponível no repositório:

[github.com/juliodelimas/banco-api](https://github.com/juliodelimas/banco-api)

Antes de executar os testes, é necessário iniciar a API.

### 1. Clone a API

```bash
git clone https://github.com/juliodelimas/banco-api.git
```

### 2. Acesse o diretório

```bash
cd banco-api
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor

```bash
npm start
```

A API ficará disponível em:

```text
http://localhost:3000
```

---

## Instalação do Projeto de Testes

### Clone o repositório

```bash
git clone https://github.com/AndyTex2003/banco-api-tests-t3.git
```

### Acesse o diretório

```bash
cd banco-api-tests-t3
```

### Instale as dependências

```bash
npm install
```

---

## Execução dos Testes

Para executar os testes automatizados:

```bash
npm test
```

ou

```bash
npx mocha
```


---

## Geração de Relatórios

Este projeto utiliza **Mochawesome** para geração de relatórios em HTML.

Após a execução dos testes, o relatório será gerado no diretório:

`mochawesome-report/`

### Visualizar o relatório

1. Acesse a pasta `mochawesome-report/`
2. Abra o arquivo `.html` no navegador

### Informações apresentadas

O relatório apresenta:

- Testes executados
- Testes aprovados
- Testes com falha
- Tempo de execução
- Detalhes das falhas

---

## Fluxo de Execução do Projeto

```text
API Banco (banco-api)
│
├── Requisições HTTP
│
▼
Testes Automatizados
(Mocha + Supertest + Chai)
│
├── Execução dos cenários
│
▼
Validações
(Status HTTP + JSON)
│
├── Geração de evidências
│
▼
Relatório HTML
(Mochawesome)

```

## Boas Práticas Aplicadas

- Separação de **helpers reutilizáveis**
- Organização dos testes por **endpoint**
- Utilização de **variáveis de ambiente**
- Uso de bibliotecas específicas para **testes de API**
- Geração automatizada de **relatórios de execução**

---

## Documentação das Dependências

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/ladjs/supertest)
- [Mochawesome](https://github.com/adamgruber/mochawesome)
- [Dotenv](https://github.com/motdotla/dotenv)

---

## Autor

**Anderson Batista dos Santos**

QA | Testes de Software | Qualidade de Software

- LinkedIn: [linkedin.com/in/anderson-santos-qa](https://www.linkedin.com/in/anderson-santos-qa/)
- GitHub: [github.com/AndyTex2003](https://github.com/AndyTex2003)
