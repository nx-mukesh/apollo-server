import userInstance from '../../service/user';

export default {
  createTrainee: (parent, args) => {
    const { user } = args;
    return userInstance.createUsers(user);
  },
  updateTrainee: (parent, args) => {
    const { id, role } = args;
    return userInstance.updateUsers(id, role);
  },
  deleteTrainee: (parent, args) => {
    const { id } = args;
    return userInstance.deleteUsers(id);
  },
};