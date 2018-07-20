require('dotenv/config')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const { MongoClient } = require('mongodb')
const app = express()
const flashCardsRouter = require('./routes/flash-cards-router.js')
const connectionString = process.env.MONGODB_URI.split('/')

MongoClient
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
  .then(client => {
    const db = client.db(connectionString[connectionString.length - 1])
    const collection = db.collection('cards')
    const publicPath = path.join(__dirname, 'public/')
    app
      .use(express.static(publicPath))
      .use(bodyParser.json())
      .use('/flash-cards', flashCardsRouter(collection))

    app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`))
  })
