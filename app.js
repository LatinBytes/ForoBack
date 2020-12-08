'use strict'
const app = require('express')()
const bodyParser = require('body-parser')

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

module.exports = app