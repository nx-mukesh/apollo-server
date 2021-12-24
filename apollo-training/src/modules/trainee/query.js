import user from '../../service/user';

export default {
  getAllTrainees: async (parent, args, context) => {
    console.log(args);
    const response = await context.dataSources.traineeAPI.getTrainee(args);
    // const result1 = response.data.map((element) => (
    //   { name: element[0].name, email: element[0].email }
    // ));
    console.log('response.data.result --------------> ', response.data[0].result);
    return response.data[0].result;
  },
  getTrainee: (parent, args) => {
    const id = args;
    return user.getUser(id);
  },
};