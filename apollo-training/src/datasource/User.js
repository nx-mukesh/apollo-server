import { RESTDataSource } from 'apollo-datasource-rest';

import config from '../config/configurations';

export class UserAPI extends RESTDataSource{
  constructor(){
    super();
    this.baseURL = `${config.serviceUrl}/api/user`;
  }

  getMe(){
    return this.get('/me');
  }

  loginUser(payload){
    return this.post('/login', payload);
  }

};