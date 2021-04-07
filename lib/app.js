const express = require('express')
const logger = require('../util/logger')
require('dotenv').config()

let indexRouter = require('../routes/index')
let appInfo = require('../routes/appInfo');
let level = process.env.log_level || 'info'
let app = express()

logger.log(level, 'Yipee!Get started on '+ (process.env.service_port || '3000'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', indexRouter)
app.use('/info', appInfo)

module.exports = app