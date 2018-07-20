require('dotenv/config')
const { MongoClient } = require('mongodb')
const seed = require('./seed.js')
const connectionString = process.env.MONGODB_URI.split('/')

MongoClient
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(client => {
    const db = client.db(connectionString[connectionString.length - 1])
    const collection = db.collection('cards')
    return collection
      .deleteMany({})
      .then(() => collection.insertMany(seed))
      .then(() => client.close())
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
