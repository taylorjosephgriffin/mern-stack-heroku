const { Router } = require('express')

module.exports = function flashCardsRouter(collection) {

  const router = new Router()

  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then(cards => res.json(cards))
      .catch(err => console.error(err))
  })

  return router
}
