// import { UserAPI } from '../../datasource/User';

// export default {
//   loginUser: async (parent, args, context)=>{
//     const {payload: {email, password}} = args;
//     const {dataSource: {userAPI}} = context;
//     const response = await UserAPI.loginUser({email, password});
//     return response.data
//   }
// }

import pubsub from '../pubsub';
import constant from '../../lib/constant';

export default {
  loginUser: async (parent, args, context) => {
    const { payload: { email, password } } = args;
    const { dataSources: { userAPI } } = context;
    const response = await userAPI.loginUser({ email, password });
    return response.data;
  },

  createUser: async (parent, args, context) => {
    const {
      user: {
        name, email, role, password,
      },
    } = args;
    const { dataSources: { userAPI } } = context;
    const response = await userAPI.createUser({
      name, email, role, password,
    });
    pubsub.publish(constant.subscriptions.USER_ADDED, { userAdded: response.data });
    return response.data;
  },

  updateUser: async (parent, args, context) => {
    const {
      user: {
        originalId, name, email,
      },
    } = args;
    const { dataSources: { userAPI } } = context;
    const response = await userAPI.updateUser({
      originalId, name, email,
    });
    pubsub.publish(constant.subscriptions.USER_UPDATED, { userUpdated: response.data });
    return response.data;
  },

  deleteUser: async (parent, args, context) => {
    const { id } = args;
    const { dataSources: { userAPI } } = context;
    const response = await userAPI.deleteUser(id);
    pubsub.publish(constant.subscriptions.USER_DELETED, { userDeleted: response });
    return response;
  },
};