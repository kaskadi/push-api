module.exports = (authorizationHeader) => {
  const jwt = authorizationHeader.split(' ')[1]
  return JSON.parse(Buffer.from(jwt.split('.')[1], 'base64').toString()).email
}
