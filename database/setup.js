require('dotenv/config')
const { MongoClient } = require('mongodb')
const seed = require('./seed.js')

MongoClient
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(client => {
    const db = client.db('flash-cards-react')
    const collection = db.collection('cards')
    return collection
      .insertMany(seed))
      .then(() => client.close())
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
