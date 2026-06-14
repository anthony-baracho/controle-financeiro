# 💰 Controle Financeiro

Projeto de aplicação web desenvolvido com **React + Vite**, utilizando **TailwindCSS** para estilização e **Docker + Nginx** para deploy em produção.

------

## 🚀 Tecnologias utilizadas

- ⚛️ React
- ⚡ Vite
- 🎨 TailwindCSS
- 🟢 Node.js
- 🐳 Docker
- 🌐 Nginx
- 📦 npm

------

## 📌 Funcionalidades

- Interface moderna e responsiva
- Estrutura baseada em componentes React
- Estilização com TailwindCSS
- Build otimizado com Vite
- Deploy via Docker containerizado

------

## ⚙️ Instalação e execução local

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


### 4. Rode o projeto em modo desenvolvimento

```bash
npm run dev
```


A aplicação ficará disponível em:


http://localhost:5173


------

## 🏗️ Build de produção

Para gerar a versão otimizada:

```bash
npm run build
```

A saída será gerada na pasta:


dist/


------

## 🐳 Docker

Docker é necessário para testar a versão de produção.

### 📦 Build da imagem

```bash
docker build -t controle-financeiro .
```

### ▶️ Executar container

```bash
docker run -p 8080:80 controle-financeiro
```

A aplicação ficará disponível em:


http://localhost:8080


------

## 🧱 Arquitetura do Docker

O projeto utiliza **multi-stage build**:

1. **Node.js** → instala dependências e gera build do Vite
2. **Nginx** → serve os arquivos estáticos da pasta `dist`

Fluxo:


React (Vite) → build → dist → Nginx → navegador


------

## ⚠️ Problemas encontrados e soluções

### ❌ Erro PostCSS / Tailwind


Cannot find module '@tailwindcss/postcss'


✔️ Solução:

```bash
npm install -D @tailwindcss/postcss
```

------

### ❌ Erro Dockerfile inválido


unknown instruction


✔️ Solução:

* remoção de caracteres inválidos no início do arquivo

------

### ❌ Porta já em uso


port is already allocated (8080)


✔️ Solução:

* encerrar container anterior ou usar outra porta

------

### ❌ Arquivo inesperado no Git


on package-lock.json


✔️ Solução:

* remoção manual do arquivo
* limpeza do repositório

------

## 🔧 Git workflow utilizado

```bash
git add .
git commit -m "Descrição das alterações"
git push
```

------

## 📁 Estrutura do projeto


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


------

## 🎯 Status do projeto

✔️ Build funcionando
✔️ Docker funcionando
✔️ Tailwind configurado
✔️ Vite otimizado
✔️ Pronto para deploy

------

## 📌 Autores

- Ruan Kelvin Vieira dos Santos
- Anthony Gabriel Lemos Baracho
- Phellipe de Amorim Martins
- Fernanda Nogueira de França
- Adriano Silva do Nascimento
- Everton Hasabias Furtunato Celestino

Projeto Desenvolvido para a Disciplina de Códigos de Alta Performance.