module.exports = (sub, op) => {
  return {
    lang: 'painless',
    source: op === 'deregister' ? 'ctx._source.subscriptions.remove(ctx._source.subscriptions.indexOf(params.sub))' : 'ctx._source.subscriptions.add(params.sub)',
    params: {
      sub: sub
    }
  }
}
