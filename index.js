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
//              0               1              2

// Endpoint Read All -> [GET] /item
app.get('/item', function (req, res) {
  res.send(lista.filter(Boolean))
})

// Endpoint Read By ID -> [GET] /item/:id
app.get('/item/:id', function (req, res) {
  // Acessamos o parâmetro de rota ID
  const id = req.params.id

  // Acessamos o item na lista (usando o id - 1)
  // e colocamos na variável item
  const item = lista[id - 1]

  // Enviamos para a resposta o item acessado
  res.send(item)
})

// Especificamos que o corpo da requisição será em JSON
app.use(express.json())

// Endpoint Create -> [POST] /item
app.post('/item', function (req, res) {
  // Pegamos o item através do corpo da requisição
  // No objeto JSON, pegamos a propriedade nome
  const item = req.body.nome

  // Adicionamos o item obtido na lista
  lista.push(item)

  // Exibimos uma mensagem de sucesso
  res.send('Item adicionado com sucesso: ' + item)
})

// Endpoint Update -> [PUT] /item/:id
app.put('/item/:id', function (req, res) {
  // Obtemos o ID do parâmetro de rota
  const id = req.params.id

  // Obtemos o corpo da requisição para saber qual o novo valor
  const novoItem = req.body.nome

  // Atualizamos o item na lista
  lista[id - 1] = novoItem

  // Enviamos uma mensagem de sucesso
  res.send('Item atualizado com sucesso: ' + id + '. ' + novoItem)
})

// Endpoint Delete -> [DELETE] /item/:id
app.delete('/item/:id', function (req, res) {
  // Obtemos o ID do parâmetro de rota
  const id = req.params.id

  // Removemos o item da lista
  delete lista[id - 1]

  // Exibimos uma mensagem de sucesso
  res.send('Item removido com sucesso: ' + id)
})

app.listen(3000)
