module.exports = (user, sub) => {
  return {
    bool: {
      must: {
        match: {
          _id: user
        }
      },
      filter: {
        match: {
          'subscriptions.endpoint': sub.endpoint
        }
      }
    }
  }
}
