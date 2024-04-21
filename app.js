const express = require('express')
const database = require('./database')

const app = express()
const port = 3000
app.use(express.json())

// Fetching Data from Database
app.get('/person', async(req, res) => {
  const result = await database.getPerson()
  res.json(result)
})

// Inserting data into DataBase
app.post('/person', async(req, res) => {
    const body = req.body
    const result = await database.addPerson(body)
    res.json(result)
})

// Updating data from database
app.put('/person/:id', async(req, res) => {
    const id_person = req.params.id
    const body = req.body
    const result = await database.updatePerson(id_person, body)
    res.json(result)
})

// Removing data from database
app.delete('/person/:id', async(req, res) => {
    const id_person = req.params.id
    const body = req.body
    const result = await database.deletePerson(id_person, body)
    res.json(result)
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})