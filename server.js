const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
app.locals.port = process.env.PORT || 3000

app.locals.pets = [
  {name: 'Hudson', type: 'Dog'}, {name: 'Marlow', type: 'Cat'}
]

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send(app.locals.pets)
})

app.listen(app.locals.port, () => {
  console.log(`Listening on port ${app.locals.port}`)
})
