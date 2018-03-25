const tsm = require('teamcity-service-messages')

const config = require('../lib/config')
const {successHandler, errorHandler, createCheckSuccessHandler} = require('../lib/reporter')

exports.success = successHandler
exports.error = errorHandler

exports.check = {}
exports.check.success = createCheckSuccessHandler(tsm, config)
