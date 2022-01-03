import user from '../../service/user';

export default {
  getAllTrainees: () => user.getAllUsers(),
  getTrainee: (parent, args) => {
    const id = args;
    return user.getUser(id);
  },
};