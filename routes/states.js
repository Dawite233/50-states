let express = require('express')
let States = require('../models').States

let router = express.Router()

router.get('/states', function(req, res, next) {
    States.findAll({ order: ['name']}).then ( states => {
        return res.json(states)  // will covert to json file 
    })
    .catch( err => next(err) )
})

module.exports = router