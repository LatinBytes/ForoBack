'use strict'
const app = require('express')()
const bodyParser = require('body-parser')
const errorHandler = require('./src/utils/errorHandler')

const db = require('./src/connections/db/index')

const eraseDatabaseOnSync = process.env.ERRASE_DB || true
db.postgres.connection.sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
    if (eraseDatabaseOnSync) {
      await db.postgres.seeds()
    }
})

process.on('uncaughtException', errorHandler.handleFatalError)
process.on('unhandledRejection',  errorHandler.handleFatalError)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

console.log('running...')

module.exports = app