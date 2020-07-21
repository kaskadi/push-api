const { getJwtUser } = require('push-api-utils')
const removeSub = require('./helpers/remove-sub.js')

module.exports.handler = async (event) => {
  var res = {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
  return await removeSub(getJwtUser(event.headers.Authorization), JSON.parse(event.body))
    .then(esRes => {
      res.body = JSON.stringify({ message: 'Subscriptions successfully removed!' })
      console.log(JSON.stringify(esRes, null, 2))
      return res
    })
    .catch(err => {
      res.statusCode = 400
      res.body = JSON.stringify({ message: 'An error occured while removing the subscription...' })
      console.log(JSON.stringify(err, null, 2))
      return res
    })
}
