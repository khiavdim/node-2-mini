const express = require('express')
const app = express()
const port = 4000
const bc = require('./controller/books_controller')

//Top Level Middleware
app.use(express.json())
app.use(express.static(__dirname + "/../build"))

//Endpoints
app.get('/api/books', bc.read)
app.post('/api/books', bc.create)
app.put('/api/books/:id', bc.update)
app.delete('/api/books/:id', bc.delete)

//Listen
app.listen(port, () => console.log(`Server is listening on port ${port}`))


