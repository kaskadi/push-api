module.exports.handler = async (event) => {
  return await getKeys().then(buildResponse)
}

function getKeys () {
  const es = require('aws-es-client')({
    id: process.env.ES_ID,
    token: process.env.ES_SECRET,
    url: process.env.ES_ENDPOINT
  })
  return es.search({
    index: 'push-keys',
    body: {
      from: 0,
      size: 5,
      query: {
        match: {
          app: 'kaskadi'
        }
      }
    }
  }).then(res => res.body.hits.hits[0])
}

function buildResponse (keys) {
  return {
    statusCode: keys ? 200 : 404,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: keys ? JSON.stringify({ publicKey: keys._source.publicKey }) : JSON.stringify({ message: 'No public key found for this application...' })
  }
}
