import axios from 'axios';
import { httpUtils } from '../helpers';
import { apiConfig } from './apiConfig';

export class AuthService {
  static login(username, password) {
    return axios
      .post(
        `${apiConfig.baseURL}/auth/login`,
        //DATA
        {
          username,
          password,
          venueId: apiConfig.venueId
        },
        //HEADERS
        { headers: apiConfig.headers }
      )
      .then(httpUtils.handleResponse);
  }
}
