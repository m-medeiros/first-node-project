const express = require('express')

const app = express()
app.use(express.json())

app.post('/users/', (request, response) => {
  const { name, email, password } = request.body
  /* response.json(`User: ${name} - Email: ${email} - Password: ${password}`) Devolve em HTML (Não é tão conveniente) */
  response.json({ name, email, password }) // Devolve em formato JSON (Objeto) padrão mais conveniente em resposta de API
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))
