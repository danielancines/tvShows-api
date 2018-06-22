const tvShowRoutes = require('./tvShowRoute')
const seasonRoutes = require('./seasonRoute')
const episodeRoutes = require('./episodeRoute')
const router = require('express').Router()

router.use('/tvshows', tvShowRoutes)
router.use('/seasons', seasonRoutes)
router.use('/episodes', episodeRoutes)

module.exports = router
