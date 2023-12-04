import { RestApi } from './base';

export const UserApi = {
  getUsers: async () => {
    return await RestApi.get('/users')

  }
}
