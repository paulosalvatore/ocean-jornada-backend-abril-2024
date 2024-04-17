const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

// Exercício: Criar um endpoint [GET] /oi que exibe: "Olá, mundo!"
app.get('/oi', function (req, res) {
  res.send('Olá, mundo!')
})

// Lista de Itens
const lista = ['Rick Sanchez', 'Morty Smith', 'Summer Smith']

// Endpoint Read All -> [GET] /item
app.get('/item', function (req, res) {
  res.send(lista)
})

app.listen(3000)
