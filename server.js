import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
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

app.get('/hello', (req, res) => {
  res.send('Hi there')
})

app.listen(app.locals.port, () => {
  console.log(`Listening on port ${app.locals.port}`)
})
