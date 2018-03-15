const tsm = require('teamcity-service-messages')

const {successHandler, errorHandler, createCheckSuccessHandler} = require('../lib/reporter')

exports.success = successHandler
exports.error = errorHandler

exports.check = {}
exports.check.success = createCheckSuccessHandler(tsm)
