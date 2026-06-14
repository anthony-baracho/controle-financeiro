# Controle Financeiro

Projeto de aplicação web desenvolvido com **React + Vite**, utilizando **TailwindCSS** para estilização e **Docker + Nginx** para deploy em produção.

---

## Tecnologias Utilizadas

* React
* Vite
* TailwindCSS
* Node.js
* Docker
* Nginx
* npm

---

## Funcionalidades

* Interface moderna e responsiva
* Estrutura baseada em componentes React
* Estilização com TailwindCSS
* Build otimizado com Vite
* Deploy via Docker containerizado

---

## Instalação e Execução Local

### 1. Clone o repositório

```bash
git clone https://github.com/anthony-baracho/controle-financeiro.git
```

### 2. Acesse a pasta

```bash
cd controle-financeiro
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto em modo de desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível em:

`http://localhost:5173`

---

## Build de Produção

Para gerar a versão otimizada:

```bash
npm run build
```

A saída será gerada na pasta:

- dist/

---

## Docker

Docker é necessário para testar a versão de produção.

### Build da Imagem

```bash
docker build -t controle-financeiro .
```

### Execução do Container

```bash
docker run -p 8080:80 controle-financeiro
```

A aplicação ficará disponível em:

- http://localhost:8080

---

## Arquitetura Docker

O projeto utiliza **multi-stage build**:

1. Node.js instala as dependências e gera o build do Vite.
2. Nginx serve os arquivos estáticos gerados na pasta `dist`.

Fluxo de execução:

- React (Vite) → Build → dist → Nginx → Navegador

---


## Problemas Encontrados e Soluções

### Erro PostCSS / Tailwind


- Cannot find module '@tailwindcss/postcss'

**Solução:**

```bash
npm install -D @tailwindcss/postcss
```

---

### Erro Dockerfile Inválido

- unknown instruction

**Solução:**

* Remoção de caracteres inválidos no início do arquivo.

---

### Porta Já em Uso


- port is already allocated (8080)

**Solução:**

* Encerrar o container anterior.
* Utilizar outra porta disponível.

---

## Fluxo de Trabalho com Git

```bash
git add .
git commit -m "Descrição das alterações"
git push
```

---

## Estrutura do Projeto

controle-financeiro/
├── src/
├── public/
├── dist/
├── Dockerfile
├── package.json
├── package-lock.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js

---

## Status do Projeto

* Build funcionando
* Docker funcionando
* TailwindCSS configurado
* Vite otimizado
* Pronto para deploy

---

## Autores

* Ruan Kelvin Vieira dos Santos
* Anthony Gabriel Lemos Baracho
* Phellipe de Amorim Martins
* Fernanda Nogueira de França
* Adriano Silva do Nascimento
* Everton Hasabias Furtunato Celestino

---

Projeto desenvolvido para a disciplina de **Códigos de Alta Performance**.
