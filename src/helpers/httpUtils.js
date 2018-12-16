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

  static async setUser(newUser) {
    try {
      const oldUser = await localStorage.getItem('user');
      const parsedOldUser = JSON.parse(oldUser);
      const mergedUser = {
        ...parsedOldUser,
        ...newUser
      };
      localStorage.setItem('user', JSON.stringify(mergedUser));
    } catch (e) {
      console.log(e);
    }
  }

  static async authHeaders() {
    // return authorization header with token
    //extracted from user in asyncstorage
    let user = await localStorage.getItem('user');
    //use JWT or
    //instead of token , go fetch firestore rule to determine
    // 1) are they authenticated
    // 2) are they admin
    let token = JSON.parse(user).access_token;
    if (token) {
      const AuthStr = `JWT ${token}`;
      let headers = apiConfig.headers;
      headers = { ...headers, Authorization: AuthStr };
      return headers;
    } else {
      return {};
    }
  }
}

export { httpUtils };
