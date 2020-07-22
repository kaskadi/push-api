module.exports = (user, sub, op) => {
  const mustClause = {
    must: {
      match: {
        _id: user
      }
    }
  }
  const condition = {
    match: {
      'subscriptions.endpoint': sub.endpoint
    }
  }
  const clause = op === 'deregister' ? {
    filter: condition
  } : {
    must_not: condition
  }
  return {
    bool: {
      ...mustClause,
      ...clause
    }
  }
}
