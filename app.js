const express = require('express')
const database = require('./database')

const app = express()
const port = 3000
app.use(express.json())
app.get('/person', async(req, res) => {
  const result = await database.getPerson()
  res.json(result)
})


app.post('/person', async(req, res) => {
    const body = req.body
    const result = await database.addPerson(body)
    res.json(result)
})
app.put('/person', (req, res) => {
  
})
app.delete('/person', (req, res) => {
  
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})