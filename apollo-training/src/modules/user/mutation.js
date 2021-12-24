// import { UserAPI } from '../../datasource/User';

// export default {
//   loginUser: async (parent, args, context)=>{
//     const {payload: {email, password}} = args;
//     const {dataSource: {userAPI}} = context;
//     const response = await UserAPI.loginUser({email, password});
//     return response.data
//   }
// }

export default {
  loginUser: async (parent, args, context) => {
    const { payload: { email, password } } = args;
    // console.log('args ---> ',args);
    const { dataSources: { userAPI } } = context;
    // console.log('UserAPI context ---> ',context);
    const response = await userAPI.loginUser({ email, password });
    console.log('response---> ', response);
    return response.data;
  },
};