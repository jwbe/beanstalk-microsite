const soapRequest = require('easy-soap-request');

const handler = async function (event) {

  const { GATSBY_KSWEBSERVICE_URL, GATSBY_KSWEBSERVICE_WHITELABELID, GATSBY_KSWEBSERVICE_USERNAME, GATSBY_KSWEBSERVICE_PASSWORD } = process.env;

  const { body: rawData } = event;
  const data = JSON.parse(rawData);

  const caseInput = data.SOAPAction.substring(data.SOAPAction.lastIndexOf('/') + 1);

  switch (caseInput) {
    case 'Authenticate':
      data.xml = () => {
        const { whitelabelId } = data.message;
        return (
          `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:kid="http://www.kidstart.co.uk/">
            <soapenv:Header/>
            <soapenv:Body>
              <kid:Authenticate>
                <kid:WhitelabelId>${whitelabelId}</kid:WhitelabelId>
                <kid:Username>${GATSBY_KSWEBSERVICE_USERNAME}</kid:Username>
                <kid:Password>${GATSBY_KSWEBSERVICE_PASSWORD}</kid:Password>
              </kid:Authenticate>
            </soapenv:Body>
          </soapenv:Envelope>`
        )
      }
      break;
    case 'AddUserAccount':
      data.xml = () => {
        const { authToken, email, firstName, lastName } = data.message;
        if (authToken === undefined) {
          throw new Error('Auth token undefined');
        }
        return (
          `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:kid="http://www.kidstart.co.uk/">
             <soapenv:Header/>
             <soapenv:Body>
                <kid:AddUserAccount>
                   <kid:AuthToken>${authToken}</kid:AuthToken>
                   <kid:cultureCode></kid:cultureCode>
                   <kid:userData>
                      <kid:Username>${email}</kid:Username>
                      <kid:Email>${email}</kid:Email>
                      <kid:Title>Ms</kid:Title>
                      <kid:FirstName>${firstName}</kid:FirstName>
                      <kid:LastName>${lastName}</kid:LastName>
                      <kid:Phone></kid:Phone>
                      <kid:Mobile></kid:Mobile>
                      <kid:Address1>1 road</kid:Address1>
                      <kid:Address2></kid:Address2>
                      <kid:Town>Town</kid:Town>
                      <kid:County></kid:County>
                      <kid:Postcode>AA1 1AA</kid:Postcode>
                      <kid:DateOfBirth>01/01/1900</kid:DateOfBirth>
                    </kid:userData>
                </kid:AddUserAccount>
             </soapenv:Body>
          </soapenv:Envelope>`
        )
      }
      break;
    default:
      console.error('No match');
  }

  const headers = {
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': data.SOAPAction,
  };

  let res;

  try {
    async function soapRequestWrapper () {
      try {
        let { response } = await soapRequest({ url: GATSBY_KSWEBSERVICE_URL, headers: headers, xml: data.xml()});
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