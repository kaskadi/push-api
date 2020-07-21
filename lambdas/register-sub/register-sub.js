const { getJwtUser } = require('push-api-utils')
const addSub = require('./helpers/add-sub.js')

module.exports.handler = async (event) => {
  var res = {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
  return await addSub(getJwtUser(event.headers.Authorization), JSON.parse(event.body))
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
