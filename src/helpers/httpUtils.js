import firebase from 'firebase';
import axios from 'axios';
import { apiConfig } from '../services/apiConfig';

class httpUtils {
  static handleResponse(responseData) {
    const { data, status, statusText } = responseData;
    if (200 <= status <= 300) {
      return data;
    } else {
      if (status === 401) {
        // auto logout if 401 response returned from api
      }
      const errors = { error: status, errorText: statusText };
      return Promise.reject(errors);
    }
  }

  static async signInWithCustomToken(user) {
    // eslint-disable-next-line no-undef
    console.log("INSIDE OF SIGN IN WITH CUSTOM TOKEN")
    console.log(user)
    localStorage.setItem('access_token', user.access_token);
    try {
      return await firebase.auth().signInWithCustomToken(user.access_token);
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
}

export { httpUtils };
