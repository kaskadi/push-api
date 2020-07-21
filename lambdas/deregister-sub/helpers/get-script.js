module.exports = (sub) => {
  return {
    lang: 'painless',
    source: 'ctx._source.subscriptions.remove(ctx._source.subscriptions.indexOf(params.sub))',
    params: {
      sub: sub
    }
  }
}
