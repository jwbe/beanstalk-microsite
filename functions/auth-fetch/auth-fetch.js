// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/

const fetch = require('node-fetch')

const handler = async function (event, context) {
  console.log(event, ' event');
  if (!context.clientContext && !context.clientContext.identity) {
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({
        msg: 'No identity instance detected. Did you enable it?',
      }),
    }
  }
  const { identity, user } = context.clientContext

  const { headers, body } = event;
  console.log(headers.authorization, ' headers.authorization')
  try {
    const response = await fetch('https://api.plivo.com/v1/Account/MAODI4MZNJNTM5YTK2MT/Message/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": headers.authorization
      },
      body: body
    })
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify({ identity, user, msg: data.value }),
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }
