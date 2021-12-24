import user from '../../service/user';

export default {
  getAllTrainees: async (parent, args, context) => {
    const response = await context.dataSources.traineeAPI.getTrainee(args);
    return response.data[0].result;
  },
  getTrainee: (parent, args) => {
    const id = args;
    return user.getUser(id);
  },
};