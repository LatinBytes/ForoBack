'use strict'

module.exports = {
    postgres: {
        connection: require('./postgres/db'),
        seeds: require('./postgres/seeds')
    }
}