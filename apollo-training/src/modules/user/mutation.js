import { UserAPI } from '../../datasource/User';

export default {
  loginUser: async (parent, args, context)=>{
    const {payload: {email, password}} = args;
    const {dataSource: {userAPI}} = context;
    const response = await UserAPI.loginUser({email, password});
    return response.data
  }
}