import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../config/configurations';

export class TraineeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${config.serviceUrl}/api/user`;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  async getTrainee({ limit, skip }) {
    return this.get(`/?skip=${skip}&limit=${limit}`, { limit, skip });
  }

  async createTrainee(payload) {
    return this.post('/', payload);
  }

  async updateTrainee(payload) {
    return this.put('/', payload);
  }

  async deleteTrainee(id) {
    return this.delete(`/${id}`);
  }
}