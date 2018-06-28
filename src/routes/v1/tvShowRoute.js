const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const result = {
        message: 'Tv Show Route',
        status: 200
    }
    res.send(result).status(200)
})

module.exports = router