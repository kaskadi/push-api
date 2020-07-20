const getJwtUser = require('get-jwt-user')
const registerSubs = require('./helpers/register-subs.js')

module.exports.handler = async (event) => {
  var res = {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
  console.log(event.body)
  return await registerSubs(getJwtUser(event.headers.Authorization), event.body)
    .then(esRes => {
      res.body = JSON.stringify({ message: 'Subscriptions successfully added!' })
      console.log(JSON.stringify(esRes, null, 2))
      return res
    })
    .catch(err => {
      res.statusCode = 400
      res.body = JSON.stringify({ message: 'An error occured while adding the subscription...' })
      console.log(JSON.stringify(err, null, 2))
      return res
    })
}
