let express = require('express')
const logger = require('../util/logger')
const debug = require('debug')('demo:app')

let router = express.Router()
let level = process.env.log_level || 'info'

router.get('/', function (req, res, next) {
  let response = {
    "service_name": "myapplication",
    "version": "1.0.0",
    "git_commit_sha": process.env.commit || "abcd345",
    "environment": {
      "service_port": process.env.service_port || "3000",
      "log_level": process.env.log_level || "INFO"
    }
  }
  debug(`Response is`, JSON.stringify(response))
  logger.log(level, "Response is " + JSON.stringify(response))
  res.status(200).send(response)
})

module.exports = router
