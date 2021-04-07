const winston = require('winston')

const logger = winston.createLogger({
    level: process.env.log_level || 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console()
    ]
})

module.exports = logger