module.exports = (keys) => {
  return {
    statusCode: keys ? 200 : 404,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: keys ? JSON.stringify({ publicKey: keys._source.publicKey }) : JSON.stringify({ message: 'No public key found for this application...' })
  }
}
