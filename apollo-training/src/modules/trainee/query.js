import user from '../../service/user';

export default {
  getAllTrainee: () => {
    console.log("===>", user.getAllTrainee());
    return user.getAllTrainee();
  },
  getTrainee: (parant, args) => {
    const { id } = args;
    return user.getUser(id);
  },
};
