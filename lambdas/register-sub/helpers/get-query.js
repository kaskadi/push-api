module.exports = (user, sub) => {
  return {
    bool: {
      must: {
        match: {
          _id: user
        }
      },
      must_not: {
        match: {
          'subscriptions.endpoint': sub.endpoint
        }
      }
    }
  }
}
