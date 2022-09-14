const express = require('express')

const app = express()

app.get('/product/:id/:user', (request, response) => {
  const { id, user } = request.params
  response.send(` 
    Product id: ${id}. 
    For user: ${user}. `)
})

app.get('/users/', (request, response) => {
  const { page, limit } = request.query
  response.send(`
  Page: ${page}.
  Limit: ${limit}.
  `)
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))
