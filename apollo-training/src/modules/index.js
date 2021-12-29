import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';

import * as user from './user';
import * as trainee from './trainee';

const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));
// console.log('typesArray ---->', typesArray);
// console.log('typesArray Query', typesArray.Query);
// console.log('user', user);
const typeDefs = mergeTypes(typesArray, { all: true });
// console.log('typeDefs ---->', typeDefs);
// console.log('user.getMyProfile ---->', user);

export default {
  resolvers: {
    Query: {
      ...user.Query,
      ...trainee.Query,
    },
    Mutation: {
      ...trainee.Mutation,
    },
  },
  typeDefs,
};