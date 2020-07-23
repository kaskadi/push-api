const getKeys = require('./helpers/get-keys.js')
const buildResponse = require('./helpers/get-keys.js')

module.exports.handler = async (event) => {
  return await getKeys().then(buildResponse)
}
