import userInstance from '../../service/user';
import pubsub from '../pubsub';
import constant from '../../lib/constant';


export default {
  createTrainee: (parent, args, context) => {
    const { user } = args;
    const addedUser = userInstance.createUser(user);
    pubsub.publish(constant.subscriptions.TRAINEE_ADDED, {traineeAdded: addedUser});
    // return userInstance.createUser(user);
    return addedUser;
  },
  updateTrainee: (parent, args, context) => {
    const { id, role } = args;
    const updatedUser = userInstance.updateUser(id, role);
    pubsub.publish(constant.subscriptions.TRAINEE_UPDATED, {traineeUpdated: updateUser});
    // return userInstance.updateUser(id, role);
    return updatedUser;
  },
  deleteTrainee: (parent, args, context) => {
    const { id } = args;
    const deletedId = userInstance.deleteUser(id);
    pubsub.publish(constant.subscriptions.TRAINEE_DELETED, {traineeDeleted: deletedId}); 
    // return userInstance.deleteUser(id);
    return deletedId;
  },
};
