const { getJwtUser, esUpdateByQuery } = require('push-api-utils')
const getQuery = require('./helpers/get-query.js')
const getScript = require('./helpers/get-script.js')

module.exports.handler = async (event) => {
  var res = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
  const user = getJwtUser(event.headers.Authorization)
  const sub = JSON.parse(event.body)
  return await esUpdateByQuery(getScript(sub), getQuery(user, sub))
    .then(esRes => {
      res.body = JSON.stringify({ message: 'Subscriptions successfully unregistered!' })
      console.log(JSON.stringify(esRes, null, 2))
      return res
    })
    .catch(err => {
      res.statusCode = 400
      res.body = JSON.stringify({ message: 'An error occured while unregistering the subscription...' })
      console.log(JSON.stringify(err, null, 2))
      return res
    })
}
