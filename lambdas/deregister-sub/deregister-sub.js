const { getJwtUser, esUpdateByQuery, getScript, getQuery } = require('push-api-utils')

module.exports.handler = async (event) => {
  var res = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
  const user = getJwtUser(event.headers.Authorization)
  const sub = JSON.parse(event.body)
  return await esUpdateByQuery(getScript(sub, 'deregister'), getQuery(user, sub, 'deregister'))
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
