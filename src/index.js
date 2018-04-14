const process = require('process')

const tsm = require('teamcity-service-messages')

const config = require('../lib/config').getConfig(process.cwd())
const {successHandler, errorHandler, createCheckSuccessHandler} = require('../lib/reporter')

exports.success = successHandler
exports.error = errorHandler

exports.check = {}
exports.check.success = createCheckSuccessHandler(tsm, config)
