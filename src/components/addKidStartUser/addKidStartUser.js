import React from 'react';
import xmlParser from 'fast-xml-parser';

const addKidStartUser = async (props = {
  firstName: '', 
  lastName: '', 
  email: '', 
  whitelabelId: 208
}) => {
  
  const {
    firstName,
    lastName,
    email,
    whitelabelId
  } = props;

  const authenticationRequest = {
    message(whitelabelId) {
      return (
        {
          message: {
            whitelabelId: whitelabelId
          }
        }
      )
    },
    SOAPAction: 'http://www.kidstart.co.uk/Authenticate'
  }

  const addUserRequest = {
    message(params) {
      const { authToken, email, firstName, lastName } = params;
      return (
        {
          message: {
            authToken: authToken,
            email: email,
            firstName: firstName,
            lastName: lastName
          }
        }
      )
    },
    SOAPAction: 'http://www.kidstart.co.uk/AddUserAccount'
  }

  const queryWebservice = async (SOAPAction, { message }) => {
    return fetch('/.netlify/functions/kidstart-webservice', {
      method: 'POST',
      body: JSON.stringify({ SOAPAction, message })
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
    let authenticationTokenResponseXml = await queryWebservice(authenticationRequest.SOAPAction, authenticationRequest.message(whitelabelId));
    let authenticationTokenResponseJson = await parseXmltoJson(authenticationTokenResponseXml);
    let authenticationToken = await readAuthenticationToken(authenticationTokenResponseJson);
    let addUserAccount = await queryWebservice(addUserRequest.SOAPAction, addUserRequest.message({
      authToken: authenticationToken,
      email: email,
      firstName: firstName,
      lastName: lastName
    }));
    return xmlParser.parse(addUserAccount);
  }

  return await registerUserOnKidStart(firstName, lastName, email, whitelabelId);

}

export default addKidStartUser;