export default {
  getMyProfile: async (parent, arg, context)=>{
    const {dataSources: {userAPI}} = context;
    const response = await userAPI.getMe();
    return response.data;
  },
}
