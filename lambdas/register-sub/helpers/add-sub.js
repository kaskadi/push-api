module.exports = (user, sub) => {
  const es = require('aws-es-client')({
    id: process.env.ES_ID,
    token: process.env.ES_SECRET,
    url: process.env.ES_ENDPOINT
  })
  return es.update({
    id: user,
    index: 'users',
    refresh: true,
    body: {
      script: {
        lang: 'painless',
        source: 'boolean noSub = true; def subs = ctx._source.subscriptions; for (sub in subs) { if (sub.endpoint == params.sub.endpoint) { noSub = false; } } if (noSub) { subs.add(params.sub); }',
        params: {
          sub: sub
        }
      }
    }
  })
}
