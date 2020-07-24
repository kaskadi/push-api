const getKeys = require('./helpers/get-keys.js')
const buildResponse = require('./helpers/build-response.js')
const es = require('create-es-client')

module.exports.handler = async (event) => {
  return await getKeys(es).then(buildResponse)
}
