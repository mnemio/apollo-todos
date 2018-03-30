import {makeExecutableSchema} from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type Query  {
  todos: [Todo] @cacheControl(maxAge: 5)
  todo(id: String!): Todo @cacheControl(maxAge: 5)
}
type Todo {
  _id: String!
  type: String!
}
type Mutation {
  add_todo(type: String!): Todo @cacheControl(maxAge: 5)
  update_todo(_id: String!, type: String!): Todo @cacheControl(maxAge: 5)
}
`;

const schema = makeExecutableSchema({typeDefs, resolvers});

export default schema;
