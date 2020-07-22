module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      publicKey: process.env.PUSH_NOTIF_PUBLIC_KEY
    })
  }
}
