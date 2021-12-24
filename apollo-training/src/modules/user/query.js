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
    const response = await context.dataSources.userAPI.getMe();
    return [response.data[0]];
  },
};