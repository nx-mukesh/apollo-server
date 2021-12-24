import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../config/configurations';

export class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${config.serviceUrl}/api/user`;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  getMe() {
    return this.get('/me');
  }

  async loginUser(payload) {
    return this.post('/login', payload);
  }

  async createUser(payload) {
    return this.post('/', payload);
  }

  async updateUser(payload) {
    return this.put(`/${payload.originalId}`, payload);
  }

  async deleteUser(id) {
    return this.delete(`/${id}`);
  }
}