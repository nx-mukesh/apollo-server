import userInstance from '../../service/user';

export default {
  createTrainee: (parent, args, context) => {
    const { user } = args;
    return userInstance.createUser(user);
  },
  updateTrainee: (parent, args, context) => {
    const { id, role } = args;
    return userInstance.updateUser(id, role);
  },
  deleteTrainee: (parent, args, context) => {
    const { id } = args;
    return userInstance.deleteUser(id);
  },
};
