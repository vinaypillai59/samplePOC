const express = require('express')
const logger = require('../util/logger')
const debug = require('debug')('demo:app')

const router = express.Router()
let level = process.env.log_level || 'info'

router.get('/', function(req, res, next) {
  let response = "Welcome to Docker-App!!!!"
  debug(response)
  logger.log(level, response)
  res.status(200).send(response)
});

module.exports = router
