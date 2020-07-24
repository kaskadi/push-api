module.exports = (esClient, user, sub) => {
  return esClient.update({
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
