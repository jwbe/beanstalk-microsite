const soapRequest = require('easy-soap-request');

const handler = async function (event) {

  const { GATSBY_KSWEBSERVICE_URL, GATSBY_KSWEBSERVICE_WHITELABELID, GATSBY_KSWEBSERVICE_USERNAME, GATSBY_KSWEBSERVICE_PASSWORD } = process.env;

  const { body: rawData } = event;
  const data = JSON.parse(rawData);

  const soapAction = data.SOAPAction.substring(data.SOAPAction.lastIndexOf('/') + 1);
  console.log(soapAction, ' soapAction');

  switch (soapAction) {
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

  const validation = async () => {
    if (soapAction === 'Authenticate') {
      let formErrors = {};
      let formIsValid = false;
      return [
        formIsValid,
        formErrors
      ]
    }

    const { email, firstName, lastName } = data.message;

    let nameRegex = `^[^0-9]+$`;
    let formErrors = {};
    let formIsValid = true;

    if(firstName === '') {
      formIsValid = false
      formErrors['firstName'] = 'NoFirstName';
    }

    if(lastName === '') {
      formIsValid = false
      errors['lastName'] = 'NoLastName';
    }

    if(firstName !== '') {
      if(!firstName.match(nameRegex)) {
        formIsValid = false;
        formErrors['firstName'] = 'NoNumbersInName';
      }
    }

    if(lastName !== '') {
      if(!lastName.match(nameRegex)) {
        formIsValid = false;
        formErrors['error'] = 'NoNumbersInName';
      }
    }

    if(email === '') {
      formIsValid = false;
      formErrors['error'] = 'NoEmail';
    }

    if(email !== '') {
      const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegExp.test(email)) {
        formIsValid = false;
        formErrors['error'] = 'NoValidEmail';
      }
    }

    return [
      formIsValid,
      formErrors,
    ]
  }

  const [ formIsValid, formErrors ] = await validation();

  const soap = await (async (formIsValid, formErrors) => {
    if (soapAction === 'Authenticate' || formIsValid === true) {
      let res;
      try {
        async function soapRequestWrapper () {
          try {
            let { response } = await soapRequest({ url: GATSBY_KSWEBSERVICE_URL, headers: headers, xml: data.xml()});
            console.log(response, ' response');
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
    else if (formIsValid === false) {
      return {
        statusCode: 500,
        body: JSON.stringify(
          formErrors
        )
      }
    }
  })(formIsValid, formErrors);

  console.log(soap, ' soap');

  return soap;

}

module.exports = { handler };