const es = require('aws-es-client')({
  id: process.env.ES_ID,
  token: process.env.ES_SECRET,
  url: process.env.ES_ENDPOINT
})

module.exports = (user, sub) => {
  return es.updateByQuery({
    index: 'users',
    refresh: true,
    body: {
      script: {
        lang: 'painless',
        source: `ctx._source.subscriptions += "${sub}"`
      },
      query: {
        bool: {
          must: {
            match: {
              _id: user
            }
          }
        }
      }
    }
  })
}
