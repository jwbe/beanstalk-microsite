const soapRequest = require('easy-soap-request');

const handler = async function (event) {

  const { GATSBY_KSWEBSERVICE_URL, GATSBY_KSWEBSERVICE_WHITELABELID, GATSBY_KSWEBSERVICE_USERNAME, GATSBY_KSWEBSERVICE_PASSWORD } = process.env;

  const { body: rawData } = event;
  const data = JSON.parse(rawData);

  if (data.xml === false) {
    let caseInput = data.SOAPAction.substring(data.SOAPAction.lastIndexOf('/') + 1);
    switch (caseInput) {
      case 'Authenticate':
        data.xml = 
        `
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:kid="http://www.kidstart.co.uk/">
          <soapenv:Header/>
          <soapenv:Body>
            <kid:Authenticate>
              <kid:WhitelabelId>${GATSBY_KSWEBSERVICE_WHITELABELID}</kid:WhitelabelId>
              <kid:Username>${GATSBY_KSWEBSERVICE_USERNAME}</kid:Username>
              <kid:Password>${GATSBY_KSWEBSERVICE_PASSWORD}</kid:Password>
            </kid:Authenticate>
          </soapenv:Body>
        </soapenv:Envelope>
        `
        break;
      default:
        console.error('No match');
    }
  }

  const headers = {
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': data.SOAPAction,
  };

  let res;

  try {
    async function soapRequestWrapper () {
      try {
        let { response } = await soapRequest({ url: GATSBY_KSWEBSERVICE_URL, headers: headers, xml: data.xml});
        return response
      }
      catch(error) {
        console.error(error);
      }
    }

    res = await soapRequestWrapper();

  } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          error: error.message 
        })
      }
  }
  return {
    statusCode: 200,
    body: JSON.stringify(
      res.body
    )
  }
}

module.exports = { handler };