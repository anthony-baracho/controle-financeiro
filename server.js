import express, { request } from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/users', (req, res) => {
    
    users.push(req.body)

    res.status(201).json(req.body)
})

app.get('/users', (req, res) => {
    res.status(200).json(users)
})

app.listen(3000), () => {
    console.log("deu certo");
}

/*
MongoDB

usuario: ruank256_db_user
senha: oE7zgb9aBkLivDRH

iniciar servidor: node --watch server.js
parar servidor: ctrl + C
iniciar o prisma: npx prisma init
*/