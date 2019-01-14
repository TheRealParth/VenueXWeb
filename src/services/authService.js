import axios from 'axios';
import { httpUtils } from '../helpers';
import { apiConfig } from './apiConfig';

export class AuthService {
  static login(email, password, venueId) {
    return axios
      .post(
        `${apiConfig.baseURL}/auth/login`,
        //DATA
        {
          email,
          password,
          venueId
        }
      )
      .then(httpUtils.handleResponse);
  }
  static createUser(user) {
    console.log('INSIDE OF AUTH SERVICE');
    console.log(user);
    return axios
      .post(
        `${apiConfig.baseURL}/auth/signup`,
        //DATA
        {
          ...user
        }
      )
      .then(httpUtils.handleResponse);
  }
}
