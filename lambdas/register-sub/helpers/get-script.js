module.exports = (sub) => {
  return {
    lang: 'painless',
    source: 'ctx._source.subscriptions.add(params.sub)',
    params: {
      sub: sub
    }
  }
}
