module.exports = (script, query) => {
  const es = require('aws-es-client')({
    id: process.env.ES_ID,
    token: process.env.ES_SECRET,
    url: process.env.ES_ENDPOINT
  })
  return es.updateByQuery({
    index: 'users',
    refresh: true,
    body: {
      script,
      query
    }
  })
}
