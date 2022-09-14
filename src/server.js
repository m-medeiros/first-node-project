const express = require('express')

const app = express()

app.get('/product/:id/:user', (request, response) => {
  const { id, user } = request.params
  response.send(` 
    Product id: ${id}. 
    For user: ${user}. `)
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))
