import User from '../../service/user';

export default {
  getAllTrainee: () => {
    console.log("===>", User.getAllTrainee());
    return User.getAllTrainee();
  },
  getTrainee: (parent, args) => {
    const { id } = args;
    return User.getUser(id);
  },
};
