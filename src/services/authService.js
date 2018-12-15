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
          venueId: apiConfig.venueId
        }
      )
      .then(httpUtils.handleResponse);
  }
}
