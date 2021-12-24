import pubsub from '../pubsub';
import constant from '../../lib/constant';
import userInstance from '../../service/user';

export default {
  createTrainee: (parent, args, context) => {
    const { user } = args;
    const { userAPI } = context;
    const addedUser = userAPI.createTrainee(user);
    pubsub.publish(constant.subscriptions.TRAINEE_ADDED, { traineeAdded: addedUser });
    return addedUser;
  },
  updateTrainee: (parent, args) => {
    const { id, role } = args;
    const updatedUser = userInstance.updateUsers(id, role);
    pubsub.publish(constant.subscriptions.TRAINEE_UPDATED, { traineeUpdated: updatedUser });
    return updatedUser;
  },
  deleteTrainee: (parent, args) => {
    const { id } = args;
    const response = userInstance.deleteUsers(id);
    pubsub.publish(constant.subscriptions.TRAINEE_DELETED, { traineeDeleted: response });
    return response;
  },
};