const express = require('express')
const database = require('./database')

const app = express()
const port = 3000

app.get('/person', async(req, res) => {
  const result = await database.getPerson()
  res.json(result)
})


app.post('/person', (req, res) => {
  
})
app.update('/person', (req, res) => {
  
})
app.delete('/person', (req, res) => {
  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})