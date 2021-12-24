import constant from '../../lib/constant';
import pubsub from '../pubsub';

export default {
  userAdded: {
    subscribe: () => pubsub.asyncIterator([constant.subscriptions.USER_ADDED]),
  },
  userUpdated: {
    subscribe: () => pubsub.asyncIterator([constant.subscriptions.USER_UPDATED]),
  },
  userDeleted: {
    subscribe: () => pubsub.asyncIterator([constant.subscriptions.USER_DELETED]),
  },
};