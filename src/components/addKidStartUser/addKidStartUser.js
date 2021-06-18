import React from 'react';
import xmlParser from 'fast-xml-parser';

const addKidStartUser = async (props) => {
  const { firstName, lastName, email } = props;

  const authenticationRequest = {
    buildXml() {
      return (
        {
          xml: false
        }
      )
    },
    SOAPAction: 'http://www.kidstart.co.uk/Authenticate'
  }

  const addUserRequest = {
    buildXml(params) {
      const { authToken, email, firstName, lastName } = params;
      return (
        {
          xml: 
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
          </soapenv:Envelope>
          `
        }
      )
    },
    SOAPAction: 'http://www.kidstart.co.uk/AddUserAccount'
  }

  const queryWebservice = async (SOAPAction, { xml } ) => {
    return fetch('/.netlify/functions/kidstart-webservice', {
      method: 'POST',
      body: JSON.stringify({ SOAPAction, xml })
    })
    .then(response => {
      return response.text();
    })
    .then(response => {
      return JSON.parse(response);
    })
    .catch(err => {
      console.log(err);
    })
  }

  const parseXmltoJson = async (xmlData) => {
    try {
      if (xmlParser.validate(xmlData) === true) {
        try {
          return xmlParser.parse(xmlData);
        }
        catch(error) {
          console.error(error);
        }
      }
      else {
        console.error('XML not valid');
      }
    }
    catch(error) {
      console.error(error);
    }
  }

  const readAuthenticationToken = async (convertedJson) => {
    try {
      const token = convertedJson['soap:Envelope']['soap:Body'].AuthenticateResponse.AuthenticateResult.Token;
      if (convertedJson && convertedJson !== undefined) {
        try {
          return token;
        }
        catch(error) {
          console.error(error);
        }
      }
      else {
        console.error('Unable to extract authentication token');
      }
    }
    catch(error) {
      console.log(error);
    }
  }

  const registerUserOnKidStart = async (firstName, lastName, email) => {
    let authenticationTokenResponseXml = await queryWebservice(authenticationRequest.SOAPAction, authenticationRequest.buildXml());
    let authenticationTokenResponseJson = await parseXmltoJson(authenticationTokenResponseXml);
    let authenticationToken = await readAuthenticationToken(authenticationTokenResponseJson);
    let addUserAccount = await queryWebservice(addUserRequest.SOAPAction, addUserRequest.buildXml({
      authToken: authenticationToken,
      email: email,
      firstName: firstName,
      lastName: lastName
    }));
    return xmlParser.parse(addUserAccount);
  }

  return await registerUserOnKidStart(firstName, lastName, email);

}

export default addKidStartUser;