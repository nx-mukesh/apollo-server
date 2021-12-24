// export default {
//   getMyProfile: () => {
//     return {
//       id: 1,
//       name: 'Mukesh Maurya',
//       email: 'mukesh.maurya@successive.tech',
//       role: 'trainee',
//     };
//   },
// };

export default {
  getMyProfile: async (parent, args, context) => {
    // console.log('context ---> ',context);
    // const { dataSources: { userAPI } }= context;
    // console.log('context ---> ',context);
    const response = await context.dataSources.userAPI.getMe();
    console.log('response for get my profile query ---> ', response.data[0].email);
    return { email: response.data[0].email };
  },
};